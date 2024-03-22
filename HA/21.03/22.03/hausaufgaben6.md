# TS Homework #2

### Aufgabe 1: Grundlagen und Theorie (10 Punkte je Frage --> 60 Punkte)

**Ziel**: Beantworte die folgenden Fragen:

- Worauf muss geachtet werden, wenn man Typescript auf einer Webseite verwenden möchte?
Auf die Einrichtung des Compilers, Eine Konfigurationsdatei, nutzung von Typen

- Warum ist der Datentyp `any` in Typescript problematisch?
Es umgeht die Typisierung und signalisiert das es sich um jeglichen Typen handeln kann

- Du möchtest in einem Array Zahlen und Strings gleichzeitig speichern. Wie kannst du das in Typescript erreichen?
in dem man mit ( string | number ) arbeitet

- Wie kannst du den Typ eines Parameters in einer Funktion optional machen?
indem an hinter dem Parameter ein (?) setzt

- Wie kannst du den Typ eines HTMLElements auf einen anderen Typen festlegen? (Stichwort: Type Assertion)
mithilfe von (as)
Bsp. 

const TypBeispielelement = Beispiel as HTMLInputElement

- Was sind die Vorteile seinen Code in mehrere Dateien aufzuteilen?
Organisation, Wiederverwendung, Leistung Optimiert, parallel arbeiten

### Aufgabe 2: Praxis: Funktionen (10 Punkte)

**Ziel**: Schreibe eine Funktion, die die Eingabeliste aus Zahlen und Strings nimmt und alle Strings entfernt. Die Funktion soll ein neues Array zurückgeben, das nur Zahlen enthält.

```ts
// Beispielcode

function entferneStringsAusListe(eingabe: (string | number)[]): number[] {
    // Auflösung return gibt es an die Filter methode weiter 
    // in der überprüft wird ob der Typ des Elements eine Zahl ist
    // wenn ja wird er in das Array gepackt, ansonsten wird es entfernt.
    return eingabe.filter(item => typeofitem === 'number') as number[];
}

// Test
console.log(
  entferneStringsAusListe([1, "Spritzkuchen", 2, "Franzbrötchen", 4, 5])
); // Sollte [1, 2, 4, 5] ausgeben
```

### Aufgabe 3: Praxis: Typen (20 Punkte)

**Ziel**: Vervollständige die app.ts Datei, sodass sie folgende Anforderungen erfüllt:

- Beim Klick auf den Button absenden, soll in der Konsole ausgegeben werden, welche Schüsselgröße ausgewählt wurde.

```ts
// Teil 1: Beim Klick auf den Button "Absenden" die ausgewählte Schüsselgröße ausgeben
const groesseSelect = document.getElementById('groesse')! as HTMLSelectElement

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Standard-Formularverhalten verhindern
    console.log(groesseSelect.value);
});
```

- Beim Klick auf den Button absenden, soll in der Konsole ausgegeben werden, welche Obstsorten ausgewählt wurden. Diese sollen als Array ausgegeben werden. Wenn keine Obstsorten ausgewählt wurden, soll ein leeres Array ausgegeben werden. So soll eine beispielhafte Ausgabe aussehen: `["Apfel", "Kiwi"]`.
```ts
// Teil 2: Beim Klick auf den Button "Absenden" die ausgewählten Obstsorten ausgeben
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Standard-Formularverhalten verhindern

    // Alle Checkboxen mit dem Namen "obst" abrufen
    const obstInputs = document.getElementsByName('obst');

    const obst: string[] = [];

    for (let i = 0; i < obstInputs.length; i++) {
        const checkbox = obstInputs[i] as HTMLInputElement;
        if (checkbox.checked) {
            obst.push(checkbox.value)
        }
    }


    // Ausgabe der ausgewählten Obstsorten
    console.log("Ausgewählte Obstsorten:", obst);
});
```


- Erstelle einen Typ, in dem die Inhalte der Obstschüssel gespeichert werden können. Es soll gespeichert werden, welche Schüsselgröße ausgewählt wurde, welche Farbe die Schüssel hat und welche Obstsorten ausgewählt wurden (Array aus der vorherigen Aufgabe).


```ts
// Teil 3: Erstelle einen Typ für die Inhalte der Obstschüssel
type Obstschuessel = {
    groesse: string,
    farbe: string,
    obst: string[]
};


const obstschuesselInhalt: Obstschuessel = {
    groesse: groesseSelect.value,
    farbe: farbenInput.value,
    obst: obstauswahl
   
    
}

console.log("Obstschuessel;", obstschuesselInhalt)


```


### Aufgabe 4: Praxis: Fehler beheben (10 Punkte)

Ohje... Ein Kollege hat den folgenden Code geschrieben, aber er funktioniert nicht. Kannst du die Fehler finden und beheben?

**Ziel**: Repariere den folgenden Code:

```ts

const name: string = "Fred";
let alter: number = 40;
const fullName: string = name + " Feuerstein";
const berufe: string[] = [
  "Steinmetz",
  "Höhlenmaler",
  "Mammutjäger",
  "Familienoberhauptvogel",
  "Dinosaurierkranführer",
];
const fred = {
  vorname: fullName.split(" ")[0],
  nachname: fullName.split(" ")[1],
  beruf: berufe[berufe.length - 1],
  alter: alter + 2,
};
const familieFeuerstein: { name: string; beruf: string; alter: number }[]

```