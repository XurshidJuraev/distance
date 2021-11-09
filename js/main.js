var elPiyoda = document.querySelector("#piyoda");
var elVelosiped = document.querySelector("#velosiped");
var elMashina = document.querySelector("#mashina");
var elSamolyot = document.querySelector("#Samolyot");

var elButton = document.querySelector("#button");


var piyoda = 0.6;
var velosiped = 20.1 / 60;
var mashina = 70 / 60;
var samolyot = 0.00125;

elButton.addEventListener("click", function(evt) {
    console.log((1.4));
    evt.preventDefault();
    var elMasofa = document.querySelector("#masofa");
    elPiyoda.textContent = Math.round(elMasofa.value * piyoda);

    elVelosiped.textContent = Math.round(elMasofa.value * velosiped);

    elMashina.textContent = Math.round(elMasofa.value * mashina);

    elSamolyot.textContent = Math.round(elMasofa.value * samolyot);
})