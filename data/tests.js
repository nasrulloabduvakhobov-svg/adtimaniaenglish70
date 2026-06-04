// Vocabulary Tests - 150 sets x 20 questions (auto-generated from VOCABULARY)
const TESTS=(function(){
const sets=[];
if(typeof VOCABULARY==='undefined'||!VOCABULARY.length)return sets;
const all=VOCABULARY;
const total=150,perSet=20;
let seed=42;
function rand(){seed=(seed*16807)%2147483647;return(seed-1)/2147483646;}
function randInt(max){return Math.floor(rand()*max);}
for(let s=0;s<total;s++){
const questions=[];
for(let q=0;q<perSet;q++){
const wi=(s*perSet+q)%all.length;
const w=all[wi];
const wrongs=[];
let att=0;
while(wrongs.length<3&&att<50){const r=randInt(all.length);if(r!==wi&&!wrongs.includes(r))wrongs.push(r);att++;}
const correctAns=w.uz||w.en;
const wrongAns=wrongs.map(i=>all[i].uz||all[i].en);
const pos=randInt(4);
const opts=[...wrongAns];
opts.splice(pos,0,correctAns);
questions.push({q:'"'+w.en+'" so\u2019zining tarjimasi?',q_en:'What does "'+w.en+'" mean?',q_ru:'\u0427\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 "'+w.en+'"?',o:opts.slice(0,4),a:pos});
}
sets.push(questions);
}
return sets;
})();
