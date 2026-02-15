/* ================= VOCABULAR COMPLET ================= */
const lectii = [
{
titlu: "Alfabetul Grecesc",
continut: `
Α α – alfa  
Β β – beta  
Γ γ – gamma  
Δ δ – delta  
Ε ε – epsilon  
Ζ ζ – zeta  
Η η – eta  
Θ θ – theta  
Ι ι – iota  
Κ κ – kappa  
Λ λ – lambda  
Μ μ – mi  
Ν ν – ni  
Ξ ξ – xi  
Ο ο – omicron  
Π π – pi  
Ρ ρ – rho  
Σ σ/ς – sigma  
Τ τ – tau  
Υ υ – ypsilon  
Φ φ – phi  
Χ χ – chi  
Ψ ψ – psi  
Ω ω – omega
`
},

{
titlu: "Vocabular Biblic de Bază",
continut: `
θεός = Dumnezeu  
λόγος = cuvânt  
ἀγάπη = dragoste  
ζωή = viață  
φῶς = lumină  
ἄνθρωπος = om  
ἐκκλησία = biserică  
ἀδελφός = frate  
οὐρανός = cer  
γῆ = pământ
`
},

{
titlu: "Gramatică Intro",
continut: `
Greaca biblică are:

✔ 3 genuri: masculin, feminin, neutru  
✔ 4 cazuri principale  
✔ Verbe conjugate după persoană  

Exemplu verb:

λύω = dezleg  
λύεις = tu dezlegi  
λύει = el dezleagă
`
}
];
const vocabular=[
 {g:"Νερό",r:"Apă"},
 {g:"Ψωμί",r:"Pâine"},
 {g:"Μήλο",r:"Măr"},
 {g:"Γάλα",r:"Lapte"},
 {g:"Κρασί",r:"Vin"},
 {g:"Κρέας",r:"Carne"},
 {g:"Ψάρι",r:"Pește"},
 {g:"Τυρί",r:"Brânză"},
 {g:"Αλάτι",r:"Sare"},
 {g:"Ζάχαρη",r:"Zahăr"},
 {g:"Σπίτι",r:"Casă"},
 {g:"Δρόμος",r:"Drum"},
 {g:"Πόλη",r:"Oraș"},
 {g:"Χωριό",r:"Sat"},
 {g:"Αυτοκίνητο",r:"Mașină"},
 {g:"Παιδί",r:"Copil"},
 {g:"Άνδρας",r:"Bărbat"},
 {g:"Γυναίκα",r:"Femeie"},
 {g:"Φίλος",r:"Prieten"},
 {g:"Οικογένεια",r:"Familie"},
 {g:"Ημέρα",r:"Zi"},
 {g:"Νύχτα",r:"Noapte"},
 {g:"Ήλιος",r:"Soare"},
 {g:"Σελήνη",r:"Lună"},
 {g:"Θάλασσα",r:"Mare"},
 {g:"Βουνό",r:"Munte"},
 {g:"Νεφέλη",r:"Nor"},
 {g:"Άνεμος",r:"Vânt"},
 {g:"Φως",r:"Lumină"},
 {g:"Σκοτάδι",r:"Întuneric"},
 {g:"Αγάπη",r:"Dragoste"},
 {g:"Ειρήνη",r:"Pace"},
 {g:"Χαρά",r:"Bucurie"},
 {g:"Ελπίδα",r:"Speranță"},
 {g:"Ζωή",r:"Viață"},
 {g:"Ψυχή",r:"Suflet"},
 {g:"Θεός",r:"Dumnezeu"},
 {g:"Χριστός",r:"Hristos"},
 {g:"Εκκλησία",r:"Biserică"},
 {g:"Πίστις",r:"Credință"},
 {g:"Σωτηρία",r:"Mântuire"},
 {g:"Δόξα",r:"Slavă"},
 {g:"Βασιλεία",r:"Împărăție"},
 {g:"Λόγος",r:"Cuvânt"},
 {g:"Αλήθεια",r:"Adevăr"},
 {g:"Αμαρτία",r:"Păcat"},
 {g:"Ουρανός",r:"Cer"},
 {g:"Γη",r:"Pământ"},
 {g:"Άγγελος",r:"Înger"},
 {g:"Προσευχή",r:"Rugăciune"},
 {g:"Ευλογία",r:"Binecuvântare"},
 {g:"Παράδεισος",r:"Rai"},
 {g:"Κόλαση",r:"Iad"},
 {g:"Νους",r:"Minte"},
 {g:"Καρδιά",r:"Inimă"},
 {g:"Χρόνος",r:"Timp"},
 {g:"Αρχή",r:"Început"},
 {g:"Τέλος",r:"Sfârșit"},
 {g:"Δάσκαλος",r:"Profesor"},
 {g:"Μαθητής",r:"Elev"},
 {g:"Βιβλίο",r:"Carte"},
 {g:"Γλώσσα",r:"Limbă"},
 {g:"Σοφία",r:"Înțelepciune"},
 {g:"Γνώση",r:"Cunoaștere"},
 {g:"Αλήθεια",r:"Adevăr"},
 {g:"Δικαιοσύνη",r:"Dreptate"},
 {g:"Ελευθερία",r:"Libertate"},
 {g:"Φιλία",r:"Prietenie"},
 {g:"Τέχνη",r:"Artă"},
 {g:"Μουσική",r:"Muzică"}
];

