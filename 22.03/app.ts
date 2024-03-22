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