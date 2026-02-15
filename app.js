const content=document.getElementById("content");

/* ===== QUIZ GLOBAL ===== */

let scor=0;
let intrebareCurenta=0;

const quizData=[
 {q:"Cum se spune «Dumnezeu»?",a:["Θεός","Λόγος","Ζωή"],c:0},
 {q:"«Cuvânt» în greacă?",a:["Λόγος","Φῶς","Ψυχή"],c:0},
 {q:"«Dragoste»?",a:["Ειρήνη","Αγάπη","Χαρά"],c:1},
 {q:"«Viață»?",a:["Ζωή","Θάλασσα","Άνεμος"],c:0},
 {q:"«Lumină»?",a:["Φῶς","Σκότος","Γη"],c:0},
 {q:"«Întuneric»?",a:["Φῶς","Σκότος","Οὐρανός"],c:1},
 {q:"«Cer»?",a:["Οὐρανός","Γῆ","Νερό"],c:0},
 {q:"«Pământ»?",a:["Γῆ","Οὐρανός","Δόξα"],c:0},
 {q:"«Pace»?",a:["Ειρήνη","Δόξα","Ψυχή"],c:0},
 {q:"«Har»?",a:["Χάρις","Ἀλήθεια","Κόσμος"],c:0},
 {q:"«Adevăr»?",a:["Ἀλήθεια","Σοφία","Ζωή"],c:0},
 {q:"«Credință»?",a:["Πίστις","Ἐλπίς","Ἀγάπη"],c:0},
 {q:"«Nădejde»?",a:["Πίστις","Ἐλπίς","Χαρά"],c:1},
 {q:"«Slavă»?",a:["Δόξα","Φῶς","Ζωή"],c:0},
 {q:"«Împărăție»?",a:["Βασιλεία","Οὐρανός","Λόγος"],c:0},
 {q:"«Rugăciune»?",a:["Προσευχή","Ἀγάπη","Σταυρός"],c:0},
 {q:"«Cruce»?",a:["Σταυρός","Θυσία","Ἀνάστασις"],c:0},
 {q:"«Înviere»?",a:["Ἀνάστασις","Ζωή","Χάρις"],c:0},
 {q:"«Biserică»?",a:["Ἐκκλησία","Κόσμος","Σῶμα"],c:0},
 {q:"«Duh Sfânt»?",a:["Πνεῦμα Ἅγιον","Λόγος","Θεός"],c:0}
];

/* ===== NAVIGAȚIE ===== */

function show(sec){

let html="";

/* LECȚII */
if(sec==="lectii"){
lectii.forEach(l=>{
html+=`<h2>${l.titlu}</h2><pre>${l.continut}</pre>`;
});
}

/* VOCABULAR */
else if(sec==="vocab"){
vocabular.forEach(v=>{
html+=`
<p>
<b>${v.g}</b>
<button onclick="speak('${v.g}')">🔊</button>
<br>${v.r}
</p>`;
});
}

/* EXPRESII */
else if(sec==="expr"){
expresii.forEach(e=>{
html+=`
<p>
<b>${e.g}</b>
<button onclick="speak('${e.g}')">🔊</button>
<br>${e.r}
</p>`;
});
}

/* BIBLIC */
else if(sec==="biblic"){
html+="<h2>📖 Dicționar Biblic Greacă–Română</h2>";

biblic.forEach(b=>{
html+=`
<p>
<b>${b.g}</b>
<button onclick="speak('${b.g}')">🔊</button>
<br>${b.r}
</p>`;
});
}
/* === Liturghia === */

else if(sec==="liturghie"){

liturghia.forEach(l=>{
html+=`
<h3>${l.titlu}</h3>
<p>
<b>${l.gr}</b>
<button onclick="speak('${l.gr}')">🔊</button>
<br>${l.ro}
<br><i>${l.exp}</i>
</p>`;
});

}
/* GRAMATICĂ */

else if(sec==="gram"){
gramatica.forEach(g=>{
html+=`<div class="gramatica">${g}</div>`;
});
}

/* RUGĂCIUNI */
else if(sec==="rug"){
rugaciuni.forEach(r=>{
html+=`<h3>${r.titlu}</h3>`;
r.versuri.forEach(v=>{
html+=`
<p>
${v.gr}
<button onclick="speak('${v.gr}')">🔊</button>
<br>${v.ro}
</p>`;
});
});
}

else if(sec==="nt"){

noulTestament.forEach(v=>{
html+=`
<h3>${v.ref}</h3>
<p>
<b>${v.gr}</b>
<button onclick="speak('${v.gr}')">🔊</button>
<br>${v.ro}
<br><i>${v.exp}</i>
</p>`;
});

}

/* QUIZ */
else if(sec==="quiz"){
scor=0;
intrebareCurenta=0;
quiz();
return;
}

/* AI PROFESOR */
else if(sec==="ai"){
aiProfesor();
return;
}

/* DEFAULT */
else{
html="<h2>Secțiune în lucru</h2>";
}

content.innerHTML=html;
}

