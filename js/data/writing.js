/* ===== Writing tasks =====
   cat: "medical" | "general"
   prompt: topshiriq matni | tips: foydali iboralar | minWords: tavsiya etilgan hajm
   sample: namuna (model) javob — yozib bo'lgandan keyin ochiladi
   Avtomatik baholash yo'q (statik ilova): foydalanuvchi namuna bilan o'zini solishtiradi.
*/
window.ME70_WRITING = [
  /* ---------- MEDICAL (15) ---------- */
  {
    id: "wr-med-1", cat: "medical", level: "A2", type: "Description", minWords: 50,
    title: "A Visit to the Doctor",
    prompt: "Write about a time you (or a family member) visited a doctor. What was the problem? What did the doctor do and say?",
    tips: ["Last week / A few days ago ...", "I had a headache / a fever / a sore throat.", "The doctor examined me and ...", "He / She told me to ...", "After that, I felt ..."],
    sample: [
      "Last week I did not feel well, so I went to see the doctor.",
      "I had a high temperature and a bad headache for two days.",
      "The doctor examined me, checked my throat and listened to my heart.",
      "He told me to rest at home and drink a lot of water. After three days, I felt much better."
    ]
  },
  {
    id: "wr-med-2", cat: "medical", level: "A2", type: "Note", minWords: 40,
    title: "Cancelling an Appointment",
    prompt: "Write a short note to the clinic to cancel your appointment and ask for a new time.",
    tips: ["Dear Sir / Madam,", "I have an appointment on ... at ...", "Unfortunately, I cannot come because ...", "Could I change it to ...?", "Thank you for your help."],
    sample: [
      "Dear Sir or Madam,",
      "I have an appointment with Doctor Aziz tomorrow at ten o'clock.",
      "Unfortunately, I cannot come because I have to travel for work.",
      "Could I please change my appointment to next Monday? Thank you for your help."
    ]
  },
  {
    id: "wr-med-3", cat: "medical", level: "B1", type: "Email", minWords: 80,
    title: "Email: Asking for an Appointment",
    prompt: "Write an email to a clinic. Explain your symptoms, ask for an appointment this week and say when you are free.",
    tips: ["I am writing to ask for an appointment.", "For the last few days, I have had ...", "I would prefer a time in the morning / afternoon.", "I am free on ...", "I look forward to your reply."],
    sample: [
      "Dear City Clinic,",
      "I am writing to ask for an appointment with a doctor this week.",
      "For the last three days I have had a sore throat, a cough and a slight fever.",
      "I would prefer a time in the morning, and I am free on Tuesday and Thursday.",
      "Please let me know what is possible. I look forward to your reply. Best regards, Bek."
    ]
  },
  {
    id: "wr-med-4", cat: "medical", level: "B1", type: "Description", minWords: 80,
    title: "A Healthy Daily Routine",
    prompt: "Describe a healthy daily routine. Write about food, exercise, sleep and habits that keep a person healthy.",
    tips: ["A healthy day starts with ...", "It is important to eat ...", "You should drink ... and avoid ...", "Regular exercise such as ...", "Finally, good sleep helps ..."],
    sample: [
      "A healthy daily routine begins with a good breakfast, such as eggs, bread and fruit.",
      "It is important to eat vegetables and to drink plenty of water during the day.",
      "We should avoid too much sugar and fried food because they are bad for the heart.",
      "Regular exercise, such as walking for thirty minutes, keeps the body strong.",
      "Finally, sleeping seven or eight hours helps the body and mind to rest."
    ]
  },
  {
    id: "wr-med-5", cat: "medical", level: "B1", type: "Advice", minWords: 70,
    title: "Advice for a Friend with a Cold",
    prompt: "Your friend has a bad cold. Write a short message giving them advice on what to do to feel better.",
    tips: ["I'm sorry to hear that you ...", "You should ... / You shouldn't ...", "Make sure you drink ...", "It's a good idea to ...", "I hope you get better soon!"],
    sample: [
      "Hi Sara, I'm sorry to hear that you have a bad cold.",
      "You should rest at home and drink plenty of warm tea with honey and lemon.",
      "Make sure you stay warm and sleep well, because rest helps the body recover.",
      "You shouldn't go to work until you feel better. I hope you get well soon!"
    ]
  },
  {
    id: "wr-med-6", cat: "medical", level: "B1", type: "Description", minWords: 80,
    title: "The Job of a Nurse",
    prompt: "Describe the work of a nurse. What does a nurse do every day? Why is this job important?",
    tips: ["A nurse works in a hospital or clinic.", "Every day, a nurse ...", "They take care of ...", "A good nurse must be ... (kind, patient).", "This job is important because ..."],
    sample: [
      "A nurse is a very important person in any hospital or clinic.",
      "Every day, nurses check patients, give them medicine and help the doctors.",
      "They also measure temperature and blood pressure, and they comfort people who are afraid.",
      "A good nurse must be kind, patient and careful.",
      "This job is important because nurses help patients feel safe and get better."
    ]
  },
  {
    id: "wr-med-7", cat: "medical", level: "B2", type: "Essay", minWords: 120,
    title: "Why a Healthy Lifestyle Matters",
    prompt: "Write an essay explaining why a healthy lifestyle is important. Give at least two reasons and examples.",
    tips: ["Nowadays, more and more people ...", "Firstly, a healthy lifestyle ...", "For example, ...", "Secondly, ...", "In conclusion, ..."],
    sample: [
      "Nowadays, many people understand that a healthy lifestyle is essential for a long and happy life.",
      "Firstly, eating well and exercising regularly protect the body from serious diseases such as diabetes and heart problems.",
      "For example, a person who walks every day and eats fresh food usually has more energy and gets sick less often.",
      "Secondly, a healthy lifestyle also improves our mood and helps us deal with stress.",
      "In conclusion, taking care of our body and mind is one of the best decisions we can make."
    ]
  },
  {
    id: "wr-med-8", cat: "medical", level: "B2", type: "Essay", minWords: 120,
    title: "Fast Food: Advantages and Disadvantages",
    prompt: "Write an essay about the advantages and disadvantages of fast food. Give your own opinion at the end.",
    tips: ["Fast food has become very popular ...", "On the one hand, ...", "On the other hand, ...", "However, ...", "In my opinion, ..."],
    sample: [
      "Fast food has become very popular because modern life is busy and people have little time to cook.",
      "On the one hand, fast food is cheap, quick and tasty, which is convenient for students and workers.",
      "On the other hand, it usually contains too much salt, sugar and fat, which can cause obesity and heart disease.",
      "In my opinion, fast food is acceptable from time to time, but it should not replace healthy, home-cooked meals."
    ]
  },
  {
    id: "wr-med-9", cat: "medical", level: "B2", type: "Letter", minWords: 100,
    title: "A Thank-You Letter to Hospital Staff",
    prompt: "Write a letter thanking the doctors and nurses who looked after you or a family member in hospital.",
    tips: ["Dear Doctor ... and all the staff,", "I am writing to thank you for ...", "During my stay, you ...", "I was especially grateful for ...", "With sincere thanks, ..."],
    sample: [
      "Dear Doctor Olim and all the staff of Ward 5,",
      "I am writing to thank you sincerely for the wonderful care you gave my mother last month.",
      "During her stay, you were always kind, patient and professional, even when you were very busy.",
      "I was especially grateful for the way the nurses explained everything to our family.",
      "Thanks to your help, my mother is now healthy and at home. With sincere thanks, the Karimov family."
    ]
  },
  {
    id: "wr-med-10", cat: "medical", level: "B2", type: "Essay", minWords: 120,
    title: "Should Sugary Drinks Be Taxed?",
    prompt: "Some governments want to put a tax on sugary drinks to improve public health. Do you agree? Give reasons.",
    tips: ["There is a growing debate about ...", "Supporters argue that ...", "However, opponents believe ...", "From my point of view, ...", "To sum up, ..."],
    sample: [
      "There is a growing debate about whether sugary drinks should be taxed to protect public health.",
      "Supporters argue that high sugar consumption leads to obesity and diabetes, and that a tax would encourage healthier choices.",
      "However, opponents believe that people should be free to choose, and that a tax mostly affects poorer families.",
      "From my point of view, a reasonable tax combined with education is the best solution.",
      "To sum up, while a tax alone is not perfect, it can be a useful step towards a healthier society."
    ]
  },
  {
    id: "wr-med-11", cat: "medical", level: "B1", type: "Instructions", minWords: 70,
    title: "First Aid for a Small Burn",
    prompt: "Write clear, step-by-step instructions explaining what to do if someone gets a small burn on their hand.",
    tips: ["First, ...", "Then, ...", "Do not ...", "After that, ...", "Finally, if ... , call for help."],
    sample: [
      "If someone burns their hand, it is important to act quickly but stay calm.",
      "First, hold the burn under cool running water for at least ten minutes.",
      "Do not put ice, butter or toothpaste on the burn.",
      "Then, cover it gently with a clean, dry cloth.",
      "Finally, if the burn is large or very painful, call for medical help."
    ]
  },
  {
    id: "wr-med-12", cat: "medical", level: "B2", type: "Report", minWords: 110,
    title: "The Flu: Symptoms and Treatment",
    prompt: "Write a short report describing the symptoms of the flu and explaining how people can treat and prevent it.",
    tips: ["The flu is a common ...", "The main symptoms are ...", "To treat it, patients should ...", "To prevent it, ...", "In serious cases, ..."],
    sample: [
      "The flu is a common illness caused by a virus, especially in winter.",
      "The main symptoms are a high fever, a cough, a sore throat, body aches and tiredness.",
      "To treat the flu, patients should rest, drink plenty of fluids and take medicine to reduce the fever.",
      "To prevent it, people should wash their hands often and get the flu vaccine every year.",
      "In serious cases, especially for children or older people, it is important to see a doctor."
    ]
  },
  {
    id: "wr-med-13", cat: "medical", level: "C1", type: "Essay", minWords: 150,
    title: "Technology in Modern Medicine",
    prompt: "Discuss how technology has changed modern medicine. Consider both benefits and possible risks.",
    tips: ["Over the past decades, ...", "One major benefit is ...", "Furthermore, ...", "Nevertheless, there are risks such as ...", "In conclusion, ..."],
    sample: [
      "Over the past few decades, technology has transformed medicine in remarkable ways.",
      "One major benefit is that advanced scanners and tests allow doctors to detect diseases far earlier than before.",
      "Furthermore, digital records and telemedicine make healthcare faster and more accessible, even in remote areas.",
      "Nevertheless, there are risks: an over-reliance on machines may reduce human contact, and patient data must be carefully protected.",
      "In conclusion, technology is a powerful tool that improves medicine, but it should support, not replace, the care and judgement of doctors."
    ]
  },
  {
    id: "wr-med-14", cat: "medical", level: "C1", type: "Essay", minWords: 150,
    title: "Mental Health Matters",
    prompt: "Write an essay arguing that mental health deserves the same attention as physical health.",
    tips: ["For a long time, society has ...", "First and foremost, ...", "In addition, ...", "Critics may say ... , but ...", "Ultimately, ..."],
    sample: [
      "For a long time, society has treated physical illness seriously while ignoring problems of the mind.",
      "First and foremost, conditions such as depression and anxiety are common and can be just as disabling as physical diseases.",
      "In addition, poor mental health affects every part of life, including work, relationships and even physical well-being.",
      "Some people may argue that mental problems are not 'real', but modern science clearly shows that they are.",
      "Ultimately, giving mental health the same attention as physical health would reduce suffering and save many lives."
    ]
  },
  {
    id: "wr-med-15", cat: "medical", level: "B2", type: "Description", minWords: 100,
    title: "A Memorable Hospital Experience",
    prompt: "Describe a memorable experience you had at a hospital or clinic. How did you feel and what did you learn?",
    tips: ["I will never forget the time when ...", "At first, I felt ...", "The staff were ...", "What surprised me most was ...", "This experience taught me ..."],
    sample: [
      "I will never forget the day my younger brother was taken to hospital after a bad fall.",
      "At first, I felt frightened because he was in a lot of pain and could not move his arm.",
      "However, the doctors and nurses were calm, kind and very professional.",
      "What surprised me most was how quickly they took an X-ray and treated his broken arm.",
      "This experience taught me to respect medical workers and to value good health."
    ]
  }
];


