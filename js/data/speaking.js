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


/* ===== MEDICAL 16-35 (top-up to 35) ===== */
window.ME70_SPEAKING.push(
  {
    id: "sp-med-16", cat: "medical", level: "B1", title: "Explaining a Treatment Plan",
    prompt: "Imagine you are a doctor. Explain a simple treatment plan to a patient.",
    questions: ["How do you explain the plan in simple words?", "What instructions do you give?", "How do you check the patient understood?"],
    phrases: ["I would like to explain your treatment.", "You need to take ... for ... days.", "It is important that you ...", "Do you have any questions?", "Please come back if ..."],
    model: ["I would like to explain your treatment plan in simple words.", "You need to take this medicine twice a day, after meals, for one week.", "It is important that you rest and drink plenty of water.", "Do you have any questions? Please come back if you do not feel better."]
  },
  {
    id: "sp-med-17", cat: "medical", level: "A2", title: "Calling to Make an Appointment",
    prompt: "Role-play a phone call to a clinic to make an appointment.",
    questions: ["How do you start the call politely?", "What information do you give?", "How do you agree on a time?"],
    phrases: ["Hello, I would like to make an appointment.", "My name is ...", "I need to see a doctor about ...", "Are you free on ...?", "Thank you, see you then."],
    model: ["Hello, I would like to make an appointment to see a doctor.", "My name is Bek, and I need to see someone about a bad cough.", "Are you free tomorrow morning?", "Ten o'clock is perfect. Thank you, see you then."]
  },
  {
    id: "sp-med-18", cat: "medical", level: "B1", title: "Talking About Bad Habits",
    prompt: "Talk about unhealthy habits and how to change them.",
    questions: ["What unhealthy habits are common?", "Why are they hard to change?", "What advice can help someone change?"],
    phrases: ["A common bad habit is ...", "People find it hard to stop because ...", "One way to change is ...", "It helps to ...", "Step by step, ..."],
    model: ["A common bad habit is eating too much fast food or sitting all day.", "People find it hard to stop because these habits feel comfortable.", "One way to change is to set small, realistic goals.", "It helps to replace the bad habit with a good one, step by step."]
  },
  {
    id: "sp-med-19", cat: "medical", level: "B2", title: "Describing the Human Body",
    prompt: "Describe the main systems of the human body and what they do.",
    questions: ["What are the main body systems?", "What does each one do?", "Why is it useful to understand them?"],
    phrases: ["The body has several systems, such as ...", "The ... system is responsible for ...", "It works together with ...", "If one system fails, ...", "Understanding this helps us ..."],
    model: ["The human body has several systems, such as the circulatory, respiratory and digestive systems.", "The circulatory system carries blood and oxygen, while the respiratory system controls breathing.", "These systems work together to keep us alive and healthy.", "Understanding them helps us take better care of our bodies."]
  },
  {
    id: "sp-med-20", cat: "medical", level: "B1", title: "Reassuring a Nervous Patient",
    prompt: "A patient is nervous before a small procedure. Talk to calm them down.",
    questions: ["How do you make the patient feel safe?", "How do you explain what will happen?", "What kind words can you use?"],
    phrases: ["There is no need to worry.", "This is a very common procedure.", "I will explain each step.", "You will feel only ...", "We are here to help you."],
    model: ["There is no need to worry; this is a very common and safe procedure.", "I will explain each step so you know exactly what will happen.", "You may feel only a small scratch, and it will be over quickly.", "We are here to help you, and you are in good hands."]
  },
  {
    id: "sp-med-21", cat: "medical", level: "B2", title: "The Importance of Sleep",
    prompt: "Talk about why sleep is so important for health.",
    questions: ["Why does the body need sleep?", "What happens when we do not sleep enough?", "How can people sleep better?"],
    phrases: ["Sleep is essential because ...", "During sleep, the body ...", "Without enough sleep, ...", "To sleep better, we should ...", "A good routine helps ..."],
    model: ["Sleep is essential because it lets the body and brain rest and repair.", "During sleep, the body heals and the brain stores what we have learned.", "Without enough sleep, we feel tired, stressed and unable to concentrate.", "To sleep better, we should keep a regular routine and avoid screens before bed."]
  },
  {
    id: "sp-med-22", cat: "medical", level: "A2", title: "At the Pharmacy: Asking Questions",
    prompt: "Role-play asking a pharmacist questions about a medicine.",
    questions: ["What do you want to buy?", "What do you ask about the dose?", "What else do you check?"],
    phrases: ["I need something for ...", "How do I take this?", "How many times a day?", "Can I take it with food?", "Thank you for your help."],
    model: ["Hello, I need something for a sore throat.", "How do I take this medicine, and how many times a day?", "Can I take it with food, or on an empty stomach?", "Thank you very much for your help."]
  },
  {
    id: "sp-med-23", cat: "medical", level: "B1", title: "Healthy Food vs Junk Food",
    prompt: "Compare healthy food and junk food and give your opinion.",
    questions: ["What is the difference between them?", "Why do people choose junk food?", "How can we eat more healthily?"],
    phrases: ["Healthy food gives us ...", "Junk food is ... but ...", "People choose junk food because ...", "To eat better, we can ...", "In my opinion, ..."],
    model: ["Healthy food gives us vitamins and energy, while junk food is tasty but full of sugar and fat.", "People often choose junk food because it is quick and cheap.", "To eat more healthily, we can cook at home and prepare fruit as snacks.", "In my opinion, junk food is fine sometimes, but balance is the key."]
  },
  {
    id: "sp-med-24", cat: "medical", level: "B2", title: "Describing an Illness You Had",
    prompt: "Talk about a time you were ill: symptoms, treatment and recovery.",
    questions: ["What illness did you have?", "What were the symptoms?", "How did you recover?"],
    phrases: ["A while ago, I had ...", "The symptoms were ...", "The doctor told me to ...", "It took ... to recover.", "Now I feel ..."],
    model: ["A couple of years ago, I had a bad case of the flu.", "The symptoms were a high fever, body aches and a terrible cough.", "The doctor told me to rest, drink fluids and take medicine for the fever.", "It took about a week to recover, and now I feel completely healthy again."]
  },
  {
    id: "sp-med-25", cat: "medical", level: "B1", title: "Giving Directions in a Hospital",
    prompt: "A visitor is lost in a hospital. Give them clear directions to a department.",
    questions: ["How do you start helping politely?", "How do you describe the way?", "How do you make sure they understood?"],
    phrases: ["Can I help you find ...?", "Go straight and then ...", "Take the lift to ...", "It is on your ...", "You can't miss it."],
    model: ["Can I help you find the right department?", "Go straight down this corridor and then turn left.", "Take the lift to the second floor; the cardiology department is on your right.", "You can't miss it — there is a big blue sign. Shall I repeat that?"]
  },
  {
    id: "sp-med-26", cat: "medical", level: "B2", title: "Talking About a Healthy Diet",
    prompt: "Describe what a healthy diet looks like and how you try to follow one.",
    questions: ["What does a healthy diet include?", "What should we limit?", "How do you try to eat well?"],
    phrases: ["A healthy diet includes ...", "We should limit ...", "It is better to ... than to ...", "Personally, I try to ...", "Balance is important because ..."],
    model: ["A healthy diet includes plenty of vegetables, fruit, whole grains and enough protein.", "We should limit sugar, salt and fried food.", "It is better to drink water than sugary drinks.", "Personally, I try to cook at home and eat regular meals. Balance is important for long-term health."]
  },
  {
    id: "sp-med-27", cat: "medical", level: "A2", title: "Asking How Someone Feels",
    prompt: "A friend has been ill. Ask how they feel and offer help.",
    questions: ["How do you ask about their health?", "What help can you offer?", "How do you wish them well?"],
    phrases: ["How are you feeling now?", "Are you feeling any better?", "Do you need anything?", "I can help you with ...", "Get well soon!"],
    model: ["Hi, how are you feeling now? Are you any better than yesterday?", "Do you need anything from the shop or the pharmacy?", "I can help you with cooking or buying your medicine.", "Take care of yourself and get well soon!"]
  },
  {
    id: "sp-med-28", cat: "medical", level: "B2", title: "Should Healthcare Be Free?",
    prompt: "Discuss whether healthcare should be free for everyone. Give your opinion.",
    questions: ["What are the benefits of free healthcare?", "What are the challenges?", "What is your opinion?"],
    phrases: ["One major benefit is ...", "On the other hand, ...", "It is expensive because ...", "However, I believe ...", "A fair system should ..."],
    model: ["One major benefit of free healthcare is that everyone can get help, regardless of money.", "On the other hand, it is expensive, and governments must find ways to pay for it.", "However, I believe that basic healthcare should be available to all.", "A fair system should protect the poor while keeping good quality for everyone."]
  },
  {
    id: "sp-med-29", cat: "medical", level: "B1", title: "First Aid in an Emergency",
    prompt: "Explain what you would do if someone near you suddenly felt very ill.",
    questions: ["What is the first thing you would do?", "How do you call for help?", "How do you stay calm?"],
    phrases: ["The first thing I would do is ...", "I would check if ...", "Then I would call ...", "While waiting, I would ...", "Staying calm is important because ..."],
    model: ["The first thing I would do is check if the person is conscious and breathing.", "I would ask someone to call an ambulance immediately.", "While waiting, I would keep the person comfortable and warm.", "Staying calm is important because it helps me think clearly and reassure the person."]
  },
  {
    id: "sp-med-30", cat: "medical", level: "B2", title: "The Future of Medicine",
    prompt: "Talk about how medicine might change in the future.",
    questions: ["How might technology change medicine?", "What problems could it solve?", "Are there any risks?"],
    phrases: ["In the future, medicine may ...", "Technology could help us ...", "This might solve problems such as ...", "However, we should be careful about ...", "Overall, I am optimistic because ..."],
    model: ["In the future, medicine may use artificial intelligence to diagnose diseases very early.", "Technology could help doctors treat patients remotely and personalise treatments.", "This might solve problems such as long waiting times and lack of specialists.", "However, we should be careful about privacy and not lose the human touch. Overall, I am optimistic about the future of medicine."]
  },
  {
    id: "sp-med-31", cat: "medical", level: "A2", title: "Parts of the Body",
    prompt: "Describe the main parts of the body and what we use them for.",
    questions: ["Which parts of the body can you name?", "What do we use them for?", "Which part do you think is most important?"],
    phrases: ["We use our ... to ...", "The ... helps us to ...", "Without our ..., we could not ...", "I think the most important part is ...", "Our body is amazing because ..."],
    model: ["We use our eyes to see and our ears to hear.", "The legs help us to walk and run, and the hands help us to hold things.", "Without our heart, we could not live, because it pumps blood around the body.", "I think the brain is the most important part because it controls everything."]
  },
  {
    id: "sp-med-32", cat: "medical", level: "B1", title: "Visiting Someone in Hospital",
    prompt: "You are visiting a friend in hospital. Talk to them and lift their spirits.",
    questions: ["How do you greet your friend?", "What do you talk about?", "How do you encourage them?"],
    phrases: ["Hi, how are you doing today?", "You look ... than last time.", "Everyone says hello and ...", "The doctors say ...", "You'll be home soon!"],
    model: ["Hi, how are you doing today? You look much better than last time.", "Everyone at school says hello and wishes you a quick recovery.", "The doctors say you are healing well, which is great news.", "Don't worry about anything — you'll be home and back to normal soon!"]
  },
  {
    id: "sp-med-33", cat: "medical", level: "B2", title: "Mental and Physical Health",
    prompt: "Discuss the connection between mental and physical health.",
    questions: ["How are mental and physical health connected?", "Can one affect the other?", "How can we look after both?"],
    phrases: ["Mental and physical health are ...", "For example, stress can ...", "On the other hand, exercise ...", "To look after both, we should ...", "A balanced life means ..."],
    model: ["Mental and physical health are closely connected and affect each other.", "For example, stress and worry can cause headaches, poor sleep and a weak immune system.", "On the other hand, exercise releases chemicals that improve our mood.", "To look after both, we should eat well, move regularly, rest and talk about our feelings."]
  },
  {
    id: "sp-med-34", cat: "medical", level: "B1", title: "Explaining Healthy Habits to a Child",
    prompt: "Explain to a child, in simple words, how to stay healthy.",
    questions: ["How do you explain it simply?", "What habits do you mention?", "How do you make it fun?"],
    phrases: ["To stay healthy, you should ...", "Eat lots of ...", "Don't forget to ...", "Sleep helps you to ...", "It's fun to ..."],
    model: ["To stay healthy and strong, you should eat lots of fruit and vegetables.", "Don't forget to wash your hands and brush your teeth every day.", "Drinking water and sleeping well help you grow and feel good.", "And it's fun to run and play outside instead of watching screens all day!"]
  },
  {
    id: "sp-med-35", cat: "medical", level: "B2", title: "A Doctor's Typical Day",
    prompt: "Describe a typical day in the life of a doctor.",
    questions: ["How does a doctor's day start?", "What does a doctor do during the day?", "Why is the job challenging?"],
    phrases: ["A doctor's day usually starts ...", "In the morning, they ...", "During the day, they ...", "The job is challenging because ...", "Despite this, ..."],
    model: ["A doctor's day usually starts early, often with a meeting about the patients.", "In the morning, they examine patients, study test results and plan treatments.", "During the day, they may perform procedures, answer questions and work with nurses.", "The job is challenging because of long hours and difficult decisions, but it is also very rewarding."]
  }
);


