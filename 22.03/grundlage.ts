console.log('Hallo Welt')

const trainer: string = 'lucas'

// ohne :string[] hätten wir eine Liste, die wir
// niemals befüllen lönnten
let trainerListe: string[] = ['Shamila']

console.log(trainerListe)

// Element an Array HINTEN anhängen
trainerListe.push('Lucas')

console.log(trainerListe)

// Element an Array VORNE anhängen
trainerListe.unshift('Galina')

console.log(trainerListe)

trainerListe.push('C0013rDude')
// trainerListe.push('1')

// Wir können keine Zahlen anfügen
// trainerListe.push(1)

console.log(trainerListe)

let letztElement = trainerListe.pop()
let ersteElement = trainerListe.shift()

console.log(ersteElement, letztElement)
console.log(trainerListe)

console.log('tsc -w app.ts')

// das Pipe-Zeichen "|" sagt, dass wir Daten vom Typ
// number und string

let meineVariable: number | string = 50 // oder 'fünzig'
meineVariable = 'fünzig'

// entweder ist es ein array von zahlen (number[]) ODER
// es ist eine array von strings (string[])
let meinArray1: number[] | string[] = []

// in dem array können wir numbers und strings
// gleichzeitig speichern
let meinArray2: (number | string)[] = []

meinArray1 = [12, 50, 80/*, 'Asadul'*/] // Fehler bei Asadul
meinArray1 = ['Asadul', 'Lucas', /*,20*/] // Fehler bei 20
meinArray2 = [12, 50, 80, 'Asadul', 'Lucas', 80]


type Auto = {
    typ: string,
    hersteller: string,
    preis: number
}

let autoLyne: Auto = {
    typ: 'Model S',
    hersteller: 'Tesla',
    preis: 45000
}

let autoGülcan: Auto = {
    typ: 'Mustang',
    hersteller: 'Ford',
    preis: 65000

} 

let AutoMarc: Auto = {
    typ: 'Scooter Mi 4',
    hersteller: 'xiaomi',
    preis: 449,
    //besitzer: 'Marc'

}

let autoArray: Auto[] = []

