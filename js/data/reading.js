/* ===== Reading passages (medical topics) =====
   level: "elementary" | "pre" | "inter"
   Har bir matnda comprehension savollari (answer = to'g'ri variant indeksi).
*/
window.ME70_READING = [
  /* ---------------- ELEMENTARY ---------------- */
  {
    id: "el-1", level: "elementary", title: "A Visit to the Doctor",
    text: [
      "Tom does not feel well today. He has a headache and a high temperature.",
      "He goes to the doctor. The doctor checks his temperature and listens to his heart.",
      "The doctor says, \"You have a cold. Drink a lot of water and rest at home.\"",
      "Tom takes the medicine and goes to bed early. The next day he feels much better."
    ],
    questions: [
      { q: "How does Tom feel today?", options: ["Very good", "Not well", "Happy", "Hungry"], answer: 1 },
      { q: "What does the doctor check?", options: ["His eyes", "His temperature", "His teeth", "His hair"], answer: 1 },
      { q: "What does the doctor say Tom has?", options: ["A cold", "A broken leg", "An allergy", "A toothache"], answer: 0 },
      { q: "What does the doctor tell Tom to do?", options: ["Run fast", "Drink water and rest", "Go to work", "Eat ice cream"], answer: 1 }
    ]
  },
  {
    id: "el-2", level: "elementary", title: "The Nurse at Work",
    text: [
      "Anna is a nurse. She works at a small hospital in the city.",
      "Every morning she helps the patients. She gives them medicine and food.",
      "She is kind and friendly. The patients like her very much.",
      "In the evening, Anna goes home. She is tired but happy."
    ],
    questions: [
      { q: "What is Anna's job?", options: ["A doctor", "A nurse", "A teacher", "A cook"], answer: 1 },
      { q: "When does she help the patients?", options: ["Every night", "Every morning", "Once a week", "Never"], answer: 1 },
      { q: "How do the patients feel about Anna?", options: ["They like her", "They are afraid of her", "They don't know her", "They are angry"], answer: 0 },
      { q: "How does Anna feel in the evening?", options: ["Sad", "Tired but happy", "Sick", "Hungry"], answer: 1 }
    ]
  },
  {
    id: "el-3", level: "elementary", title: "Healthy Habits",
    text: [
      "Our body needs good food, clean water and sleep.",
      "We must eat fruit and vegetables every day. They give us vitamins.",
      "We should drink water and do some sport. Sport makes the heart strong.",
      "Sleep is also important. Children need about ten hours of sleep."
    ],
    questions: [
      { q: "What gives us vitamins?", options: ["Candy", "Fruit and vegetables", "Coffee", "Cake"], answer: 1 },
      { q: "What makes the heart strong?", options: ["Sleeping all day", "Sport", "Watching TV", "Eating fast food"], answer: 1 },
      { q: "How many hours of sleep do children need?", options: ["Two hours", "Four hours", "About ten hours", "No sleep"], answer: 2 },
      { q: "What does our body need?", options: ["Only candy", "Good food, water and sleep", "Only TV", "Nothing"], answer: 1 }
    ]
  },
  {
    id: "el-4", level: "elementary", title: "At the Pharmacy",
    text: [
      "Maria has a bad cough. She goes to the pharmacy near her house.",
      "The pharmacist gives her some syrup and tells her how to use it.",
      "\"Take one spoon three times a day,\" he says.",
      "Maria pays for the medicine and says thank you."
    ],
    questions: [
      { q: "What problem does Maria have?", options: ["A bad cough", "A broken arm", "A headache", "A fever"], answer: 0 },
      { q: "Where does she go?", options: ["To school", "To the pharmacy", "To the park", "To the bank"], answer: 1 },
      { q: "How often must she take the syrup?", options: ["Once a week", "Three times a day", "Never", "Every hour"], answer: 1 },
      { q: "Who helps Maria?", options: ["A teacher", "A pharmacist", "A driver", "A nurse"], answer: 1 }
    ]
  },
  {
    id: "el-5", level: "elementary", title: "My Friend is Sick",
    text: [
      "My friend Sam is sick. He has a sore throat and he cannot speak well.",
      "I call him and ask how he is. He says he is a little better.",
      "His mother makes him hot tea with honey and lemon.",
      "Sam stays in bed and rests. Soon he will be healthy again."
    ],
    questions: [
      { q: "What is wrong with Sam?", options: ["A sore throat", "A broken leg", "Bad eyes", "A toothache"], answer: 0 },
      { q: "What does his mother make?", options: ["Cold water", "Hot tea with honey", "Pizza", "Ice cream"], answer: 1 },
      { q: "What does Sam do?", options: ["Goes to school", "Plays football", "Stays in bed and rests", "Runs outside"], answer: 2 },
      { q: "How is Sam when his friend calls?", options: ["A little better", "Much worse", "Perfect", "Angry"], answer: 0 }
    ]
  },

  /* ---------------- PRE-INTERMEDIATE ---------------- */
  {
    id: "pre-1", level: "pre", title: "What Happens During a Check-up",
    text: [
      "A regular check-up is an important part of staying healthy. During a check-up, the doctor examines the patient even if the patient feels fine.",
      "First, the nurse measures the patient's weight, height and blood pressure. Then the doctor listens to the heart and lungs with a stethoscope.",
      "The doctor may also ask about the patient's diet, sleep and exercise. Sometimes a blood test is needed to check for problems that have no clear symptoms.",
      "Doctors recommend a check-up at least once a year. Finding a problem early often makes the treatment easier and faster."
    ],
    questions: [
      { q: "When should a person have a check-up?", options: ["Only when very sick", "At least once a year", "Every ten years", "Never"], answer: 1 },
      { q: "What does the nurse measure first?", options: ["Eyesight", "Weight, height and blood pressure", "Hair colour", "Shoe size"], answer: 1 },
      { q: "What does the doctor use to listen to the heart?", options: ["A thermometer", "A stethoscope", "An X-ray", "A syringe"], answer: 1 },
      { q: "Why is finding a problem early good?", options: ["It costs more", "Treatment is easier and faster", "It is more painful", "Nothing changes"], answer: 1 }
    ]
  },
  {
    id: "pre-2", level: "pre", title: "The Importance of Sleep",
    text: [
      "Sleep is not a waste of time. While we sleep, our body repairs itself and our brain stores new information.",
      "Adults usually need seven to eight hours of sleep each night. People who sleep too little often feel tired, sad or unable to concentrate.",
      "Poor sleep over a long time can lead to serious health problems, such as heart disease and a weak immune system.",
      "To sleep better, experts suggest a regular bedtime, a dark and quiet room, and no phones before sleep."
    ],
    questions: [
      { q: "What does the brain do during sleep?", options: ["Nothing", "Stores new information", "Gets weaker", "Stops working forever"], answer: 1 },
      { q: "How many hours of sleep do adults usually need?", options: ["2-3 hours", "7-8 hours", "12-14 hours", "1 hour"], answer: 1 },
      { q: "What can poor sleep lead to?", options: ["Better health", "Serious health problems", "More energy", "Stronger bones only"], answer: 1 },
      { q: "What is one tip for better sleep?", options: ["Use the phone in bed", "Drink coffee at night", "Keep a regular bedtime", "Sleep in a bright room"], answer: 2 }
    ]
  },
  {
    id: "pre-3", level: "pre", title: "First Aid Basics",
    text: [
      "First aid is the help we give to an injured person before professional medical care arrives. Knowing basic first aid can save a life.",
      "If someone has a small cut, you should clean the wound with water and cover it with a clean bandage to stop the bleeding.",
      "If a person faints, lay them on their back and raise their legs a little. Make sure they have fresh air.",
      "In a serious emergency, you must call an ambulance immediately and stay calm while you wait for help."
    ],
    questions: [
      { q: "What is first aid?", options: ["A type of medicine", "Help before professional care arrives", "A hospital room", "A doctor's job only"], answer: 1 },
      { q: "What should you do for a small cut?", options: ["Ignore it", "Clean it and cover it", "Rub dirt on it", "Cut it more"], answer: 1 },
      { q: "What should you do if a person faints?", options: ["Make them stand up fast", "Lay them down and raise their legs", "Give them coffee", "Leave them alone"], answer: 1 },
      { q: "What must you do in a serious emergency?", options: ["Wait quietly forever", "Call an ambulance immediately", "Go home", "Do nothing"], answer: 1 }
    ]
  },
  {
    id: "pre-4", level: "pre", title: "Why We Get a Fever",
    text: [
      "A fever is a rise in body temperature above the normal level of about 37 degrees Celsius. It is not a disease itself but a sign that the body is fighting something.",
      "When bacteria or a virus enter the body, the immune system reacts. A higher temperature helps the body fight these germs.",
      "A mild fever is usually not dangerous. People should rest, drink plenty of fluids and stay warm.",
      "However, a very high fever, especially in young children, needs a doctor's attention as soon as possible."
    ],
    questions: [
      { q: "What is a fever?", options: ["A disease", "A rise in body temperature", "A type of medicine", "A broken bone"], answer: 1 },
      { q: "What is the normal body temperature?", options: ["About 37°C", "About 50°C", "About 20°C", "About 100°C"], answer: 0 },
      { q: "Why does the body raise its temperature?", options: ["To feel cold", "To fight germs", "To sleep", "For no reason"], answer: 1 },
      { q: "When does a fever need a doctor?", options: ["When it is mild", "When it is very high, especially in children", "Never", "Only in adults"], answer: 1 }
    ]
  },
  {
    id: "pre-5", level: "pre", title: "Vaccines and How They Work",
    text: [
      "Vaccines are one of the greatest achievements of modern medicine. They protect people from many dangerous diseases.",
      "A vaccine contains a weak or inactive part of a germ. When it enters the body, the immune system learns to recognise that germ.",
      "Later, if the real germ attacks, the body can fight it quickly because it already knows how. This is called immunity.",
      "Thanks to vaccines, diseases that once killed millions of people are now rare in many countries."
    ],
    questions: [
      { q: "What do vaccines do?", options: ["Cause diseases", "Protect people from diseases", "Make germs stronger", "Replace food"], answer: 1 },
      { q: "What does a vaccine contain?", options: ["A weak or inactive part of a germ", "Only water", "Strong poison", "Vitamins only"], answer: 0 },
      { q: "What does the immune system learn to do?", options: ["Sleep", "Recognise the germ", "Forget the germ", "Grow taller"], answer: 1 },
      { q: "What is the result of vaccines mentioned in the text?", options: ["More disease", "Some deadly diseases are now rare", "Nothing", "Higher fever"], answer: 1 }
    ]
  },

  /* ---------------- INTERMEDIATE ---------------- */
  {
    id: "int-1", level: "inter", title: "The Circulatory System",
    text: [
      "The circulatory system is the body's transport network, responsible for moving blood, oxygen and nutrients to every cell. At its centre lies the heart, a muscular organ roughly the size of a fist.",
      "The heart pumps oxygen-rich blood through arteries to the tissues, while veins return oxygen-poor blood back to the lungs, where it collects fresh oxygen. This continuous cycle happens thousands of times a day.",
      "Blood pressure measures the force of blood against the artery walls. When this pressure remains too high over time, a condition known as hypertension, it can damage the arteries and increase the risk of heart attack and stroke.",
      "Maintaining a healthy circulatory system depends on regular exercise, a balanced diet low in salt and saturated fat, and avoiding tobacco. Early detection of problems through routine screening is essential."
    ],
    questions: [
      { q: "What is the main role of the circulatory system?", options: ["To digest food", "To transport blood, oxygen and nutrients", "To produce bones", "To store memories"], answer: 1 },
      { q: "What do arteries carry away from the heart?", options: ["Oxygen-poor blood", "Oxygen-rich blood", "Air only", "Water"], answer: 1 },
      { q: "What is hypertension?", options: ["Low blood pressure", "Continuously high blood pressure", "A broken artery", "A type of vaccine"], answer: 1 },
      { q: "Which habit helps the circulatory system?", options: ["Smoking tobacco", "Eating lots of salt", "Regular exercise", "Avoiding all movement"], answer: 2 }
    ]
  },
  {
    id: "int-2", level: "inter", title: "Antibiotic Resistance",
    text: [
      "Antibiotics revolutionised medicine in the twentieth century, turning once-deadly infections into easily treatable conditions. However, their overuse has created a serious global threat: antibiotic resistance.",
      "Resistance occurs when bacteria change in ways that allow them to survive the drugs designed to kill them. These resistant bacteria can then multiply and spread, making infections much harder to treat.",
      "A major cause is the unnecessary use of antibiotics, for example taking them for viral infections such as the common cold, against which they have no effect. Not finishing a prescribed course also contributes to the problem.",
      "To slow resistance, doctors now prescribe antibiotics more carefully, and patients are urged to take them exactly as directed. Scientists warn that without action, common infections could once again become life-threatening."
    ],
    questions: [
      { q: "What is antibiotic resistance?", options: ["When patients refuse medicine", "When bacteria survive the drugs meant to kill them", "When antibiotics get cheaper", "A new vaccine"], answer: 1 },
      { q: "Why are antibiotics useless against a common cold?", options: ["Colds are caused by viruses", "Colds are not real", "They are too strong", "They cost too much"], answer: 0 },
      { q: "What behaviour contributes to resistance?", options: ["Finishing the full course", "Not finishing a prescribed course", "Resting at home", "Drinking water"], answer: 1 },
      { q: "What do scientists warn could happen?", options: ["Infections become harmless", "Common infections could become life-threatening again", "Antibiotics will disappear naturally", "Bacteria will vanish"], answer: 1 }
    ]
  },
  {
    id: "int-3", level: "inter", title: "Understanding Diabetes",
    text: [
      "Diabetes is a chronic condition that affects how the body turns food into energy. Normally, the body breaks food down into glucose and releases insulin, a hormone that helps glucose enter the cells.",
      "In people with diabetes, this process does not work properly. Either the body does not produce enough insulin, or it cannot use insulin effectively, causing glucose to build up in the blood.",
      "Over time, high blood sugar can damage the eyes, kidneys, nerves and heart. Common symptoms include extreme thirst, frequent urination, tiredness and slow-healing wounds.",
      "Although there is no cure, diabetes can be managed with a healthy diet, regular physical activity, monitoring of blood sugar and, when necessary, medication or insulin injections."
    ],
    questions: [
      { q: "What is the role of insulin?", options: ["To break bones", "To help glucose enter the cells", "To raise body temperature", "To clean the blood"], answer: 1 },
      { q: "What happens to glucose in people with diabetes?", options: ["It disappears", "It builds up in the blood", "It turns into bone", "It leaves through the lungs"], answer: 1 },
      { q: "Which is a common symptom of diabetes?", options: ["Frequent urination and extreme thirst", "Green skin", "Loss of hearing only", "Sudden height growth"], answer: 0 },
      { q: "How can diabetes be managed?", options: ["It cannot be managed at all", "Diet, exercise, monitoring and medication", "Only by surgery", "By sleeping more"], answer: 1 }
    ]
  },
  {
    id: "int-4", level: "inter", title: "The Role of the Immune System",
    text: [
      "The immune system is the body's defence force, a complex network of cells, tissues and organs that work together to protect us from harmful invaders such as bacteria, viruses and other pathogens.",
      "When a pathogen enters the body, white blood cells identify it as foreign and launch an attack. Some cells destroy the invader directly, while others produce antibodies that mark it for destruction.",
      "After fighting off an infection, the immune system often 'remembers' the pathogen. This memory allows the body to respond faster and more effectively if the same threat appears again.",
      "A healthy lifestyle strengthens immunity. Adequate sleep, a nutritious diet, regular exercise and managing stress all help the immune system function at its best."
    ],
    questions: [
      { q: "What is the immune system's main job?", options: ["To digest food", "To protect the body from harmful invaders", "To pump blood", "To grow hair"], answer: 1 },
      { q: "What do some white blood cells produce?", options: ["Glucose", "Antibodies", "Bones", "Insulin"], answer: 1 },
      { q: "Why is immune 'memory' useful?", options: ["It slows the body down", "It lets the body respond faster next time", "It causes disease", "It has no use"], answer: 1 },
      { q: "What strengthens immunity?", options: ["Lack of sleep", "A healthy lifestyle", "Constant stress", "Skipping meals"], answer: 1 }
    ]
  }
];


