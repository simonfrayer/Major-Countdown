let numberElement = document.getElementById("number");
let cislo = 1;

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let todayString = mm +'/' + dd + '/' + yyyy;

const startDate = new Date('9/13/2022');

const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

console.log("Today: " + todayString);
console.log("Days difference: " + diffDays);

updateCislo();

numberElement.innerHTML = cislo + " kč";

function updateCislo(){
    cislo = cislo * (Math.pow(2, diffDays));

    console.log("Cislo ma byt: " + cislo);
};