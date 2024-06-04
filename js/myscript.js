//  chiedere all’utente il numero di chilometri che vuole percorrere
let kmDaFare = parseInt(prompt("inserisci il numero di Km che vuoi percorrere"))
console.log("i km da fare sono:", kmDaFare);


// chiedere l’età del passeggero.
let eta = parseInt(prompt("inserisci la tua età"))
console.log("l'età è: ", eta);


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let prezzoKm = 0.21; ;

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
if (eta < 18){
    prezzoKm = (0.21- ((0.21*20)/100));
    
} else if (eta > 65){
    prezzoKm = (0.21- ((0.21*40)/100));
}
console.log("il prezzo al km è: " , prezzoKm);


// calcolo prezzo biglietto
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
risultato = (prezzoKm * kmDaFare).toFixed(2);
console.log(risultato);
document.getElementById("result").innerHTML=risultato;