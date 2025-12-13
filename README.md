# 🎄 Nissekalender

Nissekalender är en interaktiv, barnvänlig och tillgänglig julkalender byggd som en **Single Page Application (SPA)** med **HTML, CSS och JavaScript (ES-moduler)** – helt utan externa ramverk.

Projektet kombinerar lekfull design med stabil frontend-arkitektur, tillgänglighet och prestandatänk.

---

## ✨ Funktioner

- 🎁 Adventskalender med dagliga luckor
- ✉️ Dagens nissebrev baserat på datum
- 💖 Hjärteglitter-kalender (reflektion & empati)
- 🎬 Barnens filmkalender med klickbara luckor
- ♿ Tillgänglig navigering (tangentbord & skärmläsare)
- 🌈 Temaväljare
- 🚀 Optimerad för prestanda och låg CLS

Allt innehåll renderas dynamiskt och styrs av datum och datafiler.

---

## 🧭 Teknisk översikt

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Arkitektur:** Modulär SPA utan ramverk
- **Tillgänglighet:** WCAG 2.1 AA
- **Prestanda:** Lighthouse-optimerad
- **Versionshantering:** Git & GitHub
- **Deploy:** GitHub Pages

---

## 🗂️ Projektstruktur (förenklad)

```text
/
├── index.html
├── main.js
├── style.css
├── data/        # All data (brev, filmer, datumlogik)
├── components/  # Rena render-funktioner
├── modules/     # Initiering & flöden
├── utils/       # Hjälpfunktioner (vyhantering, animation)
└── css/         # Layout, komponenter, tema, utilities












För kursmålen:


# 🎄 Nissekalender – Examinerande Frontendprojekt

Detta projekt är ett examinerande frontendprojekt inom kursen **Frontendutveckling (60 yhp)**.
Applikationen är en interaktiv och tillgänglig julkalender byggd med **HTML, CSS och JavaScript (ES-moduler)** utan externa ramverk.

Syftet är att visa praktisk förståelse för kursens centrala moment genom ett sammanhängande och verklighetsnära projekt.

---

## 🎯 Kursmål och hur projektet uppfyller dem

### 1. HTML & semantik
- Semantiska element används (`main`, `section`, `header`, `footer`)
- Endast riktiga interaktiva element (`button`)
- Korrekt språkattribut (`lang="sv"`)
- Beskrivande `alt`-texter på bilder

**✔ Kursmål uppfyllt**

---

### 2. CSS – layout och struktur
- CSS uppdelad i layout, komponenter, tema och utilities
- Layout byggd med Grid och Flexbox
- CSS-variabler (design tokens)
- Modulär CSS per funktion
- Animationer utan layoutskift (CLS)

**✔ Kursmål uppfyllt**

---

### 3. JavaScript – DOM & händelser
- Dynamisk rendering av innehåll
- Eventhantering för klick, tangentbord och fokus
- Ingen logik hårdkodad i HTML
- Tydlig användarfeedback vid interaktion

**✔ Kursmål uppfyllt**

---

### 4. Modulär JavaScript-struktur
- `main.js` som entry point och router
- `modules/` för initiering och flöden
- `components/` för render-funktioner
- `data/` för separerad data
- `utils/` för återanvändbara hjälpfunktioner

**✔ Kursmål uppfyllt**

---

### 5. Datahantering
- Data i separata filer
- Användning av `find`, `map` och villkor
- Datumlogik styr innehåll
- Fallback-hantering om data saknas

**✔ Kursmål uppfyllt**

---

### 6. API & asynkron JavaScript
- `fetch` och `async/await` används
- Felhantering innan rendering
- Tydlig separation mellan datahämtning och UI

**✔ Kursmål uppfyllt**

---

### 7. Tillgänglighet (WCAG)
- Full tabb-navigering
- Tillgängliga modaler:
  - `role="dialog"`
  - `aria-modal="true"`
  - `aria-labelledby`
- Fokus flyttas in vid öppning
- ESC stänger modal
- Fokus återställs vid stängning
- `inert` används för att blockera bakgrund

**✔ WCAG 2.1 AA – 100 i Lighthouse Accessibility**

---

### 8. Prestanda
- Lazy loading av bilder
- `decoding="async"`
- Explicit bredd/höjd på bilder
- Optimerade bildformat (WebP)
- Lighthouse-analys genomförd

**✔ Kursmål uppfyllt**

---

### 9. Versionshantering (Git)
- Versionshantering med Git
- Arbete i flera branches
- Merge och rebase har använts
- Deploy via GitHub Pages

**✔ Kursmål uppfyllt**

---

## 🧠 Arbetssätt & reflektion

Projektet har utvecklats iterativt med fokus på:
- tydlig struktur
- tillgänglighet
- stabil interaktion
- användarupplevelse

AI har använts som stöd för resonemang och felsökning, men all kod har granskats, anpassats och testats manuellt.

---

## 🧾 Sammanfattning

Projektet visar att studenten kan:
- bygga interaktiva webblösningar med HTML, CSS och JavaScript
- strukturera större frontendprojekt modulärt
- arbeta tillgängligt enligt WCAG
- hantera data och API:er
- använda Git i praktiken
- reflektera över tekniska val

Projektet uppfyller därmed **kursens examinerande mål**.


