let numberElement = document.getElementById("number");
let cislo = 32;

numberElement.innerHTML = cislo;

let intervalUpdate = setInterval(updateCislo, 86400000);


function updateCislo(){
    cislo *= 2;
    numberElement.innerHTML = cislo;
};