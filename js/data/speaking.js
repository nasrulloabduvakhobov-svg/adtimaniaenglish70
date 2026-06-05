/* ===== Speaking practice topics =====
   cat: "medical" | "general"
   prompt: mavzu/ko'rsatma | questions: muhokama savollari | phrases: foydali iboralar
   model: namuna og'zaki javob (TTS o'qiydi + matn sifatida ko'rsatiladi)
   Offline: mavzu/iboralar/TTS namuna va ovoz yozish (MediaRecorder) qurilmada ishlaydi.
*/
window.ME70_SPEAKING = [
  /* ---------- MEDICAL (15) ---------- */
  {
    id: "sp-med-1", cat: "medical", level: "A2", title: "Talking to a Patient",
    prompt: "Imagine you are a nurse. Greet a patient, ask how they feel and what the problem is.",
    questions: ["How do you greet a patient politely?", "What questions do you ask about their health?", "How do you make a worried patient feel calm?"],
    phrases: ["Hello, how are you feeling today?", "What seems to be the problem?", "How long have you had this?", "Don't worry, we will help you.", "Please take a seat."],
    model: ["Hello, my name is Aziza and I am your nurse today.", "How are you feeling? What seems to be the problem?", "How long have you had this pain?", "Don't worry, the doctor will see you soon and we will help you."]
  },
  {
    id: "sp-med-2", cat: "medical", level: "A2", title: "Describing Your Symptoms",
    prompt: "You are a patient at the doctor's. Explain how you feel and what hurts.",
    questions: ["What are your main symptoms?", "When did the problem start?", "Does anything make it better or worse?"],
    phrases: ["I have a headache / a sore throat.", "I feel tired and weak.", "It started two days ago.", "It hurts when I ...", "I also have a fever."],
    model: ["Doctor, I have not felt well for two days.", "I have a bad headache, a sore throat and a high temperature.", "It hurts when I swallow, and I feel very tired.", "I think I might have the flu."]
  },
  {
    id: "sp-med-3", cat: "medical", level: "B1", title: "A Healthy Lifestyle",
    prompt: "Talk about what a healthy lifestyle means and what you do to stay healthy.",
    questions: ["What does a healthy lifestyle include?", "What do you do to stay healthy?", "What unhealthy habit would you like to change?"],
    phrases: ["A healthy lifestyle means ...", "I try to eat ... and avoid ...", "I exercise ... times a week.", "It is important to sleep well.", "I would like to ... more often."],
    model: ["For me, a healthy lifestyle means eating well, exercising and getting enough sleep.", "I try to eat more vegetables and drink plenty of water.", "I go for a walk or play football three times a week.", "I would like to spend less time on my phone and sleep earlier."]
  },
  {
    id: "sp-med-4", cat: "medical", level: "B1", title: "Why I Want to Work in Medicine",
    prompt: "Explain why you want to become a doctor, nurse or other medical worker.",
    questions: ["Why did you choose this field?", "What qualities does a good medical worker need?", "How do you want to help people?"],
    phrases: ["I have always wanted to ...", "I chose medicine because ...", "A good doctor must be ... (kind, patient).", "I want to help people who ...", "My dream is to ..."],
    model: ["I have always wanted to work in medicine because I like helping people.", "I chose this field because health is the most important thing in life.", "A good medical worker must be kind, patient and hard-working.", "My dream is to work in my community and help people who cannot afford good care."]
  },
  {
    id: "sp-med-5", cat: "medical", level: "A2", title: "At the Pharmacy",
    prompt: "Role-play buying medicine at a pharmacy. Ask for something for a common problem.",
    questions: ["What problem do you have?", "What do you ask the pharmacist?", "What questions do you have about the medicine?"],
    phrases: ["Do you have something for ...?", "How often should I take it?", "How many tablets a day?", "Are there any side effects?", "How much is it?"],
    model: ["Hello, do you have something for a headache?", "How often should I take these tablets, and how many a day?", "Are there any side effects I should know about?", "Thank you. How much is it?"]
  },
  {
    id: "sp-med-6", cat: "medical", level: "B1", title: "Giving Health Advice",
    prompt: "A friend wants to be healthier. Give them advice about food, exercise and habits.",
    questions: ["What advice would you give about food?", "What about exercise and sleep?", "What habits should they avoid?"],
    phrases: ["You should ... / You shouldn't ...", "It's a good idea to ...", "Try to ... every day.", "I'd recommend ...", "If I were you, I would ..."],
    model: ["If you want to be healthier, you should eat more fruit and vegetables.", "It's a good idea to exercise for thirty minutes every day, even just walking.", "You shouldn't eat too much fast food or drink sugary drinks.", "Also, try to sleep at least seven hours each night."]
  },
  {
    id: "sp-med-7", cat: "medical", level: "A2", title: "A Visit to the Dentist",
    prompt: "Talk about going to the dentist. Describe a visit and how you take care of your teeth.",
    questions: ["When did you last visit the dentist?", "How do you take care of your teeth?", "Are you afraid of the dentist? Why?"],
    phrases: ["I went to the dentist ...", "I brush my teeth twice a day.", "The dentist checked / fixed ...", "I was a little nervous, but ...", "To keep my teeth healthy, I ..."],
    model: ["I last visited the dentist a few months ago for a check-up.", "I brush my teeth twice a day and try not to eat too many sweets.", "The dentist said my teeth were healthy, which made me happy.", "I was a little nervous at first, but it was not painful at all."]
  },
  {
    id: "sp-med-8", cat: "medical", level: "B2", title: "The Importance of Vaccination",
    prompt: "Give your opinion on vaccination. Why is it important for individuals and society?",
    questions: ["Why are vaccines important?", "How do they protect the whole community?", "What would you say to someone who is unsure?"],
    phrases: ["Vaccines protect us from ...", "Thanks to vaccines, ...", "Not only ... but also ...", "I understand the worry, however ...", "In my opinion, ..."],
    model: ["In my opinion, vaccination is one of the greatest achievements of medicine.", "Vaccines protect us from dangerous diseases that once killed millions of people.", "They protect not only the person but also the whole community, especially those who cannot be vaccinated.", "I understand that some people worry, however the benefits are far greater than the small risks."]
  },
  {
    id: "sp-med-9", cat: "medical", level: "B2", title: "Mental Health",
    prompt: "Discuss mental health: why it matters and how people can take care of it.",
    questions: ["Why is mental health as important as physical health?", "What can cause stress or sadness?", "How can people take care of their mental health?"],
    phrases: ["Mental health is just as important as ...", "Many people struggle with ...", "It is important to talk about ...", "One way to cope is ...", "We should never feel ashamed to ..."],
    model: ["I believe mental health is just as important as physical health.", "Stress, loneliness and too much pressure can affect anyone.", "It is important to talk about our feelings instead of hiding them.", "We should never feel ashamed to ask for help from friends or a professional."]
  },
  {
    id: "sp-med-10", cat: "medical", level: "B1", title: "Describing a Hospital",
    prompt: "Describe a hospital you know. What departments and people work there?",
    questions: ["What does a hospital look like inside?", "What different people work there?", "Which department is the busiest?"],
    phrases: ["A hospital has many departments, such as ...", "There are doctors, nurses and ...", "The emergency department is ...", "Patients stay in ...", "It is usually very busy because ..."],
    model: ["A hospital is a large building with many different departments.", "There are doctors, nurses, surgeons and many other workers who help patients.", "The emergency department is usually the busiest because people come at any time.", "Patients who are seriously ill stay in wards until they get better."]
  },
  {
    id: "sp-med-11", cat: "medical", level: "B1", title: "First Aid You Should Know",
    prompt: "Talk about basic first aid that everyone should know.",
    questions: ["What basic first aid do you know?", "What would you do for a small burn or cut?", "Why is it important to stay calm?"],
    phrases: ["Everyone should know how to ...", "For a small cut, you should ...", "In an emergency, first ...", "It is important to stay calm because ...", "If it is serious, you must ..."],
    model: ["I think everyone should know some basic first aid.", "For a small cut, you should clean it with water and cover it with a bandage.", "For a burn, you should hold it under cool water for several minutes.", "It is important to stay calm and call for help if the situation is serious."]
  },
  {
    id: "sp-med-12", cat: "medical", level: "B2", title: "Diet and Nutrition",
    prompt: "Discuss the role of diet in health. What should people eat more or less of?",
    questions: ["Why is a balanced diet important?", "What should people eat more of?", "What foods are unhealthy if eaten too often?"],
    phrases: ["A balanced diet provides ...", "We should eat more ...", "Too much ... can lead to ...", "Instead of ..., it is better to ...", "Everything in moderation ..."],
    model: ["A balanced diet is essential because it gives the body energy and nutrients.", "People should eat more vegetables, fruit and whole grains.", "Too much sugar, salt and fried food can lead to serious health problems.", "Instead of sugary drinks, it is better to drink water. Everything is fine in moderation."]
  },
  {
    id: "sp-med-13", cat: "medical", level: "B2", title: "Technology in Medicine",
    prompt: "Talk about how technology has changed medicine. Mention benefits and risks.",
    questions: ["How has technology improved medicine?", "Can you give an example?", "Are there any risks or downsides?"],
    phrases: ["Technology has transformed ...", "For example, ...", "One major benefit is ...", "On the other hand, ...", "However, machines cannot replace ..."],
    model: ["Technology has transformed medicine in amazing ways.", "For example, modern scanners can find diseases very early, and telemedicine helps people in distant villages.", "One major benefit is that treatment is faster and more accurate.", "However, machines cannot replace the care and kindness of a real doctor."]
  },
  {
    id: "sp-med-14", cat: "medical", level: "B1", title: "A Doctor You Admire",
    prompt: "Describe a doctor or medical worker you admire. Why do you respect them?",
    questions: ["Who is the person?", "What do they do?", "Why do you admire them?"],
    phrases: ["The person I admire is ...", "He / She works as ...", "What I respect most is ...", "He / She always ...", "I would like to be like ..."],
    model: ["The doctor I admire most is my family doctor, who has helped us for years.", "She works very long hours but is always patient and kind.", "What I respect most is that she treats every patient with the same care.", "I would like to be like her one day."]
  },
  {
    id: "sp-med-15", cat: "medical", level: "B2", title: "Stress and How to Manage It",
    prompt: "Discuss stress in modern life and practical ways to manage it.",
    questions: ["What causes stress for most people?", "How does stress affect the body?", "What are healthy ways to reduce stress?"],
    phrases: ["These days, many people feel ...", "Stress can affect both ...", "One effective way to relax is ...", "It also helps to ...", "We should make time for ..."],
    model: ["These days, many people feel stressed because of work, study and busy lives.", "Stress can affect both the mind and the body, causing headaches and poor sleep.", "One effective way to relax is regular exercise or spending time in nature.", "It also helps to talk to friends and to make time for hobbies we enjoy."]
  }
];


