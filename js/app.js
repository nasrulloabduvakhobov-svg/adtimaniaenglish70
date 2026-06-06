/* ===== MedEnglish70 — app core (Grammar, Reading, Vocabulary, Tests, Grammar Tests) ===== */
(function () {
  "use strict";

  var I18N = window.ME70_I18N;
  var GRAMMAR = window.ME70_GRAMMAR;
  var VOCAB = window.ME70_VOCAB;
  var READING = window.ME70_READING;
  var LISTENING = window.ME70_LISTENING;
  var WRITING = window.ME70_WRITING;
  var SPEAKING = window.ME70_SPEAKING;
  var FUND = window.ME70_FUNDAMENTALS || { subjects: [] };
  var GT = window.ME70_GTEST_CONFIG;

  var VTEST_SIZE = 20;
  var TESTS_PER_TENSE = GT.testsPerTense || 10;
  var Q_PER_TEST = GT.questionsPerTest || 20;
  var ALL_TENSE_IDS = GRAMMAR.map(function (g) { return g.id; });

  /* ---------- State ---------- */
  var state = {
    lang: localStorage.getItem("me70_lang") || "uz",
    theme: localStorage.getItem("me70_theme") || ""
  };
  function getStarred() { try { return JSON.parse(localStorage.getItem("me70_starred") || "[]"); } catch (e) { return []; } }
  function setStarred(a) { localStorage.setItem("me70_starred", JSON.stringify(a)); }
  function getReadDone() { try { return JSON.parse(localStorage.getItem("me70_reading") || "[]"); } catch (e) { return []; } }
  function setReadDone(a) { localStorage.setItem("me70_reading", JSON.stringify(a)); }
  function getListenDone() { try { return JSON.parse(localStorage.getItem("me70_listening") || "[]"); } catch (e) { return []; } }
  function setListenDone(a) { localStorage.setItem("me70_listening", JSON.stringify(a)); }
  function getWriteDone() { try { return JSON.parse(localStorage.getItem("me70_writing") || "[]"); } catch (e) { return []; } }
  function setWriteDone(a) { localStorage.setItem("me70_writing", JSON.stringify(a)); }
  function getSpeakDone() { try { return JSON.parse(localStorage.getItem("me70_speaking") || "[]"); } catch (e) { return []; } }
  function setSpeakDone(a) { localStorage.setItem("me70_speaking", JSON.stringify(a)); }
  function getDraft(id) { return localStorage.getItem("me70_draft:" + id) || ""; }
  function setDraft(id, txt) { try { localStorage.setItem("me70_draft:" + id, txt); } catch (e) {} }
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
  function meaningLang() { return state.lang === "ru" ? "ru" : "uz"; }

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

  function stopSpeech() {
    try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {}
  }

  var meActiveStream = null, meRecorder = null;
  function stopMedia() {
    try { if (meRecorder && meRecorder.state === "recording") meRecorder.stop(); } catch (e) {}
    try { if (meActiveStream) meActiveStream.getTracks().forEach(function (tr) { tr.stop(); }); } catch (e) {}
    meRecorder = null; meActiveStream = null;
  }

  /* ---------- Donate / Support ---------- */
  function copyText(txt) {
    var done = false;
    try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(txt); done = true; } } catch (e) {}
    if (!done) {
      try {
        var ta = document.createElement("textarea");
        ta.value = txt;
        document.body.appendChild(ta);
        if (ta.select) ta.select();
        if (document.execCommand) document.execCommand("copy");
        if (ta.remove) ta.remove();
      } catch (e) {}
    }
    toast(t("donate.copied"));
  }
  function openDonate() {
    var cfg = window.ME70_DONATE;
    if (!cfg || cfg.enabled === false || !cfg.wallets) return;
    var existing = document.querySelector(".modal-overlay");
    if (existing && existing.remove) existing.remove();

    var rows = cfg.wallets.map(function (w) {
      return '<div class="donate-row">' +
        '<div class="donate-w"><span class="donate-ico">' + (w.icon || "💳") + '</span>' +
          '<div><div class="donate-name">' + esc(w.name) + '</div>' +
            (w.number ? '<div class="donate-num">' + esc(w.number) + '</div>' : '') +
            (w.note ? '<div class="donate-note-line">' + esc(w.note) + '</div>' : '') +
            (w.holder ? '<div class="donate-holder">' + esc(w.holder) + '</div>' : '') +
          '</div>' +
        '</div>' +
        '<div class="donate-actions">' +
          (w.link ? '<a class="btn primary" href="' + esc(w.link) + '" target="_blank" rel="noopener">' + t("donate.open") + '</a>' : '') +
          (w.number ? '<button class="btn copy-btn" data-num="' + esc(w.number) + '">📋 ' + t("donate.copy") + '</button>' : '') +
        '</div>' +
      '</div>';
    }).join("");

    var overlay = el('<div class="modal-overlay"></div>');
    overlay.innerHTML = '<div class="modal">' +
      '<button class="modal-close" id="donateClose" aria-label="' + t("donate.close") + '">✕</button>' +
      '<h2 class="modal-title">🌱 ' + t("donate.title") + '</h2>' +
      '<p class="modal-note">' + t("donate.note") + '</p>' +
      rows +
    '</div>';
    document.body.appendChild(overlay);

    function close() { if (overlay.remove) overlay.remove(); }
    var closeBtn = overlay.querySelector("#donateClose");
    if (closeBtn) closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    overlay.querySelectorAll(".copy-btn").forEach(function (b) {
      b.addEventListener("click", function () { copyText(b.getAttribute("data-num")); });
    });
  }

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
  function tenseCombos(tid) {
    var pairs = [];
    for (var si = 0; si < GT.subjects.length; si++) {
      for (var vi = 0; vi < GT.verbs.length; vi++) pairs.push([si, vi]);
    }
    pairs = seededShuffle(pairs, hashStr("ME70:" + tid));
    return pairs.slice(0, TESTS_PER_TENSE * Q_PER_TEST);
  }
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

  /* ---------- Views: Home ---------- */
  function viewHome() {
    var scores = getScores();
    var scoreVals = Object.keys(scores).map(function (k) { return scores[k]; });
    var avg = scoreVals.length ? Math.round(scoreVals.reduce(function (a, b) { return a + b; }, 0) / scoreVals.length) : 0;
    var testsDone = Object.keys(scores).filter(function (k) { return k.indexOf("vtest:") === 0 || k.indexOf("gtest:") === 0 || k.indexOf("fund:") === 0; }).length;
    var vTests = Math.ceil(VOCAB.length / VTEST_SIZE);
    var gTests = GRAMMAR.length * TESTS_PER_TENSE;

    var sections = [
      { hash: "#/grammar", icon: "📘", key: "grammar", meta: GRAMMAR.length + " " + t("stat.tenses").toLowerCase() },
      { hash: "#/reading", icon: "📖", key: "reading", meta: READING.length + " " + t("stat.passages").toLowerCase() },
      { hash: "#/listening", icon: "🎧", key: "listening", meta: LISTENING.length + " " + t("listening.unit") },
      { hash: "#/writing", icon: "✍️", key: "writing", meta: WRITING.length + " " + t("writing.unit") },
      { hash: "#/speaking", icon: "🎙️", key: "speaking", meta: SPEAKING.length + " " + t("speaking.unit") },
      { hash: "#/vocabulary", icon: "🗂️", key: "vocabulary", meta: VOCAB.length + " " + t("stat.words").toLowerCase() },
      { hash: "#/tests", icon: "✅", key: "tests", meta: vTests + " " + t("stat.tests").toLowerCase() },
      { hash: "#/grammar-tests", icon: "🧠", key: "gtests", meta: gTests + " " + t("stat.tests").toLowerCase() },
      { hash: "#/fundamentals", icon: "🔬", key: "fundamentals", meta: FUND.subjects.length + " " + t("fund.subjectsWord") }
    ];

    setApp('' +
      '<section class="hero">' +
        '<h1>' + t("home.hero.title") + '</h1>' +
        '<p>' + t("home.hero.desc") + '</p>' +
        '<div class="hero-stats">' +
          '<div class="hero-stat"><b>16</b><span>' + t("stat.tenses") + '</span></div>' +
          '<div class="hero-stat"><b>' + VOCAB.length + '</b><span>' + t("stat.words") + '</span></div>' +
          '<div class="hero-stat"><b>' + READING.length + '</b><span>' + t("stat.passages") + '</span></div>' +
          '<div class="hero-stat"><b>' + LISTENING.length + '</b><span>' + t("stat.listening") + '</span></div>' +
          '<div class="hero-stat"><b>' + WRITING.length + '</b><span>' + t("stat.writing") + '</span></div>' +
          '<div class="hero-stat"><b>' + SPEAKING.length + '</b><span>' + t("stat.speaking") + '</span></div>' +
          '<div class="hero-stat"><b>' + (vTests + gTests) + '</b><span>' + t("stat.tests") + '</span></div>' +
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
        '<div class="po-card"><b>' + getStarred().length + '</b><span>' + t("prog.wordsLearned") + '</span></div>' +
        '<div class="po-card"><b>' + testsDone + '</b><span>' + t("prog.testsDone") + '</span></div>' +
        '<div class="po-card"><b>' + getReadDone().length + '</b><span>' + t("prog.readDone") + '</span></div>' +
        '<div class="po-card"><b>' + getListenDone().length + '</b><span>' + t("prog.listenDone") + '</span></div>' +
        '<div class="po-card"><b>' + getWriteDone().length + '</b><span>' + t("prog.writeDone") + '</span></div>' +
        '<div class="po-card"><b>' + getSpeakDone().length + '</b><span>' + t("prog.speakDone") + '</span></div>' +
        '<div class="po-card"><b>' + avg + '%</b><span>' + t("prog.avgScore") + '</span></div>' +
      '</div>');
  }

  /* ---------- Views: Grammar ---------- */
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

  /* ---------- Views: Reading ---------- */
  function viewReadingList() {
    var levels = [
      { key: "elementary", cls: "elementary" },
      { key: "pre", cls: "pre" },
      { key: "inter", cls: "inter" },
      { key: "upper", cls: "upper" },
      { key: "advanced", cls: "advanced" }
    ];
    var done = getReadDone();
    var html = '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("reading.title") + '</h1><p>' + t("reading.desc") + '</p></div>';
    levels.forEach(function (lv) {
      var items = READING.filter(function (r) { return r.level === lv.key; });
      if (!items.length) return;
      html += '<h2 style="font-size:1.05rem;margin:18px 0 8px"><span class="level-tag ' + lv.cls + '">' + t("reading.level." + lv.key) + '</span> <span style="color:var(--muted);font-size:.8rem;font-weight:600">(' + items.length + ')</span></h2>';
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
        '<span class="level-tag ' + esc(r.level) + '">' + t("reading.level." + r.level) + '</span>' +
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

  /* ---------- Views: Vocabulary ---------- */
  function viewVocabulary() {
    var cat = "all", q = "";
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

  /* ---------- Views: Vocabulary Tests ---------- */
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
        '<div><div class="tile-title">' + t("gtests.test") + ' ' + (i + 1) + '</div>' +
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
      title: t("tests.title") + " " + i,
      subtitle: (start + 1) + "–" + Math.min(start + VTEST_SIZE, VOCAB.length) + " " + t("tests.range"),
      saveKey: "vtest:" + i,
      backHash: "#/tests",
      reshuffle: build
    });
  }

  /* ---------- Views: Grammar Tests ---------- */
  function viewGTestsList() {
    var scores = getScores();
    setApp('' +
      '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("gtests.title") + '</h1><p>' + t("gtests.desc") + '</p></div>' +
      '<div class="grid cols">' +
        GRAMMAR.map(function (g, idx) {
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

  /* ---------- Views: Listening ---------- */
  function viewListeningList() {
    var done = getListenDone();
    var cats = [
      { key: "medical", cls: "inter" },
      { key: "general", cls: "elementary" }
    ];
    var html = '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("listening.title") + '</h1><p>' + t("listening.desc") + '</p></div>';
    cats.forEach(function (c) {
      var items = LISTENING.filter(function (x) { return x.cat === c.key; });
      if (!items.length) return;
      html += '<h2 style="font-size:1.05rem;margin:18px 0 8px"><span class="level-tag ' + c.cls + '">' + t("listening.cat." + c.key) + '</span> <span style="color:var(--muted);font-size:.8rem;font-weight:600">(' + items.length + ')</span></h2>';
      html += '<div class="grid cols">' + items.map(function (it) {
        var isDone = done.indexOf(it.id) >= 0;
        return '<a class="tile" href="#/listening/' + it.id + '">' +
          '<div><div class="tile-title">🎧 ' + esc(it.title) + '</div>' +
          '<div class="tile-sub">' + (it.level ? it.level + " · " : "") + it.questions.length + ' ' + t("gtests.questions") + '</div></div>' +
          '<span class="tile-badge ' + (isDone ? "done" : "") + '">' + (isDone ? "✓" : "›") + '</span>' +
        '</a>';
      }).join("") + '</div>';
    });
    setApp(html);
  }

  function viewListening(id) {
    var item = LISTENING.filter(function (x) { return x.id === id; })[0];
    if (!item) return notFound();
    var supported = !!(window.speechSynthesis && typeof window.SpeechSynthesisUtterance !== "undefined");
    var fullText = item.script.join(" ");
    var paras = item.script.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");

    setApp('' +
      '<div class="breadcrumb"><a href="#/listening">‹ ' + t("listening.title") + '</a></div>' +
      '<div class="passage">' +
        '<span class="level-tag ' + (item.cat === "medical" ? "inter" : "elementary") + '">' + t("listening.cat." + item.cat) + (item.level ? " · " + item.level : "") + '</span>' +
        '<h2>🎧 ' + esc(item.title) + '</h2>' +
        '<div class="lis-player">' +
          '<button class="btn primary lis-big" id="lisPlay">▶ ' + t("listening.play") + '</button>' +
          '<button class="btn" id="lisPause">⏸</button>' +
          '<button class="btn" id="lisReplay">🔁 ' + t("listening.replay") + '</button>' +
        '</div>' +
        (supported ? '<p class="lis-tip">💡 ' + t("listening.tip") + '</p>' : '<p class="lis-noaudio">⚠️ ' + t("listening.noAudio") + '</p>') +
        '<button class="btn ghost" id="lisScriptBtn" style="margin-top:6px">📄 ' + t("listening.showScript") + '</button>' +
        '<div class="lis-script" id="lisScript" style="display:' + (supported ? "none" : "block") + '">' + paras + '</div>' +
        '<div class="btn-row"><button class="btn primary" id="startQ">📝 ' + t("listening.answerQ") + ' (' + item.questions.length + ')</button></div>' +
      '</div>');

    function speak() {
      if (!supported) return;
      try {
        window.speechSynthesis.cancel();
        var u = new window.SpeechSynthesisUtterance(fullText);
        u.lang = "en-US"; u.rate = 0.92; u.pitch = 1;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    }
    var playBtn = app.querySelector("#lisPlay");
    if (playBtn) playBtn.addEventListener("click", speak);
    var replayBtn = app.querySelector("#lisReplay");
    if (replayBtn) replayBtn.addEventListener("click", speak);
    var pauseBtn = app.querySelector("#lisPause");
    if (pauseBtn) pauseBtn.addEventListener("click", function () {
      try {
        if (!window.speechSynthesis) return;
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        else window.speechSynthesis.pause();
      } catch (e) {}
    });
    var scriptShown = !supported;
    var scriptBtn = app.querySelector("#lisScriptBtn");
    if (scriptBtn) scriptBtn.addEventListener("click", function () {
      var box = app.querySelector("#lisScript");
      scriptShown = !scriptShown;
      box.style.display = scriptShown ? "block" : "none";
      scriptBtn.innerHTML = "📄 " + (scriptShown ? t("listening.hideScript") : t("listening.showScript"));
    });
    app.querySelector("#startQ").addEventListener("click", function () {
      stopSpeech();
      runQuiz(item.questions.map(function (q) { return { q: esc(q.q), options: q.options, answer: q.answer }; }), {
        title: item.title,
        subtitle: t("listening.answerQ"),
        saveKey: "listening:" + item.id,
        backHash: "#/listening/" + item.id,
        onFinish: function () {
          var d = getListenDone();
          if (d.indexOf(item.id) < 0) { d.push(item.id); setListenDone(d); }
        }
      });
    });
  }

  /* ---------- Views: Writing ---------- */
  function viewWritingList() {
    var done = getWriteDone();
    var cats = [
      { key: "medical", cls: "inter" },
      { key: "general", cls: "elementary" }
    ];
    var html = '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("writing.title") + '</h1><p>' + t("writing.desc") + '</p></div>';
    cats.forEach(function (c) {
      var items = WRITING.filter(function (x) { return x.cat === c.key; });
      if (!items.length) return;
      html += '<h2 style="font-size:1.05rem;margin:18px 0 8px"><span class="level-tag ' + c.cls + '">' + t("writing.cat." + c.key) + '</span> <span style="color:var(--muted);font-size:.8rem;font-weight:600">(' + items.length + ')</span></h2>';
      html += '<div class="grid cols">' + items.map(function (it) {
        var isDone = done.indexOf(it.id) >= 0;
        return '<a class="tile" href="#/writing/' + it.id + '">' +
          '<div><div class="tile-title">✍️ ' + esc(it.title) + '</div>' +
          '<div class="tile-sub">' + (it.type ? esc(it.type) + " · " : "") + (it.level ? it.level + " · " : "") + "~" + it.minWords + " " + t("writing.words") + '</div></div>' +
          '<span class="tile-badge ' + (isDone ? "done" : "") + '">' + (isDone ? "✓" : "›") + '</span>' +
        '</a>';
      }).join("") + '</div>';
    });
    setApp(html);
  }

  function viewWriting(id) {
    var item = WRITING.filter(function (x) { return x.id === id; })[0];
    if (!item) return notFound();
    var tips = item.tips.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("");
    var model = item.sample.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    var isDone = getWriteDone().indexOf(id) >= 0;

    setApp('' +
      '<div class="breadcrumb"><a href="#/writing">‹ ' + t("writing.title") + '</a></div>' +
      '<div class="passage">' +
        '<span class="level-tag ' + (item.cat === "medical" ? "inter" : "elementary") + '">' + t("writing.cat." + item.cat) + (item.level ? " · " + item.level : "") + (item.type ? " · " + esc(item.type) : "") + '</span>' +
        '<h2>✍️ ' + esc(item.title) + '</h2>' +
        '<div class="sub-h">' + t("writing.prompt") + '</div>' +
        '<p>' + esc(item.prompt) + '</p>' +
        '<div class="sub-h">' + t("writing.tips") + '</div>' +
        '<ul class="usage-list">' + tips + '</ul>' +
        '<div class="lis-tip">📏 ' + t("writing.minWords") + ': ~' + item.minWords + ' ' + t("writing.words") + '</div>' +
        '<div class="sub-h">' + t("writing.yourText") + '</div>' +
        '<textarea id="writeArea" class="write-area" placeholder="' + t("writing.placeholder") + '"></textarea>' +
        '<div class="write-meta"><span id="writeCount">0 ' + t("writing.words") + '</span><span id="writeSaved" class="write-saved"></span></div>' +
        '<div class="btn-row">' +
          '<button class="btn" id="wModelBtn">📄 ' + t("writing.showModel") + '</button>' +
          '<button class="btn primary" id="wDone">✓ ' + (isDone ? t("writing.done") : t("writing.markDone")) + '</button>' +
          '<button class="btn ghost" id="wClear">🗑 ' + t("writing.clear") + '</button>' +
        '</div>' +
        '<div class="lis-script" id="wModel" style="display:none"><div class="sub-h" style="margin-top:0">' + t("writing.model") + '</div>' + model + '</div>' +
      '</div>');

    var area = app.querySelector("#writeArea");
    var countEl = app.querySelector("#writeCount");
    var savedEl = app.querySelector("#writeSaved");
    var modelBtn = app.querySelector("#wModelBtn");
    var doneBtn = app.querySelector("#wDone");
    var clearBtn = app.querySelector("#wClear");

    function wc(s) { s = (s || "").trim(); return s ? s.split(/\s+/).length : 0; }
    function update() { countEl.textContent = wc(area.value) + " " + t("writing.words"); }
    area.value = getDraft(id);
    update();

    var saveTimer;
    area.addEventListener("input", function () {
      update();
      setDraft(id, area.value);
      savedEl.textContent = t("writing.saved");
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () { savedEl.textContent = ""; }, 1500);
    });
    var modelShown = false;
    modelBtn.addEventListener("click", function () {
      var box = app.querySelector("#wModel");
      modelShown = !modelShown;
      box.style.display = modelShown ? "block" : "none";
      modelBtn.innerHTML = "📄 " + (modelShown ? t("writing.hideModel") : t("writing.showModel"));
    });
    doneBtn.addEventListener("click", function () {
      var d = getWriteDone();
      if (d.indexOf(id) < 0) { d.push(id); setWriteDone(d); }
      doneBtn.innerHTML = "✓ " + t("writing.done");
      toast(t("writing.done"));
    });
    clearBtn.addEventListener("click", function () {
      area.value = ""; setDraft(id, ""); update();
    });
  }

  /* ---------- Views: Speaking ---------- */
  function viewSpeakingList() {
    var done = getSpeakDone();
    var cats = [
      { key: "medical", cls: "inter" },
      { key: "general", cls: "elementary" }
    ];
    var html = '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("speaking.title") + '</h1><p>' + t("speaking.desc") + '</p></div>';
    cats.forEach(function (c) {
      var items = SPEAKING.filter(function (x) { return x.cat === c.key; });
      if (!items.length) return;
      html += '<h2 style="font-size:1.05rem;margin:18px 0 8px"><span class="level-tag ' + c.cls + '">' + t("speaking.cat." + c.key) + '</span> <span style="color:var(--muted);font-size:.8rem;font-weight:600">(' + items.length + ')</span></h2>';
      html += '<div class="grid cols">' + items.map(function (it) {
        var isDone = done.indexOf(it.id) >= 0;
        return '<a class="tile" href="#/speaking/' + it.id + '">' +
          '<div><div class="tile-title">🎙️ ' + esc(it.title) + '</div>' +
          '<div class="tile-sub">' + (it.level ? it.level + " · " : "") + it.questions.length + ' ' + t("speaking.questions").toLowerCase() + '</div></div>' +
          '<span class="tile-badge ' + (isDone ? "done" : "") + '">' + (isDone ? "✓" : "›") + '</span>' +
        '</a>';
      }).join("") + '</div>';
    });
    setApp(html);
  }

  function viewSpeaking(id) {
    var item = SPEAKING.filter(function (x) { return x.id === id; })[0];
    if (!item) return notFound();
    var ttsOk = !!(window.speechSynthesis && typeof window.SpeechSynthesisUtterance !== "undefined");
    var micOk = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    var modelText = item.model.join(" ");
    var qs = item.questions.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join("");
    var phr = item.phrases.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("");
    var modelHtml = item.model.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    var isDone = getSpeakDone().indexOf(id) >= 0;

    setApp('' +
      '<div class="breadcrumb"><a href="#/speaking">‹ ' + t("speaking.title") + '</a></div>' +
      '<div class="passage">' +
        '<span class="level-tag ' + (item.cat === "medical" ? "inter" : "elementary") + '">' + t("speaking.cat." + item.cat) + (item.level ? " · " + item.level : "") + '</span>' +
        '<h2>🎙️ ' + esc(item.title) + '</h2>' +
        '<p>' + esc(item.prompt) + '</p>' +
        '<div class="sub-h">' + t("speaking.questions") + '</div>' +
        '<ul class="usage-list">' + qs + '</ul>' +
        '<div class="sub-h">' + t("speaking.phrases") + '</div>' +
        '<ul class="usage-list">' + phr + '</ul>' +
        '<div class="lis-tip">💡 ' + t("speaking.tip") + '</div>' +
        '<div class="lis-player">' +
          '<button class="btn primary lis-big" id="spModelPlay">🔊 ' + t("speaking.listenModel") + '</button>' +
          '<button class="btn ghost" id="spModelBtn">📄 ' + t("speaking.showModel") + '</button>' +
        '</div>' +
        '<div class="lis-script" id="spModel" style="display:none"><div class="sub-h" style="margin-top:0">' + t("speaking.model") + '</div>' + modelHtml + '</div>' +
        '<div class="sp-record">' +
          (micOk
            ? '<button class="btn" id="spRec">🎤 ' + t("speaking.record") + '</button>' +
              '<button class="btn" id="spPlay" disabled>▶ ' + t("speaking.playRec") + '</button>' +
              '<span id="spStatus" class="write-saved"></span>' +
              '<audio id="spAudio" controls style="display:none;width:100%;margin-top:10px"></audio>'
            : '<p class="lis-noaudio">🎤 ' + t("speaking.noMic") + '</p>') +
        '</div>' +
        '<div class="btn-row"><button class="btn primary" id="spDone">✓ ' + (isDone ? t("speaking.done") : t("speaking.markDone")) + '</button></div>' +
      '</div>');

    // Model TTS
    var modelPlay = app.querySelector("#spModelPlay");
    if (modelPlay) modelPlay.addEventListener("click", function () {
      if (!ttsOk) { toast(t("listening.noAudio")); return; }
      try {
        window.speechSynthesis.cancel();
        var u = new window.SpeechSynthesisUtterance(modelText);
        u.lang = "en-US"; u.rate = 0.92; u.pitch = 1;
        window.speechSynthesis.speak(u);
      } catch (e) {}
    });
    // Model text toggle
    var modelShown = false;
    var modelBtn = app.querySelector("#spModelBtn");
    if (modelBtn) modelBtn.addEventListener("click", function () {
      var box = app.querySelector("#spModel");
      modelShown = !modelShown;
      box.style.display = modelShown ? "block" : "none";
      modelBtn.innerHTML = "📄 " + (modelShown ? t("speaking.hideModel") : t("speaking.showModel"));
    });
    // Recording
    if (micOk) {
      var recBtn = app.querySelector("#spRec");
      var playBtn = app.querySelector("#spPlay");
      var statusEl = app.querySelector("#spStatus");
      var audioEl = app.querySelector("#spAudio");
      var recording = false;
      recBtn.addEventListener("click", function () {
        if (recording) { stopMedia(); return; }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          meActiveStream = stream;
          var chunks = [];
          meRecorder = new window.MediaRecorder(stream);
          meRecorder.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          meRecorder.onstop = function () {
            try {
              var blob = new Blob(chunks, { type: (chunks[0] && chunks[0].type) || "audio/webm" });
              var url = URL.createObjectURL(blob);
              audioEl.src = url; audioEl.style.display = "block";
              playBtn.disabled = false;
            } catch (e) {}
            recording = false;
            recBtn.innerHTML = "🎤 " + t("speaking.record");
            statusEl.textContent = "";
            try { if (meActiveStream) meActiveStream.getTracks().forEach(function (tr) { tr.stop(); }); } catch (e) {}
            meActiveStream = null; meRecorder = null;
          };
          meRecorder.start();
          recording = true;
          recBtn.innerHTML = "⏹ " + t("speaking.stop");
          statusEl.textContent = t("speaking.recording");
        }).catch(function () { toast(t("speaking.noMic")); });
      });
      playBtn.addEventListener("click", function () { try { audioEl.play(); } catch (e) {} });
    }
    // Mark done
    var doneBtn = app.querySelector("#spDone");
    doneBtn.addEventListener("click", function () {
      var d = getSpeakDone();
      if (d.indexOf(id) < 0) { d.push(id); setSpeakDone(d); }
      doneBtn.innerHTML = "✓ " + t("speaking.done");
      toast(t("speaking.done"));
    });
  }

  /* ---------- Views: Fundamental sciences ---------- */
  function fundLang() {
    return (state.lang === "ru" || state.lang === "en") ? state.lang : "uz";
  }
  function viewFundList() {
    var scores = getScores();
    var html = '<div class="breadcrumb"><a href="#/">‹ ' + t("nav.home") + '</a></div>' +
      '<div class="page-head"><h1>' + t("fund.title") + '</h1><p>' + t("fund.desc") + '</p></div>' +
      '<div class="grid cols">' +
      FUND.subjects.map(function (s, i) {
        // mastered tests
        var best = -1;
        for (var n = 1; n <= s.tests.length; n++) {
          var sc = scores["fund:" + s.id + ":" + n];
          if (sc != null && sc > best) best = sc;
        }
        var badge = best >= 80 ? '<span class="tile-badge done">✓ ' + best + '%</span>'
          : (best >= 0 ? '<span class="tile-badge">' + best + '%</span>' : '<span class="tile-badge">›</span>');
        return '<a class="tile" href="#/fundamentals/' + s.id + '">' +
          '<div><div class="tile-title">' + (s.icon || "🔬") + ' ' + esc(s.name[state.lang] || s.name.uz) + '</div>' +
          '<div class="tile-sub">' + s.tests.length + ' ' + t("fund.tests") + ' · ' + (s.tests.length * 20) + ' ' + t("fund.questions") + '</div></div>' +
          badge +
        '</a>';
      }).join("") +
      '</div>';
    setApp(html);
  }

  function viewFundSubject(sid) {
    var s = FUND.subjects.filter(function (x) { return x.id === sid; })[0];
    if (!s) return notFound();
    var scores = getScores();
    var tiles = "";
    for (var n = 1; n <= s.tests.length; n++) {
      var key = "fund:" + sid + ":" + n;
      var best = scores[key];
      var badge = best != null
        ? '<span class="tile-badge ' + (best >= 80 ? "done" : "") + '">' + best + '%</span>'
        : '<span class="tile-badge">›</span>';
      tiles += '<a class="tile" href="#/fundamentals/' + sid + '/' + n + '">' +
        '<div><div class="tile-title">' + t("fund.test") + ' ' + n + '</div>' +
        '<div class="tile-sub">20 ' + t("fund.questions") + '</div></div>' +
        badge +
      '</a>';
    }
    setApp('' +
      '<div class="breadcrumb"><a href="#/fundamentals">‹ ' + t("fund.title") + '</a></div>' +
      '<div class="page-head"><h1>' + (s.icon || "🔬") + ' ' + esc(s.name[state.lang] || s.name.uz) + '</h1><p>' + t("fund.subjectDesc") + '</p></div>' +
      '<div class="grid cols">' + tiles + '</div>');
  }

  function viewRunFundTest(sid, numStr) {
    var s = FUND.subjects.filter(function (x) { return x.id === sid; })[0];
    var num = parseInt(numStr, 10);
    if (!s || !num || num < 1 || num > s.tests.length) return notFound();
    var bank = s.tests[num - 1];
    var lang = fundLang();

    function build() {
      return shuffle(bank).map(function (item) {
        var loc = item[lang] || item.uz;
        var correctVal = loc.o[item.a];
        var opts = shuffle(loc.o.slice());
        return { q: esc(loc.q), options: opts, answer: opts.indexOf(correctVal) };
      });
    }
    runQuiz(build(), {
      title: (s.name[state.lang] || s.name.uz) + " — " + t("fund.test") + " " + num,
      subtitle: "20 " + t("fund.questions"),
      saveKey: "fund:" + sid + ":" + num,
      backHash: "#/fundamentals/" + sid,
      reshuffle: build
    });
  }

  function notFound() {
    setApp('<div class="empty"><h2>404</h2><p><a class="btn" href="#/">' + t("nav.home") + '</a></p></div>');
  }

  /* ---------- Router ---------- */
  function router() {
    stopSpeech();
    stopMedia();
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);
    var root = parts[0] || "";
    try {
      if (root === "") return viewHome();
      if (root === "grammar") return parts[1] ? viewGrammarDetail(parts[1]) : viewGrammarList();
      if (root === "reading") return parts[1] ? viewPassage(parts[1]) : viewReadingList();
      if (root === "listening") return parts[1] ? viewListening(parts[1]) : viewListeningList();
      if (root === "writing") return parts[1] ? viewWriting(parts[1]) : viewWritingList();
      if (root === "speaking") return parts[1] ? viewSpeaking(parts[1]) : viewSpeakingList();
      if (root === "vocabulary") return viewVocabulary();
      if (root === "tests") return parts[1] ? viewRunVocabTest(parts[1]) : viewTestsList();
      if (root === "grammar-tests") {
        if (parts[1] && parts[2]) return viewRunGTest(parts[1], parts[2]);
        if (parts[1]) return viewGTenseTests(parts[1]);
        return viewGTestsList();
      }
      if (root === "fundamentals") {
        if (parts[1] && parts[2]) return viewRunFundTest(parts[1], parts[2]);
        if (parts[1]) return viewFundSubject(parts[1]);
        return viewFundList();
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

    var donateCfg = window.ME70_DONATE;
    var donateOn = !!(donateCfg && donateCfg.enabled !== false && donateCfg.wallets && donateCfg.wallets.length);
    ["donateTop", "donateBtn"].forEach(function (bid) {
      var b = document.getElementById(bid);
      if (!b) return;
      if (donateOn) b.addEventListener("click", openDonate);
      else b.style.display = "none";
    });
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
