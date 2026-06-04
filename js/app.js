const App=(()=>{
let lang=localStorage.getItem('me70_lang')||'uz';
let currentPage='home';
let progress=JSON.parse(localStorage.getItem('me70_progress')||'{}');
if(!progress.grammarDone)progress.grammarDone=[];
if(!progress.readingDone)progress.readingDone=[];
if(!progress.vocabLearned)progress.vocabLearned=[];
if(!progress.testScores)progress.testScores={};
if(!progress.gtestScores)progress.gtestScores={};
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
function t(k){return LANG[lang][k]||k;}
function init(){
$('#splash').classList.add('hidden');$('#app').classList.remove('hidden');
applyLang();setupLangSwitch();setupNav();setupMenu();renderHome();updateProgress();
}
function applyLang(){
$$('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(LANG[lang][k])el.textContent=LANG[lang][k];});
$$('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
if($('#splashText'))$('#splashText').textContent=t('splashText');
renderCurrentPage();
}
function setupLangSwitch(){$('#langSwitch').addEventListener('click',e=>{const b=e.target.closest('.lang-btn');if(!b||b.dataset.lang===lang)return;lang=b.dataset.lang;localStorage.setItem('me70_lang',lang);applyLang();});}
function setupNav(){$$('.nav-link').forEach(l=>l.addEventListener('click',e=>{e.preventDefault();const p=l.dataset.page;if(p)go(p);}));}
function go(page,data){
currentPage=page;
$$('.nav-link').forEach(l=>l.classList.toggle('active',l.dataset.page===page));
$$('.page').forEach(p=>p.classList.remove('active'));
const target=$(`#page-${page}`);if(target)target.classList.add('active');
closeSidebar();window.scrollTo({top:0,behavior:'smooth'});
switch(page){
case'home':renderHome();break;case'grammar':renderGrammar();break;case'grammar-detail':renderGrammarDetail(data);break;
case'reading':renderReading();break;case'reading-detail':renderReadingDetail(data);break;
case'vocabulary':renderVocabulary();break;case'tests':renderTests();break;case'test-active':renderTestActive(data);break;
case'grammar-tests':renderGrammarTests();break;case'gtest-active':renderGTestActive(data);break;
}}
function renderCurrentPage(){go(currentPage);}
function setupMenu(){$('#menuBtn').addEventListener('click',toggleSidebar);$('#overlay').addEventListener('click',closeSidebar);}
function toggleSidebar(){$('#sidebar').classList.toggle('open');$('#overlay').classList.toggle('show');}
function closeSidebar(){$('#sidebar').classList.remove('open');$('#overlay').classList.remove('show');}
function saveProgress(){localStorage.setItem('me70_progress',JSON.stringify(progress));updateProgress();}
function updateProgress(){
const total=16+70+(typeof VOCABULARY!=='undefined'?VOCABULARY.length:250)+150+16;
const done=progress.grammarDone.length+progress.readingDone.length+progress.vocabLearned.length+Object.keys(progress.testScores).length+Object.keys(progress.gtestScores).length;
const pct=Math.round((done/total)*100);
$('#totalProg').textContent=pct+'%';
const bar=$('#userBarFill');if(bar)bar.style.width=pct+'%';
const lvl=$('#userLevel');if(lvl)lvl.textContent=pct+'%';
}
function gp(){return Math.round((progress.grammarDone.length/16)*100);}
function rp(){return Math.round((progress.readingDone.length/70)*100);}
function vp(){return Math.round((progress.vocabLearned.length/(typeof VOCABULARY!=='undefined'?VOCABULARY.length:250))*100);}
function tp(){return Math.round((Object.keys(progress.testScores).length/150)*100);}

// HOME
function renderHome(){
$('#page-home').innerHTML=`
<div class="hero"><h2>${t('heroTitle')}</h2><p>${t('heroDesc')}</p>
<button class="hero-btn" onclick="App.go('grammar')"><i class="fas fa-rocket"></i> ${t('heroBtn')}</button></div>
<div class="stats-row">
<div class="stat-card" onclick="App.go('grammar')"><div class="stat-icon"><i class="fas fa-book"></i></div><h3>16</h3><p>${t('statGrammar')}</p><div class="stat-bar"><div class="stat-bar-fill" style="width:${gp()}%"></div></div></div>
<div class="stat-card" onclick="App.go('reading')"><div class="stat-icon" style="background:#d1fae5;color:#059669"><i class="fas fa-file-medical-alt"></i></div><h3>70</h3><p>${t('statReading')}</p><div class="stat-bar"><div class="stat-bar-fill" style="width:${rp()}%"></div></div></div>
<div class="stat-card" onclick="App.go('vocabulary')"><div class="stat-icon" style="background:#fef3c7;color:#d97706"><i class="fas fa-spell-check"></i></div><h3>${typeof VOCABULARY!=='undefined'?VOCABULARY.length:250}</h3><p>${t('statVocab')}</p><div class="stat-bar"><div class="stat-bar-fill" style="width:${vp()}%"></div></div></div>
<div class="stat-card" onclick="App.go('tests')"><div class="stat-icon" style="background:#fee2e2;color:#dc2626"><i class="fas fa-clipboard-check"></i></div><h3>150</h3><p>${t('statTests')}</p><div class="stat-bar"><div class="stat-bar-fill" style="width:${tp()}%"></div></div></div>
</div>
<h3 class="sec-title">${t('whyTitle')}</h3>
<div class="features">
<div class="feat-card"><i class="fas fa-stethoscope"></i><h4>${t('f1')}</h4><p>${t('f1d')}</p></div>
<div class="feat-card"><i class="fas fa-clock"></i><h4>${t('f2')}</h4><p>${t('f2d')}</p></div>
<div class="feat-card"><i class="fas fa-book-reader"></i><h4>${t('f3')}</h4><p>${t('f3d')}</p></div>
<div class="feat-card"><i class="fas fa-tasks"></i><h4>${t('f4')}</h4><p>${t('f4d')}</p></div></div>
<h3 class="sec-title">${t('quickTitle')}</h3>
<div class="quick-grid">
<div class="quick-card" onclick="App.go('grammar')"><i class="fas fa-book"></i><span>${t('qGrammar')}</span></div>
<div class="quick-card" onclick="App.go('vocabulary')"><i class="fas fa-spell-check"></i><span>${t('qVocab')}</span></div>
<div class="quick-card" onclick="App.go('reading')"><i class="fas fa-file-medical-alt"></i><span>${t('qReading')}</span></div>
<div class="quick-card" onclick="App.go('tests')"><i class="fas fa-clipboard-check"></i><span>${t('qTest')}</span></div></div>`;
}

// GRAMMAR
function renderGrammar(){
if(typeof GRAMMAR==='undefined'){$('#page-grammar').innerHTML='<p>'+t('loading')+'</p>';return;}
let c='';GRAMMAR.forEach(g=>{const d=progress.grammarDone.includes(g.id);const desc=g.desc[lang]||g.desc.en;
c+=`<div class="tense-card ${d?'done':''}" onclick="App.go('grammar-detail',${g.id})"><h3>${g.name}</h3><span class="tense-badge">${g.type}</span><p>${desc}</p><div class="tense-footer"><span><i class="fas fa-arrow-right"></i></span>${d?'<i class="fas fa-check-circle done-icon"></i>':''}</div></div>`;});
$('#page-grammar').innerHTML=`<div class="sec-head"><h2><i class="fas fa-book"></i> ${t('grammar')}</h2><p>${t('grammarDesc')}</p></div><div class="grid-cards">${c}</div>`;
}
function renderGrammarDetail(id){
const p=$('#page-grammar-detail');if(typeof GRAMMAR==='undefined'){p.innerHTML='';return;}
const g=GRAMMAR.find(x=>x.id===id);if(!g){go('grammar');return;}
const d=progress.grammarDone.includes(g.id);
const formula=`<span class="pos">➕ ${g.formula.pos}</span><br><span class="neg">➖ ${g.formula.neg}</span><br><span class="que">❓ ${g.formula.que}</span>`;
let ex='';g.examples.forEach(e=>{ex+=`<div class="example-card"><div class="en">${e.en}</div><div class="tr">${e[lang]||e.uz}</div></div>`;});
let us='';(g.usage[lang]||g.usage.en).forEach(u=>{us+=`<div class="usage-item"><i class="fas fa-check"></i><span>${u}</span></div>`;});
let sg='';(g.signals||[]).forEach(s=>{sg+=`<span class="signal-tag">${s}</span>`;});
p.innerHTML=`<button class="back-btn" onclick="App.go('grammar')"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
<div class="detail-box"><h1>${g.name}</h1><span class="detail-badge">${g.type}</span>
<div class="detail-section"><h3><i class="fas fa-flask"></i> ${t('formula')}</h3><div class="formula-box">${formula}</div></div>
<div class="detail-section"><h3><i class="fas fa-lightbulb"></i> ${t('usage')}</h3>${us}</div>
<div class="detail-section"><h3><i class="fas fa-comment-dots"></i> ${t('examples')}</h3>${ex}</div>
${sg?`<div class="detail-section"><h3><i class="fas fa-tags"></i> ${t('signalWords')}</h3><div class="signal-list">${sg}</div></div>`:''}
<button class="btn-mark ${d?'marked':''}" onclick="App.toggleGrammarDone(${g.id})"><i class="fas fa-${d?'check-circle':'graduation-cap'}"></i> ${d?t('alreadyDone'):t('markDone')}</button></div>`;
}
function toggleGrammarDone(id){const i=progress.grammarDone.indexOf(id);if(i===-1){progress.grammarDone.push(id);toast(t('toastGrammarDone'),'success');}else progress.grammarDone.splice(i,1);saveProgress();renderGrammarDetail(id);}

// READING
let readLvl='elementary';
function renderReading(){
if(typeof READINGS==='undefined'){$('#page-reading').innerHTML='<p>'+t('loading')+'</p>';return;}
const levels=['elementary','pre-intermediate','intermediate'];
const names={elementary:t('elem'),'pre-intermediate':t('preInt'),intermediate:t('inter')};
let tabs='';levels.forEach(lv=>{const cnt=READINGS.filter(r=>r.level===lv).length;tabs+=`<button class="level-tab ${lv===readLvl?'active':''}" onclick="App.setReadLvl('${lv}')">${names[lv]} (${cnt})</button>`;});
const filtered=READINGS.filter(r=>r.level===readLvl);let c='';
filtered.forEach(r=>{const rd=progress.readingDone.includes(r.id);const tc=r.level==='elementary'?'tag-elem':r.level==='pre-intermediate'?'tag-pre':'tag-inter';
c+=`<div class="reading-card ${rd?'read':''}" onclick="App.go('reading-detail',${r.id})"><span class="reading-tag ${tc}">${names[r.level]}</span><h3>${r.title}</h3><p>${r.text.substring(0,100)}...</p></div>`;});
$('#page-reading').innerHTML=`<div class="sec-head"><h2><i class="fas fa-file-medical-alt"></i> ${t('reading')}</h2><p>${t('readingDesc')}</p></div><div class="level-tabs">${tabs}</div><div class="grid-cards">${c}</div>`;
}
function setReadLvl(lv){readLvl=lv;renderReading();}
function renderReadingDetail(id){
const p=$('#page-reading-detail');if(typeof READINGS==='undefined')return;
const r=READINGS.find(x=>x.id===id);if(!r){go('reading');return;}
const rd=progress.readingDone.includes(r.id);
let qs='';r.questions.forEach((q,qi)=>{let opts='';q.o.forEach((o,oi)=>{opts+=`<button class="q-opt" onclick="App.answerRead(this,${qi},${oi},${q.a})">${o}</button>`;});
qs+=`<div class="q-box"><p>${qi+1}. ${q.q}</p><div class="q-opts">${opts}</div></div>`;});
p.innerHTML=`<button class="back-btn" onclick="App.go('reading')"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
<div class="detail-box"><h1>${r.title}</h1><span class="detail-badge">${r.level}</span><div class="passage-text">${r.text}</div>
<div class="detail-section"><h3><i class="fas fa-question-circle"></i> Questions</h3>${qs}</div>
<button class="btn-mark ${rd?'marked':''}" onclick="App.toggleReadDone(${r.id})"><i class="fas fa-${rd?'check-circle':'book-open'}"></i> ${rd?t('readMark'):t('readUnmark')}</button></div>`;
}
function answerRead(btn,qi,oi,correct){const parent=btn.closest('.q-opts');const btns=parent.querySelectorAll('.q-opt');btns.forEach(b=>b.disabled=true);if(oi===correct)btn.classList.add('correct');else{btn.classList.add('wrong');btns[correct].classList.add('show-correct');}}
function toggleReadDone(id){const i=progress.readingDone.indexOf(id);if(i===-1){progress.readingDone.push(id);toast(t('toastReadDone'),'success');}else progress.readingDone.splice(i,1);saveProgress();renderReadingDetail(id);}

// VOCABULARY
let vFilter='all',vSearch='',vPage=1;const VPP=20;
function renderVocabulary(){
const p=$('#page-vocabulary');if(typeof VOCABULARY==='undefined'){p.innerHTML='<p>'+t('loading')+'</p>';return;}
let f=VOCABULARY;if(vFilter==='medical')f=f.filter(v=>v.cat==='medical');else if(vFilter==='common')f=f.filter(v=>v.cat==='common');
if(vSearch){const s=vSearch.toLowerCase();f=f.filter(v=>v.en.toLowerCase().includes(s)||(v.uz&&v.uz.toLowerCase().includes(s)));}
const totalPg=Math.ceil(f.length/VPP);if(vPage>totalPg)vPage=totalPg||1;
const start=(vPage-1)*VPP;const items=f.slice(start,start+VPP);
let cards='';items.forEach(v=>{const learned=progress.vocabLearned.includes(v.id);
cards+=`<div class="vocab-card ${learned?'learned':''}" onclick="App.showVocab(${v.id})"><div class="v-word">${v.en}</div><div class="v-trans">${v[lang]||v.uz}</div><span class="v-type">${v.pos}</span></div>`;});
let pgBtns='';for(let i=Math.max(1,vPage-3);i<=Math.min(totalPg,vPage+3);i++){pgBtns+=`<button class="pg-btn ${i===vPage?'active':''}" onclick="App.vGoPage(${i})">${i}</button>`;}
p.innerHTML=`<div class="sec-head"><h2><i class="fas fa-spell-check"></i> ${t('vocabulary')}</h2><p>${t('vocabDesc')}</p></div>
<div class="vocab-filters">
<button class="vocab-filter ${vFilter==='all'?'active':''}" onclick="App.vSetFilter('all')">${t('all')} (${VOCABULARY.length})</button>
<button class="vocab-filter ${vFilter==='medical'?'active':''}" onclick="App.vSetFilter('medical')">${t('medical')} (${VOCABULARY.filter(v=>v.cat==='medical').length})</button>
<button class="vocab-filter ${vFilter==='common'?'active':''}" onclick="App.vSetFilter('common')">${t('common')} (${VOCABULARY.filter(v=>v.cat==='common').length})</button></div>
<div class="search-bar"><i class="fas fa-search"></i><input type="text" placeholder="${t('searchPlc')}" value="${vSearch}" oninput="App.vSearch(this.value)"/></div>
<div class="vocab-grid">${cards||'<p style="text-align:center;color:var(--muted);grid-column:1/-1">—</p>'}</div>
<div class="pagination">${pgBtns}</div>`;
}
function vSetFilter(f){vFilter=f;vPage=1;renderVocabulary();}
function vSearch(v){vSearch=v;vPage=1;renderVocabulary();}
function vGoPage(p){vPage=p;renderVocabulary();window.scrollTo({top:200,behavior:'smooth'});}
function showVocab(id){
const v=VOCABULARY.find(x=>x.id===id);if(!v)return;
const learned=progress.vocabLearned.includes(v.id);
const modal=$('#modal');modal.classList.remove('hidden');
modal.innerHTML=`<div class="modal-box"><button class="modal-close" onclick="App.closeModal()"><i class="fas fa-times"></i></button>
<div class="m-word">${v.en}</div><div class="m-trans">${v[lang]||v.uz}</div><span class="m-pos">${v.pos}</span>
${v.ex?`<div class="m-ex"><strong>${t('example')}:</strong> ${v.ex}</div>`:''}
<div class="m-actions"><button class="m-btn m-btn-learn ${learned?'done':''}" onclick="App.toggleVocab(${v.id})"><i class="fas fa-${learned?'undo':'check'}"></i> ${learned?t('unlearnWord'):t('learnWord')}</button>
<button class="m-btn m-btn-close" onclick="App.closeModal()"><i class="fas fa-times"></i> ${t('back')}</button></div></div>`;
}
function toggleVocab(id){const i=progress.vocabLearned.indexOf(id);if(i===-1){progress.vocabLearned.push(id);toast(t('toastLearned'),'success');}else{progress.vocabLearned.splice(i,1);toast(t('toastUnlearned'),'info');}saveProgress();showVocab(id);renderVocabulary();}
function closeModal(){$('#modal').classList.add('hidden');$('#modal').innerHTML='';}

// TESTS
function renderTests(){
const p=$('#page-tests');if(typeof TESTS==='undefined'||!TESTS.length){p.innerHTML=`<div class="sec-head"><h2><i class="fas fa-clipboard-check"></i> ${t('tests')}</h2><p>${t('testsDesc')}</p></div><p>${t('loading')}</p>`;return;}
let c='';for(let i=0;i<Math.min(150,TESTS.length);i++){const sn=i+1;const sc=progress.testScores[sn];const d=sc!==undefined;
c+=`<div class="test-set ${d?'done':''}" onclick="App.go('test-active',${sn})"><div class="ts-num">#${sn}</div><div class="ts-range">${i*20+1}-${i*20+20}</div>${d?`<div class="ts-score ${sc>=14?'pass':''}">${sc}/20</div>`:''}</div>`;}
p.innerHTML=`<div class="sec-head"><h2><i class="fas fa-clipboard-check"></i> ${t('tests')}</h2><p>${t('testsDesc')}</p></div><div class="grid-sm">${c}</div>`;
}

// TEST ACTIVE
let ts={};
function renderTestActive(sn){
if(typeof TESTS==='undefined'||!TESTS.length){$('#page-test-active').innerHTML='';return;}
const qs=TESTS[sn-1];if(!qs){go('tests');return;}
ts={sn,qs,cur:0,ans:new Array(qs.length).fill(null)};renderTQ();
}
function renderTQ(){
const p=$('#page-test-active');const{qs,cur,ans,sn}=ts;const q=qs[cur];const total=qs.length;const pct=((cur+1)/total)*100;
const qText=lang==='en'?(q.q_en||q.q):lang==='ru'?(q.q_ru||q.q):q.q;
let opts='';q.o.forEach((o,i)=>{let cls='';if(ans[cur]!==null){if(i===q.a)cls='correct';else if(i===ans[cur]&&ans[cur]!==q.a)cls='wrong';}
opts+=`<button class="t-opt ${cls}" ${ans[cur]!==null?'disabled':''} onclick="App.tAns(${i})">${o}</button>`;});
const isLast=cur===total-1;const allDone=ans.every(a=>a!==null);
p.innerHTML=`<button class="back-btn" onclick="App.go('tests')"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
<div class="test-top"><h3>${t('testTitle')} #${sn} — ${cur+1}${t('of')}${total}</h3><div class="test-prog"><div class="test-prog-fill" style="width:${pct}%"></div></div></div>
<div class="test-body"><div class="t-qnum">${t('questionWord')} ${cur+1}${t('of')}${total}</div><div class="t-qtext">${qText}</div><div class="t-opts">${opts}</div></div>
<div class="test-btns"><button class="t-btn t-btn-prev" ${cur===0?'disabled style="opacity:.4"':''} onclick="App.tPrev()"><i class="fas fa-arrow-left"></i> ${t('prev')}</button>
${isLast&&allDone?`<button class="t-btn t-btn-finish" onclick="App.tFinish()"><i class="fas fa-check"></i> ${t('finish')}</button>`:`<button class="t-btn t-btn-next" ${cur===total-1?'disabled style="opacity:.4"':''} onclick="App.tNext()">${t('next')} <i class="fas fa-arrow-right"></i></button>`}</div>`;
}
function tAns(i){if(ts.ans[ts.cur]!==null)return;ts.ans[ts.cur]=i;renderTQ();if(ts.cur<ts.qs.length-1)setTimeout(()=>{ts.cur++;renderTQ();},700);}
function tNext(){if(ts.cur<ts.qs.length-1){ts.cur++;renderTQ();}}
function tPrev(){if(ts.cur>0){ts.cur--;renderTQ();}}
function tFinish(){
const{qs,ans,sn}=ts;let correct=0;ans.forEach((a,i)=>{if(a===qs[i].a)correct++;});
progress.testScores[sn]=correct;saveProgress();toast(t('toastTestComplete'),'success');
const pct=Math.round((correct/qs.length)*100);let msg=t('tryAgain'),icon='😔';if(pct>=90){msg=t('excellent');icon='🏆';}else if(pct>=70){msg=t('good');icon='👍';}
$('#page-test-active').innerHTML=`<div class="result-box"><div class="result-icon">${icon}</div><div class="result-score">${correct}/${qs.length}</div><div class="result-label">${msg}</div>
<div class="result-btns"><button class="r-btn r-btn-retry" onclick="App.go('test-active',${sn})"><i class="fas fa-redo"></i> ${t('retry')}</button><button class="r-btn r-btn-back" onclick="App.go('tests')"><i class="fas fa-arrow-left"></i> ${t('goBack')}</button></div></div>`;
}

// GRAMMAR TESTS
function renderGrammarTests(){
const p=$('#page-grammar-tests');if(typeof GRAMMAR==='undefined'||typeof GRAMMAR_TESTS==='undefined'){p.innerHTML='<p>'+t('loading')+'</p>';return;}
let c='';GRAMMAR.forEach(g=>{const sc=progress.gtestScores[g.id];const d=sc!==undefined;
c+=`<div class="tense-card ${d?'done':''}" onclick="App.go('gtest-active',${g.id})"><h3>${g.name}</h3><span class="tense-badge">${g.type}</span><p>30 ${t('questionWord')}</p>
<div class="tense-footer">${d?`<span class="ts-score ${sc>=21?'pass':''}">${sc}/30</span>`:`<span>${t('notStarted')}</span>`}${d?'<i class="fas fa-check-circle done-icon"></i>':'<i class="fas fa-arrow-right" style="color:var(--primary)"></i>'}</div></div>`;});
p.innerHTML=`<div class="sec-head"><h2><i class="fas fa-pen-fancy"></i> ${t('grammarTests')}</h2><p>${t('grammarTestsDesc')}</p></div><div class="grid-cards">${c}</div>`;
}
function renderGTestActive(tid){
if(typeof GRAMMAR_TESTS==='undefined'){$('#page-gtest-active').innerHTML='';return;}
const qs=GRAMMAR_TESTS[tid];if(!qs){go('grammar-tests');return;}
const tense=GRAMMAR.find(g=>g.id===tid);
ts={sn:tid,qs,cur:0,ans:new Array(qs.length).fill(null),tName:tense?tense.name:''};renderGTQ();
}
function renderGTQ(){
const p=$('#page-gtest-active');const{qs,cur,ans,sn,tName}=ts;const q=qs[cur];const total=qs.length;const pct=((cur+1)/total)*100;
let opts='';q.o.forEach((o,i)=>{let cls='';if(ans[cur]!==null){if(i===q.a)cls='correct';else if(i===ans[cur]&&ans[cur]!==q.a)cls='wrong';}
opts+=`<button class="t-opt ${cls}" ${ans[cur]!==null?'disabled':''} onclick="App.gtAns(${i})">${o}</button>`;});
const isLast=cur===total-1;const allDone=ans.every(a=>a!==null);
p.innerHTML=`<button class="back-btn" onclick="App.go('grammar-tests')"><i class="fas fa-arrow-left"></i> ${t('back')}</button>
<div class="test-top"><h3>${tName} — ${cur+1}${t('of')}${total}</h3><div class="test-prog"><div class="test-prog-fill" style="width:${pct}%"></div></div></div>
<div class="test-body"><div class="t-qnum">${t('questionWord')} ${cur+1}${t('of')}${total}</div><div class="t-qtext">${q.q}</div><div class="t-opts">${opts}</div></div>
<div class="test-btns"><button class="t-btn t-btn-prev" ${cur===0?'disabled style="opacity:.4"':''} onclick="App.gtPrev()"><i class="fas fa-arrow-left"></i> ${t('prev')}</button>
${isLast&&allDone?`<button class="t-btn t-btn-finish" onclick="App.gtFinish()"><i class="fas fa-check"></i> ${t('finish')}</button>`:`<button class="t-btn t-btn-next" ${cur===total-1?'disabled style="opacity:.4"':''} onclick="App.gtNext()">${t('next')} <i class="fas fa-arrow-right"></i></button>`}</div>`;
}
function gtAns(i){if(ts.ans[ts.cur]!==null)return;ts.ans[ts.cur]=i;renderGTQ();if(ts.cur<ts.qs.length-1)setTimeout(()=>{ts.cur++;renderGTQ();},700);}
function gtNext(){if(ts.cur<ts.qs.length-1){ts.cur++;renderGTQ();}}
function gtPrev(){if(ts.cur>0){ts.cur--;renderGTQ();}}
function gtFinish(){
const{qs,ans,sn,tName}=ts;let correct=0;ans.forEach((a,i)=>{if(a===qs[i].a)correct++;});
progress.gtestScores[sn]=correct;saveProgress();toast(t('toastTestComplete'),'success');
const pct=Math.round((correct/qs.length)*100);let msg=t('tryAgain'),icon='😔';if(pct>=90){msg=t('excellent');icon='🏆';}else if(pct>=70){msg=t('good');icon='👍';}
$('#page-gtest-active').innerHTML=`<div class="result-box"><div class="result-icon">${icon}</div><div class="result-score">${correct}/${qs.length}</div><div class="result-label">${tName} — ${msg}</div>
<div class="result-btns"><button class="r-btn r-btn-retry" onclick="App.go('gtest-active',${sn})"><i class="fas fa-redo"></i> ${t('retry')}</button><button class="r-btn r-btn-back" onclick="App.go('grammar-tests')"><i class="fas fa-arrow-left"></i> ${t('goBack')}</button></div></div>`;
}

// TOAST
function toast(msg,type=''){const c=$('#toastContainer');const el=document.createElement('div');el.className=`toast ${type}`;el.innerHTML=`<i class="fas fa-${type==='success'?'check-circle':type==='error'?'exclamation-circle':'info-circle'}"></i> ${msg}`;c.appendChild(el);setTimeout(()=>{el.style.opacity='0';setTimeout(()=>el.remove(),300);},3000);}

document.addEventListener('DOMContentLoaded',init);
return{go,toggleGrammarDone,setReadLvl,answerRead,toggleReadDone,vSetFilter,vSearch,vGoPage,showVocab,toggleVocab,closeModal,tAns,tNext,tPrev,tFinish,gtAns,gtNext,gtPrev,gtFinish,toast};
})();