/* ================= VOCABULAR BIBLIC COMPLET ================= */

const biblic=[

 {g:"Θεός",r:"Dumnezeu"},
 {g:"Κύριος",r:"Domnul"},
 {g:"Χριστός",r:"Hristos"},
 {g:"Ἰησοῦς",r:"Iisus"},
 {g:"Πνεῦμα",r:"Duh"},
 {g:"Ἅγιος",r:"Sfânt"},
 {g:"Ἐκκλησία",r:"Biserică"},
 {g:"Πίστις",r:"Credință"},
 {g:"Ἀγάπη",r:"Dragoste"},
 {g:"Ἐλπίς",r:"Nădejde"},
 {g:"Σωτηρία",r:"Mântuire"},
 {g:"Δόξα",r:"Slavă"},
 {g:"Βασιλεία",r:"Împărăție"},
 {g:"Λόγος",r:"Cuvânt"},
 {g:"Ἀλήθεια",r:"Adevăr"},
 {g:"Ζωή",r:"Viață"},
 {g:"Φῶς",r:"Lumină"},
 {g:"Σκότος",r:"Întuneric"},
 {g:"Ἁμαρτία",r:"Păcat"},
 {g:"Μετάνοια",r:"Pocăință"},
 {g:"Ἀνάστασις",r:"Înviere"},
 {g:"Σταυρός",r:"Cruce"},
 {g:"Ἄγγελος",r:"Înger"},
 {g:"Προφήτης",r:"Prooroc"},
 {g:"Ἀπόστολος",r:"Apostol"},
 {g:"Εὐαγγέλιον",r:"Evanghelie"},
 {g:"Γραφή",r:"Scriptură"},
 {g:"Παράδεισος",r:"Rai"},
 {g:"Γέεννα",r:"Iad"},
 {g:"Κρίσις",r:"Judecată"},
 {g:"Δικαιοσύνη",r:"Dreptate"},
 {g:"Ἔλεος",r:"Milă"},
 {g:"Χάρις",r:"Har"},
 {g:"Εὐλογία",r:"Binecuvântare"},
 {g:"Προσευχή",r:"Rugăciune"},
 {g:"Νηστεία",r:"Post"},
 {g:"Λειτουργία",r:"Liturghie"},
 {g:"Μυστήριον",r:"Taină"},
 {g:"Βάπτισμα",r:"Botez"},
 {g:"Μετάληψις",r:"Împărtășanie"},
 {g:"Ἀγάπη Θεοῦ",r:"Dragostea lui Dumnezeu"},
 {g:"Υἱός",r:"Fiu"},
 {g:"Πατήρ",r:"Tată"},
 {g:"Ποιμήν",r:"Păstor"},
 {g:"Πρόβατον",r:"Oaie"},
 {g:"Ἄρτος",r:"Pâine"},
 {g:"Οἶνος",r:"Vin"},
 {g:"Ὕδωρ",r:"Apă"},
 {g:"Θυσία",r:"Jertfă"},
 {g:"Σῶμα",r:"Trup"},
 {g:"Αἷμα",r:"Sânge"},
 {g:"Ψυχή",r:"Suflet"},
 {g:"Καρδία",r:"Inimă"},
 {g:"Νοῦς",r:"Minte"},
 {g:"Εἰρήνη",r:"Pace"},
 {g:"Χαρά",r:"Bucurie"},
 {g:"Σοφία",r:"Înțelepciune"},
 {g:"Γνῶσις",r:"Cunoaștere"},
 {g:"Δύναμις",r:"Putere"},
 {g:"Δόλος",r:"Viclenie"},
 {g:"Πειρασμός",r:"Ispită"},
 {g:"Σατανᾶς",r:"Satana"},
 {g:"Διάβολος",r:"Diavol"},
 {g:"Κόσμος",r:"Lume"},
 {g:"Οὐρανός",r:"Cer"},
 {g:"Γῆ",r:"Pământ"},
 {g:"Αἰών",r:"Veac"},
 {g:"Ἀμήν",r:"Amin"}

];
/* ================= EXPRESII CONVERSAȚIONALE ================= */

