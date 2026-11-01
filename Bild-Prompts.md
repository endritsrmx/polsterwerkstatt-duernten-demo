# Bild-Prompts — Polsterwerkstatt Dürnten

Für Midjourney (v6/v7). Bei anderen Tools den Parameterteil (`--ar …`) weglassen und das Format manuell setzen.

## Stil-Zusatz — an JEDEN Prompt anhängen

```
documentary interior photography, natural window daylight, 35mm lens, f/2.0, warm muted colours, Swiss apartment with oak parquet and plaster ceiling moulding, subtle film grain, no HDR, not oversaturated, realistic fabric texture, correct furniture proportions, no text, no logos, no watermark --style raw --v 6.1
```

Tipp: Bild 1 zuerst erzeugen, dann bei allen weiteren `--sref [URL von Bild 1]` anhängen, damit der Look gleich bleibt. Vorher/Nachher-Paare: zuerst «nachher» erzeugen, dann «vorher» mit Vary (Region) nur auf den Stoff anwenden, damit Winkel und Licht identisch bleiben.

## Prompts

| # | Dateiname | Format |
|---|---|---|
| 1 | `hero-leinensofa.webp` | 16:9 |
| 2 | `sofa-nachher.webp` | 3:2 |
| 3 | `sofa-vorher.webp` | 3:2 |
| 4 | `sessel-nachher.webp` | 3:2 |
| 5 | `sessel-vorher.webp` | 3:2 |
| 6 | `leistung-sofa.webp` | 3:2 |
| 7 | `leistung-couch.webp` | 3:2 |
| 8 | `leistung-stuehle.webp` | 3:2 |
| 9 | `leistung-stoffwechsel.webp` | 3:2 |
| 10 | `werkstatt-haende.webp` | 4:5 |
| 11–16 | `stoff-leinen.webp` … `stoff-kunstleder.webp` | 1:1 |
| 17 | `og-bild.jpg` | 1200×630 (Ausschnitt aus Bild 1) |

**1 · Hero**
```
a freshly reupholstered three-seater sofa in light natural linen in a calm Swiss living room, oak herringbone parquet, tall window on the left, cushions in terracotta and warm grey, a wooden side table, generous empty wall space on the right, eye-level view [Stil-Zusatz] --ar 16:9
```

**2 · Sofa nachher**
```
a modern L-shaped sofa newly upholstered in light cream bouclé fabric, same Swiss living room, three-quarter front view from standing height, daylight from the left, clean crisp seams [Stil-Zusatz] --ar 3:2
```

**3 · Sofa vorher** (Vary Region auf Bild 2)
```
the same L-shaped sofa covered in worn dark brown corduroy, faded and pilled fabric, slightly sagging seat cushions, identical room, identical angle and light [Stil-Zusatz] --ar 3:2
```

**4 · Sessel nachher**
```
a classic wingback armchair newly upholstered in sand-coloured linen with a contrasting piping seam, on oak parquet next to a window, three-quarter view [Stil-Zusatz] --ar 3:2
```

**5 · Sessel vorher** (Vary Region auf Bild 4)
```
the same wingback armchair in an old faded floral fabric with worn armrests, identical angle and light [Stil-Zusatz] --ar 3:2
```

**6 · Leistung Sofa**
```
close view of a reupholstered sofa armrest and seat cushion in olive green linen, sharp tailored edge, soft window light [Stil-Zusatz] --ar 3:2
```

**7 · Leistung Couch**
```
a large modular corner couch reupholstered in warm grey woven fabric, removable cushion covers with a neat zip visible on the side, living room with parquet [Stil-Zusatz] --ar 3:2
```

**8 · Leistung Stühle**
```
six dining chairs with new upholstered seats in rust-coloured fabric around a solid oak table, Swiss dining room, daylight, view from slightly above [Stil-Zusatz] --ar 3:2
```

**9 · Leistung Stoffwechsel**
```
hands from above laying several fabric swatches on the arm of a sofa during a home consultation, linen, bouclé and velvet samples, no face visible [Stil-Zusatz] --ar 3:2
```

**10 · Werkstatt**
```
close-up of two hands stretching upholstery fabric over a wooden chair frame with a staple gun, upholstery workshop, industrial sewing machine and tools softly out of focus in the background, warm side light, no face [Stil-Zusatz] --ar 4:5
```

**11–16 · Stoffmuster** (je ein Prompt, Draufsicht)
```
flat top-down macro photo of a folded swatch of [STOFF] upholstery fabric on a pale wooden workbench, soft even daylight, texture clearly visible [Stil-Zusatz] --ar 1:1
```
`[STOFF]` ersetzen durch:
- `stoff-leinen.webp` → natural oatmeal linen
- `stoff-boucle.webp` → off-white bouclé
- `stoff-samt.webp` → deep bottle-green velvet
- `stoff-cord.webp` → caramel wide-wale corduroy
- `stoff-struktur.webp` → charcoal textured woven fabric
- `stoff-kunstleder.webp` → cognac faux leather with fine grain

## Nachbearbeitung

- Alle Bilder als WebP exportieren, Qualität 80, lange Kante max. 2400px (Hero) bzw. 1600px (Rest).
- Kontrolle auf KI-Fehler: Möbelbeine gerade und vollständig? Kissen klar getrennt? Hände mit fünf Fingern? Keine Schrift im Bild?
- Wichtig: Vorher/Nachher-Bilder auf der Website als «Beispielbilder» kennzeichnen, bis echte Kundenarbeiten vorliegen (UWG — keine Irreführung).
