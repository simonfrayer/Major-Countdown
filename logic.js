let numberElement = document.getElementById("number");
let cislo = 32;
let file = new Blob([cislo],{type: "text"});

numberElement.innerHTML = cislo;

let intervalUpdate = setInterval(updateCislo, 1000);


function updateCislo(){
    cislo *= 2;
    numberElement.innerHTML = cislo;
};