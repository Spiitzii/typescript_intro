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