const expresii=[
 {g:"Καλημέρα!",r:"Bună dimineața!"},
 {g:"Καλησπέρα!",r:"Bună seara!"},
 {g:"Καληνύχτα!",r:"Noapte bună!"},
 {g:"Τι κάνεις;",r:"Ce faci?"},
 {g:"Είμαι καλά.",r:"Sunt bine."},
 {g:"Ευχαριστώ πολύ.",r:"Mulțumesc mult."},
 {g:"Παρακαλώ.",r:"Te rog / Cu plăcere."},
 {g:"Συγγνώμη.",r:"Scuze."},
 {g:"Πώς σε λένε;",r:"Cum te cheamă?"},
 {g:"Με λένε…",r:"Mă numesc…"},
 {g:"Από πού είσαι;",r:"De unde ești?"},
 {g:"Χάρηκα πολύ!",r:"Îmi pare bine!"},
 {g:"Γεια σου!",r:"Salut!"},
{g:"Γεια σας!",r:"Salut (formal)!"},
{g:"Τι κάνεις;",r:"Ce faci?"},
{g:"Τι κάνετε;",r:"Ce faceți?"},
{g:"Καλά, ευχαριστώ.",r:"Bine, mulțumesc."},
{g:"Πολύ καλά!",r:"Foarte bine!"},
{g:"Έτσι κι έτσι.",r:"Așa și așa."},
{g:"Χάρηκα!",r:"Îmi pare bine!"},
{g:"Καλώς ήρθες!",r:"Bine ai venit!"},
{g:"Τα λέμε!",r:"Ne mai auzim!"},
{g:"Παρακαλώ πολύ.",r:"Cu mare plăcere."},
{g:"Δεν πειράζει.",r:"Nu-i nimic."},
{g:"Συμφωνώ.",r:"Sunt de acord."},
{g:"Δεν συμφωνώ.",r:"Nu sunt de acord."},
{g:"Μπορείς να με βοηθήσεις;",r:"Mă poți ajuta?"},
{g:"Χρειάζομαι βοήθεια.",r:"Am nevoie de ajutor."},
{g:"Καταλαβαίνω.",r:"Înțeleg."},
{g:"Δεν καταλαβαίνω.",r:"Nu înțeleg."},
{g:"Μιλάτε αγγλικά;",r:"Vorbiți engleză?"},
{g:"Μιλάω λίγο ελληνικά.",r:"Vorbesc puțin greacă."},
{g:"Πώς το λένε αυτό;",r:"Cum se spune asta?"},
{g:"Τι σημαίνει;",r:"Ce înseamnă?"},
{g:"Πού είναι η εκκλησία;",r:"Unde este biserica?"},
{g:"Πού πας;",r:"Unde mergi?"},
{g:"Έρχομαι τώρα.",r:"Vin acum."},
{g:"Καλή όρεξη!",r:"Poftă bună!"},
{g:"Στην υγειά σου!",r:"Noroc!"},
{g:"Καλή συνέχεια!",r:"Toate cele bune!"},

/* Expresii biblice utile */

{g:"Δόξα τῷ Θεῷ.",r:"Slavă lui Dumnezeu."},
{g:"Ὁ Θεὸς μαζί σου.",r:"Dumnezeu să fie cu tine."},
{g:"Εἰρήνη σοι.",r:"Pace ție."},
{g:"Κύριε ἐλέησον.",r:"Doamne miluiește."},
{g:"Ἀμήν.",r:"Amin."}
];

