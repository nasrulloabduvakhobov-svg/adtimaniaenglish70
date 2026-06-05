/* ===== Listening exercises (Text-to-Speech based) =====
   cat: "medical" | "general"
   script: array of sentences (TTS o'qiydi, transcript yashirin turadi)
   questions: comprehension (answer = to'g'ri variant indeksi)
   Audio fayl kerak emas — brauzerning Speech Synthesis (TTS) imkoniyati ishlatiladi.
*/
window.ME70_LISTENING = [
  /* ---------- MEDICAL (35) ---------- */
  {
    id: "lis-med-1", cat: "medical", level: "A2", title: "Booking an Appointment",
    script: ["Hello, I would like to make an appointment to see Doctor Aziz.", "I have had a headache and a high temperature for three days.", "The receptionist offers a free slot tomorrow at ten o'clock in the morning.", "The patient agrees and leaves his phone number."],
    questions: [
      { q: "Why does the patient call?", options: ["To make an appointment", "To buy medicine", "To order food", "To ask for directions"], answer: 0 },
      { q: "How long has he had the symptoms?", options: ["Three days", "Three weeks", "One hour", "A year"], answer: 0 },
      { q: "When is the appointment?", options: ["Tomorrow at 10 a.m.", "Today at night", "Next month", "In one hour"], answer: 0 }
    ]
  },
  {
    id: "lis-med-2", cat: "medical", level: "A2", title: "Taking Your Medicine",
    script: ["The doctor explains how to take the new medicine.", "You should take one tablet twice a day, after breakfast and after dinner.", "Do not take it on an empty stomach.", "Finish all the tablets, even if you feel better."],
    questions: [
      { q: "How many times a day should you take the tablet?", options: ["Twice a day", "Five times a day", "Once a week", "Never"], answer: 0 },
      { q: "When should you take it?", options: ["After meals", "On an empty stomach", "Only at night", "Before sleep only"], answer: 0 },
      { q: "Should you stop when you feel better?", options: ["No, finish all the tablets", "Yes, stop at once", "Yes, after one day", "It does not matter"], answer: 0 }
    ]
  },
  {
    id: "lis-med-3", cat: "medical", level: "A2", title: "Describing Symptoms",
    script: ["A patient tells the doctor about her problem.", "She feels tired all the time and has a sore throat.", "She also has a slight fever in the evenings.", "The doctor listens carefully and decides to do a blood test."],
    questions: [
      { q: "How does the patient feel?", options: ["Tired all the time", "Full of energy", "Very happy", "Hungry"], answer: 0 },
      { q: "When does she have a fever?", options: ["In the evenings", "In the morning only", "Never", "At lunch"], answer: 0 },
      { q: "What does the doctor decide to do?", options: ["A blood test", "An operation", "Nothing", "Send her home"], answer: 0 }
    ]
  },
  {
    id: "lis-med-4", cat: "medical", level: "B1", title: "First Aid for a Burn",
    script: ["If someone burns their hand, act quickly but stay calm.", "First, hold the burn under cool running water for at least ten minutes.", "Do not put ice or butter on it.", "Cover the burn with a clean, dry cloth, and get medical help if it is large."],
    questions: [
      { q: "What should you do first?", options: ["Hold it under cool running water", "Put ice on it", "Rub butter on it", "Ignore it"], answer: 0 },
      { q: "For how long?", options: ["At least ten minutes", "Two seconds", "One hour", "All day"], answer: 0 },
      { q: "What should you NOT use?", options: ["Ice or butter", "Cool water", "A clean cloth", "Your other hand"], answer: 0 }
    ]
  },
  {
    id: "lis-med-5", cat: "medical", level: "B1", title: "Before the Operation",
    script: ["A nurse talks to a patient before surgery.", "She says the patient must not eat or drink anything after midnight.", "He should remove any jewellery and wear the hospital gown.", "The operation will start at eight in the morning."],
    questions: [
      { q: "Can the patient eat after midnight?", options: ["No, nothing", "Yes, a big meal", "Only fruit", "Only water"], answer: 0 },
      { q: "What should he wear?", options: ["The hospital gown", "His own clothes", "A coat", "Nothing special"], answer: 0 },
      { q: "When will the operation start?", options: ["At eight in the morning", "At midnight", "In the evening", "Next week"], answer: 0 }
    ]
  },
  {
    id: "lis-med-6", cat: "medical", level: "B1", title: "Advice on Healthy Eating",
    script: ["A doctor gives advice about healthy eating.", "He recommends eating more vegetables and fruit every day.", "He says we should drink water instead of sugary drinks.", "Too much salt and fried food is bad for the heart."],
    questions: [
      { q: "What should we eat more of?", options: ["Vegetables and fruit", "Sweets", "Fried food", "Salt"], answer: 0 },
      { q: "What should we drink instead of sugary drinks?", options: ["Water", "More soda", "Coffee only", "Nothing"], answer: 0 },
      { q: "What is bad for the heart?", options: ["Too much salt and fried food", "Water", "Vegetables", "Fruit"], answer: 0 }
    ]
  },
  {
    id: "lis-med-7", cat: "medical", level: "B1", title: "Vaccination Information",
    script: ["The clinic is offering the flu vaccine this week.", "The vaccine is free for children and people over sixty-five.", "It is recommended every year because the virus changes.", "After the injection, your arm may feel sore for a day."],
    questions: [
      { q: "What is the clinic offering?", options: ["The flu vaccine", "Free food", "A blood test", "Eye glasses"], answer: 0 },
      { q: "Who can get it for free?", options: ["Children and people over 65", "Only doctors", "Nobody", "Only adults aged 30"], answer: 0 },
      { q: "How often is it recommended?", options: ["Every year", "Once in a lifetime", "Every day", "Never"], answer: 0 }
    ]
  },
  {
    id: "lis-med-8", cat: "medical", level: "B1", title: "Leaving the Hospital",
    script: ["The doctor gives instructions before the patient goes home.", "He must rest for one week and avoid heavy lifting.", "He should take the painkillers only when needed.", "A follow-up appointment is booked for next Monday."],
    questions: [
      { q: "How long should the patient rest?", options: ["One week", "One hour", "One year", "No rest"], answer: 0 },
      { q: "What should he avoid?", options: ["Heavy lifting", "Drinking water", "Sleeping", "Walking slowly"], answer: 0 },
      { q: "When is the follow-up appointment?", options: ["Next Monday", "Tomorrow", "Never", "Next year"], answer: 0 }
    ]
  },
  {
    id: "lis-med-9", cat: "medical", level: "B2", title: "Understanding Blood Pressure",
    script: ["The nurse explains the patient's blood pressure reading.", "The first number shows the pressure when the heart beats.", "The second shows the pressure when the heart rests.", "A reading around 120 over 80 is considered normal."],
    questions: [
      { q: "What does the first number show?", options: ["Pressure when the heart beats", "Pressure when the heart rests", "Body temperature", "Weight"], answer: 0 },
      { q: "What does the second number show?", options: ["Pressure when the heart rests", "Heart rate", "Blood sugar", "Height"], answer: 0 },
      { q: "Which reading is normal?", options: ["120 over 80", "200 over 150", "60 over 40", "300 over 200"], answer: 0 }
    ]
  },
  {
    id: "lis-med-10", cat: "medical", level: "A2", title: "Caring for Your Teeth",
    script: ["The dentist gives simple advice for healthy teeth.", "Brush your teeth twice a day with a soft toothbrush.", "Do not eat too many sweets between meals.", "Visit the dentist every six months for a check-up."],
    questions: [
      { q: "How often should you brush?", options: ["Twice a day", "Once a month", "Every hour", "Never"], answer: 0 },
      { q: "What should you eat fewer of?", options: ["Sweets", "Vegetables", "Water", "Fish"], answer: 0 },
      { q: "How often should you visit the dentist?", options: ["Every six months", "Every day", "Every ten years", "Never"], answer: 0 }
    ]
  },
  {
    id: "lis-med-11", cat: "medical", level: "A2", title: "At the Reception Desk",
    script: ["Good morning, I have an appointment with Doctor Petrova at eleven.", "My name is Bek and this is my first visit.", "The receptionist asks him to fill in a short form.", "She says the doctor is ready and the room is number five."],
    questions: [
      { q: "Who is the appointment with?", options: ["Doctor Petrova", "Doctor Aziz", "The nurse", "The dentist"], answer: 0 },
      { q: "Is it his first visit?", options: ["Yes", "No", "It is not said", "He visits daily"], answer: 0 },
      { q: "Which room is the doctor in?", options: ["Number five", "Number one", "Number ten", "Number two"], answer: 0 }
    ]
  },
  {
    id: "lis-med-12", cat: "medical", level: "B1", title: "The Nurse's Instructions",
    script: ["The nurse asks the patient to roll up his sleeve.", "She needs to take a small sample of blood for the test.", "She tells him it will only hurt for a second.", "After that, he should press the cotton on his arm for two minutes."],
    questions: [
      { q: "What does the nurse need to take?", options: ["A sample of blood", "His temperature only", "A photo", "His weight"], answer: 0 },
      { q: "How long will it hurt?", options: ["Only for a second", "For an hour", "All day", "It will not stop"], answer: 0 },
      { q: "What should he do after?", options: ["Press cotton on his arm", "Run outside", "Eat sweets", "Sleep at once"], answer: 0 }
    ]
  },
  {
    id: "lis-med-13", cat: "medical", level: "A2", title: "A Call to the Clinic",
    script: ["Hello, this is the City Clinic, how can I help you?", "I would like to know if Doctor Olim works on Friday.", "Yes, he works from nine to one on Friday morning.", "Would you like me to book a time for you?"],
    questions: [
      { q: "Which clinic is it?", options: ["The City Clinic", "The Village Clinic", "A pharmacy", "A school"], answer: 0 },
      { q: "When does Doctor Olim work on Friday?", options: ["Nine to one in the morning", "All night", "He does not work", "Only Sunday"], answer: 0 },
      { q: "What does the receptionist offer?", options: ["To book a time", "To sell medicine", "To call a taxi", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "lis-med-14", cat: "medical", level: "B1", title: "Explaining an Allergy",
    script: ["The patient tells the doctor that she is allergic to penicillin.", "When she took it once, her skin became red and itchy.", "The doctor writes this clearly in her medical record.", "He chooses a different, safe medicine for her."],
    questions: [
      { q: "What is the patient allergic to?", options: ["Penicillin", "Water", "Bread", "Sunlight"], answer: 0 },
      { q: "What happened to her skin?", options: ["It became red and itchy", "It turned blue", "Nothing happened", "It became stronger"], answer: 0 },
      { q: "What does the doctor do?", options: ["Chooses a different, safe medicine", "Gives more penicillin", "Sends her home with nothing", "Ignores it"], answer: 0 }
    ]
  },
  {
    id: "lis-med-15", cat: "medical", level: "B1", title: "After an Injury",
    script: ["The physiotherapist explains the exercises for the patient's knee.", "He should do them slowly, three times a day.", "If an exercise causes sharp pain, he must stop immediately.", "Gentle movement will help the knee get stronger over time."],
    questions: [
      { q: "How many times a day should he exercise?", options: ["Three times", "Ten times", "Once a week", "Never"], answer: 0 },
      { q: "What should he do if there is sharp pain?", options: ["Stop immediately", "Push harder", "Run", "Jump"], answer: 0 },
      { q: "What will help the knee?", options: ["Gentle movement", "No movement at all", "Heavy lifting", "Cold water only"], answer: 0 }
    ]
  },
  {
    id: "lis-med-16", cat: "medical", level: "B1", title: "Reading a Medicine Label",
    script: ["Always read the label before you take any medicine.", "This syrup says: take two spoons every eight hours.", "Do not take more than six spoons in one day.", "Keep the bottle in a cool place, away from children."],
    questions: [
      { q: "How much syrup at a time?", options: ["Two spoons", "Ten spoons", "One bottle", "None"], answer: 0 },
      { q: "How often?", options: ["Every eight hours", "Every minute", "Once a week", "Only at night"], answer: 0 },
      { q: "Where should you keep the bottle?", options: ["In a cool place, away from children", "In the sun", "In a child's hand", "Outside"], answer: 0 }
    ]
  },
  {
    id: "lis-med-17", cat: "medical", level: "B2", title: "A Health Check-up",
    script: ["During a yearly check-up, the doctor examines several things.", "She measures the patient's weight, height and blood pressure.", "She also asks about his sleep, diet and exercise.", "Finding a problem early makes treatment much easier."],
    questions: [
      { q: "How often is this check-up?", options: ["Yearly", "Hourly", "Never", "Every ten years"], answer: 0 },
      { q: "What does the doctor measure?", options: ["Weight, height and blood pressure", "Only hair length", "Shoe size", "Nothing"], answer: 0 },
      { q: "Why is finding a problem early good?", options: ["Treatment is much easier", "It is more painful", "It costs more", "Nothing changes"], answer: 0 }
    ]
  },
  {
    id: "lis-med-18", cat: "medical", level: "A2", title: "Advice for a Cold",
    script: ["The doctor says the patient only has a common cold.", "There is no special medicine that can cure it.", "He should rest at home and drink plenty of warm fluids.", "If he gets a high fever, he should come back."],
    questions: [
      { q: "What does the patient have?", options: ["A common cold", "A broken leg", "A heart problem", "An allergy"], answer: 0 },
      { q: "What should he do at home?", options: ["Rest and drink warm fluids", "Run every hour", "Eat ice cream only", "Work hard"], answer: 0 },
      { q: "When should he come back?", options: ["If he gets a high fever", "Never", "After one year", "Only if happy"], answer: 0 }
    ]
  }
];


/* ===== MEDICAL 19-35 ===== */
window.ME70_LISTENING.push(
  {
    id: "lis-med-19", cat: "medical", level: "B1", title: "Staying Hydrated",
    script: ["A doctor explains why drinking water is so important.", "Our body loses water when we sweat and breathe.", "If we do not drink enough, we may feel tired and dizzy.", "He advises drinking water regularly through the whole day."],
    questions: [
      { q: "When does the body lose water?", options: ["When we sweat and breathe", "When we read", "Only at night", "Never"], answer: 0 },
      { q: "How might we feel without enough water?", options: ["Tired and dizzy", "Stronger", "Taller", "Happier"], answer: 0 },
      { q: "What is the doctor's advice?", options: ["Drink water regularly all day", "Drink only once a week", "Avoid water", "Drink only soda"], answer: 0 }
    ]
  },
  {
    id: "lis-med-20", cat: "medical", level: "B2", title: "Quitting Smoking",
    script: ["The doctor encourages the patient to stop smoking.", "He explains that smoking damages the lungs and the heart.", "Even after many years, quitting improves a person's health.", "He offers support and a plan to help the patient stop."],
    questions: [
      { q: "What does smoking damage?", options: ["The lungs and the heart", "Only the hair", "The eyes only", "Nothing"], answer: 0 },
      { q: "Does quitting help after many years?", options: ["Yes, it improves health", "No, it is too late", "Only for young people", "It makes it worse"], answer: 0 },
      { q: "What does the doctor offer?", options: ["Support and a plan", "More cigarettes", "Nothing", "A holiday"], answer: 0 }
    ]
  },
  {
    id: "lis-med-21", cat: "medical", level: "B1", title: "Eye Care Advice",
    script: ["The eye doctor gives advice for people who use screens a lot.", "Every twenty minutes, look at something far away for twenty seconds.", "Make sure the room has enough light when you read.", "Have your eyes checked once a year."],
    questions: [
      { q: "Who is the advice for?", options: ["People who use screens a lot", "Only drivers", "Only children", "Nobody"], answer: 0 },
      { q: "What should you do every twenty minutes?", options: ["Look far away for twenty seconds", "Close your eyes for an hour", "Drink water", "Stand up and run"], answer: 0 }, 
      { q: "How often should you check your eyes?", options: ["Once a year", "Every day", "Once in a lifetime", "Never"], answer: 0 }
    ]
  },
  {
    id: "lis-med-22", cat: "medical", level: "B1", title: "A Pregnancy Check-up",
    script: ["The midwife welcomes the pregnant woman to her appointment.", "She checks the mother's blood pressure and weight.", "Then she listens to the baby's heartbeat with a special device.", "Everything looks healthy, and the next visit is in four weeks."],
    questions: [
      { q: "Who welcomes the woman?", options: ["The midwife", "A surgeon", "A dentist", "A pharmacist"], answer: 0 },
      { q: "What does she listen to?", options: ["The baby's heartbeat", "Music", "The radio", "Her own heart"], answer: 0 },
      { q: "When is the next visit?", options: ["In four weeks", "Tomorrow", "In a year", "Never"], answer: 0 }
    ]
  },
  {
    id: "lis-med-23", cat: "medical", level: "B1", title: "Children's Vaccines",
    script: ["A nurse explains the vaccination schedule to a new mother.", "Babies receive their first vaccines at two months old.", "More vaccines are given at four and six months.", "The nurse gives the mother a card to record each date."],
    questions: [
      { q: "When do babies get their first vaccines?", options: ["At two months old", "At ten years old", "At birth only", "Never"], answer: 0 },
      { q: "When are more vaccines given?", options: ["At four and six months", "At one week", "At five years only", "At age 30"], answer: 0 },
      { q: "What does the nurse give the mother?", options: ["A card to record dates", "Medicine", "A toy", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "lis-med-24", cat: "medical", level: "B2", title: "Managing Diabetes",
    script: ["The doctor explains how to manage diabetes every day.", "The patient should check his blood sugar regularly.", "A healthy diet and daily exercise are very important.", "He must take his medicine exactly as prescribed."],
    questions: [
      { q: "What should the patient check regularly?", options: ["His blood sugar", "His shoe size", "The weather", "His phone"], answer: 0 },
      { q: "What is very important?", options: ["A healthy diet and exercise", "Eating lots of sugar", "Sleeping all day", "Smoking"], answer: 0 },
      { q: "How should he take his medicine?", options: ["Exactly as prescribed", "Whenever he wants", "Never", "Twice the dose"], answer: 0 }
    ]
  },
  {
    id: "lis-med-25", cat: "medical", level: "B2", title: "Heart-Healthy Habits",
    script: ["A cardiologist talks about keeping the heart healthy.", "She says regular exercise makes the heart stronger.", "Eating less salt and fatty food protects the arteries.", "Managing stress and not smoking are also very important."],
    questions: [
      { q: "What makes the heart stronger?", options: ["Regular exercise", "Sitting all day", "Eating salt", "Smoking"], answer: 0 },
      { q: "What protects the arteries?", options: ["Less salt and fatty food", "More fried food", "More sugar", "No water"], answer: 0 },
      { q: "What else is important?", options: ["Managing stress and not smoking", "More stress", "Smoking daily", "Never resting"], answer: 0 }
    ]
  },
  {
    id: "lis-med-26", cat: "medical", level: "B2", title: "Mental Health and Stress",
    script: ["The counsellor explains that mental health is very important.", "Too much stress can affect both the mind and the body.", "Talking to friends and resting can reduce stress.", "If sadness lasts a long time, a person should ask for help."],
    questions: [
      { q: "What can too much stress affect?", options: ["The mind and the body", "Only the hair", "Only the feet", "Nothing"], answer: 0 },
      { q: "What can reduce stress?", options: ["Talking to friends and resting", "More work", "No sleep", "Skipping meals"], answer: 0 },
      { q: "When should a person ask for help?", options: ["If sadness lasts a long time", "Never", "Only when happy", "After one minute"], answer: 0 }
    ]
  },
  {
    id: "lis-med-27", cat: "medical", level: "B1", title: "Advice About Sleep",
    script: ["The doctor explains why good sleep is important for health.", "Adults need about seven to eight hours each night.", "She advises not using the phone just before bed.", "A dark, quiet room helps people sleep better."],
    questions: [
      { q: "How many hours do adults need?", options: ["Seven to eight", "Two to three", "Twelve to fourteen", "One"], answer: 0 },
      { q: "What should you avoid before bed?", options: ["Using the phone", "Closing your eyes", "Resting", "A dark room"], answer: 0 },
      { q: "What helps you sleep better?", options: ["A dark, quiet room", "A bright, noisy room", "Loud music", "Coffee"], answer: 0 }
    ]
  },
  {
    id: "lis-med-28", cat: "medical", level: "B1", title: "Calling an Ambulance",
    script: ["Hello, I need an ambulance quickly, please.", "A man has fallen and he cannot breathe well.", "We are at number twelve, Park Street, near the school.", "Please stay calm; help is on the way."],
    questions: [
      { q: "What does the caller need?", options: ["An ambulance", "A taxi", "A pizza", "A doctor's appointment"], answer: 0 },
      { q: "What is the problem?", options: ["A man fell and cannot breathe well", "A lost dog", "A broken phone", "A flat tyre"], answer: 0 },
      { q: "Where are they?", options: ["Number twelve, Park Street", "At the airport", "In another city", "Unknown"], answer: 0 }
    ]
  },
  {
    id: "lis-med-29", cat: "medical", level: "B2", title: "Explaining Test Results",
    script: ["The doctor sits down to explain the blood test results.", "The good news is that most numbers are normal.", "However, the patient's iron level is a little low.", "The doctor suggests eating more green vegetables and red meat."],
    questions: [
      { q: "What is the good news?", options: ["Most numbers are normal", "Everything is wrong", "There are no results", "He must have surgery"], answer: 0 },
      { q: "What is a little low?", options: ["The iron level", "The blood pressure", "The temperature", "The weight"], answer: 0 },
      { q: "What does the doctor suggest?", options: ["More green vegetables and red meat", "Less food", "More sweets", "No vegetables"], answer: 0 }
    ]
  },
  {
    id: "lis-med-30", cat: "medical", level: "B1", title: "Wound Care at Home",
    script: ["The nurse explains how to look after the cut at home.", "Clean it gently with water once a day.", "Change the bandage every morning and keep it dry.", "If the skin around it becomes red and hot, call the clinic."],
    questions: [
      { q: "How often should you clean the cut?", options: ["Once a day", "Every minute", "Once a year", "Never"], answer: 0 },
      { q: "How often should you change the bandage?", options: ["Every morning", "Once a month", "Never", "Every hour"], answer: 0 },
      { q: "When should you call the clinic?", options: ["If the skin becomes red and hot", "If it heals", "If it is dry", "Never"], answer: 0 }
    ]
  },
  {
    id: "lis-med-31", cat: "medical", level: "A2", title: "At the Pharmacy",
    script: ["Hello, do you have something for a headache?", "Yes, these tablets are good for headaches and fever.", "Take one tablet with water, but not more than three a day.", "They cost fifteen thousand som. Would you like them?"],
    questions: [
      { q: "What does the customer want?", options: ["Something for a headache", "A new phone", "Food", "A book"], answer: 0 },
      { q: "How many tablets a day at most?", options: ["Three", "Ten", "Twenty", "No limit"], answer: 0 },
      { q: "How much do they cost?", options: ["Fifteen thousand som", "One dollar", "Free", "A hundred som"], answer: 0 }
    ]
  },
  {
    id: "lis-med-32", cat: "medical", level: "B1", title: "A Physiotherapy Session",
    script: ["Welcome back; how is your shoulder feeling today?", "It is a little better, but it still hurts when I lift my arm.", "Good, let's do some gentle stretches together.", "Remember to do these exercises at home every evening."],
    questions: [
      { q: "Which body part is the problem?", options: ["The shoulder", "The foot", "The eye", "The ear"], answer: 0 },
      { q: "When does it still hurt?", options: ["When lifting the arm", "When sleeping", "When eating", "Never"], answer: 0 },
      { q: "When should the patient do the exercises at home?", options: ["Every evening", "Once a year", "Never", "Only in the clinic"], answer: 0 }
    ]
  },
  {
    id: "lis-med-33", cat: "medical", level: "B1", title: "Blood Donation",
    script: ["Thank you for coming to donate blood today.", "First, we will check your weight and your iron level.", "The donation itself takes only about ten minutes.", "Afterwards, please rest and have a sweet drink."],
    questions: [
      { q: "What will they check first?", options: ["Weight and iron level", "Eye colour", "Shoe size", "Phone number"], answer: 0 },
      { q: "How long does the donation take?", options: ["About ten minutes", "Five hours", "One day", "One minute"], answer: 0 },
      { q: "What should the donor do afterwards?", options: ["Rest and have a sweet drink", "Run a race", "Lift heavy boxes", "Go swimming"], answer: 0 }
    ]
  },
  {
    id: "lis-med-34", cat: "medical", level: "A2", title: "A Dental Reminder",
    script: ["Hello, this is a message from the Smile Dental Clinic.", "This is a reminder about your check-up tomorrow at three o'clock.", "Please arrive ten minutes early to fill in a form.", "If you cannot come, call us to change the time."],
    questions: [
      { q: "Who is the message from?", options: ["The Smile Dental Clinic", "A bank", "A school", "A shop"], answer: 0 },
      { q: "When is the check-up?", options: ["Tomorrow at three o'clock", "Today at night", "Next year", "In one hour"], answer: 0 },
      { q: "Why arrive ten minutes early?", options: ["To fill in a form", "To eat", "To sleep", "To pay extra"], answer: 0 }
    ]
  },
  {
    id: "lis-med-35", cat: "medical", level: "B1", title: "Hospital Visiting Rules",
    script: ["Welcome to the hospital information desk.", "Visiting hours are from four to six in the afternoon.", "Only two visitors are allowed for each patient.", "Please turn off your phone and wash your hands before entering."],
    questions: [
      { q: "What are the visiting hours?", options: ["Four to six in the afternoon", "All night", "Nine to five", "There are none"], answer: 0 },
      { q: "How many visitors per patient?", options: ["Two", "Ten", "Twenty", "No limit"], answer: 0 },
      { q: "What should you do before entering?", options: ["Turn off your phone and wash your hands", "Run quickly", "Eat lunch", "Shout"], answer: 0 }
    ]
  }
);


/* ===== GENERAL 1-18 ===== */
window.ME70_LISTENING.push(
  {
    id: "lis-gen-1", cat: "general", level: "A2", title: "At the Airport",
    script: ["Attention please, this is an announcement for all passengers.", "Flight BA215 to London is now boarding at gate twelve.", "Please have your passport and boarding pass ready.", "The gate will close ten minutes before departure."],
    questions: [
      { q: "Where is the flight going?", options: ["London", "Paris", "Tokyo", "Dubai"], answer: 0 },
      { q: "Which gate is boarding?", options: ["Gate twelve", "Gate two", "Gate twenty", "Gate five"], answer: 0 },
      { q: "When does the gate close?", options: ["Ten minutes before departure", "After departure", "One hour after", "It never closes"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-2", cat: "general", level: "A2", title: "Ordering in a Restaurant",
    script: ["Good evening, for my main course I would like the grilled chicken with rice.", "Could I also have a green salad on the side, please?", "I don't want anything spicy.", "And a glass of water with no ice, thank you."],
    questions: [
      { q: "What is the main course?", options: ["Grilled chicken with rice", "Fish and chips", "Soup", "Pizza"], answer: 0 },
      { q: "Does the customer want spicy food?", options: ["No", "Yes, very spicy", "A little", "Only the salad"], answer: 0 },
      { q: "How does she want the water?", options: ["With no ice", "With lots of ice", "Hot", "With lemon"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-3", cat: "general", level: "B1", title: "The Weather Forecast",
    script: ["Here is tomorrow's weather forecast.", "The morning will be cold and foggy, around five degrees.", "By the afternoon, the sun will come out and it will feel warmer.", "There is a small chance of rain in the evening, so take an umbrella."],
    questions: [
      { q: "What will the morning be like?", options: ["Cold and foggy", "Hot and sunny", "Rainy and warm", "Windy and dry"], answer: 0 },
      { q: "What about the afternoon?", options: ["Sunny and warmer", "Snowy", "Very cold", "Stormy"], answer: 0 },
      { q: "What should you take?", options: ["An umbrella", "A swimsuit", "Sunglasses only", "Nothing"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-4", cat: "general", level: "A2", title: "My Daily Routine",
    script: ["I usually wake up at six thirty in the morning.", "After a quick breakfast, I go to work by bus.", "I work from nine to five, with a short lunch break.", "In the evening, I like to read or go for a walk."],
    questions: [
      { q: "What time does the person wake up?", options: ["Six thirty", "Ten o'clock", "Midnight", "Noon"], answer: 0 },
      { q: "How does the person get to work?", options: ["By bus", "By plane", "By boat", "By bicycle"], answer: 0 },
      { q: "What do they do in the evening?", options: ["Read or go for a walk", "Go to work again", "Sleep all evening", "Cook for a restaurant"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-5", cat: "general", level: "A2", title: "Making Plans",
    script: ["Hi Sara, are you free this Saturday?", "There is a new film at the cinema that I would love to see.", "We could meet at six and have dinner first.", "Let me know if that works for you."],
    questions: [
      { q: "Which day are they talking about?", options: ["Saturday", "Monday", "Sunday", "Friday"], answer: 0 },
      { q: "What does the speaker want to see?", options: ["A new film", "A football match", "A concert", "A play"], answer: 0 },
      { q: "What time could they meet?", options: ["Six", "Nine", "Noon", "Midnight"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-6", cat: "general", level: "B1", title: "A Job Interview",
    script: ["Thank you for coming in today.", "Could you tell me a little about your previous experience?", "We are looking for someone who can work well in a team.", "The job involves some travel; do you have any questions for us?"],
    questions: [
      { q: "What does the interviewer ask about first?", options: ["Previous experience", "Favourite food", "The weather", "His family"], answer: 0 },
      { q: "What kind of person are they looking for?", options: ["Someone who works well in a team", "Someone who works alone only", "A driver", "A doctor"], answer: 0 },
      { q: "What does the job involve?", options: ["Some travel", "No work", "Only night shifts", "Cooking"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-7", cat: "general", level: "A2", title: "Asking for Directions",
    script: ["Excuse me, how do I get to the train station?", "Go straight ahead until you reach the bank.", "Then turn left and walk for about five minutes.", "The station is on your right, opposite the park."],
    questions: [
      { q: "Where does the person want to go?", options: ["The train station", "The bank", "The park", "The school"], answer: 0 },
      { q: "Where should they turn left?", options: ["At the bank", "At the station", "At home", "At the park"], answer: 0 },
      { q: "What is the station opposite?", options: ["The park", "The river", "The airport", "The hospital"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-8", cat: "general", level: "A2", title: "Shopping for Clothes",
    script: ["Hello, I am looking for a blue shirt in size medium.", "The ones on that shelf are a bit too small for me.", "Could I try this one on, please?", "Yes, I'll take it. How much is it?"],
    questions: [
      { q: "What is the customer looking for?", options: ["A blue shirt", "Black shoes", "A red hat", "A green coat"], answer: 0 },
      { q: "What size?", options: ["Medium", "Small", "Large", "Extra large"], answer: 0 },
      { q: "What does the customer ask at the end?", options: ["How much it is", "Where the door is", "The time", "The weather"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-9", cat: "general", level: "B1", title: "A News Update",
    script: ["Good morning, here is today's local news.", "A new public library has opened in the city centre.", "It has over fifty thousand books and free internet.", "The library is open every day except Sunday."],
    questions: [
      { q: "What has opened?", options: ["A public library", "A new airport", "A hospital", "A bank"], answer: 0 },
      { q: "How many books does it have?", options: ["Over fifty thousand", "Ten", "A hundred", "None"], answer: 0 },
      { q: "When is it closed?", options: ["Sunday", "Monday", "Every day", "Never"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-10", cat: "general", level: "B1", title: "Talking About Hobbies",
    script: ["In my free time, I really enjoy painting and listening to music.", "I started painting two years ago, and now I have a small studio.", "At weekends, I often visit art galleries with my friends.", "It helps me relax after a busy week."],
    questions: [
      { q: "What are the speaker's two hobbies?", options: ["Painting and music", "Football and chess", "Cooking and running", "Reading and swimming"], answer: 0 },
      { q: "When did they start painting?", options: ["Two years ago", "Last week", "Ten years ago", "Yesterday"], answer: 0 },
      { q: "What do they do at weekends?", options: ["Visit art galleries", "Sleep all day", "Work extra", "Travel abroad"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-11", cat: "general", level: "A2", title: "Booking a Hotel Room",
    script: ["Good afternoon, I would like to book a room for two nights.", "I need a room for two people with breakfast included.", "We will arrive on Friday and leave on Sunday.", "Could you tell me the price per night, please?"],
    questions: [
      { q: "How many nights?", options: ["Two nights", "One night", "A week", "Ten nights"], answer: 0 },
      { q: "What is included?", options: ["Breakfast", "Dinner", "A car", "A tour"], answer: 0 },
      { q: "When will they arrive?", options: ["Friday", "Monday", "Sunday", "Tuesday"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-12", cat: "general", level: "B1", title: "At the Train Station",
    script: ["The next train to Samarkand leaves from platform three.", "It departs at half past two in the afternoon.", "The journey takes about two hours.", "Passengers are asked to keep their tickets until the end."],
    questions: [
      { q: "Which platform?", options: ["Platform three", "Platform one", "Platform ten", "Platform five"], answer: 0 },
      { q: "When does it leave?", options: ["Half past two", "Half past ten", "Midnight", "Nine o'clock"], answer: 0 },
      { q: "How long is the journey?", options: ["About two hours", "Ten minutes", "A whole day", "Five hours"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-13", cat: "general", level: "A2", title: "A Phone Message",
    script: ["Hi, this is a message for Tom.", "I'm calling to say the meeting tomorrow has moved to ten o'clock.", "Please bring the report with you.", "Call me back when you get this message."],
    questions: [
      { q: "Who is the message for?", options: ["Tom", "Sara", "The doctor", "Anna"], answer: 0 },
      { q: "What time is the meeting now?", options: ["Ten o'clock", "Two o'clock", "Midnight", "Nine o'clock"], answer: 0 },
      { q: "What should Tom bring?", options: ["The report", "Lunch", "His car", "A laptop only"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-14", cat: "general", level: "A2", title: "Introducing Yourself",
    script: ["Hello everyone, my name is Laziz.", "I am twenty years old and I am from Tashkent.", "I am studying medicine at the university.", "In my free time, I enjoy playing football and reading."],
    questions: [
      { q: "What is his name?", options: ["Laziz", "Tom", "Bek", "Ali"], answer: 0 },
      { q: "Where is he from?", options: ["Tashkent", "London", "Moscow", "Paris"], answer: 0 },
      { q: "What does he study?", options: ["Medicine", "Music", "Law", "Cooking"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-15", cat: "general", level: "B1", title: "Talking About Family",
    script: ["I have a big family and we are very close.", "My father is a teacher and my mother is a nurse.", "I have one older brother and two younger sisters.", "We always have dinner together on Sundays."],
    questions: [
      { q: "What is the father's job?", options: ["A teacher", "A doctor", "A driver", "A cook"], answer: 0 },
      { q: "How many sisters does the speaker have?", options: ["Two", "One", "Three", "None"], answer: 0 },
      { q: "When do they have dinner together?", options: ["On Sundays", "Every night", "On Mondays", "Never"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-16", cat: "general", level: "B1", title: "At the Bank",
    script: ["Good morning, I would like to open a new bank account.", "I have my passport and a document with my address.", "I would also like a card to use for shopping.", "How long will it take to be ready?"],
    questions: [
      { q: "What does the customer want to do?", options: ["Open a new bank account", "Close an account", "Take a loan", "Buy a house"], answer: 0 },
      { q: "What documents does he have?", options: ["Passport and proof of address", "Only a photo", "Nothing", "A driving licence only"], answer: 0 },
      { q: "What else does he want?", options: ["A card for shopping", "A new phone", "A car", "A book"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-17", cat: "general", level: "B1", title: "Renting an Apartment",
    script: ["Hello, I saw your advertisement for a two-room apartment.", "Is it still available, and how much is the monthly rent?", "I would like to know if water and electricity are included.", "Could I come and see it this weekend?"],
    questions: [
      { q: "What is the caller interested in?", options: ["A two-room apartment", "A car", "A job", "A holiday"], answer: 0 },
      { q: "What does the caller ask about?", options: ["The monthly rent", "The weather", "The owner's age", "The bus times"], answer: 0 },
      { q: "When does the caller want to see it?", options: ["This weekend", "Next year", "Never", "Right now"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-18", cat: "general", level: "A2", title: "A School Announcement",
    script: ["Good morning, students, here is an important announcement.", "Tomorrow there will be no classes in the afternoon.", "All students should go home after lunch.", "Classes will start as usual the day after tomorrow."],
    questions: [
      { q: "When will there be no classes?", options: ["Tomorrow afternoon", "Every day", "This morning", "Next month"], answer: 0 },
      { q: "What should students do after lunch?", options: ["Go home", "Stay in class", "Go to the gym", "Take an exam"], answer: 0 },
      { q: "When will classes start as usual?", options: ["The day after tomorrow", "Never", "In a week", "Tonight"], answer: 0 }
    ]
  }
);


/* ===== GENERAL 19-35 ===== */
window.ME70_LISTENING.push(
  {
    id: "lis-gen-19", cat: "general", level: "A2", title: "Buying Groceries",
    script: ["I need to buy a few things for dinner tonight.", "Let me get some bread, eggs, milk and tomatoes.", "Oh, and we also need a bottle of cooking oil.", "I think that is everything on my list."],
    questions: [
      { q: "What is the shopping for?", options: ["Dinner tonight", "A birthday party", "A trip", "Breakfast tomorrow"], answer: 0 },
      { q: "Which of these is on the list?", options: ["Bread and eggs", "A car", "Shoes", "A phone"], answer: 0 },
      { q: "What else do they need?", options: ["A bottle of cooking oil", "A television", "A book", "A ticket"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-20", cat: "general", level: "A2", title: "At the Post Office",
    script: ["Hello, I would like to send this letter to Germany.", "How much does it cost, and how long will it take?", "I would also like to buy five stamps, please.", "Can I pay by card here?"],
    questions: [
      { q: "Where is the letter going?", options: ["Germany", "France", "Japan", "Canada"], answer: 0 },
      { q: "How many stamps does the customer want?", options: ["Five", "One", "Ten", "Twenty"], answer: 0 },
      { q: "How does the customer want to pay?", options: ["By card", "Only cash", "With a cheque", "Later"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-21", cat: "general", level: "B1", title: "Planning a Holiday",
    script: ["This summer we are planning a holiday by the sea.", "We want to relax on the beach and swim every day.", "We are looking for a hotel that is not too expensive.", "We will probably stay there for one week."],
    questions: [
      { q: "Where are they going?", options: ["By the sea", "To the mountains", "To a city", "To a farm"], answer: 0 },
      { q: "What do they want to do?", options: ["Relax and swim", "Work hard", "Study", "Drive all day"], answer: 0 },
      { q: "How long will they stay?", options: ["One week", "One day", "One year", "One hour"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-22", cat: "general", level: "B1", title: "Describing Your Town",
    script: ["My town is small but very beautiful and quiet.", "There is a big park in the centre where families relax.", "We have a market, two schools and a small hospital.", "The best thing is that everyone knows each other."],
    questions: [
      { q: "What is the town like?", options: ["Small, beautiful and quiet", "Big and noisy", "Dirty and crowded", "Cold and empty"], answer: 0 },
      { q: "What is in the centre?", options: ["A big park", "An airport", "A factory", "A river"], answer: 0 },
      { q: "What is the best thing about it?", options: ["Everyone knows each other", "It is very large", "It has many cars", "It is far away"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-23", cat: "general", level: "A2", title: "A Birthday Invitation",
    script: ["Hi Madina, I am having a birthday party on Saturday.", "It starts at five o'clock at my house.", "There will be food, music and games.", "I really hope you can come!"],
    questions: [
      { q: "What is the party for?", options: ["A birthday", "A wedding", "A graduation", "New Year"], answer: 0 },
      { q: "What time does it start?", options: ["Five o'clock", "Ten o'clock", "Midnight", "Noon"], answer: 0 },
      { q: "What will there be?", options: ["Food, music and games", "Only homework", "A meeting", "An exam"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-24", cat: "general", level: "B1", title: "On the Bus",
    script: ["Attention passengers, the next stop is the Central Market.", "Please hold on tightly while the bus is moving.", "Remember to take all your belongings with you.", "The bus to the railway station leaves from this stop too."],
    questions: [
      { q: "What is the next stop?", options: ["The Central Market", "The airport", "The hospital", "The school"], answer: 0 },
      { q: "What should passengers remember?", options: ["To take all their belongings", "To sing", "To open the windows", "To run"], answer: 0 },
      { q: "What also leaves from this stop?", options: ["The bus to the railway station", "A plane", "A boat", "A train"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-25", cat: "general", level: "A2", title: "Talking About the Weekend",
    script: ["Last weekend was really nice and relaxing.", "On Saturday, I visited my grandparents in the village.", "On Sunday, I stayed at home and watched a good film.", "Now I feel ready for the new week."],
    questions: [
      { q: "How was the weekend?", options: ["Nice and relaxing", "Busy and tiring", "Boring", "Terrible"], answer: 0 },
      { q: "What did the speaker do on Saturday?", options: ["Visited grandparents", "Went to work", "Took an exam", "Flew abroad"], answer: 0 },
      { q: "What did the speaker do on Sunday?", options: ["Watched a film at home", "Ran a marathon", "Cleaned the office", "Went shopping"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-26", cat: "general", level: "A2", title: "Ordering Coffee",
    script: ["Hi, can I have a medium coffee with milk, please?", "Not too much sugar, just one spoon.", "Could I also have a piece of chocolate cake?", "I'll have it here, not to take away."],
    questions: [
      { q: "What size coffee?", options: ["Medium", "Small", "Large", "Extra large"], answer: 0 },
      { q: "How much sugar?", options: ["One spoon", "Five spoons", "No sugar", "A lot"], answer: 0 },
      { q: "Is it to take away?", options: ["No, to have here", "Yes, to take away", "For a friend", "For delivery"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-27", cat: "general", level: "B1", title: "Lost and Found",
    script: ["Excuse me, I think I left my bag on the train.", "It is a small black backpack with a laptop inside.", "I was sitting in the last carriage.", "Could you please check if anyone has found it?"],
    questions: [
      { q: "What did the person lose?", options: ["A black backpack", "A wallet", "A phone only", "A coat"], answer: 0 },
      { q: "What is inside it?", options: ["A laptop", "Food", "Clothes", "Books only"], answer: 0 },
      { q: "Where was the person sitting?", options: ["In the last carriage", "At the front", "On the floor", "Outside"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-28", cat: "general", level: "A2", title: "Asking About Opening Hours",
    script: ["Hello, could you tell me what time the museum opens?", "It opens at nine in the morning and closes at six.", "It is open every day except Monday.", "Tickets for students are half price."],
    questions: [
      { q: "What time does the museum open?", options: ["Nine in the morning", "Six in the morning", "Noon", "Midnight"], answer: 0 },
      { q: "Which day is it closed?", options: ["Monday", "Sunday", "Friday", "It never closes"], answer: 0 },
      { q: "What about student tickets?", options: ["Half price", "Free", "Double price", "Not allowed"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-29", cat: "general", level: "B2", title: "Weather and Traffic Report",
    script: ["Good morning, here is your weather and traffic update.", "Expect heavy rain in the city until midday.", "Because of the rain, traffic is very slow on the main road.", "Drivers should leave early and drive carefully."],
    questions: [
      { q: "What is the weather until midday?", options: ["Heavy rain", "Bright sun", "Snow", "Strong heat"], answer: 0 },
      { q: "Why is the traffic slow?", options: ["Because of the rain", "Because of a holiday", "Because of snow", "Because of wind"], answer: 0 },
      { q: "What should drivers do?", options: ["Leave early and drive carefully", "Drive fast", "Stay in bed", "Use the main road quickly"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-30", cat: "general", level: "B1", title: "Future Plans",
    script: ["After I finish university, I want to become a doctor.", "First, I will work in a local hospital to get experience.", "In a few years, I hope to study abroad.", "My dream is to help people in my own community."],
    questions: [
      { q: "What does the speaker want to become?", options: ["A doctor", "A pilot", "A teacher", "An artist"], answer: 0 },
      { q: "What will the speaker do first?", options: ["Work in a local hospital", "Study abroad at once", "Open a shop", "Travel the world"], answer: 0 },
      { q: "What is the speaker's dream?", options: ["To help people in their community", "To become rich only", "To live alone", "To stop working"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-31", cat: "general", level: "A2", title: "At the Gym",
    script: ["Welcome to our gym; would you like a short tour?", "We have machines for running, lifting and cycling.", "Classes like yoga start every evening at seven.", "The first week is free for all new members."],
    questions: [
      { q: "What machines does the gym have?", options: ["Running, lifting and cycling", "Only swimming pools", "Cooking machines", "None"], answer: 0 },
      { q: "When do classes like yoga start?", options: ["Every evening at seven", "Every morning at five", "Once a month", "Never"], answer: 0 },
      { q: "What is free for new members?", options: ["The first week", "Everything forever", "Lunch", "A car"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-32", cat: "general", level: "A2", title: "Booking Cinema Tickets",
    script: ["Hello, I would like two tickets for the eight o'clock film.", "Could we have seats near the middle, please?", "Are there any discounts for students?", "We'll pay by card, thank you."],
    questions: [
      { q: "How many tickets?", options: ["Two", "One", "Five", "Ten"], answer: 0 },
      { q: "Where do they want to sit?", options: ["Near the middle", "At the very front", "Outside", "On the floor"], answer: 0 },
      { q: "What do they ask about?", options: ["Student discounts", "The weather", "Parking", "Food"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-33", cat: "general", level: "B1", title: "Describing a Friend",
    script: ["My best friend's name is Dilshod.", "He is tall, friendly and always ready to help.", "He works as an engineer and loves playing chess.", "We have known each other since we were children."],
    questions: [
      { q: "What is the friend's name?", options: ["Dilshod", "Laziz", "Tom", "Bek"], answer: 0 },
      { q: "What is his job?", options: ["An engineer", "A doctor", "A teacher", "A driver"], answer: 0 },
      { q: "How long have they known each other?", options: ["Since they were children", "For one week", "For a month", "They just met"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-34", cat: "general", level: "B1", title: "A Simple Recipe",
    script: ["Today I will show you how to make a simple omelette.", "First, break two eggs into a bowl and add a little salt.", "Then heat some oil in a pan and pour in the eggs.", "Cook for three minutes and your omelette is ready."],
    questions: [
      { q: "What is being made?", options: ["An omelette", "A cake", "Soup", "Bread"], answer: 0 },
      { q: "How many eggs?", options: ["Two", "Five", "One", "Ten"], answer: 0 },
      { q: "How long do you cook it?", options: ["Three minutes", "One hour", "Ten seconds", "All day"], answer: 0 }
    ]
  },
  {
    id: "lis-gen-35", cat: "general", level: "B2", title: "Calling Customer Service",
    script: ["Thank you for calling customer service; how can I help you?", "I bought a phone last week, but the battery does not work well.", "I would like to return it or get a replacement.", "Could you tell me what I need to do?"],
    questions: [
      { q: "What did the customer buy?", options: ["A phone", "A car", "A book", "A shirt"], answer: 0 },
      { q: "What is the problem?", options: ["The battery does not work well", "It is the wrong colour", "It is too big", "It is lost"], answer: 0 },
      { q: "What does the customer want?", options: ["To return it or get a replacement", "To buy ten more", "Nothing", "A free holiday"], answer: 0 }
    ]
  }
);
