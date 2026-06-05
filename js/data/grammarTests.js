/* ===== Grammar test banks (per tense) =====
   Har bir zamon uchun savollar. answer = to'g'ri variant indeksi.
   Quiz engine bankdagi savollarni aralashtirib test qiladi.
*/
window.ME70_GTESTS = {
  "present-simple": [
    { q: "She ___ to the hospital every day.", options: ["go", "goes", "going", "went"], answer: 1 },
    { q: "The heart ___ blood through the body.", options: ["pump", "pumps", "pumping", "pumped"], answer: 1 },
    { q: "I ___ coffee in the morning.", options: ["drinks", "drinking", "drink", "drank"], answer: 2 },
    { q: "___ he work at the clinic?", options: ["Do", "Does", "Is", "Are"], answer: 1 },
    { q: "Nurses ___ on Sundays.", options: ["doesn't work", "don't work", "not work", "isn't work"], answer: 1 },
    { q: "Water ___ at 100 degrees Celsius.", options: ["boil", "boils", "is boil", "boiling"], answer: 1 },
    { q: "They ___ English very well.", options: ["speaks", "speak", "speaking", "spoke"], answer: 1 },
    { q: "My father ___ smoke.", options: ["don't", "isn't", "doesn't", "not"], answer: 2 },
    { q: "The pharmacy ___ at 8 a.m.", options: ["open", "opens", "opening", "is open"], answer: 1 },
    { q: "We usually ___ dinner at seven.", options: ["has", "have", "having", "had"], answer: 1 }
  ],
  "present-continuous": [
    { q: "The doctor ___ the patient now.", options: ["examine", "examines", "is examining", "examined"], answer: 2 },
    { q: "Listen! The baby ___.", options: ["cries", "is crying", "cry", "cried"], answer: 1 },
    { q: "I ___ my temperature at the moment.", options: ["take", "am taking", "takes", "took"], answer: 1 },
    { q: "They ___ in the laboratory right now.", options: ["work", "works", "are working", "worked"], answer: 2 },
    { q: "She ___ today because she feels sick.", options: ["isn't working", "doesn't work", "not working", "don't work"], answer: 0 },
    { q: "___ you listening to me?", options: ["Do", "Is", "Are", "Does"], answer: 2 },
    { q: "Look! The nurse ___ an injection.", options: ["give", "gives", "is giving", "gave"], answer: 2 },
    { q: "We ___ a new treatment these days.", options: ["try", "are trying", "tries", "tried"], answer: 1 }
  ],
  "present-perfect": [
    { q: "The patient ___ completely.", options: ["has recovered", "have recovered", "recovered", "is recovering"], answer: 0 },
    { q: "I ___ here for ten years.", options: ["work", "have worked", "working", "am working"], answer: 1 },
    { q: "She ___ taken the pills yet.", options: ["hasn't", "haven't", "didn't", "doesn't"], answer: 0 },
    { q: "___ you ever had surgery?", options: ["Did", "Have", "Has", "Do"], answer: 1 },
    { q: "We ___ just finished the operation.", options: ["has", "have", "are", "did"], answer: 1 },
    { q: "He ___ in this hospital since 2010.", options: ["works", "worked", "has worked", "is working"], answer: 2 },
    { q: "They ___ already eaten.", options: ["has", "have", "is", "are"], answer: 1 },
    { q: "I ___ never seen such a case.", options: ["have", "has", "am", "did"], answer: 0 }
  ],
  "present-perfect-continuous": [
    { q: "She ___ medicine for six years.", options: ["has been studying", "have been studying", "is studying", "studied"], answer: 0 },
    { q: "The patient ___ all night.", options: ["has been coughing", "have been coughing", "is coughing", "coughed"], answer: 0 },
    { q: "How long ___ you been waiting?", options: ["has", "have", "are", "did"], answer: 1 },
    { q: "I ___ feeling well lately.", options: ["haven't been", "hasn't been", "didn't been", "am not"], answer: 0 },
    { q: "They ___ working since morning.", options: ["has been", "have been", "are", "was"], answer: 1 },
    { q: "He ___ been living here for years.", options: ["have", "has", "is", "did"], answer: 1 }
  ],
  "past-simple": [
    { q: "The surgeon ___ the operation yesterday.", options: ["perform", "performs", "performed", "performing"], answer: 2 },
    { q: "He ___ dizzy this morning.", options: ["feel", "feels", "felt", "feeling"], answer: 2 },
    { q: "We ___ the cause of the illness.", options: ["didn't found", "didn't find", "don't find", "not found"], answer: 1 },
    { q: "___ the patient sleep well?", options: ["Did", "Do", "Does", "Was"], answer: 0 },
    { q: "She ___ to the hospital last week.", options: ["go", "goes", "went", "gone"], answer: 2 },
    { q: "They ___ a new clinic in 2019.", options: ["open", "opened", "opens", "opening"], answer: 1 },
    { q: "I ___ the medicine an hour ago.", options: ["take", "took", "taken", "takes"], answer: 1 },
    { q: "He ___ not come to work yesterday.", options: ["do", "does", "did", "is"], answer: 2 }
  ],
  "past-continuous": [
    { q: "The nurse ___ the medicine when the doctor arrived.", options: ["prepared", "was preparing", "prepares", "is preparing"], answer: 1 },
    { q: "They ___ the diagnosis at noon.", options: ["discussed", "were discussing", "discuss", "are discussing"], answer: 1 },
    { q: "I ___ listening carefully.", options: ["wasn't", "weren't", "didn't", "am not"], answer: 0 },
    { q: "___ you working late last night?", options: ["Was", "Were", "Did", "Are"], answer: 1 },
    { q: "While she ___, the phone rang.", options: ["slept", "was sleeping", "sleeps", "sleep"], answer: 1 },
    { q: "We ___ waiting when it started to rain.", options: ["was", "were", "are", "did"], answer: 1 }
  ],
  "past-perfect": [
    { q: "The patient ___ the pills before the doctor came.", options: ["has taken", "had taken", "took", "takes"], answer: 1 },
    { q: "By the time we arrived, the operation ___.", options: ["had finished", "has finished", "finishes", "finished"], answer: 0 },
    { q: "She ___ eaten anything before the test.", options: ["hadn't", "hasn't", "didn't", "wasn't"], answer: 0 },
    { q: "___ they left before you called?", options: ["Have", "Has", "Had", "Did"], answer: 2 },
    { q: "He realised he ___ his keys.", options: ["forgets", "had forgotten", "forgot", "has forgotten"], answer: 1 },
    { q: "After the nurse ___ the room, the patient came in.", options: ["had cleaned", "has cleaned", "cleans", "cleaning"], answer: 0 }
  ],
  "past-perfect-continuous": [
    { q: "He ___ as a doctor for 20 years before he retired.", options: ["had been working", "has been working", "was working", "worked"], answer: 0 },
    { q: "The patient ___ tired before the diagnosis.", options: ["had been feeling", "has been feeling", "feels", "is feeling"], answer: 0 },
    { q: "We ___ waiting long when the nurse called us.", options: ["hadn't been", "haven't been", "wasn't", "didn't"], answer: 0 },
    { q: "___ she been studying all night?", options: ["Has", "Had", "Was", "Did"], answer: 1 },
    { q: "They ___ been living there for years before they moved.", options: ["has", "had", "have", "was"], answer: 1 },
    { q: "I ___ been working all day, so I was exhausted.", options: ["have", "has", "had", "did"], answer: 2 }
  ],
  "future-simple": [
    { q: "The doctor ___ you in five minutes.", options: ["see", "sees", "will see", "saw"], answer: 2 },
    { q: "This medicine ___ the pain.", options: ["reduce", "will reduce", "reduces", "reduced"], answer: 1 },
    { q: "I ___ forget to take the pills.", options: ["won't", "don't", "didn't", "am not"], answer: 0 },
    { q: "___ you help me move the patient?", options: ["Do", "Will", "Are", "Did"], answer: 1 },
    { q: "They ___ arrive tomorrow.", options: ["will", "are", "do", "did"], answer: 0 },
    { q: "I think it ___ rain later.", options: ["will", "is", "does", "did"], answer: 0 },
    { q: "She ___ probably call you.", options: ["will", "is", "does", "did"], answer: 0 },
    { q: "We ___ not be late.", options: ["will", "are", "do", "did"], answer: 0 }
  ],
  "future-continuous": [
    { q: "At 9 a.m. tomorrow the surgeon ___.", options: ["operates", "will operate", "will be operating", "is operating"], answer: 2 },
    { q: "The nurse ___ the patient all night.", options: ["will monitor", "will be monitoring", "monitors", "monitored"], answer: 1 },
    { q: "I ___ working this weekend.", options: ["won't be", "am not", "don't", "didn't"], answer: 0 },
    { q: "___ you be using the lab later?", options: ["Will", "Do", "Are", "Did"], answer: 0 },
    { q: "This time next week, we ___ on holiday.", options: ["will be relaxing", "relax", "are relaxing", "relaxed"], answer: 0 },
    { q: "They ___ be waiting for us at the station.", options: ["will", "are", "do", "did"], answer: 0 }
  ],
  "future-perfect": [
    { q: "By next month, she ___ her internship.", options: ["will finish", "will have finished", "finishes", "finished"], answer: 1 },
    { q: "The patient ___ by Friday.", options: ["will recover", "will have recovered", "recovers", "recovered"], answer: 1 },
    { q: "We ___ received the results by then.", options: ["won't have", "won't", "don't have", "didn't"], answer: 0 },
    { q: "___ you have completed the report by 5?", options: ["Will", "Do", "Are", "Have"], answer: 0 },
    { q: "By 2030, they ___ the new hospital.", options: ["will build", "will have built", "build", "built"], answer: 1 },
    { q: "He ___ have left by the time we arrive.", options: ["will", "is", "does", "did"], answer: 0 }
  ],
  "future-perfect-continuous": [
    { q: "By June, he ___ English for a year.", options: ["will study", "will have been studying", "studies", "studied"], answer: 1 },
    { q: "By 6 p.m., the nurse ___ for 12 hours.", options: ["will work", "will have been working", "works", "worked"], answer: 1 },
    { q: "She ___ been waiting long.", options: ["won't have", "won't", "doesn't have", "didn't"], answer: 0 },
    { q: "By 2030, they ___ here for ten years.", options: ["will live", "will have been living", "live", "lived"], answer: 1 },
    { q: "By the end of the shift, I ___ for hours.", options: ["will have been standing", "will stand", "stand", "stood"], answer: 0 },
    { q: "How long ___ you have been waiting by then?", options: ["will", "do", "are", "have"], answer: 0 }
  ],
  "future-in-the-past-simple": [
    { q: "The doctor said he ___ call the next day.", options: ["will", "would", "is", "did"], answer: 1 },
    { q: "She knew the treatment ___ help.", options: ["will", "would", "is", "does"], answer: 1 },
    { q: "They promised they ___ not be late.", options: ["will", "would", "are", "did"], answer: 1 },
    { q: "He thought the patient ___ recover soon.", options: ["will", "would", "is", "does"], answer: 1 },
    { q: "I was sure she ___ pass the exam.", options: ["will", "would", "is", "did"], answer: 1 },
    { q: "We hoped it ___ work.", options: ["will", "would", "is", "does"], answer: 1 }
  ],
  "future-in-the-past-continuous": [
    { q: "He said he ___ waiting at the clinic.", options: ["will be", "would be", "is", "was"], answer: 1 },
    { q: "She knew they ___ operating at that time.", options: ["will be", "would be", "are", "were"], answer: 1 },
    { q: "I thought you ___ not be working then.", options: ["will", "would", "are", "did"], answer: 1 },
    { q: "They told us they ___ traveling all day.", options: ["will be", "would be", "are", "were"], answer: 1 },
    { q: "He promised he ___ helping us during the shift.", options: ["will be", "would be", "is", "was"], answer: 1 }
  ],
  "future-in-the-past-perfect": [
    { q: "She said she ___ the report by Monday.", options: ["will have finished", "would have finished", "finishes", "finished"], answer: 1 },
    { q: "He believed the patient ___ by then.", options: ["will have recovered", "would have recovered", "recovers", "recovered"], answer: 1 },
    { q: "They thought we ___ not left yet.", options: ["will have", "would have", "are", "did"], answer: 1 },
    { q: "I was sure he ___ everything by the evening.", options: ["will have done", "would have done", "does", "did"], answer: 1 },
    { q: "We hoped they ___ arrived before the storm.", options: ["will have", "would have", "are", "did"], answer: 1 }
  ],
  "future-in-the-past-perfect-continuous": [
    { q: "He said by June he ___ there for five years.", options: ["will have been working", "would have been working", "works", "worked"], answer: 1 },
    { q: "She knew that by then she ___ for hours.", options: ["will have been studying", "would have been studying", "studies", "studied"], answer: 1 },
    { q: "They thought I ___ waiting long.", options: ["will not have been", "would not have been", "am not", "did not"], answer: 1 },
    { q: "We expected he ___ travelling for days by then.", options: ["will have been", "would have been", "is", "was"], answer: 1 },
    { q: "I felt that by midnight we ___ working non-stop.", options: ["will have been", "would have been", "are", "were"], answer: 1 }
  ]
};
