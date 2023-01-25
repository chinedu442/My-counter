let myName = "Umenze Chinedu!";
let greeting = "Welcome Back, ";
document.getElementById("head-el").textContent = greeting + myName;

let count = 0;

function add(){
 count++;
 document.getElementById("show").textContent = count;
}

function minus(){
 count--;
 if(count < 0){
   count = 0;
  }
 document.getElementById("show").textContent = count;
}

function save(){
 document.getElementById("save-el").textContent += count + " - ";
 document.getElementById("show").textContent = count * 0;
 count = 0;
 //console.log("Clicked");
}

function reset(){
 //document.getElementById("save-el").textContent += count + " - ";
 document.getElementById("show").textContent = count * 0;
 count = 0;
}
