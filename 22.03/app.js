// das Ausrufezeichen weist auf typescript an, dass wir
// uns sicher sind, das es sich hier nicht um NULL
// handelt
var farbenInput = document.getElementById('farbe');
// console.log(farbenInput.value)
var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(farbenInput.value);
});
var obst = document.getElementsByName('obst');
var obst1 = obst[1];
// console.log(obst1.value, obst1.checked)
for (var i = 0; i < obst.length; i = i + 1 /* i++ ODER i += 1 */) {
    var aktuellesObst = obst[i];
    console.log(aktuellesObst.value, aktuellesObst.checked);
}
// Teil 1: Beim Klick auf den Button "Absenden" die ausgewählte Schüsselgröße ausgeben
var groesseSelect = document.getElementById('groesse');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Standard-Formularverhalten verhindern
    console.log(groesseSelect.value);
});
// Teil 2: Beim Klick auf den Button "Absenden" die ausgewählten Obstsorten ausgeben
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Standard-Formularverhalten verhindern
    // Alle Checkboxen mit dem Namen "obst" abrufen
    var obstauswahl = [];
    var obstInputs = document.getElementsByName('obst');
    for (var i = 0; i < obstInputs.length; i++) {
        var checkbox = obstInputs[i];
        if (checkbox.checked) {
            obstauswahl.push(checkbox.value);
        }
    }
    // Ausgabe der ausgewählten Obstsorten
    console.log("Ausgewählte Obstsorten:", obstauswahl);
    var obstschuesselInhalt = {
        groesse: groesseSelect.value,
        farbe: farbenInput.value,
        obst: obstauswahl
    };
    console.log("Obstschuessel;", obstschuesselInhalt);
});
