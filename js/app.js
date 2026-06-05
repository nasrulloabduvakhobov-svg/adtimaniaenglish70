/* ===== MedEnglish70 — app core (Grammar + Grammar Tests) ===== */
(function () {
  "use strict";

  var I18N = window.ME70_I18N;
  var GRAMMAR = window.ME70_GRAMMAR;
  var GT = window.ME70_GTEST_CONFIG;

  var TESTS_PER_TENSE = GT.testsPerTense || 10;
  var Q_PER_TEST = GT.questionsPerTest || 20;
  var ALL_TENSE_IDS = GRAMMAR.map(function (g) { return g.id; });

  /* ---------- State ---------- */
  var state = {
    lang: localStorage.getItem("me70_lang") || "uz",
    theme: localStorage.getItem("me70_theme") || ""
  };
  function getScores() { try { return JSON.parse(localStorage.getItem("me70_scores") || "{}"); } catch (e) { return {}; } }
  function setScore(key, pct) {
    var s = getScores();
    if (!s[key] || pct > s[key]) s[key] = pct;
    localStorage.setItem("me70_scores", JSON.stringify(s));
  }

  /* ---------- i18n ---------- */
  function t(key) {
    var dict = I18N[state.lang] || I18N.uz;
    return dict[key] != null ? dict[key] : (I18N.uz[key] != null ? I18N.uz[key] : key);
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function lowerFirst(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  // seeded RNG for deterministic test content
  function hashStr(str) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t2 = Math.imul(a ^ (a >>> 15), 1 | a);
      t2 = (t2 + Math.imul(t2 ^ (t2 >>> 7), 61 | t2)) ^ t2;
      return ((t2 ^ (t2 >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seededShuffle(arr, seed) {
    var rnd = mulberry32(seed);
    arr = arr.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }
  function el(html) {
    var d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstChild;
  }
  var app = document.getElementById("app");
  function setApp(html) { app.innerHTML = html; window.scrollTo(0, 0); }

  var toastTimer;
  function toast(msg) {
    var tEl = document.querySelector(".toast");
    if (!tEl) { tEl = el('<div class="toast"></div>'); document.body.appendChild(tEl); }
    tEl.textContent = msg;
    tEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { tEl.classList.remove("show"); }, 1800);
  }

  /* ---------- Theme ---------- */
  function applyTheme() {
    var theme = state.theme;
    if (!theme) {
      var tg = window.Telegram && window.Telegram.WebApp;
      theme = (tg && tg.colorScheme) ? tg.colorScheme : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    var icon = document.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
  function toggleTheme() {
    var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    state.theme = cur === "dark" ? "light" : "dark";
    localStorage.setItem("me70_theme", state.theme);
    applyTheme();
  }

  /* ---------- Language ---------- */
  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = t(n.getAttribute("data-i18n"));
    });
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === state.lang);
    });
    document.documentElement.setAttribute("lang", state.lang);
  }
  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("me70_lang", lang);
    applyStaticI18n();
    router();
  }

  /* ---------- Grammar test generator ---------- */
  function conj(tid, v, s) {
    switch (tid) {
      case "present-simple": return s.s3 ? v.s : v.b;
      case "present-continuous": return s.be + " " + v.ing;
      case "present-perfect": return s.have + " " + v.pp;
      case "present-perfect-continuous": return s.have + " been " + v.ing;
      case "past-simple": return v.past;
      case "past-continuous": return s.ww + " " + v.ing;
      case "past-perfect": return "had " + v.pp;
      case "past-perfect-continuous": return "had been " + v.ing;
      case "future-simple": return "will " + v.b;
      case "future-continuous": return "will be " + v.ing;
      case "future-perfect": return "will have " + v.pp;
      case "future-perfect-continuous": return "will have been " + v.ing;
      case "future-in-the-past-simple": return "would " + v.b;
      case "future-in-the-past-continuous": return "would be " + v.ing;
      case "future-in-the-past-perfect": return "would have " + v.pp;
      case "future-in-the-past-perfect-continuous": return "would have been " + v.ing;
      default: return v.b;
    }
  }
  // deterministic full pool (200 combos) for a tense
  function tenseCombos(tid) {
    var pairs = [];
    for (var si = 0; si < GT.subjects.length; si++) {
      for (var vi = 0; vi < GT.verbs.length; vi++) pairs.push([si, vi]);
    }
    pairs = seededShuffle(pairs, hashStr("ME70:" + tid));
    return pairs.slice(0, TESTS_PER_TENSE * Q_PER_TEST);
  }
  // base questions (deterministic) for a given test number (1..10)
  function buildBase(tid, num) {
    var pool = tenseCombos(tid);
    var start = (num - 1) * Q_PER_TEST;
    var slice = pool.slice(start, start + Q_PER_TEST);
    var times = GT.times[tid] || ["today"];
    var frames = GT.frames[tid] || [];
    var distractIds = (GT.distract[tid] || []).concat(ALL_TENSE_IDS);

    return slice.map(function (pair, k) {
      var gi = start + k;
      var s = GT.subjects[pair[0]];
      var v = GT.verbs[pair[1]];
      var time = times[gi % times.length];
      var frame = frames.length ? frames[gi % frames.length] : "";
      var correct = conj(tid, v, s);

      var distract = [];
      for (var i = 0; i < distractIds.length && distract.length < 3; i++) {
        var dt = distractIds[i];
        if (dt === tid) continue;
        var f = conj(dt, v, s);
        if (f !== correct && distract.indexOf(f) < 0) distract.push(f);
      }
      var subjText = frame ? (s.t === "I" ? "I" : lowerFirst(s.t)) : s.t;
      var core = (frame ? frame + " " : "") + subjText + " ___ (" + v.b + ") " + v.tail + " " + time;
      var sentence = core + (/[.?!]$/.test(core) ? "" : ".");
      return { sentence: sentence, correct: correct, distract: distract };
    });
  }
  function renderSentence(s) {
    return esc(s).replace("___", '<span class="blank">_____</span>');
  }
  function buildQuestions(base) {
    return base.map(function (it) {
      var opts = shuffle([it.correct].concat(it.distract));
      return { q: renderSentence(it.sentence), options: opts, answer: opts.indexOf(it.correct) };
    });
  }

  // Debug/extension hook (zararsiz): generatorga tashqaridan kirish
  window.ME70 = {
    conj: conj, tenseCombos: tenseCombos, buildBase: buildBase,
    buildQuestions: buildQuestions, allTenseIds: ALL_TENSE_IDS,
    testsPerTense: TESTS_PER_TENSE, questionsPerTest: Q_PER_TEST
  };

  /* ---------- Reusable Quiz engine ---------- */
  function runQuiz(questions, opts) {
    opts = opts || {};
    var idx = 0, correct = 0, answered = [];
    questions = questions.slice();

    function render() {
      var qq = questions[idx];
      var pct = Math.round((idx) / questions.length * 100);
      var html = '' +
        (opts.backHash ? '<div class="breadcrumb"><a href="' + opts.backHash + '">‹ ' + t("common.back") + '</a></div>' : '') +
        '<div class="quiz-head">' +
          '<div><h1 style="margin:0;font-size:1.2rem">' + esc(opts.title || "") + '</h1>' +
          (opts.subtitle ? '<div class="tense-sub" style="margin:2px 0 0">' + esc(opts.subtitle) + '</div>' : '') + '</div>' +
          '<div class="q-counter">' + t("quiz.question") + ' ' + (idx + 1) + ' ' + t("quiz.of") + ' ' + questions.length + '</div>' +
        '</div>' +
        '<div class="progress-bar"><span style="width:' + pct + '%"></span></div>' +
        '<div class="question-card">' +
          '<div class="question-text">' + qq.q + '</div>' +
          '<div class="muted" style="font-size:.85rem;color:var(--muted);margin:-8px 0 14px">' + t("quiz.choose") + '</div>' +
          '<div class="options">' +
            qq.options.map(function (o, i) {
              return '<button class="option" data-i="' + i + '"><span class="opt-key">' + String.fromCharCode(65 + i) + '</span><span>' + esc(o) + '</span></button>';
            }).join("") +
          '</div>' +
        '</div>';
      setApp(html);

      var btns = app.querySelectorAll(".option");
      btns.forEach(function (b) {
        b.addEventListener("click", function () {
          var chosen = parseInt(b.getAttribute("data-i"), 10);
          if (chosen === qq.answer) correct++;
          answered.push({ q: qq.q, options: qq.options, answer: qq.answer, chosen: chosen });
          btns.forEach(function (x) {
            var xi = parseInt(x.getAttribute("data-i"), 10);
            x.disabled = true;
            if (xi === qq.answer) x.classList.add("correct");
            else if (xi === chosen) x.classList.add("wrong");
          });
          var nextBtn = el('<div class="btn-row"><button class="btn primary block">' + (idx + 1 < questions.length ? t("quiz.next") + ' ›' : t("quiz.finish") + ' ✓') + '</button></div>');
          app.querySelector(".question-card").appendChild(nextBtn);
          nextBtn.querySelector("button").addEventListener("click", function () {
            idx++;
            if (idx < questions.length) render();
            else finish();
          });
        });
      });
    }

    function finish() {
      var pct = Math.round(correct / questions.length * 100);
      if (opts.saveKey) setScore(opts.saveKey, pct);
      if (typeof opts.onFinish === "function") opts.onFinish(pct);

      var color = pct >= 80 ? "var(--good)" : (pct >= 50 ? "var(--warn)" : "var(--bad)");
      var msg = pct >= 80 ? t("result.excellent") : (pct >= 50 ? t("result.good") : t("result.tryAgain"));
      var reviewHtml = answered.map(function (a, i) {
        var youOk = a.chosen === a.answer;
        return '<div class="review-item">' +
          '<div class="ri-q">' + (i + 1) + '. ' + a.q + '</div>' +
          '<div class="ri-a">' +
            t("result.yourAnswer") + ': <span class="' + (youOk ? "ok" : "no") + '">' + esc(a.options[a.chosen]) + '</span>' +
            (youOk ? '' : ' &nbsp; ' + t("result.correctAnswer") + ': <span class="ok">' + esc(a.options[a.answer]) + '</span>') +
          '</div></div>';
      }).join("");

      setApp('' +
        '<div class="result">' +
          '<div class="score-circle" style="background:' + color + '">' + pct + '%</div>' +
          '<h2>' + t("result.title") + '</h2>' +
          '<p>' + t("result.scored") + ' <b>' + correct + ' / ' + questions.length + '</b></p>' +
          '<p>' + msg + '</p>' +
          '<div class="btn-row" style="justify-content:center">' +
            '<button class="btn primary" id="retake">↻ ' + t("result.retake") + '</button>' +
            (opts.backHash ? '<a class="btn" href="' + opts.backHash + '">' + t("result.back") + '</a>' : '') +
          '</div>' +
          '<div class="review"><div class="sub-h">' + t("result.review") + '</div>' + reviewHtml + '</div>' +
        '</div>');
      app.querySelector("#retake").addEventListener("click", function () {
        idx = 0; correct = 0; answered = [];
        if (opts.reshuffle) questions = opts.reshuffle();
        render();
      });
    }

    render();
  }

  /* ---------- Views ---------- */
  function viewHome() {
    var scores = getScores();
    var gKeys = Object.keys(scores).filter(function (k) { return k.indexOf("gtest:") === 0; });
    var vals = gKeys.map(function (k) { return scores[k]; });
    var avg = vals.length ? Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / vals.length) : 0;
    // mastered tenses: best score of any test >= 80
    var bestByTense = {};
    gKeys.forEach(function (k) {
      var parts = k.split(":"); // gtest:tid:num
      var tid = parts[1];
      if (!bestByTense[tid] || scores[k] > bestByTense[tid]) bestByTense[tid] = scores[k];
    });
    var mastered = Object.keys(bestByTense).filter(function (tid) { return bestByTense[tid] >= 80; }).length;

    var totalTests = GRAMMAR.length * TESTS_PER_TENSE;
    var totalQ = totalTests * Q_PER_TEST;

    var sections = [
      { hash: "#/grammar", icon: "📘", key: "grammar", meta: GRAMMAR.length + " " + t("stat.tenses").toLowerCase() },
      { hash: "#/grammar-tests", icon: "🧠", key: "gtests", meta: totalTests + " " + t("stat.tests").toLowerCase() }
    ];

    setApp('' +
      '<section class="hero">' +
        '<h1>' + t("home.hero.title") + '</h1>' +
        '<p>' + t("home.hero.desc") + '</p>' +
        '<div class="hero-stats">' +
          '<div class="hero-stat"><b>16</b><span>' + t("stat.tenses") + '</span></div>' +
          '<div class="hero-stat"><b>' + totalTests + '</b><span>' + t("stat.tests") + '</span></div>' +
          '<div class="hero-stat"><b>' + totalQ + '+</b><span>' + t("stat.questions") + '</span></div>' +
          '<div class="hero-stat"><b>3</b><span>UZ · EN · RU</span></div>' +
        '</div>' +
      '</section>' +
      '<div class="grid section-cards">' +
        sections.map(function (s) {
          return '<a class="card clickable" href="' + s.hash + '">' +
            '<div class="card-ico">' + s.icon + '</div>' +
            '<h3>' + t("section." + s.key) + '</h3>' +
            '<p>' + t("section." + s.key + ".desc") + '</p>' +
            '<div class="card-meta">' + s.meta + ' ›</div>' +
          '</a>';
        }).join("") +
      '</div>' +
      '<h2 style="margin:26px 0 4px;font-size:1.15rem">' + t("home.progress.title") + '</h2>' +
      '<div class="progress-overview">' +
        '<div class="po-card"><b>' + mastered + '/16</b><span>' + t("prog.mastered") + '</span></div>' +
        '<div class="po-card"><b>' + gKeys.length + '</b><span>' + t("prog.testsDone") + '</span></div>' +
        '<div class="po-card"><b>' + avg + '%</b><span>' + t("prog.avgScore") + '</span></div>' +
      '</div>');
  }

  function viewGrammarList() {
    setApp('' +
      '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("grammar.title") + '</h1><p>' + t("grammar.desc") + '</p></div>' +
      '<div class="grid cols">' +
        GRAMMAR.map(function (g, i) {
          return '<a class="tile" href="#/grammar/' + g.id + '">' +
            '<div><div class="tile-title">' + (i + 1) + '. ' + esc(g.name) + '</div>' +
            '<div class="tile-sub">' + esc(g.title[state.lang] || g.title.en) + '</div></div>' +
            '<span class="tile-badge">›</span>' +
          '</a>';
        }).join("") +
      '</div>');
  }

  function viewGrammarDetail(id) {
    var g = GRAMMAR.filter(function (x) { return x.id === id; })[0];
    if (!g) return notFound();
    var usage = (g.usage[state.lang] || g.usage.en).map(function (u) { return '<li>' + esc(u) + '</li>'; }).join("");
    var examples = g.examples.map(function (ex) {
      return '<div class="example"><div class="en">' + esc(ex.en) + '</div><div class="tr">' + esc(ex[state.lang] || ex.en) + '</div></div>';
    }).join("");
    setApp('' +
      '<div class="breadcrumb"><a href="#/grammar">‹ ' + t("grammar.title") + '</a></div>' +
      '<div class="tense-block">' +
        '<h2>' + esc(g.name) + '</h2>' +
        '<div class="tense-sub">' + esc(g.title[state.lang] || g.title.en) + '</div>' +
        '<div class="sub-h">' + t("grammar.formula") + '</div>' +
        '<div class="formula"><span class="lbl">' + t("grammar.affirm") + ':</span> ' + esc(g.formula.affirm) + '</div>' +
        '<div class="formula"><span class="lbl">' + t("grammar.negative") + ':</span> ' + esc(g.formula.negative) + '</div>' +
        '<div class="formula"><span class="lbl">' + t("grammar.question") + ':</span> ' + esc(g.formula.question) + '</div>' +
        '<div class="sub-h">' + t("grammar.usage") + '</div>' +
        '<ul class="usage-list">' + usage + '</ul>' +
        '<div class="sub-h">' + t("grammar.signal") + '</div>' +
        '<div class="formula">' + esc(g.signal) + '</div>' +
        '<div class="sub-h">' + t("grammar.examples") + '</div>' +
        examples +
        '<div class="btn-row"><a class="btn primary" href="#/grammar-tests/' + g.id + '">🧠 ' + t("grammar.takeTest") + '</a></div>' +
      '</div>');
  }

  function viewGTestsList() {
    var scores = getScores();
    setApp('' +
      '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("gtests.title") + '</h1><p>' + t("gtests.desc") + '</p></div>' +
      '<div class="grid cols">' +
        GRAMMAR.map(function (g, idx) {
          // mastered if any test >= 80
          var best = -1;
          for (var n = 1; n <= TESTS_PER_TENSE; n++) {
            var sc = scores["gtest:" + g.id + ":" + n];
            if (sc != null && sc > best) best = sc;
          }
          var badge = best >= 80 ? '<span class="tile-badge done">✓ ' + best + '%</span>'
            : (best >= 0 ? '<span class="tile-badge">' + best + '%</span>' : '<span class="tile-badge">›</span>');
          return '<a class="tile" href="#/grammar-tests/' + g.id + '">' +
            '<div><div class="tile-title">' + (idx + 1) + '. ' + esc(g.name) + '</div>' +
            '<div class="tile-sub">' + TESTS_PER_TENSE + ' × ' + Q_PER_TEST + ' ' + t("gtests.questions") + '</div></div>' +
            badge +
          '</a>';
        }).join("") +
      '</div>');
  }

  function viewGTenseTests(tid) {
    var g = GRAMMAR.filter(function (x) { return x.id === tid; })[0];
    if (!g) return notFound();
    var scores = getScores();
    var tiles = "";
    for (var n = 1; n <= TESTS_PER_TENSE; n++) {
      var key = "gtest:" + tid + ":" + n;
      var best = scores[key];
      var badge = best != null
        ? '<span class="tile-badge ' + (best >= 80 ? "done" : "") + '">' + best + '%</span>'
        : '<span class="tile-badge">›</span>';
      tiles += '<a class="tile" href="#/grammar-tests/' + tid + '/' + n + '">' +
        '<div><div class="tile-title">' + t("gtests.test") + ' ' + n + '</div>' +
        '<div class="tile-sub">' + Q_PER_TEST + ' ' + t("gtests.questions") + '</div></div>' +
        badge +
      '</a>';
    }
    setApp('' +
      '<div class="breadcrumb"><a href="#/grammar-tests">‹ ' + t("gtests.title") + '</a></div>' +
      '<div class="page-head"><h1>' + esc(g.name) + '</h1><p>' + esc(g.title[state.lang] || g.title.en) + '</p></div>' +
      '<div class="btn-row" style="margin:0 0 14px"><a class="btn ghost" href="#/grammar/' + tid + '">📘 ' + t("gtests.viewRule") + '</a></div>' +
      '<div class="grid cols">' + tiles + '</div>');
  }

  function viewRunGTest(tid, numStr) {
    var g = GRAMMAR.filter(function (x) { return x.id === tid; })[0];
    var num = parseInt(numStr, 10);
    if (!g || !num || num < 1 || num > TESTS_PER_TENSE) return notFound();
    var base = buildBase(tid, num);
    runQuiz(buildQuestions(base), {
      title: g.name + " — " + t("gtests.test") + " " + num,
      subtitle: g.title[state.lang] || g.title.en,
      saveKey: "gtest:" + tid + ":" + num,
      backHash: "#/grammar-tests/" + tid,
      reshuffle: function () { return buildQuestions(base); }
    });
  }

  function notFound() {
    setApp('<div class="empty"><h2>404</h2><p><a class="btn" href="#/">' + t("nav.home") + '</a></p></div>');
  }

  /* ---------- Router ---------- */
  function router() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);
    var root = parts[0] || "";
    try {
      if (root === "") return viewHome();
      if (root === "grammar") return parts[1] ? viewGrammarDetail(parts[1]) : viewGrammarList();
      if (root === "grammar-tests") {
        if (parts[1] && parts[2]) return viewRunGTest(parts[1], parts[2]);
        if (parts[1]) return viewGTenseTests(parts[1]);
        return viewGTestsList();
      }
      return notFound();
    } catch (e) {
      console.error(e);
      setApp('<div class="empty"><p>Error: ' + esc(e.message) + '</p><a class="btn" href="#/">' + t("nav.home") + '</a></div>');
    }
  }

  /* ---------- Init ---------- */
  function init() {
    var tg = window.Telegram && window.Telegram.WebApp;
    if (tg) { try { tg.ready(); tg.expand(); } catch (e) {} }

    document.getElementById("year").textContent = new Date().getFullYear();
    applyTheme();
    applyStaticI18n();

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () { if (!state.theme) applyTheme(); });
    }

    window.addEventListener("hashchange", router);
    if (!location.hash) location.hash = "#/";
    router();

    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
