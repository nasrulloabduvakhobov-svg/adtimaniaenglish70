/* ===== Grammar Tests — generator configuration =====
   Har bir zamon uchun savollar AVTOMATIK yasaladi:
   ega (subject) + fe'l (verb) + vaqt iborasi (time) kombinatsiyasidan.
   To'g'ri javob shu zamonga mos fe'l shakli, distraktorlar boshqa zamonlardagi shakllar.
   Bu 16 zamon × 10 test × 20 savol = 3200+ savolni ta'minlaydi.
*/
window.ME70_GTEST_CONFIG = {
  // be / have / do / was-were / s3 (3-shaxs birlik -s/-es)
  subjects: [
    { t: "I",                be: "am",  have: "have", do: "do",   ww: "was",  s3: false },
    { t: "You",              be: "are", have: "have", do: "do",   ww: "were", s3: false },
    { t: "We",               be: "are", have: "have", do: "do",   ww: "were", s3: false },
    { t: "They",             be: "are", have: "have", do: "do",   ww: "were", s3: false },
    { t: "He",               be: "is",  have: "has",  do: "does", ww: "was",  s3: true },
    { t: "She",              be: "is",  have: "has",  do: "does", ww: "was",  s3: true },
    { t: "The doctor",       be: "is",  have: "has",  do: "does", ww: "was",  s3: true },
    { t: "The nurse",        be: "is",  have: "has",  do: "does", ww: "was",  s3: true },
    { t: "The patient",      be: "is",  have: "has",  do: "does", ww: "was",  s3: true },
    { t: "The surgeon",      be: "is",  have: "has",  do: "does", ww: "was",  s3: true },
    { t: "The doctors",      be: "are", have: "have", do: "do",   ww: "were", s3: false },
    { t: "The nurses",       be: "are", have: "have", do: "do",   ww: "were", s3: false },
    { t: "Medical students", be: "are", have: "have", do: "do",   ww: "were", s3: false }
  ],

  // base, s (3-shaxs), ing, past (V2), pp (V3), tail (gap qolgan qismi)
  verbs: [
    { b: "examine",  s: "examines",  ing: "examining",  past: "examined",  pp: "examined",  tail: "the patient" },
    { b: "treat",    s: "treats",    ing: "treating",   past: "treated",   pp: "treated",   tail: "the patients" },
    { b: "check",    s: "checks",    ing: "checking",   past: "checked",   pp: "checked",   tail: "the blood pressure" },
    { b: "help",     s: "helps",     ing: "helping",    past: "helped",    pp: "helped",    tail: "the patients" },
    { b: "work",     s: "works",     ing: "working",    past: "worked",    pp: "worked",    tail: "at the hospital" },
    { b: "study",    s: "studies",   ing: "studying",   past: "studied",   pp: "studied",   tail: "medicine" },
    { b: "prepare",  s: "prepares",  ing: "preparing",  past: "prepared",  pp: "prepared",  tail: "the medicine" },
    { b: "give",     s: "gives",     ing: "giving",     past: "gave",      pp: "given",     tail: "an injection" },
    { b: "take",     s: "takes",     ing: "taking",     past: "took",      pp: "taken",     tail: "the temperature" },
    { b: "feel",     s: "feels",     ing: "feeling",    past: "felt",      pp: "felt",      tail: "better" },
    { b: "clean",    s: "cleans",    ing: "cleaning",   past: "cleaned",   pp: "cleaned",   tail: "the wound" },
    { b: "call",     s: "calls",     ing: "calling",    past: "called",    pp: "called",    tail: "the ambulance" },
    { b: "visit",    s: "visits",    ing: "visiting",   past: "visited",   pp: "visited",   tail: "the clinic" },
    { b: "write",    s: "writes",    ing: "writing",    past: "wrote",     pp: "written",   tail: "a prescription" },
    { b: "monitor",  s: "monitors",  ing: "monitoring", past: "monitored", pp: "monitored", tail: "the patient" },
    { b: "measure",  s: "measures",  ing: "measuring",  past: "measured",  pp: "measured",  tail: "the pulse" },
    { b: "wait",     s: "waits",     ing: "waiting",    past: "waited",    pp: "waited",    tail: "for the results" },
    { b: "rest",     s: "rests",     ing: "resting",    past: "rested",    pp: "rested",    tail: "at home" },
    { b: "recover",  s: "recovers",  ing: "recovering", past: "recovered", pp: "recovered", tail: "from the illness" },
    { b: "drink",    s: "drinks",    ing: "drinking",   past: "drank",     pp: "drunk",     tail: "water" }
  ],

  // vaqt iboralari (signal words) — to'g'ri zamonni kontekstdan aniqlash uchun
  times: {
    "present-simple": ["every day", "every morning", "on Mondays", "twice a week", "every weekend", "after lunch"],
    "present-continuous": ["now", "right now", "at the moment", "today", "currently"],
    "present-perfect": ["recently", "since this morning", "this week", "so far", "since 2015", "for two years"],
    "present-perfect-continuous": ["for two hours", "since this morning", "all day", "lately", "for years"],
    "past-simple": ["yesterday", "last week", "two days ago", "last night", "last month", "in 2019"],
    "past-continuous": ["at 5 p.m. yesterday", "all morning yesterday", "at that moment", "the whole evening", "at noon yesterday"],
    "past-perfect": ["by the time we arrived", "before lunch", "by 10 a.m. yesterday", "before that day", "by then"],
    "past-perfect-continuous": ["for two hours before the test", "since early morning", "for a long time", "all day", "for months"],
    "future-simple": ["tomorrow", "next week", "soon", "later", "next month", "in an hour"],
    "future-continuous": ["at 9 a.m. tomorrow", "this time tomorrow", "all day tomorrow", "at noon tomorrow", "tonight"],
    "future-perfect": ["by tomorrow", "by next week", "by Friday", "by then", "by the end of the month"],
    "future-perfect-continuous": ["for a year by June", "by 6 p.m.", "for two hours by then", "for months by next year"],
    "future-in-the-past-simple": ["the next day", "the following week", "soon", "later", "the day after"],
    "future-in-the-past-continuous": ["at that time", "the next morning", "all day", "then", "the whole evening"],
    "future-in-the-past-perfect": ["by then", "by the next day", "by the following week", "by that time"],
    "future-in-the-past-perfect-continuous": ["for years by then", "for hours by that time", "for a long time by then", "for months by then"]
  },

  // Future-in-the-past zamonlari uchun ko'chirma gap ramkasi (reporting clause)
  frames: {
    "future-in-the-past-simple": ["He said that", "She knew that", "They believed that", "He thought that", "We were sure that", "She hoped that"],
    "future-in-the-past-continuous": ["He said that", "She knew that", "They believed that", "He thought that", "We were sure that"],
    "future-in-the-past-perfect": ["He said that", "She knew that", "They believed that", "He thought that", "We were sure that"],
    "future-in-the-past-perfect-continuous": ["He said that", "She knew that", "They believed that", "He thought that"]
  },

  // distraktorlar uchun "adashtiruvchi" zamonlar (pedagogik jihatdan yaqin)
  distract: {
    "present-simple": ["present-continuous", "past-simple", "present-perfect", "future-simple"],
    "present-continuous": ["present-simple", "past-continuous", "present-perfect-continuous", "future-continuous"],
    "present-perfect": ["past-simple", "present-perfect-continuous", "present-simple", "past-perfect"],
    "present-perfect-continuous": ["present-perfect", "past-perfect-continuous", "present-continuous", "past-continuous"],
    "past-simple": ["present-perfect", "past-continuous", "past-perfect", "present-simple"],
    "past-continuous": ["past-simple", "present-continuous", "past-perfect-continuous", "future-continuous"],
    "past-perfect": ["past-simple", "present-perfect", "past-perfect-continuous", "future-perfect"],
    "past-perfect-continuous": ["past-perfect", "present-perfect-continuous", "past-continuous", "future-perfect-continuous"],
    "future-simple": ["future-continuous", "present-simple", "future-perfect", "future-in-the-past-simple"],
    "future-continuous": ["future-simple", "present-continuous", "future-perfect-continuous", "past-continuous"],
    "future-perfect": ["future-simple", "future-perfect-continuous", "present-perfect", "past-perfect"],
    "future-perfect-continuous": ["future-perfect", "present-perfect-continuous", "future-continuous", "past-perfect-continuous"],
    "future-in-the-past-simple": ["future-simple", "future-in-the-past-continuous", "past-simple", "future-in-the-past-perfect"],
    "future-in-the-past-continuous": ["future-in-the-past-simple", "future-continuous", "past-continuous", "future-in-the-past-perfect-continuous"],
    "future-in-the-past-perfect": ["future-in-the-past-simple", "future-perfect", "future-in-the-past-perfect-continuous", "past-perfect"],
    "future-in-the-past-perfect-continuous": ["future-in-the-past-perfect", "future-perfect-continuous", "future-in-the-past-continuous", "past-perfect-continuous"]
  },

  testsPerTense: 10,
  questionsPerTest: 20
};
