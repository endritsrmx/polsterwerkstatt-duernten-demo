# Polsterwerkstatt Dürnten — Demo-Website

**Live-Demo:** https://endritsrmx.github.io/polsterwerkstatt-duernten-demo/

Diese Version ist eine Vorschau. Oben auf der Seite steht ein Hinweisbalken «Demo-Vorschau», die Bilder sind KI-generiert und die Adresse ist ein Platzhalter. Vor dem Livegang entfernen:

1. Den `<div>` mit dem Text «Demo-Vorschau» ganz oben in `index.html` löschen.
2. Platzhalter in `impressum.html` und `datenschutz.html` mit echten Angaben ersetzen (Inhaber, Strasse, Rechtsform, UID, Bildnachweis).
3. In `index.html` die Adresse `Musterstrasse 00` ersetzen.
4. Die Sektion `#stimmen` bleibt vorerst auf `hidden`, bis echte Kundenstimmen vorliegen.
5. Vorher/Nachher-Bilder durch echte Kundenarbeiten ersetzen, sonst bleibt der Bildnachweis «Beispielbilder, KI-generiert».

---
Statische Onepage, kein Build nötig. Ordner auf den Webserver laden, fertig. Für GitHub Pages: Branch `main`, Ordner `/ (root)` — die Datei `.nojekyll` ist bereits dabei.

## Dateien

- `index.html`, `styles.css`, `script.js` (Vanilla JS, ca. 5 KB)
- `impressum.html`, `datenschutz.html`
- `assets/favicon.svg`
- `assets/img/` — Fotos hier ablegen (siehe unten)
- `assets/fonts/` — Schriften hier ablegen (siehe unten)

## 1. Fotos (`assets/img/`)

Dateinamen exakt so verwenden. Prompts dazu: `Bild-Prompts.md`.

| Datei | Format | Wo |
|---|---|---|
| hero-leinensofa.webp | 16:9, 2400px | Hero |
| leistung-sofa.webp | 3:2 | Leistungen 01 |
| leistung-couch.webp | 3:2 | Leistungen 02 |
| leistung-stuehle.webp | 3:2 | Leistungen 03 |
| leistung-stoffwechsel.webp | 3:2 | Leistungen 04 |
| sofa-vorher.webp / sofa-nachher.webp | 3:2 | Vorher/Nachher 1 |
| sessel-vorher.webp / sessel-nachher.webp | 3:2 | Vorher/Nachher 2 |
| werkstatt-haende.webp | 4:5 | Werkstatt |
| stoff-leinen / -boucle / -samt / -cord / -struktur / -kunstleder.webp | 1:1 | Stoffwechsel |
| og-bild.jpg | 1200×630 | Vorschaubild für WhatsApp/Social |

Sobald echte Kundenarbeiten vorhanden sind: Vorher/Nachher durch echte Fotos ersetzen. Bis dahin im Impressum unter «Bilder» vermerken, dass es Beispielbilder sind.

## 2. Schriften (`assets/fonts/`)

Lokal gehostet (keine Google-Fonts-Anfrage → DSG-freundlich). Herunterladen z. B. über https://gwfh.mranftl.com:

- `InterTight-Variable.woff2` (Inter Tight, variable)
- `InstrumentSerif-Regular.woff2`, `InstrumentSerif-Italic.woff2`

Ohne Dateien fällt die Seite sauber auf Helvetica Neue / Georgia zurück.

## 3. Platzhalter ersetzen

| Platzhalter | Datei |
|---|---|
| [[STRASSE NR.]] | index.html, impressum.html, datenschutz.html |
| [[INHABER/IN]] | impressum.html, datenschutz.html |
| [[RECHTSFORM]], [[UID]] | impressum.html |
| [[BILDNACHWEIS]] | impressum.html |
| [[HOSTING-ANBIETER, LAND]], [[ANZAHL]], [[DATUM]] | datenschutz.html |
| [[KUNDENSTIMME 1–3]], [[NAME, ORT]] | index.html — Sektion `#stimmen`, danach Attribut `hidden` entfernen |

Postleitzahl 8635 ist eingetragen — bitte prüfen.

## 4. Vor dem Livegang

- Datenschutz rechtlich prüfen lassen.
- Kontaktformular öffnet das E-Mail-Programm (kein Server nötig). Für echten Versand später z. B. Formspree oder Netlify Forms einbinden.
- Test auf 375, 768 und 1440px, Telefon- und WhatsApp-Links auf dem Handy antippen.
