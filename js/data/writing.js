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


/* ===== MEDICAL 16-35 (top-up to 35) ===== */
window.ME70_WRITING.push(
  {
    id: "wr-med-16", cat: "medical", level: "A2", type: "Note", minWords: 40,
    title: "A Note to Your Doctor",
    prompt: "Write a short note to your doctor describing how you feel after starting a new medicine.",
    tips: ["Dear Doctor ...,", "I started the new medicine on ...", "Since then, I feel ...", "I also noticed ...", "Should I continue or stop?"],
    sample: [
      "Dear Doctor Aziz,",
      "I started taking the new medicine three days ago, as you told me.",
      "Since then, my headache is better, but I feel a little sleepy during the day.",
      "Should I continue with the same dose, or do I need to change it? Thank you."
    ]
  },
  {
    id: "wr-med-17", cat: "medical", level: "B1", type: "Description", minWords: 80,
    title: "How to Stay Healthy in Winter",
    prompt: "Write about simple things people can do to stay healthy during the cold winter months.",
    tips: ["In winter, it is important to ...", "Firstly, you should ...", "Eating ... helps the body ...", "Don't forget to ...", "Finally, ..."],
    sample: [
      "In winter, it is very important to take good care of our health.",
      "Firstly, you should wear warm clothes and keep your home at a comfortable temperature.",
      "Eating fruit and vegetables rich in vitamins helps the body fight colds and flu.",
      "Don't forget to wash your hands often and drink warm fluids.",
      "Finally, getting enough sleep keeps the immune system strong."
    ]
  },
  {
    id: "wr-med-18", cat: "medical", level: "B1", type: "Email", minWords: 80,
    title: "Email: Asking About Test Results",
    prompt: "Write an email to a clinic asking about your blood test results and what you should do next.",
    tips: ["I am writing to ask about ...", "I did the test on ...", "Could you please tell me ...?", "Should I make an appointment to ...?", "Thank you in advance."],
    sample: [
      "Dear City Clinic,",
      "I am writing to ask about the results of my blood test, which I took last Monday.",
      "Could you please tell me if the results are ready and whether everything is normal?",
      "Should I make an appointment to discuss them with the doctor?",
      "Thank you in advance for your help. Best regards, Bek."
    ]
  },
  {
    id: "wr-med-19", cat: "medical", level: "B2", type: "Essay", minWords: 120,
    title: "The Importance of Regular Check-ups",
    prompt: "Write an essay explaining why regular medical check-ups are important, even for healthy people.",
    tips: ["Many people only see a doctor when ...", "However, regular check-ups ...", "For example, ...", "In addition, ...", "In conclusion, ..."],
    sample: [
      "Many people only visit a doctor when they already feel ill, but this is not the best approach.",
      "Regular check-ups are important because they can find health problems before they become serious.",
      "For example, conditions like high blood pressure or diabetes often have no clear symptoms at first.",
      "In addition, a check-up gives people useful advice about diet, exercise and lifestyle.",
      "In conclusion, regular check-ups save both lives and money, so everyone should have them."
    ]
  },
  {
    id: "wr-med-20", cat: "medical", level: "B1", type: "Advice", minWords: 70,
    title: "Advice for Better Sleep",
    prompt: "A friend cannot sleep well at night. Write a message giving practical advice to help them sleep better.",
    tips: ["I'm sorry to hear that you ...", "You should try to ...", "Avoid ... before bed.", "It also helps to ...", "I hope you sleep better soon!"],
    sample: [
      "Hi, I'm sorry to hear that you can't sleep well these days.",
      "You should try to go to bed and wake up at the same time every day.",
      "Avoid coffee, heavy meals and your phone before bed.",
      "It also helps to keep your room dark, quiet and a little cool.",
      "I hope these tips help and you sleep better soon!"
    ]
  },
  {
    id: "wr-med-21", cat: "medical", level: "B1", type: "Instructions", minWords: 70,
    title: "How to Wash Your Hands Properly",
    prompt: "Write clear step-by-step instructions explaining how to wash your hands properly.",
    tips: ["First, ...", "Then, use soap and ...", "Make sure you ...", "Rinse ...", "Finally, ..."],
    sample: [
      "Washing your hands properly is one of the best ways to stay healthy.",
      "First, wet your hands with clean, running water.",
      "Then, apply soap and rub your hands together for at least twenty seconds.",
      "Make sure you clean between your fingers and under your nails.",
      "Finally, rinse well with water and dry your hands with a clean towel."
    ]
  },
  {
    id: "wr-med-22", cat: "medical", level: "B2", type: "Report", minWords: 110,
    title: "Diabetes: Causes and Management",
    prompt: "Write a short report explaining what diabetes is, its main symptoms, and how it can be managed.",
    tips: ["Diabetes is a condition in which ...", "The main symptoms include ...", "It can be caused by ...", "To manage it, patients should ...", "With good care, ..."],
    sample: [
      "Diabetes is a chronic condition in which the body cannot control the level of sugar in the blood.",
      "The main symptoms include extreme thirst, frequent urination, tiredness and slow-healing wounds.",
      "It can be linked to genetics, diet and lifestyle, especially being overweight.",
      "To manage diabetes, patients should eat healthily, exercise, check their blood sugar and take medicine.",
      "With good care, people with diabetes can live long and active lives."
    ]
  },
  {
    id: "wr-med-23", cat: "medical", level: "B2", type: "Essay", minWords: 120,
    title: "Should People Do More Sport?",
    prompt: "Many people do little physical activity. Write an essay arguing why people should do more sport.",
    tips: ["Nowadays, many people ...", "Firstly, sport ...", "Secondly, ...", "Some people say they have no time, but ...", "To sum up, ..."],
    sample: [
      "Nowadays, many people spend most of their day sitting at work or in front of screens.",
      "Firstly, regular sport strengthens the heart and muscles and helps control body weight.",
      "Secondly, physical activity reduces stress and improves our mood and sleep.",
      "Some people say they have no time, but even thirty minutes of walking a day makes a difference.",
      "To sum up, doing more sport is one of the simplest ways to improve our health and happiness."
    ]
  },
  {
    id: "wr-med-24", cat: "medical", level: "C1", type: "Essay", minWords: 150,
    title: "The Role of Prevention in Healthcare",
    prompt: "Discuss why prevention is often better than cure in healthcare. Give examples and your opinion.",
    tips: ["It is often said that ...", "On a personal level, ...", "On a national level, ...", "Critics might argue ... , yet ...", "Ultimately, ..."],
    sample: [
      "It is often said that prevention is better than cure, and in healthcare this is especially true.",
      "On a personal level, simple habits such as a healthy diet, exercise and vaccination can prevent many diseases.",
      "On a national level, prevention reduces the pressure on hospitals and saves enormous amounts of money.",
      "Critics might argue that prevention programmes are expensive, yet the long-term savings are far greater.",
      "Ultimately, investing in prevention leads to healthier people and a stronger, more sustainable health system."
    ]
  },
  {
    id: "wr-med-25", cat: "medical", level: "B1", type: "Description", minWords: 80,
    title: "A Person Who Helped Me When I Was Ill",
    prompt: "Describe a time when someone (a doctor, nurse or family member) helped you when you were ill.",
    tips: ["I remember when I was ill with ...", "At that time, ... helped me.", "He / She ...", "What I appreciated most was ...", "Thanks to them, ..."],
    sample: [
      "I remember when I was ill with a high fever for several days.",
      "At that time, my mother took care of me day and night.",
      "She brought me warm drinks, gave me my medicine on time and stayed by my side.",
      "What I appreciated most was her patience and kindness.",
      "Thanks to her care, I recovered quickly and felt loved."
    ]
  },
  {
    id: "wr-med-26", cat: "medical", level: "A2", type: "Email", minWords: 50,
    title: "Telling Your Teacher You Are Sick",
    prompt: "Write a short email to your teacher to say you are ill and cannot come to class.",
    tips: ["Dear Teacher,", "I am writing to tell you that ...", "I have ... and the doctor said ...", "I will miss ...", "I will catch up on ..."],
    sample: [
      "Dear Teacher,",
      "I am writing to tell you that I am ill today and cannot come to class.",
      "I have a high fever, and the doctor said I should rest at home for two days.",
      "I am sorry to miss the lesson, and I will catch up on the homework as soon as I am better."
    ]
  },
  {
    id: "wr-med-27", cat: "medical", level: "B2", type: "Opinion", minWords: 110,
    title: "Is Technology Good for Our Health?",
    prompt: "Give your opinion: does modern technology (phones, computers) help or harm our health?",
    tips: ["Modern technology is part of ...", "On the positive side, ...", "On the other hand, ...", "In my opinion, the key is ...", "To conclude, ..."],
    sample: [
      "Modern technology has become a central part of our daily lives.",
      "On the positive side, health apps and online information help people track their fitness and learn about diseases.",
      "On the other hand, spending too long on screens can harm our eyes, sleep and posture.",
      "In my opinion, the key is balance: we should use technology wisely and take regular breaks.",
      "To conclude, technology can be good for our health if we control it instead of letting it control us."
    ]
  },
  {
    id: "wr-med-28", cat: "medical", level: "B1", type: "Story", minWords: 90,
    title: "My First Day at the Hospital",
    prompt: "Imagine your first day working or studying at a hospital. Describe what happened and how you felt.",
    tips: ["On my first day at the hospital, I felt ...", "In the morning, I ...", "Then ...", "The most interesting moment was ...", "By the end of the day, ..."],
    sample: [
      "On my first day at the hospital, I felt both excited and a little nervous.",
      "In the morning, a senior nurse showed me around the different departments.",
      "Then I watched how the staff cared for patients with such patience and skill.",
      "The most interesting moment was seeing a doctor calmly explain a treatment to a worried family.",
      "By the end of the day, I felt sure that I had chosen the right path."
    ]
  },
  {
    id: "wr-med-29", cat: "medical", level: "B2", type: "Letter", minWords: 100,
    title: "A Letter Encouraging a Sick Friend",
    prompt: "A friend is in hospital after an operation. Write a letter to encourage and support them.",
    tips: ["Dear ...,", "I was so sorry to hear that ...", "I am sure that ...", "Remember that ...", "Get well soon, and ..."],
    sample: [
      "Dear Sardor,",
      "I was so sorry to hear that you had to have an operation, but I am glad it went well.",
      "I am sure that with rest and the great care of the doctors, you will recover quickly.",
      "Remember that all your friends are thinking of you and waiting to see you again.",
      "Get well soon, and please let me know if there is anything I can do to help. Your friend, Jasur."
    ]
  },
  {
    id: "wr-med-30", cat: "medical", level: "C1", type: "Essay", minWords: 150,
    title: "Access to Healthcare for Everyone",
    prompt: "Discuss why access to good healthcare is important for a society and how it can be improved.",
    tips: ["Access to healthcare is a ...", "First of all, ...", "Furthermore, ...", "One way to improve it is ...", "In the final analysis, ..."],
    sample: [
      "Access to good healthcare is one of the most important signs of a fair and developed society.",
      "First of all, when everyone can see a doctor, diseases are treated early and spread less.",
      "Furthermore, healthy citizens can work, study and contribute more to their country.",
      "One way to improve access is to build more clinics in rural areas and train more medical staff.",
      "In the final analysis, investing in healthcare for everyone benefits not only individuals but the whole nation."
    ]
  },
  {
    id: "wr-med-31", cat: "medical", level: "A2", type: "Description", minWords: 50,
    title: "My Healthy Habits",
    prompt: "Write about the healthy habits you have and the ones you would like to start.",
    tips: ["I try to be healthy by ...", "Every day, I ...", "I usually eat ...", "I would like to start ...", "I think this is important because ..."],
    sample: [
      "I try to stay healthy with a few simple habits.",
      "Every day, I drink a lot of water and walk to school instead of taking the bus.",
      "I usually eat fruit for breakfast and try not to eat too many sweets.",
      "I would like to start doing morning exercises and sleeping earlier.",
      "I think this is important because good habits keep my body and mind strong."
    ]
  },
  {
    id: "wr-med-32", cat: "medical", level: "B1", type: "Email", minWords: 80,
    title: "Email: Booking a Dental Appointment",
    prompt: "Write an email to a dental clinic to book an appointment and describe your problem.",
    tips: ["I would like to book ...", "I have had a toothache ...", "I am available on ...", "Could you also tell me ...?", "I look forward to ..."],
    sample: [
      "Dear Smile Dental Clinic,",
      "I would like to book an appointment with a dentist as soon as possible.",
      "I have had a toothache on the left side for three days, and it hurts when I eat.",
      "I am available on Wednesday and Friday afternoons.",
      "Could you also tell me how much a check-up costs? I look forward to your reply."
    ]
  },
  {
    id: "wr-med-33", cat: "medical", level: "B2", type: "Report", minWords: 110,
    title: "The Benefits of Drinking Water",
    prompt: "Write a short report about why drinking enough water is important for the body.",
    tips: ["Water is essential because ...", "Firstly, it helps ...", "Secondly, ...", "When we do not drink enough, ...", "Experts recommend ..."],
    sample: [
      "Water is essential for the human body, which is made up of more than half water.",
      "Firstly, it helps carry nutrients to cells and removes waste from the body.",
      "Secondly, water controls body temperature and keeps the skin and joints healthy.",
      "When we do not drink enough, we may feel tired, dizzy and unable to concentrate.",
      "Experts recommend drinking around six to eight glasses of water every day."
    ]
  },
  {
    id: "wr-med-34", cat: "medical", level: "B1", type: "Opinion", minWords: 80,
    title: "Junk Food in Schools",
    prompt: "Should schools stop selling junk food? Write your opinion with reasons.",
    tips: ["In many schools, students can buy ...", "I believe that ...", "One reason is ...", "Another reason is ...", "Instead, schools could ..."],
    sample: [
      "In many schools, students can easily buy chips, sweets and sugary drinks.",
      "I believe that schools should stop selling this kind of junk food.",
      "One reason is that too much sugar and fat can cause obesity and harm children's health.",
      "Another reason is that unhealthy food makes it harder for students to concentrate.",
      "Instead, schools could offer fruit, sandwiches and water at fair prices."
    ]
  },
  {
    id: "wr-med-35", cat: "medical", level: "C1", type: "Essay", minWords: 150,
    title: "Can Stress Make Us Physically Ill?",
    prompt: "Discuss the connection between stress and physical health. Can the mind affect the body?",
    tips: ["For a long time, people separated ...", "However, research shows that ...", "For instance, ...", "Moreover, ...", "In conclusion, ..."],
    sample: [
      "For a long time, people thought of mental and physical health as two separate things.",
      "However, modern research clearly shows that the mind and body are deeply connected.",
      "For instance, long-term stress can raise blood pressure, weaken the immune system and cause headaches.",
      "Moreover, people under constant stress often sleep badly and may turn to unhealthy habits.",
      "In conclusion, taking care of our mental health is essential, because a calm mind helps create a healthy body."
    ]
  }
);