/* ===== LECȚII BIBLICE ===== */

const lectiiBiblice=[
 {
  titlu:"Ioan 1:1",
  gr:"Ἐν ἀρχῇ ἦν ὁ Λόγος",
  ro:"La început era Cuvântul"
 },
 {
  titlu:"Matei 5:9",
  gr:"Μακάριοι οἱ εἰρηνοποιοί",
  ro:"Fericiți făcătorii de pace"
 }
];
/* ================= GRAMATICĂ ================= */

const gramatica=[

`📘 CE ESTE GREACA BIBLICĂ
Greaca Noului Testament = dialect Koiné.
Era limba comună în vremea Mântuitorului.
Nu e greaca modernă, dar seamănă mult.`,

`📘 ALFABETUL GREC
Are 24 litere.
Exemple:
Α α = a
Β β = v (nu b ca în română!)
Γ γ = g moale
Δ δ = d.`,

`📘 GENURILE (ca în română)
Masculin → de obicei terminat în -ος
ex: λόγος = cuvânt

Feminin → des în -η sau -α
ex: ψυχή = suflet

Neutru → des în -ον / -μα
ex: δῶρον = dar.`,

`📘 LOGICĂ SIMPLĂ GENURI
Ca în română:

băiat → masculin
fată → feminin
lucru → neutru

La fel în greacă:
λόγος (cuvânt) = masculin
ψυχή (suflet) = feminin
δῶρον (dar) = neutru.`,

`📘 ARTICOLE (ca „un / o / the”)
ὁ = masculin
ἡ = feminin
τό = neutru

Exemplu:
ὁ λόγος = cuvântul
ἡ ψυχή = sufletul
τό δῶρον = darul.`,

`📘 CAZURILE (mai simplu spus)
Nominativ = cine? ce?
Genitiv = al cui?
Dativ = cui?
Acuzativ = pe cine? ce?

Exact ca în română:
cuvânt → al cuvântului.`,

`📘 EXEMPLU DECLINARE
λόγος = cuvânt
λόγου = al cuvântului
λόγῳ = cuvântului
λόγον = cuvânt.`,

`📘 VERBELE – IDEEA GENERALĂ
Verbul arată cine face acțiunea.

Română:
eu merg
tu mergi
el merge

Greacă:
λύω = eu dezleg
λύεις = tu dezlegi
λύει = el dezleagă.`,

`📘 VERB IMPORTANT „A FI”
εἰμί = sunt
εἶ = ești
ἐστίν = este

Foarte des în Biblie.`,

`📘 VERB IMPORTANT „A AVEA”
ἔχω = am
ἔχεις = ai
ἔχει = are.`,

`📘 CUM SE DERIVĂ CUVINTELE
Prefixe frecvente:

ευ = bun / bine
ex: ευλογία = binecuvântare

θεο = Dumnezeu
ex: θεολογία = teologie.`,

`📘 CUVINTE CARE SEAMĂNĂ CU ROMÂNA
filosofie ← φιλοσοφία
teologie ← θεολογία
evanghelie ← εὐαγγέλιον

Ajută mult la învățare.`,

`📘 ORDINEA CUVINTELOR
Este liberă în greacă.

Importantă e terminația,
nu poziția.`,

`📘 ACCENTUL
Accentul poate schimba sensul.
De aceea se citește atent.`,

`📘 DIFTONGI (sunete legate)
αι = e
ει = i
οι = i
ευ = ev / ef.`,

`📘 SFAT PRACTIC
Învață mai întâi:
– articolele
– verbele de bază
– vocabular biblic.

Apoi citirea devine naturală.`

];


