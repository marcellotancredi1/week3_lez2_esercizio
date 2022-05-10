/* UTILIZZARE VARIABILI CON DEI PROMPT, DEI VALORI
ES. UTILIZZARE UNA COSTANTE  
DIFFERENZA TRA VAR E LET
STAMPARE TUTTO
METTERE QUALCHE ALERT
PROMPT PER I DATI
UTILIZZARE IF 
*/

var uno = prompt('scrivi 1');
var due = prompt('scrivi 2');
var tre = prompt('scrivi 3');
var quattro = prompt('scrivi 4');

document.getElementById('uno').innerHTML = uno;
document.getElementById('due').innerHTML = due;
document.getElementById('tre').innerHTML = tre;
document.getElementById('quattro').innerHTML = quattro;


var x = 1;
var y = 2;

let w = 3;
let z = 4;

let string = 'ecco il totale';

var totale = x + y + w + z;

const pigreco = 3.14 decimal.toFixed(2);

document.write(x + " " + y + " " + w + " " + z);
console.log(string+": "+totale);

/* window.alert(x + " " + y + " " + w + " " + '(e anche z)'); */

console.log(x+y);

console.log(w*z);

 
 let result = x + pigreco;
 console.log(result);


/* if((result)<4) {         FUNZIONA
    console.log(result);
} */

/* if((result)>4) {         FUNZIONA
    console.log(result);
} */


if((result)-=4) {
    console.log(result);    
} ;



 result = z%2 == 0;
if(result==1) {
    console.log(result);
}

x==y;

var pippo = 14;
{
    var pippo = 23;
    console.log(pippo);
}
console.log(pippo);


let pluto = 12;
{
    let pluto = 122;
    console.log(pluto);
}
console.log(pluto);

