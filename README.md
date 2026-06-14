# MarketMind – Customer Segmentation and Analytics Platform

## Uvod

U današnjem digitalnom poslovanju kompanije svakodnevno prikupljaju ogromne količine podataka o svojim kupcima. Iako se veliki broj odluka i dalje donosi intuitivno, savremeno tržište zahtijeva razumijevanje ponašanja kupaca kroz detaljnu analizu podataka. Jedan od najvećih problema e-commerce kompanija jeste činjenica da se svi kupci tretiraju na isti način – dobijaju iste marketinške kampanje, iste popuste i iste proizvode, bez obzira na njihove navike kupovine i stvarnu vrijednost za kompaniju.

Takav pristup često dovodi do neefikasnog trošenja marketinškog budžeta, manjeg zadovoljstva kupaca i gubitka potencijalnog prihoda.

Iz tog razloga razvijen je **MarketMind**, inteligentna web aplikacija čiji je cilj da automatski segmentira kupce, analizira njihovo ponašanje i pruži jasne preporuke koje mogu pomoći kompanijama u donošenju poslovnih odluka zasnovanih na podacima.

---

## Ideja projekta

Osnovna ideja projekta jeste izgradnja sistema koji će iz sirovih podataka o transakcijama automatski prepoznati različite tipove kupaca i prikazati njihove karakteristike kroz moderan i intuitivan dashboard.

Aplikacija omogućava korisniku da jednostavno uploaduje CSV ili Excel fajl sa transakcijama, nakon čega se automatski pokreće kompletan proces obrade podataka.

Sistem:

* učitava i čisti podatke,
* računa RFM metrike,
* procjenjuje Customer Lifetime Value (CLV),
* grupiše kupce u segmente,
* vizualizuje rezultate,
* generiše marketinške preporuke,
* prikazuje cohort analizu i
* omogućava simulaciju ROI marketinških kampanja.

Cijeli proces se odvija bez potrebe za ručnim podešavanjem ili prethodnim znanjem iz oblasti mašinskog učenja.

---

## Poslovni problem

Zamislimo e-commerce kompaniju koja ima nekoliko hiljada kupaca.

Neki od tih kupaca kupuju često i troše velike iznose novca. Drugi kupuju povremeno, dok pojedini nisu kupovali mjesecima.

Ako kompanija svim tim kupcima pošalje istu marketinšku kampanju, vjerovatno neće postići dobre rezultate.

Kupac koji troši mnogo novca vjerovatno očekuje ekskluzivne pogodnosti, dok kupca koji nije kupovao dugo vremena treba pokušati vratiti posebnim ponudama ili popustima.

MarketMind rješava upravo ovaj problem.

Aplikacija automatski identifikuje:

* najvrjednije kupce,
* lojalne kupce,
* kupce koji su u riziku od odlaska,
* kupce male vrijednosti,
* i ostale segmente.

Na taj način kompanija može prilagoditi marketinške aktivnosti svakom segmentu pojedinačno.

---

## Tehnologije korištene u projektu

Projekat je razvijen kao full-stack web aplikacija.

Frontend dio sistema razvijen je korištenjem **React** biblioteke i **Vite** alata.

React omogućava razvoj modernih komponenti koje su jednostavne za održavanje i proširenje, dok Vite obezbjeđuje veoma brzo razvojno okruženje i optimizovan build proces.

Za prikaz interaktivnih grafova korišten je **Plotly**, koji omogućava prikaz scatter grafova i bar chart vizualizacija sa podrškom za zoom, hover informacije i interakciju korisnika.

Backend sistema razvijen je pomoću **FastAPI** frameworka.

FastAPI je izabran zbog:

* velike brzine izvršavanja,
* jednostavnog kreiranja REST API-ja,
* ugrađene podrške za upload fajlova,
* dobre integracije sa Python data science bibliotekama.

Za obradu podataka koristi se **Pandas**, dok se za mašinsko učenje koristi **Scikit-Learn**.

---

## Arhitektura sistema

Arhitektura sistema podijeljena je na dva osnovna dijela:

### Frontend

Frontend predstavlja korisnički interfejs sistema.

Njegov zadatak je:

* upload fajlova,
* prikaz dashboarda,
* prikaz tabela,
* prikaz grafova,
* prikaz marketinških preporuka,
* interakcija sa korisnikom.

Frontend komunicira sa backendom putem REST API poziva.

---

### Backend

Backend predstavlja srce sistema.

Njegov zadatak je:

* prijem CSV fajla,
* čuvanje podataka,
* obrada podataka,
* računanje RFM metrika,
* računanje CLV vrijednosti,
* klasterizacija kupaca,
* kreiranje marketinških preporuka,
* cohort analiza,
* vraćanje rezultata frontendu.

Komunikacija između frontenda i backenda odvija se pomoću JSON odgovora.

---