/* ===== QUIZ ===== */

function quiz(){

if(intrebareCurenta>=quizData.length){
content.innerHTML=`
<h2>Scor: ${scor}/${quizData.length}</h2>
<button onclick="show('quiz')">Reia Quiz</button>`;
return;
}

let q=quizData[intrebareCurenta];
let rasp=[...q.a].sort(()=>Math.random()-0.5);

let html=`<h2>${q.q}</h2>`;

rasp.forEach(r=>{
html+=`<button onclick='raspuns("${r}","${q.a[q.c]}")'>${r}</button><br>`;
});

content.innerHTML=html;
}

function raspuns(ales,corect){

let butoane=document.querySelectorAll("#content button");

butoane.forEach(b=>{
if(b.innerText===corect){
b.style.background="green";
b.style.color="white";
}
if(b.innerText===ales && ales!==corect){
b.style.background="red";
b.style.color="white";
}
});

speak(ales);

if(ales===corect) scor++;

setTimeout(()=>{
intrebareCurenta++;
quiz();
},1500);
}

/* ===== AUDIO PRO STABIL ===== */

function speak(text){

speechSynthesis.cancel();

let u=new SpeechSynthesisUtterance(text);
u.lang="el-GR";
u.rate=0.9;

let voices=speechSynthesis.getVoices();

if(!voices.length){
speechSynthesis.onvoiceschanged=()=>speak(text);
return;
}

let v=voices.find(v=>v.lang.includes("el"));
if(v) u.voice=v;

speechSynthesis.speak(u);
}

function dictionar(){

content.innerHTML=`
<h2>📖 Dicționar greacă</h2>

<input id="cuv" placeholder="Scrie cuvânt grecesc sau român"
style="width:80%;padding:10px">

<br><br>

<button onclick="cauta()">Traducere</button>

<div id="rezultat"></div>
`;
}

function cauta(){

let cuv=document.getElementById("cuv").value.toLowerCase();

let rezultat="Nu am găsit.";

[...vocabular,...biblic,...expresii].forEach(v=>{

if(v.g.toLowerCase()===cuv ||
v.r.toLowerCase()===cuv){

rezultat=`<h3>${v.g}</h3>
<p>${v.r}</p>
<button onclick="speak('${v.g}')">🔊</button>`;
}

});

document.getElementById("rezultat").innerHTML=rezultat;
}


/* ===== DARK MODE ===== */

function toggleDark(){
document.body.classList.toggle("dark");
}

/* ===== AI PROFESOR CONVERSAȚIONAL ===== */

let lectieAI=0;

const dialogAI=[
{
q:"Γεια σου! Πώς σε λένε;",
astept:["με λένε"],
corect:"Χάρηκα πολύ!"
},
{
q:"Πώς είσαι;",
astept:["καλά","πολύ καλά"],
corect:"Χαίρομαι!"
}
];

function aiProfesor(){

lectieAI=0;

content.innerHTML=`
<h2>🎓 Profesor AI Greacă</h2>

<p id="profText"></p>

<input id="raspAI" placeholder="Scrie răspuns..." style="width:80%">
<br><br>

<button onclick="trimiteRaspuns()">Trimite</button>

<div id="dialogAI"></div>
`;

intrebareAI();
}

function intrebareAI(){

if(lectieAI>=dialogAI.length){
document.getElementById("dialogAI").innerHTML+="<h3>Lecția terminată ✔</h3>";
return;
}

let q=dialogAI[lectieAI].q;
document.getElementById("profText").innerText=q;
speak(q);
}

function trimiteRaspuns(){

let text=document.getElementById("raspAI").value.toLowerCase();
let dialog=document.getElementById("dialogAI");

dialog.innerHTML+=`<p>Tu: ${text}</p>`;

let ok=dialogAI[lectieAI].astept.some(c=>text.includes(c));

if(ok){

dialog.innerHTML+=`<p style="color:green">${dialogAI[lectieAI].corect}</p>`;
speak(dialogAI[lectieAI].corect);

lectieAI++;
setTimeout(intrebareAI,1500);

}else{

dialog.innerHTML+=`<p style="color:red">Δοκίμασε ξανά</p>`;
speak("Δοκίμασε ξανά");

}
}