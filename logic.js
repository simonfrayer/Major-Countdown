//countup logic -------------------------------------------
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

//animations -----------------------------------------------
let rectangle1 = document.getElementsByClassName("rectangle1");
let rectangle2 = document.getElementsByClassName("rectangle2");
let rectangle3 = document.getElementsByClassName("rectangle3");

//what to run ----------------------------------------------
updateCislo();

numberElement.innerHTML = cislo + " kč";

/*
setTimeout(() =>{
},50);
*/

moveRectangle1();
moveRectangle2();
moveRectangle3();


// ---------------------------------------------------------

//basic countup logic
function updateCislo(){
    cislo = cislo * (Math.pow(2, diffDays));
};


// animations ----------------------------------------------

function moveRectangle1() {
  let id = null;
  let pos = 99;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 58) {
      clearInterval(id);
    } 
    else {
      pos--;
      rectangle1[0].style.left = pos + '%';  
    }
  }
}

function moveRectangle2() {
    let id = null;
    let pos = -70;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == -36) {
        clearInterval(id);
      } 
      else {
        pos++;
        rectangle2[0].style.left = pos + '%';  
      }
    }
  }

  function moveRectangle3() {
    let id = null;
    let pos = 75;
    clearInterval(id);
    id = setInterval(frame, 25);
    function frame() {
      if (pos == 90) {
        clearInterval(id);
      } 
      else {
        pos++;
        rectangle3[0].style.top = pos + '%';  
      }
    }
  }