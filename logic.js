let numberElement = document.getElementById("number");
let cislo = 1;

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const startDate = new Date('9/13/2022');

const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

numberElement.innerHTML = cislo;

function updateCislo(){
    cislo = Math.pow(cislo, getDayDifference);
};

function getDayDifference(){
    return diffDays;
}