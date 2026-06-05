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