/* ===== BATCH 2: more passages ===== */
window.ME70_READING.push(
  {
    id: "el-6", level: "elementary", title: "Brush Your Teeth",
    text: [
      "We must clean our teeth every day. Brushing keeps the teeth strong and healthy.",
      "Brush your teeth two times a day: in the morning and before bed.",
      "Use a small brush and a little toothpaste. Brush for about two minutes.",
      "If you eat too much sugar, your teeth can hurt. So eat fruit and drink water."
    ],
    questions: [
      { q: "How many times a day should you brush?", options: ["One time", "Two times", "Five times", "Never"], answer: 1 },
      { q: "What do you use to brush?", options: ["A brush and toothpaste", "A spoon", "Soap", "A towel"], answer: 0 },
      { q: "What can hurt your teeth?", options: ["Water", "Fruit", "Too much sugar", "Sleep"], answer: 2 },
      { q: "How long should you brush?", options: ["Two minutes", "One hour", "Ten seconds", "All day"], answer: 0 }
    ]
  },
  {
    id: "el-7", level: "elementary", title: "Wash Your Hands",
    text: [
      "Our hands touch many things every day. They can carry germs.",
      "We must wash our hands with soap and water often.",
      "Wash your hands before you eat and after you use the toilet.",
      "Clean hands help us stay healthy and stop the spread of disease."
    ],
    questions: [
      { q: "What can our hands carry?", options: ["Germs", "Water only", "Books", "Food"], answer: 0 },
      { q: "What do we wash our hands with?", options: ["Only water", "Soap and water", "Milk", "Sand"], answer: 1 },
      { q: "When should you wash your hands?", options: ["Before eating", "Never", "Only at night", "Once a year"], answer: 0 },
      { q: "Why are clean hands important?", options: ["They look nice", "They help us stay healthy", "They are soft", "No reason"], answer: 1 }
    ]
  },
  {
    id: "el-8", level: "elementary", title: "A Small Cut",
    text: [
      "Ali was playing in the garden. He fell and cut his finger.",
      "His mother washed the cut with clean water.",
      "Then she put a small bandage on his finger.",
      "Soon the cut was better, and Ali could play again."
    ],
    questions: [
      { q: "Where was Ali playing?", options: ["In the garden", "At school", "In the car", "In bed"], answer: 0 },
      { q: "What did he cut?", options: ["His finger", "His leg", "His ear", "His hair"], answer: 0 },
      { q: "What did his mother put on the cut?", options: ["A bandage", "Sugar", "Oil", "Paper"], answer: 0 },
      { q: "How did the story end?", options: ["He went to hospital", "The cut got better", "He cried all day", "He lost his finger"], answer: 1 }
    ]
  },
  {
    id: "el-9", level: "elementary", title: "At the Dentist",
    text: [
      "Sara has a toothache. Her tooth hurts when she eats.",
      "She goes to the dentist with her father.",
      "The dentist looks at her teeth and fixes the bad tooth.",
      "The dentist says, \"Brush your teeth every day and eat less sugar.\""
    ],
    questions: [
      { q: "What is wrong with Sara?", options: ["A toothache", "A headache", "A cough", "A cold"], answer: 0 },
      { q: "Who does she go with?", options: ["Her father", "Her teacher", "Alone", "Her dog"], answer: 0 },
      { q: "Who fixes her tooth?", options: ["The dentist", "The nurse", "Her father", "The driver"], answer: 0 },
      { q: "What advice does the dentist give?", options: ["Eat more sugar", "Brush every day and eat less sugar", "Never brush", "Sleep more"], answer: 1 }
    ]
  },
  {
    id: "el-10", level: "elementary", title: "Sleep Well",
    text: [
      "Sleep is very important for our body. When we sleep, the body rests.",
      "Children need about nine or ten hours of sleep every night.",
      "Before bed, it is good to turn off the phone and the lights.",
      "After good sleep, we feel happy and full of energy."
    ],
    questions: [
      { q: "What happens when we sleep?", options: ["The body rests", "We get sick", "We grow tired", "Nothing"], answer: 0 },
      { q: "How many hours do children need?", options: ["Two hours", "Nine or ten hours", "Twenty hours", "One hour"], answer: 1 },
      { q: "What is good to do before bed?", options: ["Turn off the phone and lights", "Eat a lot", "Run fast", "Drink coffee"], answer: 0 },
      { q: "How do we feel after good sleep?", options: ["Tired", "Happy and full of energy", "Angry", "Hungry"], answer: 1 }
    ]
  },
  {
    id: "pre-6", level: "pre", title: "Healthy Eating",
    text: [
      "A healthy diet gives the body the energy and nutrients it needs to work well.",
      "We should eat plenty of fruit and vegetables because they are full of vitamins.",
      "It is better to eat less sugar, salt and fried food, which can harm the heart.",
      "Drinking enough water every day is also an important part of staying healthy."
    ],
    questions: [
      { q: "What does a healthy diet give the body?", options: ["Energy and nutrients", "Only sugar", "Nothing useful", "More illness"], answer: 0 },
      { q: "Why should we eat fruit and vegetables?", options: ["They are expensive", "They are full of vitamins", "They taste bad", "They cause disease"], answer: 1 },
      { q: "What should we eat less of?", options: ["Fruit", "Water", "Sugar, salt and fried food", "Vegetables"], answer: 2 },
      { q: "What else is important for health?", options: ["Drinking enough water", "Skipping meals", "Eating at night only", "Avoiding all food"], answer: 0 }
    ]
  },
  {
    id: "pre-7", level: "pre", title: "Why Exercise Matters",
    text: [
      "Regular exercise is one of the best things you can do for your health.",
      "It makes the heart and muscles stronger and helps control body weight.",
      "Exercise also reduces stress and helps people sleep better at night.",
      "Doctors suggest at least thirty minutes of activity, such as walking, most days."
    ],
    questions: [
      { q: "What does exercise make stronger?", options: ["The heart and muscles", "Only the hair", "Nothing", "The teeth only"], answer: 0 },
      { q: "How does exercise affect stress?", options: ["It increases stress", "It reduces stress", "It has no effect", "It causes illness"], answer: 1 },
      { q: "How does it affect sleep?", options: ["Helps people sleep better", "Stops sleep", "Makes sleep shorter", "No effect"], answer: 0 },
      { q: "How much activity do doctors suggest?", options: ["At least 30 minutes most days", "Five hours a day", "Once a year", "None"], answer: 0 }
    ]
  },
  {
    id: "pre-8", level: "pre", title: "Caring for Your Eyes",
    text: [
      "Our eyes work hard all day, so we should take good care of them.",
      "Looking at a screen for too long can make the eyes tired and dry.",
      "Experts suggest the 20-20-20 rule: every twenty minutes, look at something far away for twenty seconds.",
      "Eating vegetables like carrots and having regular eye checks also help keep our eyes healthy."
    ],
    questions: [
      { q: "What can make the eyes tired and dry?", options: ["Looking at a screen too long", "Sleeping", "Drinking water", "Closing them"], answer: 0 },
      { q: "What is the 20-20-20 rule about?", options: ["Eating 20 carrots", "Resting the eyes regularly", "Sleeping 20 hours", "Reading 20 books"], answer: 1 },
      { q: "Which food is mentioned as good for eyes?", options: ["Carrots", "Cake", "Salt", "Coffee"], answer: 0 },
      { q: "What else helps keep eyes healthy?", options: ["Regular eye checks", "Never blinking", "Bright lights", "More screen time"], answer: 0 }
    ]
  },
  {
    id: "pre-9", level: "pre", title: "The Common Cold",
    text: [
      "The common cold is a mild infection of the nose and throat caused by a virus.",
      "Its symptoms include a runny nose, sneezing, a sore throat and sometimes a mild fever.",
      "There is no medicine that cures a cold, but rest and plenty of fluids help the body recover.",
      "Washing your hands often and avoiding sick people can help you not catch a cold."
    ],
    questions: [
      { q: "What causes the common cold?", options: ["A virus", "A broken bone", "Too much sleep", "Cold weather only"], answer: 0 },
      { q: "Which is a symptom of a cold?", options: ["A runny nose", "A broken leg", "Better eyesight", "Green skin"], answer: 0 },
      { q: "What helps the body recover?", options: ["Rest and plenty of fluids", "Running a marathon", "Eating sugar", "Nothing"], answer: 0 },
      { q: "How can you avoid catching a cold?", options: ["Wash your hands often", "Touch sick people", "Never wash", "Stay awake"], answer: 0 }
    ]
  },
  {
    id: "int-5", level: "inter", title: "The Digestive System",
    text: [
      "The digestive system is the group of organs that turns the food we eat into energy and nutrients the body can use.",
      "Digestion begins in the mouth, where teeth break food into small pieces and saliva starts to break it down chemically.",
      "The food then travels to the stomach and intestines, where it is broken down further and useful substances are absorbed into the blood.",
      "Whatever the body cannot use is removed as waste. A diet rich in fibre and water helps the whole system work smoothly."
    ],
    questions: [
      { q: "What is the main job of the digestive system?", options: ["To pump blood", "To turn food into energy and nutrients", "To think", "To produce bones"], answer: 1 },
      { q: "Where does digestion begin?", options: ["In the mouth", "In the feet", "In the lungs", "In the brain"], answer: 0 },
      { q: "What happens in the stomach and intestines?", options: ["Food is broken down and nutrients absorbed", "Blood is made into bone", "Air is stored", "Nothing"], answer: 0 },
      { q: "What helps the digestive system work smoothly?", options: ["A diet rich in fibre and water", "No water at all", "Only sugar", "Skipping all meals"], answer: 0 }
    ]
  },
  {
    id: "int-6", level: "inter", title: "Why Mental Health Matters",
    text: [
      "Mental health is just as important as physical health, yet it is often ignored. It affects how we think, feel and handle daily life.",
      "Stress, anxiety and depression are common problems that can affect anyone, regardless of age or background.",
      "Simple habits can protect mental health: staying connected with friends, getting enough sleep, exercising and taking breaks from work.",
      "When difficulties become too heavy to manage alone, talking to a doctor or counsellor is a sign of strength, not weakness."
    ],
    questions: [
      { q: "How important is mental health, according to the text?", options: ["Less than physical health", "Just as important as physical health", "Not important", "Only for some people"], answer: 1 },
      { q: "Who can mental health problems affect?", options: ["Only old people", "Anyone", "Only children", "No one"], answer: 1 },
      { q: "Which habit protects mental health?", options: ["Staying connected with friends", "Never sleeping", "Working without breaks", "Avoiding everyone"], answer: 0 },
      { q: "What does the text say about asking for help?", options: ["It is a sign of weakness", "It is a sign of strength", "It is useless", "It should be avoided"], answer: 1 }
    ]
  }
);