/* ===== GENERAL 16-35 (top-up to 35) ===== */
window.ME70_SPEAKING.push(
  {
    id: "sp-gen-16", cat: "general", level: "A2", title: "My Favourite Food",
    prompt: "Talk about your favourite food and meals.",
    questions: ["What is your favourite food?", "When do you usually eat it?", "Can you cook it yourself?"],
    phrases: ["My favourite food is ...", "I usually eat it ...", "It tastes ...", "I can / can't cook it.", "I like it because ..."],
    model: ["My favourite food is plov, a traditional rice dish with meat and carrots.", "I usually eat it at family gatherings and on special days.", "It tastes delicious, and the smell is wonderful.", "I can cook a simple version myself, but my grandmother makes it best."]
  },
  {
    id: "sp-gen-17", cat: "general", level: "A2", title: "The Weather Today",
    prompt: "Describe today's weather and your favourite kind of weather.",
    questions: ["What is the weather like today?", "What is your favourite weather?", "What do you do in different weather?"],
    phrases: ["Today it is ...", "My favourite weather is ...", "When it is sunny, I ...", "When it rains, I ...", "I don't like ... weather because ..."],
    model: ["Today it is warm and sunny with a clear blue sky.", "My favourite weather is a cool, sunny day in spring.", "When it is sunny, I like to walk in the park.", "When it rains, I stay at home and read a book. I don't like very cold weather because it makes me tired."]
  },
  {
    id: "sp-gen-18", cat: "general", level: "B1", title: "Technology and Gadgets",
    prompt: "Talk about the gadgets you use and how they help you.",
    questions: ["What gadgets do you use every day?", "How do they help you?", "Could you live without them?"],
    phrases: ["The gadget I use most is ...", "It helps me to ...", "I also use ... for ...", "I couldn't live without ... because ...", "However, sometimes ..."],
    model: ["The gadget I use most is my smartphone.", "It helps me to study, communicate and find information quickly.", "I also use a laptop for writing and watching lessons.", "I couldn't live without my phone because it keeps me connected, although sometimes I use it too much."]
  },
  {
    id: "sp-gen-19", cat: "general", level: "B1", title: "Shopping Habits",
    prompt: "Talk about how and where you like to shop.",
    questions: ["Where do you usually shop?", "Do you prefer online or in-store shopping?", "How do you decide what to buy?"],
    phrases: ["I usually shop at ...", "I prefer ... shopping because ...", "Before I buy something, I ...", "I try not to ...", "The best thing about ... is ..."],
    model: ["I usually shop at the local market and sometimes at supermarkets.", "I prefer in-store shopping because I can see and try the products.", "Before I buy something, I compare prices and quality.", "I try not to spend money on things I don't really need."]
  },
  {
    id: "sp-gen-20", cat: "general", level: "B2", title: "The Importance of Education",
    prompt: "Discuss why education is important for a person and for society.",
    questions: ["Why is education important?", "How does it change a person's life?", "How does it help society?"],
    phrases: ["Education is important because ...", "It gives people ...", "On a personal level, ...", "For society, education ...", "In short, ..."],
    model: ["Education is important because it gives people knowledge and opportunities.", "On a personal level, it helps us find better jobs and understand the world.", "For society, education reduces poverty and creates skilled doctors, teachers and engineers.", "In short, education is the foundation of a better future for everyone."]
  },
  {
    id: "sp-gen-21", cat: "general", level: "B1", title: "Music in My Life",
    prompt: "Talk about the role of music in your life.",
    questions: ["What kind of music do you like?", "When do you listen to it?", "How does music make you feel?"],
    phrases: ["I really enjoy ... music.", "I listen to music when I ...", "My favourite singer / group is ...", "Music makes me feel ...", "Sometimes I ..."],
    model: ["I really enjoy calm and modern music.", "I listen to music when I study, travel or want to relax.", "Music makes me feel happy and helps me forget my worries.", "Sometimes I even sing along, although I am not a great singer!"]
  },
  {
    id: "sp-gen-22", cat: "general", level: "B2", title: "Protecting the Environment",
    prompt: "Discuss why we should protect the environment and what we can do.",
    questions: ["Why is the environment in danger?", "Why should we protect it?", "What can ordinary people do?"],
    phrases: ["The environment is in danger because ...", "We should protect it because ...", "Everyone can help by ...", "For example, ...", "If we all ..., then ..."],
    model: ["The environment is in danger because of pollution, waste and climate change.", "We should protect it because our health and future depend on a clean planet.", "Everyone can help by saving water, reducing plastic and recycling.", "For example, using a reusable bottle is a small but useful step. If we all act, we can make a real difference."]
  },
  {
    id: "sp-gen-23", cat: "general", level: "A2", title: "My Morning Routine",
    prompt: "Describe what you do every morning.",
    questions: ["What time do you wake up?", "What do you do first?", "How do you get ready for the day?"],
    phrases: ["I wake up at ...", "First, I ...", "Then I ...", "After breakfast, I ...", "Finally, I ..."],
    model: ["I usually wake up at six thirty in the morning.", "First, I wash my face and brush my teeth.", "Then I do some light exercises and have breakfast.", "After breakfast, I get dressed and prepare my things. Finally, I leave for work or study."]
  },
  {
    id: "sp-gen-24", cat: "general", level: "B1", title: "A Place I Want to Visit",
    prompt: "Talk about a place you would love to visit one day.",
    questions: ["Where would you like to go?", "Why do you want to visit it?", "What would you do there?"],
    phrases: ["One place I would love to visit is ...", "I want to go there because ...", "I have heard that ...", "If I went there, I would ...", "It is my dream to ..."],
    model: ["One place I would love to visit is Japan.", "I want to go there because of its rich culture and beautiful nature.", "I have heard that the cities are clean and the food is amazing.", "If I went there, I would visit ancient temples and try local dishes. It is my dream to travel there one day."]
  },
  {
    id: "sp-gen-25", cat: "general", level: "B2", title: "Success in Life",
    prompt: "Discuss what success means to you.",
    questions: ["What does success mean to you?", "Is success only about money?", "How can a person become successful?"],
    phrases: ["For me, success means ...", "Success is not only about ...", "A successful person usually ...", "To succeed, you need ...", "In the end, ..."],
    model: ["For me, success means being happy and doing work that I love.", "Success is not only about money; it is also about health, family and respect.", "A successful person usually works hard, never gives up and keeps learning.", "To succeed, you need clear goals and patience. In the end, success is a personal feeling, not just a number."]
  },
  {
    id: "sp-gen-26", cat: "general", level: "A2", title: "My Free Time",
    prompt: "Talk about what you do in your free time.",
    questions: ["What do you do in your free time?", "Who do you spend it with?", "What would you like to try?"],
    phrases: ["In my free time, I like to ...", "I usually ... with ...", "At weekends, I ...", "I would like to try ...", "It makes me feel ..."],
    model: ["In my free time, I like to read, watch films and play football.", "I usually spend time with my friends and family.", "At weekends, I sometimes go to the park or a cafe.", "I would like to try painting one day. Free time makes me feel relaxed and happy."]
  },
  {
    id: "sp-gen-27", cat: "general", level: "B1", title: "Friendship",
    prompt: "Talk about what friendship means to you.",
    questions: ["What makes a good friend?", "How do you keep a friendship strong?", "Can you describe a good friend?"],
    phrases: ["A good friend is someone who ...", "Friendship is important because ...", "To keep a friendship strong, you should ...", "My friend ... always ...", "I value friendship because ..."],
    model: ["A good friend is someone who supports you in good and bad times.", "Friendship is important because it makes life happier and less lonely.", "To keep a friendship strong, you should be honest, kind and spend time together.", "My best friend always listens to me and helps me. I value friendship because true friends are like family."]
  },
  {
    id: "sp-gen-28", cat: "general", level: "B2", title: "Working from Home",
    prompt: "Discuss the advantages and disadvantages of working from home.",
    questions: ["What are the advantages?", "What are the disadvantages?", "Would you like to work from home?"],
    phrases: ["Working from home has become ...", "One advantage is ...", "However, a disadvantage is ...", "Personally, I would ...", "It depends on ..."],
    model: ["Working from home has become very common in recent years.", "One advantage is that it saves time and money on travel.", "However, a disadvantage is that it can feel lonely and it is harder to separate work from rest.", "Personally, I would enjoy working from home a few days a week. It really depends on the type of job."]
  },
  {
    id: "sp-gen-29", cat: "general", level: "A2", title: "My Favourite Holiday",
    prompt: "Talk about your favourite holiday or celebration.",
    questions: ["What is your favourite holiday?", "How do you celebrate it?", "Who do you spend it with?"],
    phrases: ["My favourite holiday is ...", "We celebrate it by ...", "On this day, we ...", "I spend it with ...", "I love it because ..."],
    model: ["My favourite holiday is Navruz, which welcomes the spring.", "We celebrate it by cooking special food and visiting relatives.", "On this day, we wear nice clothes and enjoy time outside.", "I spend it with my whole family. I love it because everyone is happy and together."]
  },
  {
    id: "sp-gen-30", cat: "general", level: "B1", title: "Giving Directions",
    prompt: "A tourist asks you for directions. Help them find a place in your town.",
    questions: ["How do you start helping politely?", "How do you describe the route?", "How do you finish the conversation?"],
    phrases: ["Of course, I can help you.", "Go straight on until ...", "Then turn ... at ...", "It will be on your ...", "It takes about ... minutes."],
    model: ["Of course, I can help you find the museum.", "Go straight on until you reach the big square.", "Then turn right at the bank and walk for a few minutes.", "The museum will be on your left, next to the park. It takes about ten minutes on foot."]
  },
  {
    id: "sp-gen-31", cat: "general", level: "B2", title: "The Power of Reading",
    prompt: "Talk about why reading books is valuable.",
    questions: ["Why is reading important?", "What kinds of books do you like?", "How does reading help us?"],
    phrases: ["Reading is valuable because ...", "I particularly enjoy ...", "Books allow us to ...", "Reading also improves ...", "In my view, ..."],
    model: ["Reading is valuable because it expands our knowledge and imagination.", "I particularly enjoy adventure stories and books about science.", "Books allow us to travel to other worlds and live other lives.", "Reading also improves our vocabulary and concentration. In my view, a person who reads never feels alone."]
  },
  {
    id: "sp-gen-32", cat: "general", level: "A2", title: "My Pet or Favourite Animal",
    prompt: "Talk about a pet you have or your favourite animal.",
    questions: ["Do you have a pet or a favourite animal?", "What does it look like?", "Why do you like it?"],
    phrases: ["I have a ... / My favourite animal is ...", "It is ... and ...", "It likes to ...", "I like it because ...", "Animals are ..."],
    model: ["My favourite animal is the dog.", "Dogs are friendly, loyal and full of energy.", "They like to play, run and protect their owners.", "I like dogs because they are kind and always happy to see you. Animals make our lives brighter."]
  },
  {
    id: "sp-gen-33", cat: "general", level: "B1", title: "Plans for the Weekend",
    prompt: "Talk about your plans for the coming weekend.",
    questions: ["What are you going to do this weekend?", "Who will you spend it with?", "Why are you looking forward to it?"],
    phrases: ["This weekend, I am going to ...", "On Saturday, I will ...", "On Sunday, I plan to ...", "I will spend time with ...", "I am looking forward to it because ..."],
    model: ["This weekend, I am going to relax and meet my friends.", "On Saturday, I will go shopping and watch a film.", "On Sunday, I plan to visit my grandparents and help them in the garden.", "I am looking forward to it because I will spend time with the people I love."]
  },
  {
    id: "sp-gen-34", cat: "general", level: "B2", title: "Dealing with Failure",
    prompt: "Talk about how people can deal with failure and learn from it.",
    questions: ["Why do people fear failure?", "Can failure be useful?", "How should we react to failure?"],
    phrases: ["Many people fear failure because ...", "However, failure can ...", "Every successful person has ...", "The best reaction is to ...", "I believe that ..."],
    model: ["Many people fear failure because they worry about what others will think.", "However, failure can be a great teacher if we learn from our mistakes.", "Every successful person has failed many times before succeeding.", "The best reaction is to stay calm, understand what went wrong and try again. I believe that failure is just a step towards success."]
  },
  {
    id: "sp-gen-35", cat: "general", level: "B1", title: "Describing Your Best Day",
    prompt: "Talk about one of the best days of your life.",
    questions: ["What happened on that day?", "Why was it special?", "How did you feel?"],
    phrases: ["One of the best days of my life was ...", "On that day, ...", "It was special because ...", "I felt ...", "I will always remember ..."],
    model: ["One of the best days of my life was when I passed my final exams.", "On that day, I woke up nervous but full of hope.", "It was special because all my hard work had finally paid off.", "I felt proud, relieved and grateful to my family. I will always remember the joy we shared that evening."]
  }
);
