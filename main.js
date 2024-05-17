import Pokemon from "./Pokemon.js";
//szorgalmi összes Pokemon megjelenitése

/* az osztály mindig kisbetű */
let pok1=new Pokemon("Ditto","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
,"Jó esős reggelt!",$(".pokemonok"))
let pok2=new Pokemon("Charizard","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
,"Wahho!",$(".pokemonok"))

//pok1.nev="Pikachu" ezt nem tudom már használni getter esetén
pok1.szerep="Ráz"
delete pok1.mondat

// nevek lekérése getteren keresztül
console.log(pok1.nev)
console.log(pok2.nev)

// mondatba másik mondatott adunk setteren keresztül
pok1.mondat="Hurrá elállt az eső!"
pok1.beszel()

console.log(pok1)
console.log(pok2)