/* ================= RUGĂCIUNI COMPLETE ================= */

const rugaciuni=[

{
 titlu:"Tatăl nostru",
 versuri:[
  {gr:"Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς",
   ro:"Tatăl nostru Care ești în ceruri"},
  {gr:"ἁγιασθήτω τὸ ὄνομά σου",
   ro:"Sfințească-se numele Tău"},
  {gr:"ἐλθέτω ἡ βασιλεία σου",
   ro:"Vie împărăția Ta"},
  {gr:"γενηθήτω τὸ θέλημά σου",
   ro:"Facă-se voia Ta"},
  {gr:"ὡς ἐν οὐρανῷ καὶ ἐπὶ τῆς γῆς",
   ro:"Precum în cer așa și pe pământ"},
  {gr:"Τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον",
   ro:"Pâinea noastră cea de toate zilele dă-ne-o nouă astăzi"},
  {gr:"καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν",
   ro:"Și ne iartă nouă greșelile noastre"},
  {gr:"ὡς καὶ ἡμεῖς ἀφίεμεν τοῖς ὀφειλέταις ἡμῶν",
   ro:"Precum și noi iertăm greșiților noștri"},
  {gr:"καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν",
   ro:"Și nu ne duce pe noi în ispită"},
  {gr:"ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ",
   ro:"Ci ne izbăvește de cel rău"}
 ]
},

{
 titlu:"Doamne miluiește",
 versuri:[
  {gr:"Κύριε ἐλέησον", ro:"Doamne miluiește"},
  {gr:"Χριστέ ἐλέησον", ro:"Hristoase miluiește"},
  {gr:"Κύριε ἐλέησον", ro:"Doamne miluiește"}
 ]
},

{
 titlu:"Slavă Tatălui",
 versuri:[
  {gr:"Δόξα Πατρί καὶ Υἱῷ",
   ro:"Slavă Tatălui și Fiului"},
  {gr:"καὶ Ἁγίῳ Πνεύματι",
   ro:"și Sfântului Duh"},
  {gr:"καὶ νῦν καὶ ἀεί",
   ro:"și acum și pururea"},
  {gr:"καὶ εἰς τοὺς αἰῶνας τῶν αἰώνων",
   ro:"și în vecii vecilor"},
  {gr:"Ἀμήν",
   ro:"Amin"}
 ]
}

];

/* ================= NOUL TESTAMENT ================= */

const noulTestament=[

{
ref:"Ioan 1:1",
gr:"Ἐν ἀρχῇ ἦν ὁ Λόγος καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν",
ro:"La început era Cuvântul și Cuvântul era la Dumnezeu",
exp:"Λόγος = Hristos; termen teologic central."
},

{
ref:"Ioan 8:12",
gr:"Ἐγώ εἰμι τὸ φῶς τοῦ κόσμου",
ro:"Eu sunt lumina lumii",
exp:"φῶς = lumină spirituală."
},

{
ref:"Matei 5:9",
gr:"Μακάριοι οἱ εἰρηνοποιοί",
ro:"Fericiți făcătorii de pace",
exp:"εἰρήνη = pace, armonie spirituală."
},

{
ref:"Ioan 14:6",
gr:"Ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή",
ro:"Eu sunt calea, adevărul și viața",
exp:"ἀλήθεια = adevăr absolut."
},

{
ref:"Romani 5:1",
gr:"Δικαιωθέντες οὖν ἐκ πίστεως",
ro:"Fiind deci îndreptați prin credință",
exp:"πίστις = credință activă."
}

];