## Tok podataka kroz sistem

Kada korisnik uploaduje fajl, aplikacija pokreće kompletan proces obrade.

Prvo se fajl učitava i provjerava njegova struktura.

Nakon toga vrši se čišćenje podataka i uklanjanje eventualnih neispravnih vrijednosti.

Sljedeći korak predstavlja RFM analiza.

RFM analiza računa tri osnovne metrike:

**Recency**

Predstavlja broj dana koji je prošao od posljednje kupovine kupca.

Kupac koji je kupovao nedavno ima manji Recency i smatra se aktivnijim.

---

**Frequency**

Predstavlja broj kupovina koje je kupac izvršio.

Kupci sa većom frekvencijom kupovine obično imaju veću vrijednost za kompaniju.

---

**Monetary**

Predstavlja ukupan iznos novca koji je kupac potrošio.

Računa se kao suma svih transakcija:

Monetary = Quantity × UnitPrice

Kupci sa većom Monetary vrijednošću imaju veći značaj za kompaniju.

---

## Customer Lifetime Value

Nakon RFM analize računa se Customer Lifetime Value (CLV).

CLV predstavlja procjenu ukupne vrijednosti koju kupac donosi kompaniji tokom svog odnosa sa njom.

U ovoj aplikaciji koristi se pojednostavljena formula:

CLV = Monetary × 1.5

Na osnovu CLV vrijednosti moguće je identifikovati kupce koji predstavljaju najveći poslovni potencijal.

---

## Segmentacija kupaca

Nakon računanja RFM i CLV vrijednosti pokreće se proces klasterizacije.

Kupci se grupišu na osnovu:

* Recency
* Frequency
* Monetary

Cilj klasterizacije je da se kupci sa sličnim ponašanjem smjeste u isti segment.

Svaki segment zatim dobija razumljiv naziv.

Primjeri segmenata su:

* VIP Customers
* Loyal Buyers
* Regular Customers
* At Risk Customers
* Low Value Customers

Na ovaj način rezultati postaju razumljivi i osobama koje nemaju tehničko znanje iz oblasti mašinskog učenja.

---

## Dashboard

Svi rezultati prikazuju se kroz moderan dashboard.

Dashboard predstavlja centralno mjesto za pregled svih informacija.

Na dashboardu se prikazuju:

* ukupan broj kupaca,
* ukupan prihod,
* broj pronađenih segmenata,
* tabela sa RFM i CLV vrijednostima,
* scatter graf sa segmentima,
* pregled segmenata,
* marketing playbook,
* cohort analiza,
* ROI simulator.

Dashboard je razvijen tako da bude intuitivan i razumljiv menadžerima i poslovnim korisnicima.

---

## Marketing Playbook

Jedna od važnijih funkcionalnosti sistema jeste Marketing Playbook.

Za svaki segment kupaca sistem generiše preporučene marketinške aktivnosti.

Na primjer:

VIP Customers dobijaju:

* loyalty programe,
* premium ponude,
* ekskluzivne proizvode,
* early access kampanje.

At Risk Customers dobijaju:

* win-back kampanje,
* posebne popuste,
* personalizovane email kampanje.

Na ovaj način aplikacija ne prikazuje samo podatke, već pomaže kompaniji da donese konkretne poslovne odluke.

---

## Cohort analiza

Pored segmentacije kupaca implementirana je i Cohort analiza.

Cohort analiza omogućava praćenje grupa kupaca kroz vrijeme i prikazuje koliko se kupaca vraća nakon prve kupovine.

Rezultati se prikazuju u obliku heatmap tabele.

Zelene nijanse predstavljaju visoku stopu zadržavanja kupaca, dok crvene nijanse ukazuju na slabiju retenciju.

Ovakav prikaz omogućava brzo prepoznavanje trendova i potencijalnih problema.

---

## ROI Simulator

ROI Simulator omogućava procjenu isplativosti marketinških kampanja.

Korisnik bira:

* segment kupaca,
* trošak kampanje,
* očekivani rast prihoda.

Sistem zatim računa:

* očekivani prihod,
* procijenjeni profit,
* ROI vrijednost.

Na ovaj način kompanija može procijeniti da li je određena kampanja finansijski opravdana prije njenog pokretanja.

---

## Zaključak

MarketMind predstavlja spoj data mininga, mašinskog učenja, poslovne inteligencije i modernih web tehnologija.

Kombinovanjem RFM analize, CLV modela, segmentacije kupaca, cohort analize i marketinških preporuka, aplikacija omogućava kompanijama da bolje razumiju svoje kupce i donose odluke zasnovane na podacima.

Iako je projekat razvijen kao akademski rad, njegova arhitektura i funkcionalnosti predstavljaju osnovu za razvoj ozbiljnog Customer Analytics sistema koji bi se mogao koristiti u stvarnim poslovnim okruženjima.
