/* ===== Grammar: 16 English tenses (uz / en / ru explanations) ===== */
window.ME70_GRAMMAR = [
  {
    id: "present-simple",
    name: "Present Simple",
    title: { uz: "Hozirgi oddiy zamon", en: "Present Simple", ru: "Настоящее простое" },
    formula: {
      affirm: "S + V(s/es) + O",
      negative: "S + do/does + not + V + O",
      question: "Do/Does + S + V + O ?"
    },
    signal: "always, usually, often, sometimes, every day, never, rarely, on Mondays",
    usage: {
      uz: ["Doimiy, takrorlanuvchi harakatlar va odatlar.", "Umumiy haqiqatlar va ilmiy faktlar.", "Dars jadvali, jadval bo'yicha bo'ladigan ishlar.", "III shaxs birlikda (he/she/it) fe'lga -s/-es qo'shiladi."],
      en: ["Habits and repeated actions.", "General truths and scientific facts.", "Timetables and schedules.", "Add -s/-es to the verb for he/she/it."],
      ru: ["Привычки и повторяющиеся действия.", "Общие истины и научные факты.", "Расписания.", "Для he/she/it к глаголу добавляется -s/-es."]
    },
    examples: [
      { en: "The heart pumps blood through the body.", uz: "Yurak qonni tana bo'ylab haydaydi.", ru: "Сердце качает кровь по телу." },
      { en: "Nurses check patients every morning.", uz: "Hamshiralar har kuni ertalab bemorlarni tekshiradi.", ru: "Медсёстры проверяют пациентов каждое утро." },
      { en: "She does not work on Sundays.", uz: "U yakshanba kunlari ishlamaydi.", ru: "Она не работает по воскресеньям." },
      { en: "Do you take this medicine daily?", uz: "Bu dorini har kuni qabul qilasizmi?", ru: "Вы принимаете это лекарство ежедневно?" }
    ]
  },
  {
    id: "present-continuous",
    name: "Present Continuous",
    title: { uz: "Hozirgi davomiy zamon", en: "Present Continuous", ru: "Настоящее длительное" },
    formula: {
      affirm: "S + am/is/are + V-ing + O",
      negative: "S + am/is/are + not + V-ing",
      question: "Am/Is/Are + S + V-ing ?"
    },
    signal: "now, right now, at the moment, currently, look!, listen!, these days",
    usage: {
      uz: ["Hozir, ayni paytda sodir bo'layotgan harakat.", "Vaqtinchalik vaziyatlar.", "Rejalashtirilgan kelajak harakatlari.", "O'zgarib borayotgan holatlar."],
      en: ["Actions happening now, at this moment.", "Temporary situations.", "Planned future arrangements.", "Changing/developing situations."],
      ru: ["Действия, происходящие сейчас.", "Временные ситуации.", "Запланированные действия в будущем.", "Меняющиеся ситуации."]
    },
    examples: [
      { en: "The doctor is examining the patient now.", uz: "Shifokor hozir bemorni ko'rikdan o'tkazmoqda.", ru: "Врач сейчас осматривает пациента." },
      { en: "I am taking my temperature at the moment.", uz: "Men ayni paytda haroratimni o'lchayapman.", ru: "Я сейчас измеряю свою температуру." },
      { en: "They are not sleeping right now.", uz: "Ular hozir uxlashmayapti.", ru: "Они сейчас не спят." },
      { en: "Is the nurse giving an injection?", uz: "Hamshira ukol qilyaptimi?", ru: "Медсестра делает укол?" }
    ]
  },
  {
    id: "present-perfect",
    name: "Present Perfect",
    title: { uz: "Hozirgi tugallangan zamon", en: "Present Perfect", ru: "Настоящее совершенное" },
    formula: {
      affirm: "S + have/has + V3 (past participle)",
      negative: "S + have/has + not + V3",
      question: "Have/Has + S + V3 ?"
    },
    signal: "just, already, yet, ever, never, since, for, recently, so far",
    usage: {
      uz: ["O'tmishda bo'lib, natijasi hozir muhim bo'lgan harakat.", "Aniq vaqti aytilmagan tajriba.", "since / for bilan davom etayotgan holatlar.", "Yaqinda tugagan harakatlar (just, already)."],
      en: ["Past action with a result in the present.", "Life experience (unspecified time).", "Situations continuing up to now (since/for).", "Recently finished actions (just, already)."],
      ru: ["Прошедшее действие с результатом в настоящем.", "Жизненный опыт без указания времени.", "Действия, длящиеся до сих пор (since/for).", "Недавно завершённые действия (just, already)."]
    },
    examples: [
      { en: "The patient has recovered completely.", uz: "Bemor butunlay tuzaldi.", ru: "Пациент полностью выздоровел." },
      { en: "I have worked here for ten years.", uz: "Men bu yerda o'n yildan beri ishlayman.", ru: "Я работаю здесь десять лет." },
      { en: "She has not taken the pills yet.", uz: "U hali dorilarni qabul qilmadi.", ru: "Она ещё не приняла таблетки." },
      { en: "Have you ever had surgery?", uz: "Siz hech operatsiya bo'lganmisiz?", ru: "Вам когда-нибудь делали операцию?" }
    ]
  },
  {
    id: "present-perfect-continuous",
    name: "Present Perfect Continuous",
    title: { uz: "Hozirgi tugallangan davomiy zamon", en: "Present Perfect Continuous", ru: "Настоящее совершенное длительное" },
    formula: {
      affirm: "S + have/has + been + V-ing",
      negative: "S + have/has + not + been + V-ing",
      question: "Have/Has + S + been + V-ing ?"
    },
    signal: "for, since, all day, how long, lately, recently",
    usage: {
      uz: ["O'tmishda boshlanib, hozirgacha davom etayotgan harakat.", "Harakatning davomiyligiga urg'u.", "How long? savoliga javob.", "Natijasi hozir ko'rinib turgan jarayon."],
      en: ["Action started in the past and still continuing.", "Emphasis on the duration of the action.", "Answers 'How long?'.", "Process whose result is visible now."],
      ru: ["Действие началось в прошлом и продолжается.", "Акцент на длительности действия.", "Ответ на вопрос 'How long?'.", "Процесс, результат которого виден сейчас."]
    },
    examples: [
      { en: "She has been studying medicine for six years.", uz: "U olti yildan beri tibbiyotni o'rganib kelmoqda.", ru: "Она изучает медицину уже шесть лет." },
      { en: "The patient has been coughing all night.", uz: "Bemor tun bo'yi yo'talyapti.", ru: "Пациент кашляет всю ночь." },
      { en: "I have not been feeling well lately.", uz: "Yaqinda o'zimni yaxshi his qilmayapman.", ru: "В последнее время я плохо себя чувствую." },
      { en: "How long have you been waiting?", uz: "Qancha vaqtdan beri kutyapsiz?", ru: "Как долго вы ждёте?" }
    ]
  },
  {
    id: "past-simple",
    name: "Past Simple",
    title: { uz: "O'tgan oddiy zamon", en: "Past Simple", ru: "Прошедшее простое" },
    formula: {
      affirm: "S + V2 (V-ed) + O",
      negative: "S + did + not + V + O",
      question: "Did + S + V + O ?"
    },
    signal: "yesterday, ago, last week, in 2010, then, when",
    usage: {
      uz: ["O'tmishda tugagan, aniq vaqti ma'lum harakat.", "O'tmishdagi ketma-ket harakatlar.", "Tartibsiz fe'llar 2-shaklda o'zgaradi.", "Inkor va so'roqda did ishlatiladi (fe'l asl holatda)."],
      en: ["Completed action at a definite time in the past.", "A sequence of past actions.", "Irregular verbs use special past forms.", "Use 'did' in questions/negatives (base verb)."],
      ru: ["Завершённое действие в прошлом с указанием времени.", "Последовательность прошедших действий.", "Неправильные глаголы имеют особые формы.", "В вопросах/отрицаниях используется 'did'."]
    },
    examples: [
      { en: "The surgeon performed the operation yesterday.", uz: "Jarroh kecha operatsiyani o'tkazdi.", ru: "Хирург провёл операцию вчера." },
      { en: "He felt dizzy this morning.", uz: "U bugun ertalab boshi aylandi.", ru: "Утром у него закружилась голова." },
      { en: "We did not find the cause.", uz: "Biz sababni topmadik.", ru: "Мы не нашли причину." },
      { en: "Did the patient sleep well?", uz: "Bemor yaxshi uxladimi?", ru: "Пациент хорошо спал?" }
    ]
  },
  {
    id: "past-continuous",
    name: "Past Continuous",
    title: { uz: "O'tgan davomiy zamon", en: "Past Continuous", ru: "Прошедшее длительное" },
    formula: {
      affirm: "S + was/were + V-ing",
      negative: "S + was/were + not + V-ing",
      question: "Was/Were + S + V-ing ?"
    },
    signal: "while, when, as, at 5 o'clock yesterday, all day",
    usage: {
      uz: ["O'tmishda muayyan vaqtda davom etayotgan harakat.", "Boshqa harakat sodir bo'lganda davom etayotgan jarayon (while ... when).", "O'tmishdagi parallel harakatlar.", "Holatni tasvirlash."],
      en: ["Action in progress at a specific past time.", "An action in progress interrupted by another (while ... when).", "Two parallel past actions.", "Setting a scene."],
      ru: ["Действие в процессе в определённый момент прошлого.", "Длительное действие, прерванное другим (while ... when).", "Два параллельных действия в прошлом.", "Описание обстановки."]
    },
    examples: [
      { en: "The nurse was preparing the medicine when the doctor arrived.", uz: "Shifokor kelganda hamshira dorini tayyorlayotgan edi.", ru: "Медсестра готовила лекарство, когда пришёл врач." },
      { en: "They were discussing the diagnosis at noon.", uz: "Ular tushda tashxisni muhokama qilishayotgan edi.", ru: "В полдень они обсуждали диагноз." },
      { en: "I was not listening carefully.", uz: "Men diqqat bilan tinglamayotgan edim.", ru: "Я не слушал внимательно." },
      { en: "Were you working late last night?", uz: "Kecha kechgacha ishlayotganmidingiz?", ru: "Вы работали допоздна прошлой ночью?" }
    ]
  },
  {
    id: "past-perfect",
    name: "Past Perfect",
    title: { uz: "O'tgan tugallangan zamon", en: "Past Perfect", ru: "Прошедшее совершенное" },
    formula: {
      affirm: "S + had + V3",
      negative: "S + had + not + V3",
      question: "Had + S + V3 ?"
    },
    signal: "before, after, already, by the time, when, just, until then",
    usage: {
      uz: ["O'tmishdagi ikki harakatdan oldin sodir bo'lgani.", "before / after bilan ketma-ketlik.", "by the time bilan vaqt chegarasi.", "O'tmishdagi natija/tajriba."],
      en: ["The earlier of two past actions.", "Sequence with before/after.", "A deadline in the past (by the time).", "Result/experience before a past point."],
      ru: ["Более раннее из двух прошедших действий.", "Последовательность с before/after.", "Завершение к моменту в прошлом (by the time).", "Результат до момента в прошлом."]
    },
    examples: [
      { en: "The patient had taken the pills before the doctor came.", uz: "Shifokor kelishidan oldin bemor dorilarni qabul qilgan edi.", ru: "Пациент принял таблетки до прихода врача." },
      { en: "By the time we arrived, the operation had finished.", uz: "Biz yetib kelganimizda, operatsiya tugagan edi.", ru: "К тому времени, как мы прибыли, операция закончилась." },
      { en: "She had not eaten anything before the test.", uz: "U tahlildan oldin hech narsa yemagan edi.", ru: "Она ничего не ела перед анализом." },
      { en: "Had they left before you called?", uz: "Siz qo'ng'iroq qilishdan oldin ular ketganmidi?", ru: "Они ушли до того, как вы позвонили?" }
    ]
  },
  {
    id: "past-perfect-continuous",
    name: "Past Perfect Continuous",
    title: { uz: "O'tgan tugallangan davomiy zamon", en: "Past Perfect Continuous", ru: "Прошедшее совершенное длительное" },
    formula: {
      affirm: "S + had + been + V-ing",
      negative: "S + had + not + been + V-ing",
      question: "Had + S + been + V-ing ?"
    },
    signal: "for, since, before, by the time, all day",
    usage: {
      uz: ["O'tmishdagi biror nuqtagacha davom etgan harakat.", "Davomiylikka urg'u (for/since).", "Boshqa o'tgan harakat sababini ko'rsatadi.", "Uzoq jarayon natijasi o'tmishda ko'ringan."],
      en: ["Action that was ongoing up to a point in the past.", "Emphasis on duration (for/since).", "Shows the cause of another past action.", "Result of a long process seen in the past."],
      ru: ["Действие, длившееся до определённого момента в прошлом.", "Акцент на длительности (for/since).", "Показывает причину другого прошедшего действия.", "Результат длительного процесса в прошлом."]
    },
    examples: [
      { en: "He had been working as a doctor for 20 years before he retired.", uz: "U nafaqaga chiqishidan oldin 20 yil shifokor bo'lib ishlagan edi.", ru: "Он работал врачом 20 лет, прежде чем вышел на пенсию." },
      { en: "The patient had been feeling tired before the diagnosis.", uz: "Tashxisdan oldin bemor o'zini charchagan his qilayotgan edi.", ru: "До постановки диагноза пациент чувствовал усталость." },
      { en: "We had not been waiting long when the nurse called us.", uz: "Hamshira bizni chaqirganda biz uzoq kutmagan edik.", ru: "Мы ждали недолго, когда медсестра нас позвала." },
      { en: "Had she been studying all night?", uz: "U tun bo'yi o'qiganmidi?", ru: "Она училась всю ночь?" }
    ]
  },
  {
    id: "future-simple",
    name: "Future Simple",
    title: { uz: "Kelasi oddiy zamon", en: "Future Simple", ru: "Будущее простое" },
    formula: {
      affirm: "S + will + V",
      negative: "S + will + not (won't) + V",
      question: "Will + S + V ?"
    },
    signal: "tomorrow, next week, soon, in the future, I think, probably",
    usage: {
      uz: ["Kelajakdagi harakat haqida bashorat.", "Gapirish paytida qabul qilingan qaror.", "Va'da, taklif, iltimos.", "Kelajakdagi faktlar."],
      en: ["Predictions about the future.", "Decisions made at the moment of speaking.", "Promises, offers and requests.", "Future facts."],
      ru: ["Предсказания о будущем.", "Решения, принятые в момент речи.", "Обещания, предложения, просьбы.", "Факты в будущем."]
    },
    examples: [
      { en: "The doctor will see you in five minutes.", uz: "Shifokor sizni besh daqiqada qabul qiladi.", ru: "Врач примет вас через пять минут." },
      { en: "This medicine will reduce the pain.", uz: "Bu dori og'riqni kamaytiradi.", ru: "Это лекарство уменьшит боль." },
      { en: "I will not forget to take the pills.", uz: "Men dorilarni ichishni unutmayman.", ru: "Я не забуду принять таблетки." },
      { en: "Will you help me move the patient?", uz: "Bemorni ko'chirishga yordam berasizmi?", ru: "Вы поможете мне переместить пациента?" }
    ]
  },
  {
    id: "future-continuous",
    name: "Future Continuous",
    title: { uz: "Kelasi davomiy zamon", en: "Future Continuous", ru: "Будущее длительное" },
    formula: {
      affirm: "S + will + be + V-ing",
      negative: "S + will + not + be + V-ing",
      question: "Will + S + be + V-ing ?"
    },
    signal: "at this time tomorrow, all day tomorrow, this time next week",
    usage: {
      uz: ["Kelajakda muayyan vaqtda davom etayotgan harakat.", "Rejalashtirilgan, kutilayotgan harakat.", "Muloyim so'rov.", "Kelajakdagi parallel harakat."],
      en: ["Action in progress at a specific future time.", "Planned/expected actions.", "Polite enquiries.", "Parallel future actions."],
      ru: ["Действие в процессе в определённый момент будущего.", "Запланированные/ожидаемые действия.", "Вежливый вопрос.", "Параллельные действия в будущем."]
    },
    examples: [
      { en: "At 9 a.m. tomorrow the surgeon will be operating.", uz: "Ertaga ertalab soat 9 da jarroh operatsiya qilayotgan bo'ladi.", ru: "Завтра в 9 утра хирург будет оперировать." },
      { en: "The nurse will be monitoring the patient all night.", uz: "Hamshira tun bo'yi bemorni kuzatib turadi.", ru: "Медсестра будет наблюдать за пациентом всю ночь." },
      { en: "I will not be working this weekend.", uz: "Men bu dam olish kunlari ishlamayman.", ru: "Я не буду работать в эти выходные." },
      { en: "Will you be using the lab later?", uz: "Keyinroq laboratoriyadan foydalanasizmi?", ru: "Вы будете использовать лабораторию позже?" }
    ]
  },
  {
    id: "future-perfect",
    name: "Future Perfect",
    title: { uz: "Kelasi tugallangan zamon", en: "Future Perfect", ru: "Будущее совершенное" },
    formula: {
      affirm: "S + will + have + V3",
      negative: "S + will + not + have + V3",
      question: "Will + S + have + V3 ?"
    },
    signal: "by, by then, by the time, by next year, before",
    usage: {
      uz: ["Kelajakdagi muayyan vaqtdan oldin tugaydigan harakat.", "by / by the time bilan ishlatiladi.", "Kelajakdagi natijani bashorat qilish.", "Belgilangan muddatga yakunlanish."],
      en: ["Action completed before a certain future time.", "Used with by / by the time.", "Predicting a future result.", "Completion by a deadline."],
      ru: ["Действие, завершённое до определённого момента в будущем.", "Используется с by / by the time.", "Предсказание будущего результата.", "Завершение к сроку."]
    },
    examples: [
      { en: "By next month, she will have finished her internship.", uz: "Keyingi oyga borib, u amaliyotini tugatgan bo'ladi.", ru: "К следующему месяцу она закончит стажировку." },
      { en: "The patient will have recovered by Friday.", uz: "Bemor juma kuniga borib tuzalgan bo'ladi.", ru: "Пациент выздоровеет к пятнице." },
      { en: "We will not have received the results by then.", uz: "O'sha vaqtga qadar biz natijalarni olmagan bo'lamiz.", ru: "К тому времени мы ещё не получим результаты." },
      { en: "Will you have completed the report by 5?", uz: "Hisobotni soat 5 ga tugatgan bo'lasizmi?", ru: "Вы закончите отчёт к 5 часам?" }
    ]
  },
  {
    id: "future-perfect-continuous",
    name: "Future Perfect Continuous",
    title: { uz: "Kelasi tugallangan davomiy zamon", en: "Future Perfect Continuous", ru: "Будущее совершенное длительное" },
    formula: {
      affirm: "S + will + have + been + V-ing",
      negative: "S + will + not + have + been + V-ing",
      question: "Will + S + have + been + V-ing ?"
    },
    signal: "by ... for, by then, by the time, for (duration)",
    usage: {
      uz: ["Kelajakdagi nuqtagacha davom etadigan harakat davomiyligi.", "by + for bilan birga davomiylik.", "Uzoq jarayonga urg'u.", "Kelajakda qancha vaqt davom etishini bildirish."],
      en: ["Duration of an action up to a point in the future.", "Used with by + for.", "Emphasis on a long process.", "How long something will have lasted."],
      ru: ["Длительность действия до момента в будущем.", "Используется с by + for.", "Акцент на длительный процесс.", "Сколько времени продлится действие к моменту."]
    },
    examples: [
      { en: "By June, he will have been studying English for a year.", uz: "Iyunga borib, u bir yildan beri ingliz tilini o'rganayotgan bo'ladi.", ru: "К июню он будет изучать английский уже год." },
      { en: "By 6 p.m., the nurse will have been working for 12 hours.", uz: "Kechki 6 ga borib, hamshira 12 soat ishlagan bo'ladi.", ru: "К 18:00 медсестра проработает 12 часов." },
      { en: "She will not have been waiting long.", uz: "U uzoq kutmagan bo'ladi.", ru: "Она не будет ждать долго." },
      { en: "Will they have been living here for ten years by 2030?", uz: "2030 yilga borib ular bu yerda o'n yil yashagan bo'lishadimi?", ru: "К 2030 году они проживут здесь десять лет?" }
    ]
  },
  {
    id: "future-in-the-past-simple",
    name: "Future in the Past",
    title: { uz: "O'tmishdagi kelasi zamon", en: "Future in the Past", ru: "Будущее в прошедшем" },
    formula: {
      affirm: "S + would + V",
      negative: "S + would + not + V",
      question: "Would + S + V ?"
    },
    signal: "(reported speech) he said (that) ..., she knew ...",
    usage: {
      uz: ["O'tmishdan turib kelajakka qaralgan harakat.", "Ko'pincha ko'chirma gapda (reported speech).", "will → would ga aylanadi.", "O'tmishdagi reja yoki bashorat."],
      en: ["A future action seen from a point in the past.", "Common in reported speech.", "will → would.", "A plan or prediction made in the past."],
      ru: ["Будущее действие с точки зрения прошлого.", "Часто в косвенной речи.", "will → would.", "План или предсказание, сделанные в прошлом."]
    },
    examples: [
      { en: "The doctor said he would call the next day.", uz: "Shifokor ertasi kuni qo'ng'iroq qilishini aytdi.", ru: "Врач сказал, что позвонит на следующий день." },
      { en: "She knew the treatment would help.", uz: "U davolanish yordam berishini bilardi.", ru: "Она знала, что лечение поможет." },
      { en: "They promised they would not be late.", uz: "Ular kechikmasliklarini va'da qilishdi.", ru: "Они обещали, что не опоздают." },
      { en: "He thought the patient would recover soon.", uz: "U bemor tez orada tuzalishini o'ylardi.", ru: "Он думал, что пациент скоро выздоровеет." }
    ]
  },
  {
    id: "future-in-the-past-continuous",
    name: "Future in the Past Continuous",
    title: { uz: "O'tmishdagi kelasi davomiy zamon", en: "Future in the Past Continuous", ru: "Будущее в прошедшем длительное" },
    formula: {
      affirm: "S + would + be + V-ing",
      negative: "S + would + not + be + V-ing",
      question: "Would + S + be + V-ing ?"
    },
    signal: "(reported speech) he said ... at that time",
    usage: {
      uz: ["O'tmishdan qaralgan kelajakda davom etadigan harakat.", "Ko'chirma gapda Future Continuous o'rnida.", "will be V-ing → would be V-ing.", "O'tmishda rejalashtirilgan davomiy harakat."],
      en: ["A future-in-the-past action that would be in progress.", "Replaces Future Continuous in reported speech.", "will be V-ing → would be V-ing.", "A planned ongoing action seen from the past."],
      ru: ["Длительное будущее действие с точки зрения прошлого.", "Заменяет Future Continuous в косвенной речи.", "will be V-ing → would be V-ing.", "Запланированное длительное действие из прошлого."]
    },
    examples: [
      { en: "He said he would be waiting at the clinic.", uz: "U klinikada kutib turishini aytdi.", ru: "Он сказал, что будет ждать в клинике." },
      { en: "She knew they would be operating at that time.", uz: "U o'sha vaqtda ular operatsiya qilayotgan bo'lishini bilardi.", ru: "Она знала, что в это время они будут оперировать." },
      { en: "I thought you would not be working then.", uz: "Men o'sha paytda ishlamaysiz deb o'ylagandim.", ru: "Я думал, вы тогда не будете работать." },
      { en: "Did he say he would be studying all evening?", uz: "U butun kech o'qiyman deganmidi?", ru: "Он сказал, что будет заниматься весь вечер?" }
    ]
  },
  {
    id: "future-in-the-past-perfect",
    name: "Future in the Past Perfect",
    title: { uz: "O'tmishdagi kelasi tugallangan zamon", en: "Future in the Past Perfect", ru: "Будущее в прошедшем совершенное" },
    formula: {
      affirm: "S + would + have + V3",
      negative: "S + would + not + have + V3",
      question: "Would + S + have + V3 ?"
    },
    signal: "(reported speech) by that time, by then",
    usage: {
      uz: ["O'tmishdan qaralgan kelajakdagi nuqtaga qadar tugaydigan harakat.", "Ko'chirma gapda Future Perfect o'rnida.", "will have V3 → would have V3.", "Shartli gaplarda ham uchraydi."],
      en: ["Action completed before a future point seen from the past.", "Replaces Future Perfect in reported speech.", "will have V3 → would have V3.", "Also used in conditional sentences."],
      ru: ["Действие, завершённое до будущего момента с точки зрения прошлого.", "Заменяет Future Perfect в косвенной речи.", "will have V3 → would have V3.", "Также в условных предложениях."]
    },
    examples: [
      { en: "She said she would have finished the report by Monday.", uz: "U dushanbaga hisobotni tugatgan bo'lishini aytdi.", ru: "Она сказала, что закончит отчёт к понедельнику." },
      { en: "He believed the patient would have recovered by then.", uz: "U o'sha vaqtga bemor tuzalgan bo'ladi deb ishonardi.", ru: "Он верил, что к тому времени пациент выздоровеет." },
      { en: "They thought we would not have left yet.", uz: "Ular biz hali ketmagan bo'lamiz deb o'ylashdi.", ru: "Они думали, что мы ещё не уйдём." },
      { en: "Would you have completed it by then?", uz: "O'sha vaqtga uni tugatgan bo'larmidingiz?", ru: "Вы бы закончили это к тому времени?" }
    ]
  },
  {
    id: "future-in-the-past-perfect-continuous",
    name: "Future in the Past Perfect Continuous",
    title: { uz: "O'tmishdagi kelasi tugallangan davomiy zamon", en: "Future in the Past Perfect Continuous", ru: "Будущее в прошедшем совершенное длительное" },
    formula: {
      affirm: "S + would + have + been + V-ing",
      negative: "S + would + not + have + been + V-ing",
      question: "Would + S + have + been + V-ing ?"
    },
    signal: "(reported speech) by then ... for",
    usage: {
      uz: ["O'tmishdan qaralgan kelajak nuqtagacha davom etgan harakat davomiyligi.", "Ko'chirma gapda Future Perfect Continuous o'rnida.", "will have been V-ing → would have been V-ing.", "Davomiylik + tugallanishga urg'u."],
      en: ["Duration of an action up to a future point seen from the past.", "Replaces Future Perfect Continuous in reported speech.", "will have been V-ing → would have been V-ing.", "Emphasis on duration before completion."],
      ru: ["Длительность действия до будущего момента с точки зрения прошлого.", "Заменяет Future Perfect Continuous в косвенной речи.", "will have been V-ing → would have been V-ing.", "Акцент на длительности до завершения."]
    },
    examples: [
      { en: "He said that by June he would have been working there for five years.", uz: "U iyunga borib o'sha yerda besh yil ishlagan bo'lishini aytdi.", ru: "Он сказал, что к июню проработает там пять лет." },
      { en: "She knew that by then she would have been studying for hours.", uz: "U o'sha vaqtga soatlab o'qigan bo'lishini bilardi.", ru: "Она знала, что к тому времени будет учиться уже несколько часов." },
      { en: "They thought I would not have been waiting long.", uz: "Ular men uzoq kutmagan bo'laman deb o'ylashdi.", ru: "Они думали, что я не буду ждать долго." },
      { en: "Would they have been living here for a decade by 2025?", uz: "2025 yilga borib ular bu yerda o'n yil yashagan bo'lisharmidi?", ru: "К 2025 году они прожили бы здесь десятилетие?" }
    ]
  }
];