/* ===== GENERAL 16-35 (top-up to 35) ===== */
window.ME70_WRITING.push(
  {
    id: "wr-gen-16", cat: "general", level: "A2", type: "Description", minWords: 50,
    title: "My House",
    prompt: "Describe your house or apartment. How many rooms are there? Which is your favourite?",
    tips: ["I live in a ...", "There are ... rooms.", "My favourite room is ...", "In the living room, there is ...", "I like my home because ..."],
    sample: [
      "I live in a small but cosy apartment with my family.",
      "There are three rooms: a living room, a bedroom and a kitchen.",
      "My favourite room is the living room, where we watch films together.",
      "In the living room, there is a sofa, a table and a big window.",
      "I like my home because it is warm and full of happy memories."
    ]
  },
  {
    id: "wr-gen-17", cat: "general", level: "A2", type: "Note", minWords: 40,
    title: "A Message to a Friend",
    prompt: "Write a short message to a friend to invite them to study English together.",
    tips: ["Hi ...,", "Would you like to ...?", "We could meet at ...", "It will help us to ...", "Let me know!"],
    sample: [
      "Hi Aziz,",
      "Would you like to study English together this week?",
      "We could meet at the library on Saturday afternoon.",
      "I think practising together will help us improve faster.",
      "Let me know if you are free!"
    ]
  },
  {
    id: "wr-gen-18", cat: "general", level: "B1", type: "Description", minWords: 80,
    title: "My Favourite Season",
    prompt: "Describe your favourite season. What is the weather like and what do you do?",
    tips: ["My favourite season is ...", "During this season, the weather is ...", "I love it because ...", "I usually ...", "The best thing is ..."],
    sample: [
      "My favourite season is spring, when nature comes back to life.",
      "During this season, the weather is warm and the trees are full of flowers.",
      "I love it because the days are longer and everything looks fresh and green.",
      "I usually go for long walks in the park and spend time outside with friends.",
      "The best thing about spring is the feeling of a new beginning."
    ]
  },
  {
    id: "wr-gen-19", cat: "general", level: "B1", type: "Email", minWords: 80,
    title: "Email: Applying for a Course",
    prompt: "Write an email to a language school asking for information about an English course.",
    tips: ["I am interested in ...", "Could you please send me information about ...?", "I would like to know the price and ...", "I am a ... level student.", "I look forward to ..."],
    sample: [
      "Dear Sir or Madam,",
      "I am interested in joining an English course at your school.",
      "Could you please send me information about the timetable, levels and prices?",
      "I am an intermediate level student and would like to improve my speaking.",
      "I look forward to hearing from you. Best regards, Madina."
    ]
  },
  {
    id: "wr-gen-20", cat: "general", level: "B1", type: "Story", minWords: 90,
    title: "An Unforgettable Trip",
    prompt: "Write a story about a trip you will never forget. Where did you go and what happened?",
    tips: ["A few years ago, I went to ...", "We travelled by ...", "When we arrived, ...", "The most exciting part was ...", "I will never forget ..."],
    sample: [
      "A few years ago, my family and I went on a trip to the mountains.",
      "We travelled by car for several hours along beautiful, winding roads.",
      "When we arrived, we set up a tent near a clear, cold river.",
      "The most exciting part was climbing to the top of a hill and watching the sunrise.",
      "I will never forget the fresh air and the peaceful sound of nature."
    ]
  },
  {
    id: "wr-gen-21", cat: "general", level: "B2", type: "Essay", minWords: 120,
    title: "The Advantages of Learning Foreign Languages",
    prompt: "Write an essay about the benefits of learning foreign languages in today's world.",
    tips: ["In our globalised world, ...", "Firstly, knowing a foreign language ...", "Secondly, ...", "Moreover, ...", "In conclusion, ..."],
    sample: [
      "In our globalised world, the ability to speak foreign languages is more valuable than ever.",
      "Firstly, knowing a foreign language opens many doors for study and work abroad.",
      "Secondly, it allows us to meet new people and understand different cultures.",
      "Moreover, learning languages improves memory and makes the brain more flexible.",
      "In conclusion, every language we learn adds a new window through which we can see the world."
    ]
  },
  {
    id: "wr-gen-22", cat: "general", level: "B2", type: "Opinion", minWords: 110,
    title: "Is Online Learning as Good as Classroom Learning?",
    prompt: "Give your opinion: is studying online as effective as studying in a classroom?",
    tips: ["In recent years, online learning ...", "On the one hand, ...", "On the other hand, ...", "Personally, I think ...", "All in all, ..."],
    sample: [
      "In recent years, online learning has become very popular all over the world.",
      "On the one hand, it is flexible, cheaper and lets people study from anywhere.",
      "On the other hand, students may feel lonely and find it harder to stay motivated.",
      "Personally, I think online learning is excellent for theory, but classrooms are better for practice and communication.",
      "All in all, a mix of both seems to be the most effective way to learn."
    ]
  },
  {
    id: "wr-gen-23", cat: "general", level: "B2", type: "Letter", minWords: 110,
    title: "A Thank-You Letter to a Teacher",
    prompt: "Write a letter to a teacher who helped you a lot, thanking them for their support.",
    tips: ["Dear ...,", "I am writing to thank you for ...", "Your lessons ...", "I especially remember ...", "With gratitude, ..."],
    sample: [
      "Dear Mr. Karimov,",
      "I am writing to thank you for everything you taught me during the last year.",
      "Your lessons were always interesting, and you never gave up on any student.",
      "I especially remember how you encouraged me when I was afraid to speak English.",
      "Thanks to you, I now feel confident and love learning. With gratitude, your student Aziza."
    ]
  },
  {
    id: "wr-gen-24", cat: "general", level: "B2", type: "Essay", minWords: 120,
    title: "Money Cannot Buy Happiness — Do You Agree?",
    prompt: "Some people say money cannot buy happiness. Do you agree? Give your reasons.",
    tips: ["There is an old saying that ...", "On the one hand, money ...", "On the other hand, ...", "From my point of view, ...", "To sum up, ..."],
    sample: [
      "There is an old saying that money cannot buy happiness, and I largely agree with it.",
      "On the one hand, money is necessary for food, shelter, health and education.",
      "On the other hand, the happiest moments in life often come from family, friendship and good health.",
      "From my point of view, money is a useful tool, but it is not the true source of joy.",
      "To sum up, a balanced life with both enough money and strong relationships brings real happiness."
    ]
  },
  {
    id: "wr-gen-25", cat: "general", level: "B1", type: "Description", minWords: 80,
    title: "A Person I Admire",
    prompt: "Describe a person you admire. Who are they and why do you respect them?",
    tips: ["The person I admire most is ...", "He / She is ...", "What I admire about them is ...", "For example, ...", "I hope to be like them because ..."],
    sample: [
      "The person I admire most is my grandfather.",
      "He is a calm, wise and hard-working man who has helped many people in his life.",
      "What I admire about him is that he never complains and always stays positive.",
      "For example, even after difficult times, he found a way to support our whole family.",
      "I hope to be like him because he shows that kindness and patience are true strengths."
    ]
  },
  {
    id: "wr-gen-26", cat: "general", level: "A2", type: "Description", minWords: 50,
    title: "My Weekend",
    prompt: "Describe what you usually do at the weekend.",
    tips: ["At the weekend, I usually ...", "On Saturday, I ...", "On Sunday, I ...", "I like the weekend because ...", "Sometimes I also ..."],
    sample: [
      "At the weekend, I usually relax and spend time with my family.",
      "On Saturday, I clean my room, do some shopping and meet my friends.",
      "On Sunday, I rest at home, read a book and prepare for the new week.",
      "I like the weekend because I have more free time.",
      "Sometimes I also go to the park or watch a good film."
    ]
  },
  {
    id: "wr-gen-27", cat: "general", level: "B1", type: "Opinion", minWords: 80,
    title: "Living in a Big City",
    prompt: "Would you prefer to live in a big city or a small town? Explain your choice.",
    tips: ["I would prefer to live in ...", "The main reason is ...", "In a big city, you can ...", "However, ...", "Overall, ..."],
    sample: [
      "I would prefer to live in a big city, at least while I am young.",
      "The main reason is that cities offer many opportunities for work and study.",
      "In a big city, you can find good hospitals, universities, shops and entertainment.",
      "However, cities can be noisy and crowded, which is sometimes tiring.",
      "Overall, I believe the advantages of city life are greater for my future plans."
    ]
  },
  {
    id: "wr-gen-28", cat: "general", level: "B2", type: "Essay", minWords: 120,
    title: "The Impact of the Internet on Our Lives",
    prompt: "Write an essay about how the internet has changed the way we live, work and learn.",
    tips: ["The internet has transformed ...", "In terms of work, ...", "When it comes to learning, ...", "Nevertheless, ...", "In conclusion, ..."],
    sample: [
      "The internet has completely transformed the way we live, work and communicate.",
      "In terms of work, many people can now do their jobs from home and reach clients worldwide.",
      "When it comes to learning, students can access free courses, books and videos at any time.",
      "Nevertheless, the internet also brings problems such as false information and too much screen time.",
      "In conclusion, the internet is a powerful tool that improves our lives when we use it responsibly."
    ]
  },
  {
    id: "wr-gen-29", cat: "general", level: "C1", type: "Essay", minWords: 150,
    title: "Should Everyone Go to University?",
    prompt: "Discuss whether university education is necessary for everyone or whether other paths are equally valuable.",
    tips: ["It is often assumed that ...", "On the one hand, a degree ...", "On the other hand, ...", "Furthermore, ...", "In the final analysis, ..."],
    sample: [
      "It is often assumed that a university degree is the only path to a successful career.",
      "On the one hand, university provides deep knowledge and is essential for many professions, such as medicine.",
      "On the other hand, many successful people have built careers through practical skills and experience instead.",
      "Furthermore, vocational training and starting a business can be just as valuable as a degree.",
      "In the final analysis, university is right for many but not for everyone; what matters most is finding the path that fits each person's goals."
    ]
  },
  {
    id: "wr-gen-30", cat: "general", level: "B1", type: "Story", minWords: 90,
    title: "A Time I Helped Someone",
    prompt: "Write a story about a time you helped someone. What happened and how did you feel?",
    tips: ["One day, I saw ...", "The person needed ...", "So I decided to ...", "After I helped, ...", "I felt ... because ..."],
    sample: [
      "One day, on my way home, I saw an elderly woman struggling with heavy bags.",
      "She needed to cross a busy street but looked tired and worried.",
      "So I decided to help her carry the bags and walk with her safely to her door.",
      "After I helped, she smiled and thanked me warmly.",
      "I felt very happy because such a small action made a real difference to someone's day."
    ]
  },
  {
    id: "wr-gen-31", cat: "general", level: "A2", type: "Email", minWords: 50,
    title: "Inviting a Friend to Dinner",
    prompt: "Write a short email inviting a friend to have dinner at your home.",
    tips: ["Hi ...,", "Would you like to come to ...?", "I will cook ...", "Please come at ...", "Let me know if ..."],
    sample: [
      "Hi Dilnoza,",
      "Would you like to come to my home for dinner this Friday?",
      "I will cook some traditional dishes that I think you will love.",
      "Please come at around seven o'clock in the evening.",
      "Let me know if you can make it. I hope to see you there!"
    ]
  },
  {
    id: "wr-gen-32", cat: "general", level: "B1", type: "Description", minWords: 80,
    title: "My Dream Job",
    prompt: "Describe your dream job. What is it and why do you want it?",
    tips: ["My dream job is to become a ...", "I want this job because ...", "In this job, I would ...", "To reach this goal, I need to ...", "I believe I can ..."],
    sample: [
      "My dream job is to become a doctor and help people get better.",
      "I want this job because I care about people and find the human body fascinating.",
      "In this job, I would examine patients, treat illnesses and give health advice.",
      "To reach this goal, I need to study hard and gain a lot of experience.",
      "I believe I can achieve my dream with patience and dedication."
    ]
  },
  {
    id: "wr-gen-33", cat: "general", level: "B2", type: "Opinion", minWords: 110,
    title: "Are Books Better Than Films?",
    prompt: "Some people prefer books, others prefer films of the same story. What is your opinion?",
    tips: ["This is a popular debate ...", "Those who prefer books say ...", "Film lovers argue that ...", "In my opinion, ...", "To conclude, ..."],
    sample: [
      "Whether books are better than films is a debate that many people enjoy.",
      "Those who prefer books say that reading lets the imagination create the characters and scenes.",
      "Film lovers argue that films are faster, more visual and easier to enjoy with friends.",
      "In my opinion, books usually give a deeper experience, but films can bring a story to life beautifully.",
      "To conclude, both have their own magic, and the best choice depends on the person and the moment."
    ]
  },
  {
    id: "wr-gen-34", cat: "general", level: "B2", type: "Letter", minWords: 110,
    title: "A Letter to Your Future Self",
    prompt: "Write a letter to yourself ten years from now. What do you hope to have achieved?",
    tips: ["Dear future me,", "By the time you read this, I hope ...", "I wonder if you have ...", "Please remember to ...", "With hope, ..."],
    sample: [
      "Dear future me,",
      "By the time you read this, I hope you have finished your studies and found a job you love.",
      "I wonder if you have travelled to new countries and learned to speak English fluently.",
      "Please remember to stay kind, take care of your health and never stop learning.",
      "Most of all, I hope you are happy and proud of how far you have come. With hope, your younger self."
    ]
  },
  {
    id: "wr-gen-35", cat: "general", level: "C1", type: "Essay", minWords: 150,
    title: "How Social Media Affects Young People",
    prompt: "Discuss the effects of social media on young people, both positive and negative.",
    tips: ["Social media plays a huge role in ...", "On the positive side, ...", "However, there are serious concerns ...", "For instance, ...", "Ultimately, ..."],
    sample: [
      "Social media plays a huge role in the lives of young people today.",
      "On the positive side, it helps them stay connected, express themselves and learn about the world.",
      "However, there are serious concerns about its effects on mental health and self-esteem.",
      "For instance, constantly comparing themselves to others online can make young people feel anxious or unhappy.",
      "Ultimately, social media is neither purely good nor bad; young people need guidance to use it in a balanced and healthy way."
    ]
  }
);



