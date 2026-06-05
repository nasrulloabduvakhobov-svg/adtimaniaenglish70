/* ===== MedEnglish70 — app core ===== */
(function () {
  "use strict";

  var I18N = window.ME70_I18N;
  var GRAMMAR = window.ME70_GRAMMAR;
  var VOCAB = window.ME70_VOCAB;
  var READING = window.ME70_READING;
  var GTESTS = window.ME70_GTESTS;

  var VTEST_SIZE = 20; // har bir lug'at testida nechta so'z
  var GTEST_MAX = 30;  // grammatika testidagi maksimal savol

  /* ---------- State ---------- */
  var state = {
    lang: localStorage.getItem("me70_lang") || "uz",
    theme: localStorage.getItem("me70_theme") || ""
  };
  function getStarred() { try { return JSON.parse(localStorage.getItem("me70_starred") || "[]"); } catch (e) { return []; } }
  function setStarred(arr) { localStorage.setItem("me70_starred", JSON.stringify(arr)); }
  function getReadDone() { try { return JSON.parse(localStorage.getItem("me70_reading") || "[]"); } catch (e) { return []; } }
  function setReadDone(arr) { localStorage.setItem("me70_reading", JSON.stringify(arr)); }
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
  // meaning language for vocab tests (en UI -> uz meanings)
  function meaningLang() { return state.lang === "ru" ? "ru" : "uz"; }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
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

  /* ---------- Reusable Quiz engine ---------- */
  // questions: [{ q:string(html-safe text), options:[string], answer:index }]
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
          // reveal
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
    var scoreVals = Object.keys(scores).map(function (k) { return scores[k]; });
    var avg = scoreVals.length ? Math.round(scoreVals.reduce(function (a, b) { return a + b; }, 0) / scoreVals.length) : 0;
    var testsDone = Object.keys(scores).filter(function (k) { return k.indexOf("vtest:") === 0 || k.indexOf("gtest:") === 0; }).length;

    var sections = [
      { hash: "#/grammar", icon: "📘", key: "grammar", meta: GRAMMAR.length + " " + t("stat.tenses").toLowerCase() },
      { hash: "#/reading", icon: "📖", key: "reading", meta: READING.length + " " + t("stat.passages").toLowerCase() },
      { hash: "#/vocabulary", icon: "🗂️", key: "vocabulary", meta: VOCAB.length + " " + t("stat.words").toLowerCase() },
      { hash: "#/tests", icon: "✅", key: "tests", meta: Math.ceil(VOCAB.length / VTEST_SIZE) + " " + t("stat.tests").toLowerCase() },
      { hash: "#/grammar-tests", icon: "🧠", key: "gtests", meta: GRAMMAR.length + " " + t("stat.tests").toLowerCase() }
    ];

    setApp('' +
      '<section class="hero">' +
        '<h1>' + t("home.hero.title") + '</h1>' +
        '<p>' + t("home.hero.desc") + '</p>' +
        '<div class="hero-stats">' +
          '<div class="hero-stat"><b>16</b><span>' + t("stat.tenses") + '</span></div>' +
          '<div class="hero-stat"><b>' + VOCAB.length + '+</b><span>' + t("stat.words") + '</span></div>' +
          '<div class="hero-stat"><b>' + READING.length + '</b><span>' + t("stat.passages") + '</span></div>' +
          '<div class="hero-stat"><b>' + (Math.ceil(VOCAB.length / VTEST_SIZE) + GRAMMAR.length) + '</b><span>' + t("stat.tests") + '</span></div>' +
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
        '<div class="po-card"><b>' + getStarred().length + '</b><span>' + t("prog.wordsLearned") + '</span></div>' +
        '<div class="po-card"><b>' + testsDone + '</b><span>' + t("prog.testsDone") + '</span></div>' +
        '<div class="po-card"><b>' + getReadDone().length + '</b><span>' + t("prog.readDone") + '</span></div>' +
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
    var hasTest = !!GTESTS[g.id];
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
        (hasTest ? '<div class="btn-row"><a class="btn primary" href="#/grammar-tests/' + g.id + '">🧠 ' + t("grammar.takeTest") + '</a></div>' : '') +
      '</div>');
  }

  function viewReadingList() {
    var levels = [
      { key: "elementary", cls: "elementary" },
      { key: "pre", cls: "pre" },
      { key: "inter", cls: "inter" }
    ];
    var done = getReadDone();
    var html = '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("reading.title") + '</h1><p>' + t("reading.desc") + '</p></div>';
    levels.forEach(function (lv) {
      var items = READING.filter(function (r) { return r.level === lv.key; });
      if (!items.length) return;
      html += '<h2 style="font-size:1.05rem;margin:18px 0 8px"><span class="level-tag ' + lv.cls + '">' + t("reading.level." + lv.key) + '</span></h2>';
      html += '<div class="grid cols">' + items.map(function (r) {
        var isDone = done.indexOf(r.id) >= 0;
        return '<a class="tile" href="#/reading/' + r.id + '">' +
          '<div><div class="tile-title">' + esc(r.title) + '</div>' +
          '<div class="tile-sub">' + r.questions.length + ' ' + t("gtests.questions") + '</div></div>' +
          '<span class="tile-badge ' + (isDone ? "done" : "") + '">' + (isDone ? "✓" : "›") + '</span>' +
        '</a>';
      }).join("") + '</div>';
    });
    setApp(html);
  }

  function viewPassage(id) {
    var r = READING.filter(function (x) { return x.id === id; })[0];
    if (!r) return notFound();
    var paras = r.text.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    setApp('' +
      '<div class="breadcrumb"><a href="#/reading">‹ ' + t("reading.title") + '</a></div>' +
      '<div class="passage">' +
        '<span class="level-tag ' + (r.level === "pre" ? "pre" : r.level === "inter" ? "inter" : "elementary") + '">' + t("reading.level." + r.level) + '</span>' +
        '<h2>' + esc(r.title) + '</h2>' +
        '<div class="passage-text">' + paras + '</div>' +
        '<div class="btn-row"><button class="btn primary" id="startQ">📝 ' + t("reading.answerQ") + ' (' + r.questions.length + ')</button></div>' +
      '</div>');
    app.querySelector("#startQ").addEventListener("click", function () {
      runQuiz(r.questions.map(function (q) { return { q: esc(q.q), options: q.options, answer: q.answer }; }), {
        title: r.title,
        subtitle: t("reading.answerQ"),
        saveKey: "reading:" + r.id,
        backHash: "#/reading/" + r.id,
        onFinish: function () {
          var d = getReadDone();
          if (d.indexOf(r.id) < 0) { d.push(r.id); setReadDone(d); }
        }
      });
    });
  }

  function viewVocabulary() {
    var cat = "all", q = "", onlyStar = false;
    setApp('' +
      '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("vocab.title") + '</h1><p>' + t("vocab.desc") + '</p></div>' +
      '<div class="vocab-toolbar">' +
        '<input class="search" id="vsearch" placeholder="' + t("vocab.search") + '">' +
      '</div>' +
      '<div class="pills" id="vpills">' +
        '<button class="pill active" data-cat="all">' + t("vocab.all") + '</button>' +
        '<button class="pill" data-cat="medical">' + t("vocab.cat.medical") + '</button>' +
        '<button class="pill" data-cat="common">' + t("vocab.cat.common") + '</button>' +
        '<button class="pill" data-cat="star">⭐ ' + t("vocab.starred") + '</button>' +
      '</div>' +
      '<div id="vcount" class="tense-sub"></div>' +
      '<div class="vocab-table" id="vtable"></div>');

    var ml = meaningLang();
    function render() {
      var starred = getStarred();
      var list = VOCAB.filter(function (w) {
        if (cat === "medical" && w.cat !== "medical") return false;
        if (cat === "common" && w.cat !== "common") return false;
        if (cat === "star" && starred.indexOf(w.en) < 0) return false;
        if (q) {
          var hay = (w.en + " " + w.uz + " " + w.ru).toLowerCase();
          if (hay.indexOf(q.toLowerCase()) < 0) return false;
        }
        return true;
      });
      document.getElementById("vcount").textContent = list.length + " " + t("vocab.count");
      var table = document.getElementById("vtable");
      if (!list.length) { table.innerHTML = '<div class="empty">' + t("vocab.none") + '</div>'; return; }
      table.innerHTML = list.map(function (w) {
        var on = starred.indexOf(w.en) >= 0;
        return '<div class="vocab-row">' +
          '<div class="vr-main">' +
            '<div class="w-en">' + esc(w.en) + ' <span class="pos">' + esc(w.pos || "") + '</span></div>' +
            '<div class="w-trs"><span class="w-tr uz">' + esc(w.uz) + '</span><span class="dot">·</span><span class="w-tr ru">' + esc(w.ru) + '</span></div>' +
          '</div>' +
          '<button class="star-btn ' + (on ? "on" : "") + '" data-en="' + esc(w.en) + '" title="' + t("msg.markLearned") + '">★</button>' +
        '</div>';
      }).join("");
      table.querySelectorAll(".star-btn").forEach(function (b) {
        b.addEventListener("click", function () {
          var en = b.getAttribute("data-en");
          var s = getStarred();
          var i = s.indexOf(en);
          if (i >= 0) { s.splice(i, 1); b.classList.remove("on"); }
          else { s.push(en); b.classList.add("on"); toast(t("msg.markLearned")); }
          setStarred(s);
        });
      });
    }
    document.getElementById("vsearch").addEventListener("input", function (e) { q = e.target.value; render(); });
    document.getElementById("vpills").querySelectorAll(".pill").forEach(function (p) {
      p.addEventListener("click", function () {
        document.querySelectorAll("#vpills .pill").forEach(function (x) { x.classList.remove("active"); });
        p.classList.add("active");
        cat = p.getAttribute("data-cat");
        render();
      });
    });
    render();
  }

  function viewTestsList() {
    var total = Math.ceil(VOCAB.length / VTEST_SIZE);
    var scores = getScores();
    var tiles = "";
    for (var i = 0; i < total; i++) {
      var start = i * VTEST_SIZE;
      var end = Math.min(start + VTEST_SIZE, VOCAB.length);
      var key = "vtest:" + (i + 1);
      var best = scores[key];
      tiles += '<a class="tile" href="#/tests/' + (i + 1) + '">' +
        '<div><div class="tile-title">Test ' + (i + 1) + '</div>' +
        '<div class="tile-sub">' + (start + 1) + '–' + end + ' ' + t("tests.range") + '</div></div>' +
        (best != null ? '<span class="tile-badge done">' + best + '%</span>' : '<span class="tile-badge">›</span>') +
      '</a>';
    }
    setApp('' +
      '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("tests.title") + '</h1><p>' + t("tests.desc") + '</p></div>' +
      '<div class="grid cols">' + tiles + '</div>');
  }

  function viewRunVocabTest(num) {
    var i = parseInt(num, 10);
    var total = Math.ceil(VOCAB.length / VTEST_SIZE);
    if (!i || i < 1 || i > total) return notFound();
    var start = (i - 1) * VTEST_SIZE;
    var chunk = VOCAB.slice(start, start + VTEST_SIZE);
    var ml = meaningLang();

    function build() {
      return shuffle(chunk).map(function (w) {
        // distractors: prefer same category
        var pool = VOCAB.filter(function (x) { return x.en !== w.en && x[ml] !== w[ml]; });
        var sameCat = pool.filter(function (x) { return x.cat === w.cat; });
        var distract = shuffle(sameCat.length >= 3 ? sameCat : pool).slice(0, 3).map(function (x) { return x[ml]; });
        var options = shuffle([w[ml]].concat(distract));
        return {
          q: esc(w.en) + (w.pos ? ' <span style="color:var(--muted);font-weight:400;font-size:.85rem">(' + esc(w.pos) + ')</span>' : ''),
          options: options,
          answer: options.indexOf(w[ml])
        };
      });
    }
    runQuiz(build(), {
      title: "Vocabulary Test " + i,
      subtitle: (start + 1) + "–" + Math.min(start + VTEST_SIZE, VOCAB.length) + " " + t("tests.range"),
      saveKey: "vtest:" + i,
      backHash: "#/tests",
      reshuffle: build
    });
  }

  function viewGTestsList() {
    var scores = getScores();
    setApp('' +
      '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("gtests.title") + '</h1><p>' + t("gtests.desc") + '</p></div>' +
      '<div class="grid cols">' +
        GRAMMAR.map(function (g, idx) {
          var bank = GTESTS[g.id] || [];
          var key = "gtest:" + g.id;
          var best = scores[key];
          var count = Math.min(bank.length, GTEST_MAX);
          return '<a class="tile" href="#/grammar-tests/' + g.id + '">' +
            '<div><div class="tile-title">' + (idx + 1) + '. ' + esc(g.name) + '</div>' +
            '<div class="tile-sub">' + count + ' ' + t("gtests.questions") + '</div></div>' +
            (best != null ? '<span class="tile-badge done">' + best + '%</span>' : '<span class="tile-badge">›</span>') +
          '</a>';
        }).join("") +
      '</div>');
  }

  function viewRunGTest(id) {
    var g = GRAMMAR.filter(function (x) { return x.id === id; })[0];
    var bank = GTESTS[id];
    if (!g || !bank) return notFound();
    function build() {
      return shuffle(bank).slice(0, GTEST_MAX).map(function (q) {
        // shuffle options too
        var correctVal = q.options[q.answer];
        var opts = shuffle(q.options);
        return { q: esc(q.q), options: opts, answer: opts.indexOf(correctVal) };
      });
    }
    runQuiz(build(), {
      title: g.name,
      subtitle: g.title[state.lang] || g.title.en,
      saveKey: "gtest:" + id,
      backHash: "#/grammar-tests",
      reshuffle: build
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
      if (root === "reading") return parts[1] ? viewPassage(parts[1]) : viewReadingList();
      if (root === "vocabulary") return viewVocabulary();
      if (root === "tests") return parts[1] ? viewRunVocabTest(parts[1]) : viewTestsList();
      if (root === "grammar-tests") return parts[1] ? viewRunGTest(parts[1]) : viewGTestsList();
      return notFound();
    } catch (e) {
      console.error(e);
      setApp('<div class="empty"><p>Error: ' + esc(e.message) + '</p><a class="btn" href="#/">' + t("nav.home") + '</a></div>');
    }
  }

  /* ---------- Init ---------- */
  function init() {
    // Telegram WebApp
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

    // Service worker (offline + tez yuklash). file:// da ishlamaydi, lekin xato bermaydi.
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
