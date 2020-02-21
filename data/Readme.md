# Aufbau der Daten
Die Beispieldaten bestehen aus drei Bereichen. Der erste Bereich ist das Layout
des Spielfelds.
Danach folg der String `-- start --` als Separator gefolgt von
den Koordinaten des Startpunktes, zuerst die Spalte, dann die Zeile. Die
Koordinaten beginnen bei 0, 0 in der linken oberen Ecke.
Es folgt wieder ein Separator `-- goal --` und dann die Koordinaten des Ziels.

Beispiel:

```
000101000
010101011
010000000
010111010
000000010
011101110
000101000
110101110
000000000
-- start --
0
2
-- goal --
8
8
```

Das Spielfeld ist immer eine Matrix aus Nullen und Einsen. Eine `1` bedeutet,
dass dieses Feld ein Hindernis ist, und nicht betreten werden kann. Eine `0`
ist ein freies Feld. Alle Felder außerhalb des Spielfelds gelten als Hindernis.

Die Hindernisse können beliebig platziert sein. Es gibt nicht immer nur einen
Weg vom Start zum Ziel und es ist sogar möglich, dass das Ziel vom Startpunkt
aus nicht erreicht werden kann.

Bewegungen auf dem Spielfeld erfolgen immer in Schritten von Feld zu Feld.
Dabei kann man sowohl vertikal und horizontal als auch diagonal gehen,
vorausgesetzt, das Zielfeld ist kein Hindernis.

Die Länge eines Schrittes in horizontaler Richtung oder vertikaler Richtung ist
genau 1. Die Länge eines Schrittes in diagonaler Richtung ist größer als 1,
aber kleiner als 2. In den Beispiellösung wird die geometrische Entfernung (also
Wurzel aus 2) angenommen.

In dem obigen Beispiel ist der kürzeste Pfad daher:
(0, 2) → (0, 1) → (1, 0) → (2, 1) → (2, 2) → (2, 3) → (3, 4) → (4, 5) → (4, 6) →
(4, 7) → (5, 8) → (6, 8) → (7, 8) → (8, 8)

oder grafisch dargestellt:

```
┏━━━┳━┳━━━┓
┃ · ┃ ┃   ┃
┃·╻·╹ ╹ ╺━┫
┃s┃·      ┃
┣━┛·╺━╸ ╻ ┃
┃   ·   ┃ ┃
┃ ╺━┓·┏━┛ ┃
┃   ┃·┃   ┃
┣━╸ ╹·┗━╸ ┃
┃     ···g┃
┗━━━━━━━━━┛
```

Du hast DIE Lösung? Dann schicke uns deinen Projektordner inkl. einer geeigneten Anleitung für den erfolgreichen Build oder Start an codingcontest@tallence.com.