/* ===== GENERAL (15) ===== */
window.ME70_SPEAKING.push(
  {
    id: "sp-gen-1", cat: "general", level: "A2", title: "Introduce Yourself",
    prompt: "Introduce yourself: your name, age, where you are from and what you do.",
    questions: ["What is your name and where are you from?", "What do you do (study or work)?", "What do you like doing in your free time?"],
    phrases: ["My name is ...", "I am ... years old.", "I am from ...", "I study / work as ...", "In my free time, I enjoy ..."],
    model: ["Hello, my name is Laziz and I am twenty years old.", "I am from Tashkent and I study medicine at the university.", "In my free time, I enjoy playing football and reading books.", "It is nice to meet you."]
  },
  {
    id: "sp-gen-2", cat: "general", level: "A2", title: "My Family",
    prompt: "Describe your family: how many people, who they are and what they do.",
    questions: ["How many people are in your family?", "What do your parents do?", "Who are you closest to?"],
    phrases: ["There are ... in my family.", "My father / mother is a ...", "I have ... brother(s) / sister(s).", "We usually ... together.", "I am closest to ..."],
    model: ["There are five people in my family: my parents, my two sisters and me.", "My father is a teacher and my mother is a nurse.", "We usually have dinner together and talk about our day.", "I am closest to my older sister because she always helps me."]
  },
  {
    id: "sp-gen-3", cat: "general", level: "A2", title: "My Daily Routine",
    prompt: "Describe a typical day in your life from morning to evening.",
    questions: ["What time do you wake up?", "What do you do during the day?", "How do you spend your evenings?"],
    phrases: ["I usually wake up at ...", "In the morning, I ...", "During the day, I ...", "In the evening, I ...", "I go to bed at ..."],
    model: ["I usually wake up at half past six in the morning.", "After breakfast, I go to work by bus and stay there until five.", "In the evening, I help at home and study English.", "I usually go to bed around eleven o'clock."]
  },
  {
    id: "sp-gen-4", cat: "general", level: "B1", title: "My Hobbies",
    prompt: "Talk about your hobbies and why you enjoy them.",
    questions: ["What are your favourite hobbies?", "When and how did you start?", "Why do you enjoy them?"],
    phrases: ["My favourite hobby is ...", "I started ... years ago.", "I usually do it ...", "I enjoy it because ...", "It helps me to ..."],
    model: ["My favourite hobby is reading, especially adventure stories.", "I started about five years ago when a teacher gave me a great book.", "I enjoy it because it takes me to different worlds and teaches me new things.", "It also helps me relax and improve my English."]
  },
  {
    id: "sp-gen-5", cat: "general", level: "B1", title: "My Hometown",
    prompt: "Describe your hometown and what makes it special.",
    questions: ["Where is your hometown?", "What can people see and do there?", "What do you like most about it?"],
    phrases: ["My hometown is ...", "It is famous for ...", "People can ...", "What I like most is ...", "I would recommend ..."],
    model: ["My hometown is a small, beautiful city in the east of the country.", "It is famous for its old buildings and friendly people.", "People can visit the market, walk in the park or relax by the river.", "What I like most is that life there is calm and everyone knows each other."]
  },
  {
    id: "sp-gen-6", cat: "general", level: "B1", title: "My Last Holiday",
    prompt: "Talk about your last holiday. Where did you go and what did you do?",
    questions: ["Where did you go and with whom?", "What did you do there?", "What was the best part?"],
    phrases: ["Last summer, I went to ...", "I travelled with ...", "Every day, we ...", "The best part was ...", "Overall, it was ..."],
    model: ["Last summer, I went to the seaside with my family for a week.", "Every day, we swam in the sea and walked along the beach.", "The best part was watching the sunset on the last evening.", "Overall, it was a wonderful and relaxing holiday."]
  },
  {
    id: "sp-gen-7", cat: "general", level: "B1", title: "My Best Friend",
    prompt: "Describe your best friend and your friendship.",
    questions: ["Who is your best friend?", "What is he or she like?", "Why are you good friends?"],
    phrases: ["My best friend is ...", "He / She is ... (kind, funny).", "We met when ...", "We both enjoy ...", "I value our friendship because ..."],
    model: ["My best friend's name is Aziza, and we have known each other since childhood.", "She is kind, honest and always ready to help.", "We both enjoy reading and going for long walks.", "I value our friendship because we can completely trust each other."]
  },
  {
    id: "sp-gen-8", cat: "general", level: "B1", title: "My Future Plans",
    prompt: "Talk about your plans and dreams for the future.",
    questions: ["What do you want to do after your studies?", "Where do you see yourself in five years?", "What is your biggest dream?"],
    phrases: ["After my studies, I want to ...", "In five years, I hope to ...", "My biggest dream is ...", "First, I will ..., and then ...", "I am working hard to ..."],
    model: ["After I finish university, I want to work and gain experience in my field.", "In five years, I hope to become a specialist and maybe study abroad.", "My biggest dream is to help people in my own community.", "I am working hard every day to make this dream come true."]
  },
  {
    id: "sp-gen-9", cat: "general", level: "B2", title: "Books and Films",
    prompt: "Discuss books and films. Which do you prefer and why?",
    questions: ["Do you prefer books or films? Why?", "What is your favourite book or film?", "What can we learn from stories?"],
    phrases: ["Personally, I prefer ...", "My favourite ... is ...", "What I love about it is ...", "On the other hand, ...", "Stories can teach us ..."],
    model: ["Personally, I prefer books because they let me imagine the world myself.", "My favourite book is an adventure story I read as a child.", "What I love about it is that the characters feel so real.", "However, films are great for relaxing with friends. Both can teach us a lot about life."]
  },
  {
    id: "sp-gen-10", cat: "general", level: "B2", title: "Technology in Our Life",
    prompt: "Talk about the role of technology in everyday life. Is it good or bad?",
    questions: ["How do you use technology every day?", "What are the benefits?", "What are the dangers of using it too much?"],
    phrases: ["I use technology for ...", "One big advantage is ...", "However, spending too much time ...", "We should be careful not to ...", "In my opinion, ..."],
    model: ["I use technology every day to study, to communicate and to find information.", "One big advantage is that we can learn almost anything online for free.", "However, spending too much time on phones can harm our sleep and relationships.", "In my opinion, technology is helpful if we use it wisely and set limits."]
  },
  {
    id: "sp-gen-11", cat: "general", level: "B1", title: "Travelling",
    prompt: "Talk about travelling: places you have visited or want to visit.",
    questions: ["Do you like travelling? Why?", "Where have you been?", "Where would you like to go next?"],
    phrases: ["I love travelling because ...", "I have been to ...", "My favourite place was ...", "One day, I would like to visit ...", "Travelling teaches us ..."],
    model: ["I love travelling because it lets me see new places and meet new people.", "I have been to a few cities in my country, and I enjoyed every trip.", "One day, I would like to visit another country and learn about its culture.", "Travelling teaches us to understand and respect different ways of life."]
  },
  {
    id: "sp-gen-12", cat: "general", level: "A2", title: "Food and Cooking",
    prompt: "Talk about food: your favourite meals and whether you like cooking.",
    questions: ["What is your favourite food?", "Do you like cooking? What can you cook?", "What food is popular in your country?"],
    phrases: ["My favourite food is ...", "I like / don't like cooking.", "I can cook ...", "In my country, people love ...", "I usually eat ... for dinner."],
    model: ["My favourite food is plov, a traditional rice dish from my country.", "I like cooking, and I can make simple dishes like omelettes and soup.", "In my country, people love sharing big meals with family and guests.", "I usually eat dinner with my family in the evening."]
  },
  {
    id: "sp-gen-13", cat: "general", level: "B1", title: "Learning English",
    prompt: "Talk about your experience of learning English: why and how.",
    questions: ["Why are you learning English?", "What is easy or difficult for you?", "How do you practise?"],
    phrases: ["I am learning English because ...", "For me, the easiest part is ...", "The most difficult part is ...", "To practise, I ...", "My goal is to ..."],
    model: ["I am learning English because it opens many doors for study and work.", "For me, reading is the easiest part, but speaking is the most difficult.", "To practise, I use apps, watch films and try to speak with friends.", "My goal is to speak English fluently and confidently."]
  },
  {
    id: "sp-gen-14", cat: "general", level: "B2", title: "Social Media",
    prompt: "Give your opinion on social media. What are the advantages and disadvantages?",
    questions: ["How do people use social media?", "What are the main advantages?", "What problems can it cause?"],
    phrases: ["Social media is used for ...", "On the positive side, ...", "On the negative side, ...", "Moreover, ...", "To sum up, I believe ..."],
    model: ["Social media is used to stay in touch, share ideas and follow the news.", "On the positive side, it connects people across the world instantly.", "On the negative side, it can spread false information and waste a lot of time.", "To sum up, I believe social media is useful if we use it carefully."]
  },
  {
    id: "sp-gen-15", cat: "general", level: "B1", title: "A Memorable Day",
    prompt: "Describe a day you will never forget and explain why it was special.",
    questions: ["What happened on that day?", "How did you feel?", "Why was it so memorable?"],
    phrases: ["I will always remember the day when ...", "It started ...", "Suddenly, ...", "I felt ...", "It was memorable because ..."],
    model: ["I will always remember the day I received my exam results.", "It started as a normal day, but I was very nervous.", "When I saw my high marks, I felt proud and grateful to my parents.", "It was memorable because all my hard work had finally paid off."]
  }
);