/* ===== GENERAL (15) ===== */
window.ME70_WRITING.push(
  {
    id: "wr-gen-1", cat: "general", level: "A2", type: "Description", minWords: 50,
    title: "My Family",
    prompt: "Describe your family. How many people are there? What do they do? Who are you closest to?",
    tips: ["There are ... people in my family.", "My father / mother works as ...", "I have ... brother(s) and ... sister(s).", "We usually ... together.", "I am closest to ..."],
    sample: [
      "There are five people in my family: my parents, my two sisters and me.",
      "My father is a teacher and my mother is a nurse.",
      "My sisters are younger than me and they are still at school.",
      "We usually have dinner together every evening and talk about our day.",
      "I am closest to my older cousin, who always helps me."
    ]
  },
  {
    id: "wr-gen-2", cat: "general", level: "A2", type: "Description", minWords: 50,
    title: "My Typical Day",
    prompt: "Describe a typical day in your life, from morning to night.",
    tips: ["I usually wake up at ...", "In the morning, I ...", "During the day, I ...", "In the evening, I ...", "I go to bed at ..."],
    sample: [
      "I usually wake up at half past six in the morning.",
      "After breakfast, I go to university by bus.",
      "During the day, I have classes and study in the library.",
      "In the evening, I help at home and do my homework.",
      "I usually go to bed at around eleven o'clock."
    ]
  },
  {
    id: "wr-gen-3", cat: "general", level: "A2", type: "Email", minWords: 50,
    title: "A Birthday Invitation",
    prompt: "Write an email inviting a friend to your birthday party. Include the date, time and place.",
    tips: ["Hi ...,", "I'm having a birthday party on ...", "It starts at ... at ...", "There will be ...", "I really hope you can come!"],
    sample: [
      "Hi Dilshod,",
      "I'm having a birthday party next Saturday and I would love you to come.",
      "It starts at five o'clock at my house near the park.",
      "There will be food, music and games, and some of our old friends will be there.",
      "Please let me know if you can make it. I really hope you can come!"
    ]
  },
  {
    id: "wr-gen-4", cat: "general", level: "B1", type: "Description", minWords: 80,
    title: "My Hometown",
    prompt: "Describe your hometown. What is it like? What can people see and do there?",
    tips: ["My hometown is ...", "It is famous for ...", "In the centre, there is ...", "People can ...", "What I like most is ..."],
    sample: [
      "My hometown is a small but beautiful city in the east of the country.",
      "It is famous for its old buildings and friendly people.",
      "In the centre, there is a large park, a busy market and several cafes.",
      "People can visit the museum, walk by the river or relax in the green parks.",
      "What I like most is that life there is calm and everyone knows each other."
    ]
  },
  {
    id: "wr-gen-5", cat: "general", level: "B1", type: "Story", minWords: 90,
    title: "My Last Holiday",
    prompt: "Write about your last holiday. Where did you go? What did you do? Did you enjoy it?",
    tips: ["Last summer / Last year, I went to ...", "I travelled with ...", "Every day, we ...", "The best moment was ...", "Overall, it was ..."],
    sample: [
      "Last summer, I went to the seaside with my family for a week.",
      "We stayed in a small hotel close to the beach.",
      "Every day, we swam in the sea, walked along the shore and ate fresh fish.",
      "The best moment was watching the sunset over the water on the last evening.",
      "Overall, it was a wonderful and relaxing holiday that I will never forget."
    ]
  },
  {
    id: "wr-gen-6", cat: "general", level: "B1", type: "Opinion", minWords: 80,
    title: "My Favourite Hobby",
    prompt: "Write about your favourite hobby. What is it? When did you start? Why do you enjoy it?",
    tips: ["My favourite hobby is ...", "I started ... years ago.", "I usually do it ...", "I enjoy it because ...", "It helps me to ..."],
    sample: [
      "My favourite hobby is reading books, especially adventure and science stories.",
      "I started reading for fun about five years ago, when a teacher gave me a great book.",
      "I usually read in the evening before I go to sleep.",
      "I enjoy it because it takes me to different worlds and teaches me new things.",
      "Reading also helps me to relax and to improve my English."
    ]
  },
  {
    id: "wr-gen-7", cat: "general", level: "B1", type: "Email", minWords: 80,
    title: "Booking a Hotel Room",
    prompt: "Write an email to a hotel to book a room. Include the dates, the type of room and any questions.",
    tips: ["I would like to book a room ...", "I will arrive on ... and leave on ...", "I need a room for ... people.", "Could you tell me if ... is included?", "I look forward to your reply."],
    sample: [
      "Dear Sir or Madam,",
      "I would like to book a room at your hotel for two nights.",
      "I will arrive on Friday the tenth and leave on Sunday the twelfth.",
      "I need a room for two people, and I would like to know if breakfast is included.",
      "Could you also tell me the price per night? I look forward to your reply."
    ]
  },
  {
    id: "wr-gen-8", cat: "general", level: "B2", type: "Essay", minWords: 120,
    title: "Social Media: Good or Bad?",
    prompt: "Write an essay about the advantages and disadvantages of social media. Give your opinion.",
    tips: ["Social media has become ...", "On the positive side, ...", "However, there are also problems, such as ...", "Moreover, ...", "In my view, ..."],
    sample: [
      "Social media has become a central part of modern life for millions of people.",
      "On the positive side, it helps us stay in touch with friends, share ideas and learn about the world instantly.",
      "However, there are also problems, such as the spread of false information and the waste of valuable time.",
      "Moreover, spending too long online can harm our sleep and even our mental health.",
      "In my view, social media is useful if we use it carefully and do not let it control our lives."
    ]
  },
  {
    id: "wr-gen-9", cat: "general", level: "B2", type: "Essay", minWords: 120,
    title: "City Life or Countryside?",
    prompt: "Is it better to live in a city or in the countryside? Discuss both sides and give your opinion.",
    tips: ["Many people dream of ...", "Living in a city has advantages such as ...", "On the other hand, the countryside offers ...", "Personally, I prefer ...", "All things considered, ..."],
    sample: [
      "The question of whether to live in a city or the countryside is one many people think about.",
      "Living in a city has clear advantages, such as good jobs, hospitals, schools and entertainment.",
      "On the other hand, the countryside offers clean air, peace and a slower, healthier way of life.",
      "Personally, I prefer the city when I am young because of the opportunities it gives.",
      "All things considered, the best choice depends on a person's age, work and what they value most."
    ]
  },
  {
    id: "wr-gen-10", cat: "general", level: "B2", type: "Letter", minWords: 110,
    title: "A Letter of Complaint",
    prompt: "You bought a product that does not work properly. Write a polite letter of complaint asking for a solution.",
    tips: ["I am writing to complain about ...", "I bought it on ... at ...", "Unfortunately, the product ...", "I would like you to ... (refund / replace).", "I look forward to a quick response."],
    sample: [
      "Dear Customer Service,",
      "I am writing to complain about a phone I bought from your shop last week.",
      "Unfortunately, the battery does not work properly and the phone turns off after a few minutes.",
      "I have the receipt and the product is still under guarantee.",
      "I would like you to replace it or give me a full refund. I look forward to a quick response."
    ]
  },
  {
    id: "wr-gen-11", cat: "general", level: "B1", type: "Description", minWords: 80,
    title: "My Best Friend",
    prompt: "Describe your best friend. What do they look like? What kind of person are they? Why are you friends?",
    tips: ["My best friend's name is ...", "He / She is ... (tall, friendly).", "We met when ...", "We both enjoy ...", "I value our friendship because ..."],
    sample: [
      "My best friend's name is Aziza, and we have known each other since childhood.",
      "She is tall, has long dark hair and always has a warm smile.",
      "She is kind, honest and always ready to help when I have a problem.",
      "We both enjoy reading, cooking and going for long walks.",
      "I value our friendship because we can trust and understand each other completely."
    ]
  },
  {
    id: "wr-gen-12", cat: "general", level: "B2", type: "Essay", minWords: 120,
    title: "Why Learning English Is Important",
    prompt: "Write an essay explaining why learning English is important in today's world.",
    tips: ["In today's world, English ...", "Firstly, it is the language of ...", "Secondly, ...", "In addition, ...", "To conclude, ..."],
    sample: [
      "In today's connected world, English has become the most important international language.",
      "Firstly, it is the language of science, business and technology, so it opens many career opportunities.",
      "Secondly, English allows people from different countries to communicate and understand each other.",
      "In addition, most of the information on the internet, including books and courses, is available in English.",
      "To conclude, learning English is no longer a luxury but a key skill for success in the modern world."
    ]
  },
  {
    id: "wr-gen-13", cat: "general", level: "B2", type: "Opinion", minWords: 110,
    title: "Should Students Wear Uniforms?",
    prompt: "Some schools require uniforms. Do you think students should wear school uniforms? Give your reasons.",
    tips: ["The topic of school uniforms ...", "Those in favour say ...", "Those against argue ...", "I believe that ...", "In conclusion, ..."],
    sample: [
      "The topic of school uniforms is often discussed by students, parents and teachers.",
      "Those in favour say that uniforms make everyone equal and help students focus on studying.",
      "Those against argue that uniforms limit freedom and that young people should express themselves.",
      "I believe that uniforms are a good idea because they reduce competition over clothes and save money.",
      "In conclusion, although both sides have a point, the benefits of uniforms are greater than the disadvantages."
    ]
  },
  {
    id: "wr-gen-14", cat: "general", level: "C1", type: "Essay", minWords: 150,
    title: "Does Technology Make Us Less Social?",
    prompt: "Some people think technology makes us less social. Discuss this idea and give your own view.",
    tips: ["It is often claimed that ...", "On the one hand, ...", "On the other hand, ...", "From my perspective, ...", "In the final analysis, ..."],
    sample: [
      "It is often claimed that modern technology, especially smartphones, is making people less social.",
      "On the one hand, there is some truth in this: families sometimes sit together yet stare at separate screens.",
      "On the other hand, technology also connects us with friends and relatives who live far away, and helps shy people communicate.",
      "From my perspective, the problem is not technology itself but the way we choose to use it.",
      "In the final analysis, if we set sensible limits, technology can strengthen our relationships rather than weaken them."
    ]
  },
  {
    id: "wr-gen-15", cat: "general", level: "B1", type: "Story", minWords: 90,
    title: "A Day I Will Never Forget",
    prompt: "Write a story about a day you will never forget. What happened? How did you feel?",
    tips: ["I will always remember the day when ...", "It started as a normal day, but ...", "Suddenly, ...", "I felt ...", "In the end, ..."],
    sample: [
      "I will always remember the day I received the results of my final exams.",
      "It started as a normal day, but I was very nervous and could not eat my breakfast.",
      "When I opened the message and saw my high marks, I could not believe my eyes.",
      "I felt proud, happy and grateful to my parents and teachers at the same time.",
      "In the end, we celebrated together with a big dinner, and I will never forget that feeling."
    ]
  }
);