/* ===== BATCH: extra writing tasks (reach 100) ===== */
window.ME70_WRITING.push(
  { id: "wr-med-36", cat: "medical", level: "A2", type: "Note", minWords: 40,
    title: "A Note to the Pharmacist",
    prompt: "Write a short note asking the pharmacist for medicine for a cough and how to take it.",
    tips: ["Hello,", "I have a bad cough.", "Could you give me something for it?", "How many times a day should I take it?", "Thank you."],
    sample: ["Hello,", "I have had a bad cough for three days.", "Could you please give me some syrup for it?", "How many times a day should I take it, and should I take it after food? Thank you very much."] },
  { id: "wr-med-37", cat: "medical", level: "A2", type: "Description", minWords: 50,
    title: "My Daily Health Routine",
    prompt: "Describe what you do every day to stay healthy.",
    tips: ["Every morning I ...", "I eat ... for breakfast.", "I drink ... glasses of water.", "I do ... exercise.", "At night I sleep for ... hours."],
    sample: ["Every morning I wake up early and drink a glass of water.", "I eat a simple breakfast with bread, eggs and fruit.", "During the day I try to walk and drink enough water.", "At night I go to bed early and sleep for about eight hours."] },
  { id: "wr-med-38", cat: "medical", level: "B1", type: "Email", minWords: 80,
    title: "Asking for Sick Leave",
    prompt: "Write an email to your manager to say you are ill and need two days off. Explain briefly and apologise.",
    tips: ["Dear Mr/Ms ...,", "I am writing to inform you that ...", "I have a fever and the doctor advised ...", "I will need two days off.", "I apologise for any inconvenience.", "Kind regards,"],
    sample: ["Dear Mr Karimov,", "I am writing to inform you that I am unwell today. I have a high fever and a bad headache, and the doctor has advised me to rest.", "For this reason, I will need two days off work to recover. I will check my email when possible and finish my tasks as soon as I return.", "I apologise for any inconvenience this may cause. Kind regards, Aziz."] },
  { id: "wr-med-39", cat: "medical", level: "B1", type: "Description", minWords: 90,
    title: "A Healthy Habit I Want to Build",
    prompt: "Write about one healthy habit you would like to build and how you will do it.",
    tips: ["One habit I want to build is ...", "It is important because ...", "I will start by ...", "I plan to do it every ...", "I hope that after a few weeks ..."],
    sample: ["One healthy habit I would like to build is exercising regularly.", "It is important because exercise keeps the heart strong, improves mood and helps me sleep better.", "I will start by walking for thirty minutes after dinner every evening, since walking is easy and free.", "Later, I plan to add some simple exercises at home. I hope that after a few weeks it will become a normal part of my day."] },
  { id: "wr-med-40", cat: "medical", level: "B2", type: "Opinion", minWords: 120,
    title: "Should Sugary Drinks Be Taxed?",
    prompt: "Some governments tax sugary drinks to improve public health. Write your opinion, with reasons.",
    tips: ["In my opinion, ...", "On the one hand, ...", "On the other hand, ...", "One strong argument is ...", "To sum up, ..."],
    sample: ["In my opinion, taxing sugary drinks is a sensible step to improve public health.", "On the one hand, these drinks contain large amounts of sugar and are linked to obesity, tooth decay and type 2 diabetes. A tax can discourage people from buying them and encourage healthier choices.", "On the other hand, some argue that a tax is unfair to poorer families and that education would be more effective. There is some truth in this, so the money raised should be spent on health programmes.", "To sum up, I believe a sugar tax, combined with good education, can reduce disease and benefit society as a whole."] },
  { id: "wr-med-41", cat: "medical", level: "B2", type: "Essay", minWords: 130,
    title: "The Importance of Mental Health",
    prompt: "Write an essay explaining why mental health is as important as physical health.",
    tips: ["Mental health refers to ...", "Firstly, ...", "Secondly, ...", "For example, ...", "In conclusion, ..."],
    sample: ["Mental health refers to our emotional and psychological well-being, and it deserves the same attention as physical health.", "Firstly, the mind and body are closely connected. Long-term stress or depression can cause physical symptoms such as headaches, poor sleep and a weakened immune system.", "Secondly, good mental health allows people to work, study and enjoy relationships. When it is ignored, problems often grow worse and become harder to treat.", "For example, someone who hides their anxiety may eventually struggle to function at all. In conclusion, supporting mental health through open conversation and professional care is essential for a healthy and balanced life."] },
  { id: "wr-med-42", cat: "medical", level: "C1", type: "Report", minWords: 160,
    title: "A Report on Hospital Hygiene",
    prompt: "Imagine you inspected a hospital ward. Write a short report on hygiene standards and recommendations.",
    tips: ["Introduction: The purpose of this report is to ...", "Findings: It was observed that ...", "However, ...", "Recommendations: It is recommended that ...", "Conclusion: Overall, ..."],
    sample: ["The purpose of this report is to assess hygiene standards on the general ward and to suggest improvements.", "Overall, the ward was clean and well organised. Staff washed their hands between patients, and waste was correctly separated. Hand-sanitiser dispensers were available at every bed.", "However, several issues were noted. Some dispensers were empty, and a small number of staff did not wear gloves consistently when handling dressings. Storage areas were occasionally cluttered.", "It is therefore recommended that dispensers be checked twice daily, that regular refresher training on glove use be provided, and that storage be reorganised. Overall, standards are good but require minor, consistent attention to remain safe."] },
  { id: "wr-med-43", cat: "medical", level: "A2", type: "Description", minWords: 50,
    title: "My Last Cold",
    prompt: "Write about the last time you had a cold. How did you feel and what did you do?",
    tips: ["A few weeks ago I had a cold.", "I had a ... and a ...", "I felt ...", "I drank ... and rested.", "After a few days I ..."],
    sample: ["A few weeks ago I caught a cold.", "I had a runny nose, a sore throat and a slight headache.", "I felt tired and weak, so I stayed at home.", "I drank a lot of warm tea, took some medicine and rested in bed. After three or four days I felt much better."] },
  { id: "wr-med-44", cat: "medical", level: "B1", type: "Letter", minWords: 90,
    title: "Advice to a Sick Friend",
    prompt: "Write a letter to a friend who is ill, giving advice on how to get better.",
    tips: ["Dear ...,", "I was sorry to hear that ...", "You should ...", "It is also a good idea to ...", "Take care and get well soon,"],
    sample: ["Dear Sardor,", "I was sorry to hear that you have the flu and are stuck in bed.", "You should rest as much as possible and drink plenty of warm fluids, such as tea with honey and lemon.", "It is also a good idea to take the medicine the doctor gave you and to keep your room warm. Please do not return to work too early. Take care and get well soon, Jamshid."] },
  { id: "wr-med-45", cat: "medical", level: "B2", type: "Opinion", minWords: 120,
    title: "Is Modern Life Bad for Our Health?",
    prompt: "Some people think modern life harms our health. Do you agree? Give your opinion with examples.",
    tips: ["It is often said that ...", "I partly agree because ...", "For instance, ...", "However, modern life also ...", "In conclusion, ..."],
    sample: ["It is often said that modern life is bad for our health, and I partly agree with this view.", "On the negative side, many people sit for long hours, eat fast food and spend too much time on screens. This can lead to obesity, stress and poor sleep, which are serious problems.", "However, modern life also brings clear benefits. Medicine has advanced enormously, clean water is widely available, and technology allows us to learn about healthy habits easily.", "In conclusion, modern life has real risks, but with sensible choices such as exercise and a balanced diet, we can enjoy its benefits while protecting our health."] },
  { id: "wr-med-46", cat: "medical", level: "A2", type: "Note", minWords: 40,
    title: "Reminder for Medicine",
    prompt: "Write a short note to remind a family member how and when to take their medicine.",
    tips: ["Dear ...,", "Please remember to take ...", "Take it ... times a day.", "Take it after ...", "Do not forget!"],
    sample: ["Dear Dad,", "Please remember to take your blood pressure tablet every morning.", "Take one tablet a day, after breakfast, with a glass of water.", "Do not skip it, even if you feel well. I will call you to check. Love, Nodira."] },
  { id: "wr-med-47", cat: "medical", level: "B1", type: "Description", minWords: 90,
    title: "A Person Who Works in Medicine",
    prompt: "Describe a doctor, nurse or other health worker you know or admire.",
    tips: ["The person I want to describe is ...", "He/She works as a ...", "Every day he/she ...", "I admire this person because ...", "In the future, I hope ..."],
    sample: ["The person I want to describe is my aunt, who works as a nurse in a children's hospital.", "Every day she cares for sick children, gives them medicine and comforts worried parents.", "Her job is tiring and she often works at night, but she is always patient and kind.", "I admire her because she helps people during their most difficult moments. In the future, I hope to be as caring and hard-working as she is."] },
  { id: "wr-med-48", cat: "medical", level: "B2", type: "Email", minWords: 110,
    title: "Requesting Medical Records",
    prompt: "Write a polite email to a clinic asking for a copy of your medical records and explaining why.",
    tips: ["Dear Sir or Madam,", "I am writing to request ...", "The reason is that ...", "I would be grateful if you could ...", "Please let me know if you need ...", "Yours faithfully,"],
    sample: ["Dear Sir or Madam,", "I am writing to request a copy of my medical records from your clinic.", "The reason is that I am moving to another city and my new doctor has asked for my full medical history in order to continue my treatment safely.", "I would be grateful if you could send the records by email or post at your earliest convenience. Please let me know if you need any documents to confirm my identity. Yours faithfully, Kamola Yusupova."] },
  { id: "wr-med-49", cat: "medical", level: "C1", type: "Essay", minWords: 170,
    title: "The Role of Prevention in Healthcare",
    prompt: "Write an essay arguing whether healthcare systems should focus more on prevention than on treatment.",
    tips: ["Introduction: ...", "On the one hand, prevention ...", "On the other hand, treatment ...", "A balanced approach ...", "In conclusion, ..."],
    sample: ["Healthcare systems around the world face rising costs and ageing populations, which raises an important question: should they focus more on prevention than on treatment?",
      "On the one hand, prevention offers enormous benefits. Vaccination, health education and early screening can stop diseases before they develop, saving both lives and money. Encouraging exercise and good nutrition reduces the burden of chronic illnesses such as diabetes and heart disease.",
      "On the other hand, treatment can never be abandoned. People will always fall ill or have accidents, and a strong system of hospitals and skilled staff is essential to care for them.",
      "A balanced approach is therefore wisest: investing heavily in prevention to reduce future demand, while maintaining excellent treatment for those who need it. In conclusion, prevention should receive far greater priority than it does today, but not at the expense of high-quality care."] },
  { id: "wr-med-50", cat: "medical", level: "B1", type: "Story", minWords: 100,
    title: "A Day I Helped Someone",
    prompt: "Write a short story about a time you helped someone who was hurt or unwell.",
    tips: ["One day, ...", "Suddenly, ...", "I quickly ...", "Then ...", "In the end, ..."],
    sample: ["One afternoon, I was walking in the park when I saw an old man fall near a bench.",
      "He had tripped and could not stand up easily. I quickly went to help him and asked if he was all right.",
      "His knee was bleeding a little, so I sat him on the bench and called for help. A woman nearby brought some water and a clean cloth.",
      "Soon he felt calmer and thanked us warmly. In the end, his son arrived and took him home. I felt happy that I had been able to help."] },

  { id: "wr-gen-36", cat: "general", level: "A2", type: "Description", minWords: 50,
    title: "My Best Friend",
    prompt: "Describe your best friend. What do they look like and why do you like them?",
    tips: ["My best friend is called ...", "He/She is ... years old.", "He/She has ... hair and ... eyes.", "We like to ... together.", "I like him/her because ..."],
    sample: ["My best friend is called Laziz.", "He is twenty years old and quite tall, with short black hair and brown eyes.", "We like to play football and watch films together at the weekend.", "I like him because he is honest, funny and always helps me when I have a problem."] },
  { id: "wr-gen-37", cat: "general", level: "A2", type: "Note", minWords: 40,
    title: "An Invitation",
    prompt: "Write a short note inviting a friend to your birthday party.",
    tips: ["Hi ...,", "I am having a party on ...", "It starts at ...", "It will be at ...", "I hope you can come!"],
    sample: ["Hi Dilshod,", "I am having a birthday party on Saturday evening.", "It starts at six o'clock at my house near the park.", "There will be food, music and games. I really hope you can come! Let me know. Your friend, Otabek."] },
  { id: "wr-gen-38", cat: "general", level: "B1", type: "Email", minWords: 80,
    title: "Booking a Table",
    prompt: "Write an email to a restaurant to book a table for a family dinner.",
    tips: ["Dear ...,", "I would like to book a table for ...", "We would like to come on ... at ...", "Could you also ...?", "Thank you, ..."],
    sample: ["Dear Sir or Madam,", "I would like to book a table for six people for a family dinner.", "We would like to come this Friday at seven o'clock in the evening.", "Could you please give us a table near the window if possible? One of our guests uses a wheelchair, so easy access would be helpful. Thank you, Malika."] },
  { id: "wr-gen-39", cat: "general", level: "B1", type: "Description", minWords: 90,
    title: "My Favourite Place",
    prompt: "Describe a place you love to visit and explain why it is special to you.",
    tips: ["My favourite place is ...", "It is located ...", "When I am there, I ...", "I love it because ...", "I always feel ... there."],
    sample: ["My favourite place is a small lake in the mountains near my village.", "It is about an hour from my home, surrounded by tall trees and quiet paths.", "When I am there, I walk along the water, take photographs and sometimes have a picnic with my family.", "I love it because it is peaceful and far from the noise of the city. I always feel calm and happy there, and I return whenever I need to relax."] },
  { id: "wr-gen-40", cat: "general", level: "B2", type: "Opinion", minWords: 120,
    title: "Is It Better to Live in a City or the Countryside?",
    prompt: "Some people prefer city life, others prefer the countryside. Which do you think is better, and why?",
    tips: ["Both ... have advantages.", "City life offers ...", "However, the countryside ...", "Personally, I prefer ...", "In conclusion, ..."],
    sample: ["Both city and countryside life have clear advantages, and the better choice depends on a person's needs.", "City life offers many opportunities: good jobs, hospitals, schools and entertainment are all close by. However, cities can also be crowded, noisy and polluted.", "The countryside, on the other hand, is quieter and cleaner, with fresh air and a slower pace of life. Its disadvantage is that services and jobs may be far away.", "Personally, I prefer the city while I am young because of the chances it offers, but I would like to retire in the countryside. In conclusion, each option suits a different stage of life."] },
  { id: "wr-gen-41", cat: "general", level: "B2", type: "Essay", minWords: 130,
    title: "The Advantages and Disadvantages of the Internet",
    prompt: "Write an essay about the main advantages and disadvantages of the internet.",
    tips: ["The internet has transformed ...", "One major advantage is ...", "Another benefit is ...", "However, there are drawbacks, such as ...", "In conclusion, ..."],
    sample: ["The internet has transformed the way we live, work and communicate, bringing both great benefits and real problems.", "One major advantage is access to information. With a few clicks, people can learn almost anything, study online and find answers instantly. Another benefit is communication: families and colleagues can stay in touch across the world at no cost.", "However, there are drawbacks. Too much time online can harm sleep and concentration, and not all information is true. Privacy and online safety are also serious concerns.", "In conclusion, the internet is a powerful tool that improves our lives, but we must use it wisely and critically to avoid its dangers."] },
  { id: "wr-gen-42", cat: "general", level: "A2", type: "Description", minWords: 50,
    title: "My Typical Day",
    prompt: "Describe what you usually do on a typical day.",
    tips: ["I usually wake up at ...", "In the morning I ...", "In the afternoon I ...", "In the evening I ...", "I go to bed at ..."],
    sample: ["I usually wake up at seven o'clock in the morning.", "After breakfast, I go to work and study English in my free time.", "In the afternoon I have lunch and continue my tasks.", "In the evening I relax with my family, read a little and go to bed at about eleven o'clock."] },
  { id: "wr-gen-43", cat: "general", level: "B1", type: "Letter", minWords: 90,
    title: "A Thank-You Letter",
    prompt: "Write a letter to thank someone who helped you recently.",
    tips: ["Dear ...,", "I am writing to thank you for ...", "It really helped me because ...", "I do not know what I would have done ...", "Thank you again, ..."],
    sample: ["Dear Mr Salim,", "I am writing to thank you for helping me last week when my car broke down on the road.", "You stopped, called a mechanic and even gave me a lift to the station. It really helped me because I had an important meeting that day.", "I do not know what I would have done without your kindness. Thank you again for your generosity. Best wishes, Rustam."] },
  { id: "wr-gen-44", cat: "general", level: "B2", type: "Opinion", minWords: 120,
    title: "Should Students Wear School Uniforms?",
    prompt: "Do you think students should wear school uniforms? Give your opinion with reasons.",
    tips: ["The question of ... is often debated.", "Supporters argue that ...", "On the other hand, critics say ...", "In my view, ...", "To conclude, ..."],
    sample: ["The question of whether students should wear uniforms is often debated by parents and teachers.", "Supporters argue that uniforms create equality, since all students look the same regardless of wealth. They also save time in the morning and give a sense of belonging to the school.", "On the other hand, critics say that uniforms limit self-expression and can be expensive for some families.", "In my view, the benefits outweigh the drawbacks. Uniforms reduce pressure to follow fashion and help students focus on learning. To conclude, I believe schools should require uniforms, but keep them simple and affordable."] },
  { id: "wr-gen-45", cat: "general", level: "C1", type: "Essay", minWords: 170,
    title: "Does Technology Bring People Closer or Push Them Apart?",
    prompt: "Write an essay discussing whether modern technology brings people closer together or drives them apart.",
    tips: ["Introduction: ...", "On the one hand, ...", "On the other hand, ...", "A key point is ...", "In conclusion, ..."],
    sample: ["Modern technology, especially the smartphone and social media, has changed human relationships in ways that are still hotly debated.",
      "On the one hand, technology clearly brings people closer. Video calls allow families separated by thousands of kilometres to see each other daily, and social networks help people maintain friendships that distance would once have ended. Communities can form around shared interests regardless of geography.",
      "On the other hand, the same tools can push people apart. It is common to see friends sitting together yet staring at their screens, and online interaction can feel shallow compared with face-to-face contact. Constant connection may even increase loneliness and anxiety.",
      "A key point is that technology itself is neutral; its effect depends on how we use it. In conclusion, technology has the power both to unite and to divide, and the responsibility lies with us to use it in ways that strengthen, rather than weaken, our human bonds."] },
  { id: "wr-gen-46", cat: "general", level: "A2", type: "Note", minWords: 40,
    title: "A Message to a Neighbour",
    prompt: "Write a short note asking your neighbour to look after your plants while you are away.",
    tips: ["Dear ...,", "I will be away from ... to ...", "Could you please ...?", "The key is ...", "Thank you so much."],
    sample: ["Dear Mrs Anvarova,", "I will be away visiting my family from Friday to Sunday.", "Could you please water my plants once while I am gone? They are on the balcony.", "I have left the spare key under the mat. Thank you so much for your help. Regards, Sevara."] },
  { id: "wr-gen-47", cat: "general", level: "B1", type: "Story", minWords: 100,
    title: "An Unforgettable Journey",
    prompt: "Write a short story about a journey you will never forget.",
    tips: ["A few years ago, ...", "We decided to ...", "During the journey, ...", "Suddenly, ...", "In the end, ..."],
    sample: ["A few years ago, my family decided to travel to the mountains by train for the first time.",
      "During the journey, we watched the green valleys and rivers pass by the window, and we ate sandwiches my mother had made.",
      "Suddenly, the train stopped in a tunnel for almost an hour because of a small fault. At first we were worried, but soon people began to talk, share food and tell stories.",
      "In the end, the train moved again and we arrived safely. I will never forget that trip, not because of the delay, but because of the friendly strangers we met."] },
  { id: "wr-gen-48", cat: "general", level: "B2", type: "Email", minWords: 110,
    title: "A Complaint About a Product",
    prompt: "Write a polite email to a company to complain about a product that did not work and ask for a solution.",
    tips: ["Dear Sir or Madam,", "I am writing to complain about ...", "Unfortunately, ...", "I would therefore like ...", "I look forward to your reply.", "Yours faithfully,"],
    sample: ["Dear Sir or Madam,", "I am writing to complain about a kettle I bought from your online store last week.", "Unfortunately, the kettle stopped working after only two days. It no longer heats the water, although I followed the instructions carefully.", "I would therefore like either a replacement or a full refund. I have attached a copy of my receipt and the order number. I look forward to your reply within seven days. Yours faithfully, Bekzod Aliyev."] },
  { id: "wr-gen-49", cat: "general", level: "C1", type: "Opinion", minWords: 170,
    title: "Is Lifelong Learning Necessary Today?",
    prompt: "In a fast-changing world, some say people must keep learning throughout their lives. Do you agree?",
    tips: ["Introduction: ...", "Firstly, ...", "Secondly, ...", "Some might argue ...", "In conclusion, ..."],
    sample: ["In a world transformed by rapid technological and economic change, the idea that learning should continue throughout life has become increasingly persuasive, and I strongly agree with it.",
      "Firstly, the skills that secure a job today may be outdated within a decade. Entire industries are being reshaped by automation and artificial intelligence, so workers who refuse to update their knowledge risk being left behind.",
      "Secondly, lifelong learning is not only about employment. Studying new subjects, languages or hobbies keeps the mind active, builds confidence and enriches life at any age.",
      "Some might argue that constant learning is exhausting or unaffordable. However, with free online resources widely available, the main requirement is curiosity and discipline rather than money.",
      "In conclusion, lifelong learning is no longer a luxury but a necessity. Those who embrace it are far better prepared to thrive in an uncertain and ever-changing future."] },
  { id: "wr-gen-50", cat: "general", level: "B1", type: "Description", minWords: 90,
    title: "My Goals for This Year",
    prompt: "Write about your main goals for this year and how you plan to achieve them.",
    tips: ["This year, my main goals are ...", "First, I want to ...", "To do this, I will ...", "Another goal is ...", "I believe that if I ..."],
    sample: ["This year, I have set myself two main goals.", "First, I want to improve my English so that I can speak more confidently. To do this, I will study a little every day and practise speaking with friends online.", "My second goal is to become healthier. I plan to walk regularly, eat more vegetables and sleep earlier.", "I believe that if I stay patient and work step by step, I can achieve both goals by the end of the year and feel proud of my progress."] }
);
