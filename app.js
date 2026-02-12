const content=document.getElementById("content");

/* DB LOCALĂ */

let db=JSON.parse(localStorage.getItem("greekDB"));

if(!db){
 db={
  words:[...vocabular,...biblic],
  mistakes:{},
  learned:{}
 };
 localStorage.setItem("greekDB",JSON.stringify(db));
}
if('serviceWorker' in navigator){
 navigator.serviceWorker.register('sw.js');
}
/* AUDIO PRONUNȚIE */

function speak(text){
 let msg=new SpeechSynthesisUtterance(text);
 msg.lang="el-GR";
 speechSynthesis.speak(msg);
}

/* DARK MODE */

function toggleDark(){
 document.body.classList.toggle("dark");
 localStorage.setItem("dark",
 document.body.classList.contains("dark"));
}

if(localStorage.getItem("dark")==="true")
 document.body.classList.add("dark");

/* VOCABULAR */

function showVocab(){

 content.innerHTML=db.words.map(v=>`
  <div class="card">
   <div class="greek" onclick="speak('${v.g}')">
    ${v.g}
   </div>
   ${v.r}
  </div>
 `).join("");
}

/* EXPRESII */

function showExpr(){

 content.innerHTML=expresii.map(v=>`
  <div class="card">
   <div class="greek" onclick="speak('${v.g}')">
    ${v.g}
   </div>
   ${v.r}
  </div>
 `).join("");
}

/* BIBLIC */

function showBiblic(){

 content.innerHTML=biblic.map(v=>`
  <div class="card">
   <div class="greek" onclick="speak('${v.g}')">
    ${v.g}
   </div>
   ${v.r}
  </div>
 `).join("");
}

/* GRAMATICĂ */

function showGram(){

 content.innerHTML=gramatica.map(g=>
 `<div class="card">${g}</div>`
 ).join("");
}

/* RUGĂCIUNI */

function showRug(){

 content.innerHTML=rugaciuni.map(r=>`
  <div class="card">
   <h3>${r.titlu}</h3>
   ${r.versuri.map(v=>`
    <p onclick="speak('${v.gr}')">
     <b>${v.gr}</b><br>${v.ro}
    </p>
   `).join("")}
  </div>
 `).join("");
}

/* QUIZ ADAPTIV */

function quiz(){

 let words=db.words.sort((a,b)=>
 (db.mistakes[b.g]||0)-
 (db.mistakes[a.g]||0));

 let w=words[0];

 let opt=[
  w.g,
  words[Math.floor(Math.random()*words.length)].g,
  words[Math.floor(Math.random()*words.length)].g
 ].sort(()=>Math.random()-0.5);

 content.innerHTML=`
  <div class="card">
   <h3>${w.r}</h3>
   ${opt.map(o=>
    `<button onclick="check('${o}','${w.g}')">
     ${o}
    </button>`
   ).join("")}
  </div>`;
}

function check(a,b){

 if(a===b){
  db.learned[b]=true;
  alert("✔ Corect");
 }else{
  db.mistakes[b]=(db.mistakes[b]||0)+1;
  alert("❌ Greșit");
 }

 localStorage.setItem("greekDB",JSON.stringify(db));
 quiz();
}

/* ADAUGARE CUVINTE */

function addWord(){

 content.innerHTML=`
 <div class="card">
  <h3>Adaugă cuvânt / expresie</h3>
  <input id="g" placeholder="Greacă">
  <input id="r" placeholder="Română">
  <button onclick="saveWord()">Salvează</button>
 </div>`;
}

function saveWord(){

 let g=document.getElementById("g").value;
 let r=document.getElementById("r").value;

 if(!g || !r) return alert("Completează!");

 db.words.push({g,r});
 localStorage.setItem("greekDB",JSON.stringify(db));

 showVocab();
}

/* AI INTEGRAT (DEMO) */

async function askAI(){

 let text=prompt("Întreabă AI despre greacă:");

 if(!text) return;

 alert("Pentru AI real trebuie server API.\nAcum e demo.");

}

/* NAVIGARE */

function show(type){

 if(type==="vocab") showVocab();
 if(type==="expr") showExpr();
 if(type==="biblic") showBiblic();
 if(type==="gram") showGram();
 if(type==="rug") showRug();
 if(type==="quiz") quiz();
 if(type==="lectii") showLectii();
 if(type==="add") addWord();
}

/* PORNIRE */

showVocab();
/*/* ================= AI OFFLINE PROFESOR ================= */

function askAI(){

 let q=prompt("Întreabă profesorul AI:");

 if(!q) return;

 q=q.toLowerCase();

 /* TRADUCERI DIN DB */

 let all=[...db.words,...expresii,...biblic];

 for(let w of all){

  if(q.includes(w.r.toLowerCase())){
   alert(`Greacă: ${w.g}`);
   return;
  }

  if(q.includes(w.g.toLowerCase())){
   alert(`Română: ${w.r}`);
   return;
  }
 }

 /* GRAMATICA */

 if(q.includes("articol")){
  alert("Ο, Η, Το = articole hotărâte.");
  return;
 }

 if(q.includes("verbul a fi")){
  alert("Είμαι = eu sunt, Είσαι = tu ești.");
  return;
 }

 /* CONVERSAȚIE SIMULATĂ */

 if(q.includes("salut")){
  alert("Καλημέρα! Τι κάνεις;");
  return;
 }

 /* DEFAULT */

 alert(
  "AI offline încă învață.\n" +
  "Adaugă mai multe cuvinte pentru răspunsuri mai bune."
 );
}
/* ===== PROFESOR AI CONVERSATIONAL OFFLINE ===== */

function talkAI(){

 let q=prompt("Conversație greacă:");

 if(!q) return;

 q=q.toLowerCase();

 /* salut */

 if(q.includes("salut") || q.includes("bună")){
  alert("Καλημέρα! Τι κάνεις;");
  return;
 }

 /* cum se spune */

 if(q.includes("cum se spune")){

  let all=[...db.words,...expresii,...biblic];

  for(let w of all){
   if(q.includes(w.r.toLowerCase())){
    alert(`Greacă: ${w.g}`);
    return;
   }
  }

 }

 /* explicație gramatică */

 if(q.includes("gramatica") || q.includes("verbul")){
  alert("Είμαι = eu sunt. Έχω = eu am.");
  return;
 }

 alert("Profesor AI offline încă învață.");
}
function showLectii(){

 content.innerHTML=lectiiBiblice.map(l=>`
  <div class="card">
   <h3>${l.titlu}</h3>
   <p onclick="speak('${l.gr}')">
    <b>${l.gr}</b><br>${l.ro}
   </p>
  </div>
 `).join("");
}