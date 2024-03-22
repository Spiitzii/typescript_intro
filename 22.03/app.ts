// das Ausrufezeichen weist auf typescript an, dass wir
// uns sicher sind, das es sich hier nicht um NULL
// handelt

const farbenInput 
    = document.getElementById('farbe')! as HTMLInputElement
// console.log(farbenInput.value)


const form 
    = document.getElementById('form')! as HTMLFormElement

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(farbenInput.value)
    })

const obst = document.getElementsByName('obst')

const obst1 = obst[1] as HTMLInputElement

// console.log(obst1.value, obst1.checked)


for (let i = 0; i < obst.length; i = i + 1 /* i++ ODER i += 1 */){
    const aktuellesObst = obst[i] as HTMLInputElement
    console.log(aktuellesObst.value, aktuellesObst.checked)

}


// Teil 1: Beim Klick auf den Button "Absenden" die ausgewählte Schüsselgröße ausgeben
const groesseSelect = document.getElementById('groesse')! as HTMLSelectElement

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Standard-Formularverhalten verhindern
    console.log(groesseSelect.value);
});


// Teil 2: Beim Klick auf den Button "Absenden" die ausgewählten Obstsorten ausgeben
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Standard-Formularverhalten verhindern

    // Alle Checkboxen mit dem Namen "obst" abrufen
    const obstauswahl: string[] = [];

    const obstInputs = document.getElementsByName('obst');

    

    for (let i = 0; i < obstInputs.length; i++) {
        const checkbox = obstInputs[i] as HTMLInputElement;
        if (checkbox.checked) {
            obstauswahl.push(checkbox.value)
        }
    }


    // Ausgabe der ausgewählten Obstsorten
    console.log("Ausgewählte Obstsorten:", obstauswahl);





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

});