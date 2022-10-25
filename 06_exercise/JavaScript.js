let input = ["Monday","Thursday","Saturday","Wednesday","Tuesday"];

let classmates = ["Oguz" , "Emin", "Abdul", "Sevim"];

function getLastValue (a){
let sorted = a.sort();
let lastElement = sorted[sorted.length - 1];
console.log(lastElement);
}

getLastValue(classmates);