/* ===== BATCH 3: Elementary passages (to reach 25) ===== */
window.ME70_READING.push(
  {
    id: "el-11", level: "elementary", title: "At the Hospital",
    text: ["Mr. Karimov is at the hospital today.", "He has a pain in his back and cannot walk well.", "A doctor and a nurse help him. They give him medicine.", "After two days, Mr. Karimov feels better and goes home."],
    questions: [
      { q: "Where is Mr. Karimov?", options: ["At the hospital", "At school", "At the market", "At home"], answer: 0 },
      { q: "What is his problem?", options: ["A pain in his back", "A cough", "A cold", "A headache"], answer: 0 },
      { q: "Who helps him?", options: ["A doctor and a nurse", "A teacher", "A driver", "A cook"], answer: 0 },
      { q: "How does he feel after two days?", options: ["Better", "Worse", "The same", "Angry"], answer: 0 }
    ]
  },
  {
    id: "el-12", level: "elementary", title: "Eat Fruit Every Day",
    text: ["Fruit is good for our health.", "Apples, bananas and oranges have many vitamins.", "Vitamins help our body to be strong.", "We should eat fruit every day."],
    questions: [
      { q: "What is good for our health?", options: ["Fruit", "Candy", "Chips", "Soda"], answer: 0 },
      { q: "What do apples and oranges have?", options: ["Vitamins", "Salt", "Oil", "Sugar only"], answer: 0 },
      { q: "What do vitamins do?", options: ["Help the body be strong", "Make us tired", "Cause pain", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "el-13", level: "elementary", title: "A Walk in the Park",
    text: ["Every evening, Dilnoza walks in the park.", "Walking is a good and easy exercise.", "It makes her legs strong and her heart healthy.", "After the walk, she feels happy and calm."],
    questions: [
      { q: "When does Dilnoza walk?", options: ["Every evening", "Every night only", "Once a year", "Never"], answer: 0 },
      { q: "What kind of exercise is walking?", options: ["Good and easy", "Hard and bad", "Dangerous", "Useless"], answer: 0 },
      { q: "What does walking make healthy?", options: ["Her heart", "Her phone", "Her car", "Her shoes"], answer: 0 }
    ]
  },
  {
    id: "el-14", level: "elementary", title: "My Daily Routine",
    text: ["I wake up at seven o'clock every morning.", "I wash my face, brush my teeth and eat breakfast.", "Then I go to work by bus.", "In the evening, I rest and go to bed early."],
    questions: [
      { q: "What time does the person wake up?", options: ["At seven o'clock", "At noon", "At midnight", "At ten"], answer: 0 },
      { q: "How does the person go to work?", options: ["By bus", "By plane", "By boat", "On foot"], answer: 0 },
      { q: "What does the person do in the evening?", options: ["Rests and sleeps early", "Works all night", "Goes shopping", "Runs a race"], answer: 0 }
    ]
  },
  {
    id: "el-15", level: "elementary", title: "Drink Enough Water",
    text: ["Our body needs water every day.", "Water helps the blood and the skin.", "When it is hot, we must drink more water.", "Doctors say we should drink many glasses of water a day."],
    questions: [
      { q: "What does our body need every day?", options: ["Water", "Coffee", "Soda", "Juice only"], answer: 0 },
      { q: "What does water help?", options: ["The blood and skin", "The phone", "The car", "Nothing"], answer: 0 },
      { q: "When must we drink more water?", options: ["When it is hot", "When we sleep", "Never", "When it is cold only"], answer: 0 }
    ]
  },
  {
    id: "el-16", level: "elementary", title: "The School Nurse",
    text: ["There is a nurse at our school.", "When a child feels sick, the nurse helps.", "She checks the temperature and gives simple care.", "If the child is very sick, she calls the parents."],
    questions: [
      { q: "Who helps sick children at school?", options: ["The nurse", "The driver", "The cook", "The guard"], answer: 0 },
      { q: "What does she check?", options: ["The temperature", "The homework", "The shoes", "The bag"], answer: 0 },
      { q: "What does she do if a child is very sick?", options: ["Calls the parents", "Goes home", "Does nothing", "Laughs"], answer: 0 }
    ]
  },
  {
    id: "el-17", level: "elementary", title: "A Cold Winter Day",
    text: ["It is very cold today. There is snow outside.", "People wear warm coats, hats and gloves.", "In cold weather, some people catch a cold.", "We must keep warm to stay healthy."],
    questions: [
      { q: "What is the weather like?", options: ["Very cold with snow", "Hot and sunny", "Rainy and warm", "Windy and dry"], answer: 0 },
      { q: "What do people wear?", options: ["Warm coats, hats and gloves", "Swimsuits", "Nothing", "Light shirts"], answer: 0 },
      { q: "Why must we keep warm?", options: ["To stay healthy", "To feel cold", "To get sick", "For no reason"], answer: 0 }
    ]
  },
  {
    id: "el-18", level: "elementary", title: "Taking Medicine",
    text: ["When we are sick, the doctor gives us medicine.", "We must take the right amount at the right time.", "Too much medicine can be dangerous.", "Always read the instructions before you take a pill."],
    questions: [
      { q: "Who gives us medicine when we are sick?", options: ["The doctor", "The teacher", "The driver", "The neighbour"], answer: 0 },
      { q: "How must we take medicine?", options: ["The right amount at the right time", "As much as we want", "Never", "Only at night"], answer: 0 },
      { q: "What can too much medicine be?", options: ["Dangerous", "Healthy", "Tasty", "Free"], answer: 0 }
    ]
  },
  {
    id: "el-19", level: "elementary", title: "A Healthy Breakfast",
    text: ["Breakfast is the first meal of the day.", "A good breakfast gives us energy for the morning.", "Bread, eggs and fruit make a healthy breakfast.", "Children who eat breakfast study better at school."],
    questions: [
      { q: "What is breakfast?", options: ["The first meal of the day", "A type of sport", "A drink", "A school"], answer: 0 },
      { q: "What does a good breakfast give us?", options: ["Energy", "A cold", "A headache", "Nothing"], answer: 0 },
      { q: "Who studies better at school?", options: ["Children who eat breakfast", "Children who skip breakfast", "No one", "Only adults"], answer: 0 }
    ]
  },
  {
    id: "el-20", level: "elementary", title: "Helping an Old Man",
    text: ["An old man fell down on the street.", "A young woman saw him and ran to help.", "She called an ambulance and stayed with him.", "Soon the doctors came and took the man to hospital."],
    questions: [
      { q: "What happened to the old man?", options: ["He fell down", "He ran fast", "He went home", "He slept"], answer: 0 },
      { q: "What did the young woman do?", options: ["She helped and called an ambulance", "She ran away", "She laughed", "She did nothing"], answer: 0 },
      { q: "Where did they take the man?", options: ["To hospital", "To school", "To the park", "To the shop"], answer: 0 }
    ]
  },
  {
    id: "el-21", level: "elementary", title: "Clean Hands, Healthy Life",
    text: ["Dirty hands carry many germs.", "Germs can make us sick.", "We must wash our hands with soap before eating.", "Clean hands keep us healthy."],
    questions: [
      { q: "What do dirty hands carry?", options: ["Germs", "Water", "Food", "Books"], answer: 0 },
      { q: "What can germs do?", options: ["Make us sick", "Make us strong", "Help us", "Clean us"], answer: 0 },
      { q: "When must we wash our hands?", options: ["Before eating", "After sleeping only", "Never", "Once a month"], answer: 0 }
    ]
  },
  {
    id: "el-22", level: "elementary", title: "At the Pharmacy Again",
    text: ["My grandmother needs her medicine.", "We go to the pharmacy near our home.", "The pharmacist gives us the right pills.", "He tells us to take one pill after dinner."],
    questions: [
      { q: "Who needs medicine?", options: ["My grandmother", "My teacher", "My friend", "The driver"], answer: 0 },
      { q: "Where do we go?", options: ["To the pharmacy", "To the bank", "To the park", "To school"], answer: 0 },
      { q: "When should she take the pill?", options: ["After dinner", "Before breakfast", "At midnight", "Never"], answer: 0 }
    ]
  },
  {
    id: "el-23", level: "elementary", title: "Exercise is Fun",
    text: ["Children love to run and play.", "Running and playing are good exercise.", "Exercise makes the body strong and healthy.", "It is fun to be active with friends."],
    questions: [
      { q: "What do children love to do?", options: ["Run and play", "Sleep all day", "Sit only", "Eat candy"], answer: 0 },
      { q: "What does exercise make?", options: ["The body strong and healthy", "The body weak", "Us sick", "Nothing"], answer: 0 },
      { q: "How is it to be active with friends?", options: ["Fun", "Boring", "Dangerous", "Sad"], answer: 0 }
    ]
  },
  {
    id: "el-24", level: "elementary", title: "The Sick Cat",
    text: ["Our cat did not eat for two days.", "We took it to the animal doctor.", "The doctor said the cat had a small infection.", "After the medicine, the cat was happy and healthy again."],
    questions: [
      { q: "What was wrong with the cat?", options: ["It did not eat for two days", "It ran away", "It slept too much", "Nothing"], answer: 0 },
      { q: "Where did they take the cat?", options: ["To the animal doctor", "To school", "To the park", "To the shop"], answer: 0 },
      { q: "What did the cat have?", options: ["A small infection", "A broken leg", "A cold only", "A toothache"], answer: 0 }
    ]
  },
  {
    id: "el-25", level: "elementary", title: "Good Sleep, Good Day",
    text: ["Sleep helps our brain and body rest.", "Children need about ten hours of sleep.", "Before bed, do not use the phone.", "After a good sleep, we feel fresh and ready."],
    questions: [
      { q: "What does sleep help?", options: ["Our brain and body rest", "Our phone", "Our shoes", "Nothing"], answer: 0 },
      { q: "How many hours do children need?", options: ["About ten", "About two", "About twenty", "None"], answer: 0 },
      { q: "What should we not do before bed?", options: ["Use the phone", "Close our eyes", "Rest", "Sleep"], answer: 0 }
    ]
  }
);


/* ===== BATCH 4: Pre-Intermediate passages (to reach 20) ===== */
window.ME70_READING.push(
  {
    id: "pre-10", level: "pre", title: "Dealing with Stress",
    text: ["Stress is the body's reaction to difficult situations. A little stress is normal, but too much can harm our health.", "When we are stressed, the heart beats faster and we may feel tired or worried.", "Simple activities like walking, deep breathing and talking to friends can reduce stress.", "Getting enough sleep and taking breaks also help the mind stay calm."],
    questions: [
      { q: "What is stress?", options: ["The body's reaction to difficult situations", "A type of food", "A medicine", "A sport"], answer: 0 },
      { q: "What happens when we are stressed?", options: ["The heart beats faster", "We feel no change", "We grow taller", "We sleep better"], answer: 0 },
      { q: "What can reduce stress?", options: ["Walking and deep breathing", "Eating more sugar", "Working all night", "Avoiding sleep"], answer: 0 }
    ]
  },
  {
    id: "pre-11", level: "pre", title: "The Dangers of Smoking",
    text: ["Smoking is one of the most harmful habits for human health.", "Cigarettes contain chemicals that damage the lungs and heart.", "Smokers have a higher risk of cancer and breathing problems.", "Quitting smoking, even after many years, greatly improves health."],
    questions: [
      { q: "What does smoking damage?", options: ["The lungs and heart", "Only the hair", "The eyes only", "Nothing"], answer: 0 },
      { q: "What higher risk do smokers have?", options: ["Cancer and breathing problems", "Better health", "Stronger lungs", "More energy"], answer: 0 },
      { q: "What improves health?", options: ["Quitting smoking", "Smoking more", "Ignoring the problem", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "pre-12", level: "pre", title: "The Flu Vaccine",
    text: ["Every year, many people get the flu, especially in winter.", "The flu vaccine helps the body fight the virus before it causes illness.", "Doctors recommend the vaccine for children, older people and those with weak immune systems.", "Although the vaccine is not perfect, it greatly reduces serious illness."],
    questions: [
      { q: "When do many people get the flu?", options: ["Especially in winter", "Only in summer", "Never", "Once in ten years"], answer: 0 },
      { q: "What does the flu vaccine help the body do?", options: ["Fight the virus", "Get sick faster", "Stop eating", "Sleep more"], answer: 0 },
      { q: "Who do doctors recommend the vaccine for?", options: ["Children and older people", "No one", "Only athletes", "Only doctors"], answer: 0 }
    ]
  },
  {
    id: "pre-13", level: "pre", title: "Understanding Allergies",
    text: ["An allergy happens when the body reacts to something that is usually harmless.", "Common causes include pollen, dust, certain foods and animal hair.", "Symptoms can be a runny nose, sneezing, a rash or itchy eyes.", "People with serious allergies should avoid the cause and carry their medicine."],
    questions: [
      { q: "When does an allergy happen?", options: ["When the body reacts to something harmless", "When we sleep", "When we exercise", "Never"], answer: 0 },
      { q: "Which is a common cause of allergies?", options: ["Pollen and dust", "Reading", "Walking", "Sleeping"], answer: 0 },
      { q: "What should people with serious allergies do?", options: ["Avoid the cause and carry medicine", "Eat the cause", "Ignore it", "Stop breathing"], answer: 0 }
    ]
  },
  {
    id: "pre-14", level: "pre", title: "Strong Bones",
    text: ["Bones give our body shape and protect our organs.", "To keep bones strong, we need calcium, which is found in milk and cheese.", "Sunlight helps the body make vitamin D, which is also good for bones.", "Regular exercise makes bones and muscles stronger as we grow."],
    questions: [
      { q: "What do bones do?", options: ["Give shape and protect organs", "Pump blood", "Digest food", "Think"], answer: 0 },
      { q: "Where is calcium found?", options: ["Milk and cheese", "Only in water", "In plastic", "In paper"], answer: 0 },
      { q: "What helps the body make vitamin D?", options: ["Sunlight", "Darkness", "Cold water", "Noise"], answer: 0 }
    ]
  },
  {
    id: "pre-15", level: "pre", title: "Caring for Your Heart",
    text: ["The heart is a strong muscle that pumps blood all day and night.", "To keep it healthy, we should eat less fatty and salty food.", "Regular exercise and avoiding smoking protect the heart.", "Doctors also say that managing stress is good for heart health."],
    questions: [
      { q: "What is the heart?", options: ["A strong muscle that pumps blood", "A bone", "A type of food", "A nerve"], answer: 0 },
      { q: "What should we eat less of?", options: ["Fatty and salty food", "Vegetables", "Water", "Fruit"], answer: 0 },
      { q: "What protects the heart?", options: ["Exercise and not smoking", "Smoking", "Eating salt", "Sitting all day"], answer: 0 }
    ]
  },
  {
    id: "pre-16", level: "pre", title: "Hand Hygiene in Hospitals",
    text: ["In hospitals, clean hands are very important for safety.", "Doctors and nurses wash their hands before and after touching every patient.", "This simple action stops germs from spreading between patients.", "Hospitals also place hand gel near every bed and door."],
    questions: [
      { q: "Why are clean hands important in hospitals?", options: ["For safety", "For fun", "For decoration", "For no reason"], answer: 0 },
      { q: "When do doctors wash their hands?", options: ["Before and after touching every patient", "Once a week", "Never", "Only in the morning"], answer: 0 },
      { q: "What does hand washing stop?", options: ["Germs from spreading", "Patients from leaving", "Doctors from working", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "pre-17", level: "pre", title: "The Pharmacist's Job",
    text: ["A pharmacist is an expert in medicines who works in a pharmacy.", "They prepare and give out the drugs that doctors prescribe.", "Pharmacists explain how and when to take each medicine safely.", "They also warn patients about possible side effects."],
    questions: [
      { q: "Who is a pharmacist?", options: ["An expert in medicines", "A bus driver", "A teacher", "A cook"], answer: 0 },
      { q: "What do they give out?", options: ["The drugs doctors prescribe", "Food", "Books", "Tickets"], answer: 0 },
      { q: "What do pharmacists warn about?", options: ["Possible side effects", "The weather", "Football scores", "Traffic"], answer: 0 }
    ]
  },
  {
    id: "pre-18", level: "pre", title: "What Blood Does",
    text: ["Blood is a special liquid that travels through the whole body.", "It carries oxygen and food to every cell and removes waste.", "Blood also helps fight infection and heal wounds.", "An adult body contains about five litres of blood."],
    questions: [
      { q: "What does blood carry to cells?", options: ["Oxygen and food", "Only water", "Air only", "Nothing"], answer: 0 },
      { q: "What else does blood help with?", options: ["Fighting infection and healing wounds", "Growing hair only", "Sleeping", "Reading"], answer: 0 },
      { q: "How much blood does an adult have?", options: ["About five litres", "About fifty litres", "One drop", "None"], answer: 0 }
    ]
  },
  {
    id: "pre-19", level: "pre", title: "A Healthy Weight",
    text: ["Keeping a healthy weight is important for the whole body.", "Too much weight can cause problems with the heart and joints.", "A balanced diet and daily activity help control weight.", "It is better to make small, steady changes than to follow extreme diets."],
    questions: [
      { q: "Why is a healthy weight important?", options: ["For the whole body", "For the phone", "For the car", "For no reason"], answer: 0 },
      { q: "What can too much weight cause?", options: ["Problems with the heart and joints", "Better health", "Stronger bones", "Nothing"], answer: 0 },
      { q: "What is better than extreme diets?", options: ["Small, steady changes", "Not eating at all", "Eating only sugar", "Sleeping all day"], answer: 0 }
    ]
  },
  {
    id: "pre-20", level: "pre", title: "Drinking Water and Health",
    text: ["Water makes up more than half of the human body.", "We lose water when we sweat, breathe and go to the toilet.", "If we do not drink enough, we can feel tired and get a headache.", "Drinking water regularly keeps the body working well."],
    questions: [
      { q: "How much of the body is water?", options: ["More than half", "Almost none", "Exactly ten percent", "All of it"], answer: 0 },
      { q: "When do we lose water?", options: ["When we sweat and breathe", "When we read", "When we sleep only", "Never"], answer: 0 },
      { q: "What can happen if we do not drink enough?", options: ["We feel tired and get a headache", "We feel stronger", "We grow taller", "Nothing"], answer: 0 }
    ]
  }
);


/* ===== BATCH 5: Intermediate passages (to reach 15) ===== */
window.ME70_READING.push(
  {
    id: "int-7", level: "inter", title: "The Respiratory System",
    text: ["The respiratory system is responsible for bringing oxygen into the body and removing carbon dioxide, a waste gas.", "When we breathe in, air travels down the windpipe into the lungs, where tiny air sacs pass oxygen into the blood.", "The diaphragm, a large muscle below the lungs, moves down to pull air in and up to push it out.", "Smoking, pollution and infections can damage this system and make breathing difficult."],
    questions: [
      { q: "What is the respiratory system responsible for?", options: ["Bringing in oxygen and removing carbon dioxide", "Pumping blood", "Digesting food", "Storing memories"], answer: 0 },
      { q: "Where does oxygen pass into the blood?", options: ["In tiny air sacs in the lungs", "In the stomach", "In the bones", "In the skin"], answer: 0 },
      { q: "What is the diaphragm?", options: ["A large muscle below the lungs", "A bone", "A type of blood", "A nerve"], answer: 0 },
      { q: "What can damage the respiratory system?", options: ["Smoking and pollution", "Drinking water", "Sleeping", "Walking"], answer: 0 }
    ]
  },
  {
    id: "int-8", level: "inter", title: "The Nervous System",
    text: ["The nervous system controls almost everything the body does, from movement to thought.", "It is made up of the brain, the spinal cord and a huge network of nerves.", "Nerves carry electrical messages between the brain and the rest of the body at incredible speed.", "Damage to the nervous system, through injury or disease, can affect movement, feeling or memory."],
    questions: [
      { q: "What does the nervous system control?", options: ["Almost everything the body does", "Only the hair", "Only digestion", "Nothing"], answer: 0 },
      { q: "What is it made up of?", options: ["The brain, spinal cord and nerves", "Only bones", "Only blood", "Only muscles"], answer: 0 },
      { q: "What do nerves carry?", options: ["Electrical messages", "Food", "Air", "Water"], answer: 0 },
      { q: "What can damage to it affect?", options: ["Movement, feeling or memory", "Only the eyes", "The weather", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "int-9", level: "inter", title: "Vaccination and Herd Immunity",
    text: ["Vaccination protects not only the person who receives it but also the wider community.", "When most people in a group are vaccinated, a disease finds it hard to spread. This is called herd immunity.", "Herd immunity protects those who cannot be vaccinated, such as newborn babies or very sick people.", "If too few people are vaccinated, dangerous diseases can return and spread quickly."],
    questions: [
      { q: "Who does vaccination protect?", options: ["The person and the wider community", "Only doctors", "Only animals", "No one"], answer: 0 },
      { q: "What is herd immunity?", options: ["When a disease cannot spread easily because most are vaccinated", "A type of medicine", "A hospital", "A vaccine brand"], answer: 0 },
      { q: "Who does herd immunity protect?", options: ["Those who cannot be vaccinated", "Only adults", "Only the rich", "No one"], answer: 0 },
      { q: "What happens if too few are vaccinated?", options: ["Dangerous diseases can return", "Nothing changes", "Everyone gets stronger", "Diseases disappear"], answer: 0 }
    ]
  },
  {
    id: "int-10", level: "inter", title: "How Wounds Heal",
    text: ["Wound healing is a remarkable process that the body carries out in several stages.", "First, blood clots to stop the bleeding and form a protective scab over the wound.", "Then, special cells clean the area and fight any bacteria that may cause infection.", "Finally, new tissue grows to close the wound, sometimes leaving a scar behind."],
    questions: [
      { q: "How does the body carry out wound healing?", options: ["In several stages", "All at once", "Never", "Only with medicine"], answer: 0 },
      { q: "What happens first?", options: ["Blood clots and forms a scab", "A scar forms", "New tissue grows", "Nothing"], answer: 0 },
      { q: "What do special cells do?", options: ["Clean the area and fight bacteria", "Cause infection", "Stop the heart", "Grow hair"], answer: 0 },
      { q: "What may be left behind at the end?", options: ["A scar", "A bone", "A nerve", "Blood only"], answer: 0 }
    ]
  },
  {
    id: "int-11", level: "inter", title: "The Liver: A Busy Organ",
    text: ["The liver is one of the largest and busiest organs in the human body.", "It cleans the blood by removing harmful substances, including alcohol and waste.", "The liver also stores energy and produces a fluid called bile that helps digest fat.", "A healthy diet and avoiding too much alcohol help keep the liver working well."],
    questions: [
      { q: "How is the liver described?", options: ["One of the largest and busiest organs", "A small bone", "A type of blood", "A muscle in the leg"], answer: 0 },
      { q: "How does the liver clean the blood?", options: ["By removing harmful substances", "By adding waste", "By stopping it", "It does not"], answer: 0 },
      { q: "What does bile help with?", options: ["Digesting fat", "Pumping blood", "Thinking", "Breathing"], answer: 0 },
      { q: "What helps keep the liver healthy?", options: ["A healthy diet and less alcohol", "More alcohol", "No water", "Smoking"], answer: 0 }
    ]
  },
  {
    id: "int-12", level: "inter", title: "Infection Control",
    text: ["Infection control is a set of methods used to prevent the spread of harmful germs, especially in hospitals.", "Washing hands, wearing gloves and masks, and sterilising equipment are all key parts of it.", "Isolating patients with contagious diseases protects other patients and staff.", "Good infection control saves lives and reduces the time patients spend in hospital."],
    questions: [
      { q: "What is infection control?", options: ["Methods to prevent the spread of germs", "A type of surgery", "A medicine", "A disease"], answer: 0 },
      { q: "Which is a key part of it?", options: ["Washing hands and wearing gloves", "Sharing needles", "Ignoring hygiene", "Touching every surface"], answer: 0 },
      { q: "Why are contagious patients isolated?", options: ["To protect others", "To punish them", "For no reason", "To make them sicker"], answer: 0 },
      { q: "What does good infection control do?", options: ["Saves lives", "Spreads disease", "Wastes time", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "int-13", level: "inter", title: "A Balanced Diet",
    text: ["A balanced diet provides the body with the right mix of nutrients it needs to stay healthy.", "It includes carbohydrates for energy, proteins for growth and repair, and fats in small amounts.", "Vitamins and minerals, found mostly in fruit and vegetables, support many body functions.", "Eating a variety of foods in sensible amounts is the simplest rule of healthy eating."],
    questions: [
      { q: "What does a balanced diet provide?", options: ["The right mix of nutrients", "Only sugar", "Only water", "Nothing useful"], answer: 0 },
      { q: "What are proteins for?", options: ["Growth and repair", "Only energy", "Cooling the body", "Nothing"], answer: 0 },
      { q: "Where are vitamins and minerals mostly found?", options: ["Fruit and vegetables", "Only meat", "Plastic", "Water only"], answer: 0 },
      { q: "What is the simplest rule of healthy eating?", options: ["Eat a variety of foods in sensible amounts", "Eat only one food", "Never eat", "Eat only at night"], answer: 0 }
    ]
  },
  {
    id: "int-14", level: "inter", title: "The Skeleton",
    text: ["The human skeleton is the strong frame of bones that supports the body and gives it shape.", "An adult skeleton has 206 bones, from the tiny bones in the ear to the long bones in the leg.", "Bones protect important organs; for example, the skull protects the brain and the ribs protect the heart and lungs.", "Bones also produce blood cells and store minerals such as calcium."],
    questions: [
      { q: "What is the skeleton?", options: ["The frame of bones that supports the body", "A single muscle", "A type of blood", "An organ that pumps"], answer: 0 },
      { q: "How many bones does an adult skeleton have?", options: ["206", "12", "1000", "50"], answer: 0 },
      { q: "What does the skull protect?", options: ["The brain", "The stomach", "The foot", "The hair"], answer: 0 },
      { q: "What else do bones do?", options: ["Produce blood cells and store minerals", "Digest food", "Think", "Breathe"], answer: 0 }
    ]
  },
  {
    id: "int-15", level: "inter", title: "Blood Pressure Explained",
    text: ["Blood pressure is the force of blood pushing against the walls of the arteries as the heart pumps.", "It is written as two numbers, for example 120 over 80, showing the pressure when the heart beats and rests.", "Blood pressure that stays too high can damage the arteries and the heart over time.", "A healthy diet, exercise and limited salt help keep blood pressure in a safe range."],
    questions: [
      { q: "What is blood pressure?", options: ["The force of blood against the artery walls", "The speed of breathing", "The amount of food", "The size of bones"], answer: 0 },
      { q: "How is blood pressure written?", options: ["As two numbers", "As a single letter", "As a colour", "As a word"], answer: 0 },
      { q: "What can high blood pressure damage?", options: ["The arteries and the heart", "The hair only", "The ears only", "Nothing"], answer: 0 },
      { q: "What helps keep blood pressure safe?", options: ["Diet, exercise and limited salt", "More salt", "No exercise", "Smoking"], answer: 0 }
    ]
  }
);


/* ===== BATCH 6: Upper-Intermediate (5) & Advanced (5) ===== */
window.ME70_READING.push(
  {
    id: "upp-1", level: "upper", title: "The Rise of Telemedicine",
    text: [
      "Telemedicine, the practice of treating patients remotely through video calls and digital tools, has grown rapidly in recent years.",
      "It allows people in distant villages to consult specialists they could never reach in person, saving both time and travel costs.",
      "Doctors can monitor chronic conditions, adjust medication and answer questions without the patient leaving home.",
      "However, telemedicine has limits: some examinations still require physical contact, and a reliable internet connection is essential."
    ],
    questions: [
      { q: "What is telemedicine?", options: ["Treating patients remotely with digital tools", "A type of surgery", "A new medicine", "A hospital building"], answer: 0 },
      { q: "Who benefits especially from it?", options: ["People in distant villages", "Only city doctors", "Only children", "Nobody"], answer: 0 },
      { q: "What can doctors do remotely?", options: ["Monitor conditions and adjust medication", "Perform open surgery", "Set broken bones", "Give injections"], answer: 0 },
      { q: "What is one limitation?", options: ["Some exams need physical contact", "It is always free", "It never works", "It replaces all doctors"], answer: 0 }
    ]
  },
  {
    id: "upp-2", level: "upper", title: "The Placebo Effect",
    text: [
      "The placebo effect is a fascinating phenomenon in which patients feel better after taking a treatment that has no active ingredient.",
      "A sugar pill, for example, can sometimes reduce pain simply because the patient believes it will work.",
      "Scientists think this happens because the brain releases natural chemicals when we expect to recover.",
      "Because of this powerful effect, new medicines are always tested against a placebo to prove that they truly work."
    ],
    questions: [
      { q: "What is the placebo effect?", options: ["Feeling better from a treatment with no active ingredient", "A dangerous disease", "A type of surgery", "A strong painkiller"], answer: 0 },
      { q: "Why might a sugar pill reduce pain?", options: ["Because the patient believes it will work", "Because it is sweet", "Because it is expensive", "Because it is large"], answer: 0 },
      { q: "What does the brain release when we expect to recover?", options: ["Natural chemicals", "More bacteria", "Cold air", "Nothing"], answer: 0 },
      { q: "Why are new medicines tested against a placebo?", options: ["To prove they truly work", "To make them cheaper", "To make them sweet", "For no reason"], answer: 0 }
    ]
  },
  {
    id: "upp-3", level: "upper", title: "How Sleep Cleans the Brain",
    text: [
      "For a long time, scientists wondered why sleep is so essential for the brain.",
      "Recent research suggests that during deep sleep, the brain clears away waste products that build up while we are awake.",
      "This 'cleaning' process may help protect us from serious memory diseases later in life.",
      "It is yet another reason why regularly missing sleep can be harmful to our long-term health."
    ],
    questions: [
      { q: "What did scientists wonder about?", options: ["Why sleep is essential for the brain", "Why we eat", "Why we walk", "Why we talk"], answer: 0 },
      { q: "What happens during deep sleep?", options: ["The brain clears away waste products", "The brain stops completely", "The body grows taller", "Nothing"], answer: 0 },
      { q: "What may this process protect us from?", options: ["Serious memory diseases", "Broken bones", "Colds only", "Tall buildings"], answer: 0 },
      { q: "What can be harmful to long-term health?", options: ["Regularly missing sleep", "Sleeping enough", "Drinking water", "Reading books"], answer: 0 }
    ]
  },
  {
    id: "upp-4", level: "upper", title: "Breaking the Stigma of Mental Health",
    text: [
      "In many societies, people are still afraid to talk openly about mental health problems.",
      "This silence, often called 'stigma', can stop people from seeking the help they need.",
      "Yet conditions such as depression and anxiety are common and, importantly, treatable.",
      "Encouraging open conversation and showing understanding can save lives and help people recover faster."
    ],
    questions: [
      { q: "What are people in many societies afraid to do?", options: ["Talk openly about mental health", "Eat in public", "Walk outside", "Use phones"], answer: 0 },
      { q: "What is this silence often called?", options: ["Stigma", "Therapy", "Recovery", "Diagnosis"], answer: 0 },
      { q: "What does the text say about depression and anxiety?", options: ["They are common and treatable", "They are rare and incurable", "They are not real", "They only affect children"], answer: 0 },
      { q: "What can save lives?", options: ["Open conversation and understanding", "More silence", "Ignoring the problem", "Avoiding doctors"], answer: 0 }
    ]
  },
  {
    id: "upp-5", level: "upper", title: "Using Antibiotics Wisely",
    text: [
      "Antibiotics are powerful drugs that have saved millions of lives by fighting bacterial infections.",
      "Unfortunately, using them too often or incorrectly has allowed some bacteria to become resistant.",
      "Doctors now practise 'antibiotic stewardship', meaning they prescribe these drugs only when truly necessary.",
      "Patients can help too, by finishing every course and never sharing antibiotics with others."
    ],
    questions: [
      { q: "What do antibiotics fight?", options: ["Bacterial infections", "Broken bones", "Headaches only", "Cold weather"], answer: 0 },
      { q: "What has caused bacteria to become resistant?", options: ["Using antibiotics too often or incorrectly", "Drinking water", "Sleeping", "Exercise"], answer: 0 },
      { q: "What is 'antibiotic stewardship'?", options: ["Prescribing antibiotics only when truly necessary", "Giving antibiotics to everyone", "Banning all medicine", "Selling antibiotics freely"], answer: 0 },
      { q: "How can patients help?", options: ["Finish every course and not share them", "Stop halfway", "Share with friends", "Take double doses"], answer: 0 }
    ]
  },
  {
    id: "adv-1", level: "advanced", title: "The Promise of Gene Therapy",
    text: [
      "Gene therapy represents one of the most ambitious frontiers of modern medicine, aiming to treat disease at its genetic root.",
      "Rather than merely managing symptoms, scientists attempt to repair, replace or silence faulty genes responsible for a condition.",
      "Early successes have included treatments for certain inherited forms of blindness and disorders of the immune system.",
      "Nevertheless, the field faces significant hurdles, from the high cost of therapies to complex ethical questions about altering human DNA."
    ],
    questions: [
      { q: "What does gene therapy aim to do?", options: ["Treat disease at its genetic root", "Only reduce fever", "Replace all surgery", "Cure tiredness"], answer: 0 },
      { q: "How does it differ from ordinary treatment?", options: ["It repairs faulty genes rather than only managing symptoms", "It ignores the cause", "It uses no science", "It is always cheap"], answer: 0 },
      { q: "Which early success is mentioned?", options: ["Certain inherited forms of blindness", "The common cold", "Broken legs", "Toothache"], answer: 0 },
      { q: "What is one hurdle the field faces?", options: ["High cost and ethical questions", "Too many patients cured", "Lack of interest", "No diseases left"], answer: 0 }
    ]
  },
  {
    id: "adv-2", level: "advanced", title: "The Human Microbiome",
    text: [
      "The human body is home to trillions of microorganisms, collectively known as the microbiome, most of which live in the gut.",
      "Far from being harmful, many of these microbes are essential, helping us digest food, produce vitamins and train the immune system.",
      "Research increasingly links an imbalance in the microbiome to conditions ranging from obesity to certain autoimmune diseases.",
      "Understanding this hidden ecosystem may one day allow doctors to treat illness by carefully reshaping the bacteria within us."
    ],
    questions: [
      { q: "What is the microbiome?", options: ["Trillions of microorganisms living in the body", "A single large organ", "A type of vaccine", "A surgical tool"], answer: 0 },
      { q: "Where do most of these microbes live?", options: ["In the gut", "In the hair", "In the bones", "Outside the body"], answer: 0 },
      { q: "What do many of these microbes help with?", options: ["Digestion, vitamins and the immune system", "Nothing useful", "Causing every disease", "Making us taller"], answer: 0 },
      { q: "What is an imbalance increasingly linked to?", options: ["Conditions such as obesity and autoimmune diseases", "Better eyesight", "Faster running", "Longer hair"], answer: 0 }
    ]
  },
  {
    id: "adv-3", level: "advanced", title: "The Ethics of Organ Transplantation",
    text: [
      "Organ transplantation can offer a second chance at life, yet it raises profound ethical dilemmas.",
      "Because donor organs are scarce, medical teams must decide fairly who should receive them when many patients are waiting.",
      "Questions of consent, the definition of death, and the possibility of organ trafficking all demand careful regulation.",
      "Societies continue to debate how to encourage donation while protecting the vulnerable from exploitation."
    ],
    questions: [
      { q: "What can organ transplantation offer?", options: ["A second chance at life", "Instant wealth", "A new language", "Eternal youth"], answer: 0 },
      { q: "Why must teams decide fairly who receives an organ?", options: ["Because donor organs are scarce", "Because organs are cheap", "Because nobody needs them", "Because it is illegal"], answer: 0 },
      { q: "Which issue is mentioned as needing regulation?", options: ["Organ trafficking and consent", "Choosing a hospital colour", "Parking", "Meal times"], answer: 0 },
      { q: "What do societies continue to debate?", options: ["How to encourage donation while protecting the vulnerable", "How to ban all medicine", "How to close hospitals", "How to stop research"], answer: 0 }
    ]
  },
  {
    id: "adv-4", level: "advanced", title: "Artificial Intelligence in Diagnosis",
    text: [
      "Artificial intelligence is beginning to transform the way diseases are diagnosed.",
      "By analysing thousands of medical images, AI systems can sometimes detect early signs of cancer that the human eye might miss.",
      "These tools are not designed to replace doctors but to support them, offering a valuable second opinion.",
      "Still, experts warn that algorithms must be carefully tested to avoid bias and to ensure patient data remains private."
    ],
    questions: [
      { q: "What is AI beginning to transform?", options: ["The way diseases are diagnosed", "The price of food", "The weather", "Public transport"], answer: 0 },
      { q: "What can AI sometimes detect?", options: ["Early signs of cancer", "The future", "Lost keys", "Traffic jams"], answer: 0 },
      { q: "What is the role of these tools?", options: ["To support doctors, not replace them", "To replace all doctors", "To sell medicine", "To close clinics"], answer: 0 },
      { q: "What do experts warn about?", options: ["Bias and patient data privacy", "The colour of screens", "The size of hospitals", "Nothing at all"], answer: 0 }
    ]
  },
  {
    id: "adv-5", level: "advanced", title: "Epigenetics: Beyond the Genes",
    text: [
      "For decades, it was believed that our DNA alone determined our health and traits.",
      "The field of epigenetics has revealed a more complex picture, showing that our environment and behaviour can switch genes on or off.",
      "Factors such as diet, stress and exposure to toxins may influence how genes are expressed, sometimes for years.",
      "Remarkably, some of these changes appear to be passed on to the next generation, blurring the old line between nature and nurture."
    ],
    questions: [
      { q: "What was believed for decades?", options: ["DNA alone determined health and traits", "Genes do not exist", "Food has no effect", "Sleep is useless"], answer: 0 },
      { q: "What has epigenetics revealed?", options: ["Environment and behaviour can switch genes on or off", "Genes never change", "DNA is fake", "Nothing new"], answer: 0 },
      { q: "Which factors may influence gene expression?", options: ["Diet, stress and toxins", "Only height", "Only eye colour", "Nothing"], answer: 0 },
      { q: "What is remarkable about some changes?", options: ["They may pass to the next generation", "They disappear instantly", "They are invisible forever", "They cannot be studied"], answer: 0 }
    ]
  }
);
