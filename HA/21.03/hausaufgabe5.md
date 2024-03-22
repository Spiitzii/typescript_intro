# TS Homework #1

### Aufgabe 1: Grundlagen und Theorie (10 Punkte je Frage --> 40 Punkte)

**Ziel**: Beantworte die folgenden Fragen:

- Was sind Vorteile, dass Typescript in Javascript compliert wird?
  "Es gibt die Verweundung von Typen und dazu optimiert er den Code für das Javascript.

- Warum ist es von Vorteil, dass Typescript streng mit Datentypen umgeht?
  Fehlererkennung ist schneller, der Code an sich ist robuster und die Qualität an sich vom Code ist reiner

- Was ist der Unterschied zwischen `let` und `const`?
  let ist eine Variable Blockbasiert die danach nicht mehr den Zugriff hat, const ist eine Konstante Variable die dauerhaft den gleichen Wert hat und nicht einfach so geändert werden kann

- Informiere dich über eine Datei namens tsconfig.json. Was ist das und wofür wird es verwendet? Fasse es kurz zusammen.
  Es ist eine Konfigurationsdatei für TypeScript Projekte. Man kann damit Einstellungen des Compiler definieren

### Aufgabe 2: Praxis: Typen hinzufügen (5 Punkte je Funktion --> 55 Punkte)

**Ziel**: Vervollständige die folgenden Funktionen, indem du die Typen für die jeweiligen Parameter und den Rückgabewert angibst. Die Funktionen sind von der gestrigen Hausaufgabe.
Folgende Datentypen wirst du so oder in ähnlicher Art benötigen benötigen:
- number --> Zahl
- string --> Zeichenkette
- boolean --> true/false
- number[] --> Array von Zahlen
- string[] --> Array von Zeihenketten
- void --> keine Rückgabewert
- object --> object
- {schlüssel: string, wert: number} --> ein Objekt mit der angegebenen Signatur


Hier ein kleines Beispiel:

```ts
// Beispielcode
function entferneElement(arr, wert) {
  // Verwenden Sie hier eine geeignete Array-Methode
}

// wird zu:

function entferneElement(arr: number[], wert: number): number[] {
  // Verwenden Sie hier eine geeignete Array-Methode
}

// Test
console.log(entferneElement([1, 2, 3, 4, 5], 3)); // Sollte [1, 2, 4, 5] ausgeben
```

Vervollständige die folgenden Funktionen:

```ts
// Beispielcode
function summeZahlen(arr: number[]) {
  // Implementieren Sie Ihre Lösung mit reduce
}

// Test
console.log(summeZahlen([1, 2, 3, 4, 5])); // Sollte 15 ausgeben
```

```ts
// Beispielcode
function entferneDuplikate(arr: number[]) {
  // Verwenden Sie hier geeignete Array-Methoden
}

// Test
console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5])); // Sollte [1, 2, 3, 4, 5] ausgeben
```

```ts
// Beispielcode
function bestimmeJahreszeit(monat: number) {
  // Verwenden Sie Bedingungen, um die Jahreszeit zu bestimmen
}

// Test
console.log(bestimmeJahreszeit(4)); // Sollte "Frühling" ausgeben
```

```ts
// Beispielcode
function istPasswortGueltig(passwort: string) {
  // Implementieren Sie die Passwort-Validierungslogik
}

// Test
console.log(istPasswortGueltig("Test1234")); // Sollte true ausgeben
```

```ts
// Beispielcode
function taschenrechner(a: number, b:number, operation: string) {
  // Verwenden Sie Bedingungen, um die entsprechende Operation auszuführen
}

// Test
console.log(taschenrechner(10, 5, "+")); // Sollte 15 ausgeben
console.log(taschenrechner(10, 5, "/")); // Sollte 2 ausgeben
console.log(taschenrechner(10, 5, "x")); // Sollte "Ungültige Operation" ausgeben
```

```ts
// Beispielcode
function multiplikationstabelle(n: number) {
  // Verwenden Sie eine for-Schleife, um die Tabelle zu generieren und auszugeben
}

// Test
multiplikationstabelle(5); // Sollte die Multiplikationstabelle für 5 ausgeben
```

```ts
// Beispielcode
function umkehrenArray(arr: number[]) {
  // Implementieren Sie die Logik, um das Array umzukehren
}

// Test
console.log(umkehrenArray([1, 2, 3, 4, 5])); // Sollte [5, 4, 3, 2, 1] ausgeben
```

```ts
// Beispielcode
function zaehleBuchstaben(str: string, buchstabe: string) {
  // Zählen Sie, wie oft `buchstabe` in `str` vorkommt
}

// Test
console.log(zaehleBuchstaben("Hallo Welt", "l")); // Sollte 3 ausgeben
```

```ts
// Beispielcode
function filterGeradeZahlen(arr: number[]) {
  let geradeZahlen = [];
  // Verwenden Sie eine for-Schleife und eine Bedingung, um gerade Zahlen zu filtern
  return geradeZahlen;
}

// Test
console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6])); // Sollte [2, 4, 6] ausgeben
```

```ts
// Beispielcode
function findeMinMax(arr: number[]) {
  // Initialisieren Sie min und max entsprechend
  // Durchlaufen Sie das Array, um min und max zu aktualisieren
  return { min: /* min Wert */, max: /* max Wert */ };
}

// Test
console.log(findeMinMax([10, 2, 5, 1, 9])); // Sollte { min: 1, max: 10 } ausgeben

```

```ts
// Beispielcode
function berechneDurchschnitt(arr: number[]) {
  let summe = 0;
  // Verwenden Sie eine for-Schleife, um die Summe der Zahlen zu berechnen
  // Teilen Sie die Summe durch die Anzahl der Zahlen, um den Durchschnitt zu erhalten
  return summe / arr.length;
}

// Test
console.log(berechneDurchschnitt([1, 2, 3, 4, 5])); // Sollte 3 ausgeben
```

### Aufgabe 3: Praxis: Selbststudium (5 Punkte)

**Ziel**: Probiere dich aus und versuche deine bisherigen JavaScript-Dateien in TypeScript umzuwandeln. Füge Typen hinzu, wo immer es möglich ist. Versuche, die Datei zu kompilieren und behebe alle Fehler, die auftreten. Wir sind am Nachmittag für dich da, falls du Probleme hast.
Wir vertrauen darauf, dass du die Aufgabe ehrlich und eigenständig bearbeitest. Daher bekommst du 5 Punke aufs Haus!

```ts
function Zeit(monat: number) {
  if (monat >= 3 && monat <= 5) {
    return "Frühling";
  } else if (monat >= 6 && monat <= 8) {
    return "Sommer";
  } else if (monat >= 9 && monat <= 11) {
    return "Herbst";
  } else {
    return "Winter";
  }
}

console.log(Zeit(5)); // Sollte "Frühling" ausgeben
```
