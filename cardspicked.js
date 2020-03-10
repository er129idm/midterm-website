//unsure of the best way to do a random selection of three cards for the the next page & how to link specific text with each card - use a json file? (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) or array?
//also unsure how to make it so that it cannot randomly select the same card more than once in each reading.

let arrayofimage = ["death.png","judgment.png","justice.png","strength.png","temperance.png","thechariot.png","thedevil.png","theemperor.png","theempress.png","thefool.png","thehangedman.png","thehermit.png","thehighpriestess.png","thelovers.png","themagician.png","themoon.png","thestar.png","thesun.png","thetower.png","theworld.png","wheeloffortune.png"];

let c1;
let c2;
let c3;

//from https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
arrayofimage[Math.floor(Math.random() * arrayofimage.length)]
for (let x=0, x<4, x++){
c1 = 0;
c2 = arrayofimage[Math.floor(Math.random() * arrayofimage.length)]
c3 = arrayofimage[Math.floor(Math.random() * arrayofimage.length)]
}

if (c1 == 0){
  document.getElementbyId("cardone").innerHTML = '<img src="cards/majorarcana/death.png" height="270" width="200">';

}