/* ================= LITURGHIA SF IOAN GURA DE AUR ================= */

const liturghia=[

{
titlu:"Binecuvântarea Mare",
gr:`Εὐλογημένη ἡ Βασιλεία τοῦ Πατρὸς καὶ τοῦ Υἱοῦ
καὶ τοῦ Ἁγίου Πνεύματος`,
ro:`Binecuvântată este Împărăția Tatălui și a Fiului
și a Sfântului Duh`,
exp:"Începutul Sfintei Liturghii – intrarea simbolică în Împărăția lui Dumnezeu."
},

{
titlu:"Ectenia Mare",
gr:`Ἐν εἰρήνῃ τοῦ Κυρίου δεηθῶμεν.
Κύριε ἐλέησον.`,
ro:`Cu pace Domnului să ne rugăm.
Doamne miluiește.`,
exp:"Rugăciuni pentru pace, lume, Biserică."
},

{
titlu:"Antifoanele",
gr:`Σῶσον ἡμᾶς Υἱὲ Θεοῦ`,
ro:`Mântuiește-ne pe noi, Fiul lui Dumnezeu`,
exp:"Psalmii și imnele de început."
},

{
titlu:"Trisaghion",
gr:`Ἅγιος ὁ Θεός,
Ἅγιος Ἰσχυρός,
Ἅγιος Ἀθάνατος,
ἐλέησον ἡμᾶς`,
ro:`Sfinte Dumnezeule,
Sfinte tare,
Sfinte fără de moarte,
miluiește-ne`,
exp:"Imn foarte vechi adresat Sfintei Treimi."
},

{
titlu:"Citirile biblice",
gr:`Πρόσχωμεν! Σοφία!`,
ro:`Să luăm aminte! Înțelepciune!`,
exp:"Apostol și Evanghelie."
},

{
titlu:"Heruvicul",
gr:`Οἱ τὰ Χερουβὶμ μυστικῶς εἰκονίζοντες`,
ro:`Noi care pe heruvimi cu taină închipuim`,
exp:"Pregătirea Darurilor."
},

{
titlu:"Crezul",
gr:`Πιστεύω εἰς ἕνα Θεόν...`,
ro:`Cred întru unul Dumnezeu...`,
exp:"Mărturisirea credinței ortodoxe."
},

{
titlu:"Anafora",
gr:`Λάβετε φάγετε·
τοῦτό ἐστι τὸ Σῶμά μου`,
ro:`Luați mâncați:
Acesta este Trupul Meu`,
exp:"Instituirea Sfintei Euharistii."
},

{
titlu:"Epicleza",
gr:`Κατάπεμψον τὸ Πνεῦμά σου τὸ Ἅγιον`,
ro:`Trimite Duhul Tău cel Sfânt`,
exp:"Momentul sfințirii Darurilor."
},

{
titlu:"Tatăl nostru",
gr:`Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς`,
ro:`Tatăl nostru Care ești în ceruri`,
exp:"Rugăciunea Domnului."
},

{
titlu:"Împărtășirea",
gr:`Μετὰ φόβου Θεοῦ,
πίστεως καὶ ἀγάπης προσέλθετε`,
ro:`Cu frică de Dumnezeu,
cu credință și cu dragoste apropiați-vă`,
exp:"Chemarea la Sfânta Împărtășanie."
},

{
titlu:"Otpust (încheiere)",
gr:`Δι’ εὐχῶν τῶν ἁγίων Πατέρων ἡμῶν`,
ro:`Pentru rugăciunile Sfinților Părinților noștri`,
exp:"Încheierea slujbei."
}

];