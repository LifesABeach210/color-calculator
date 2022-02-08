const prompt = require("Prompt-sync")();
let num1 = Number(prompt("if you wish to combine the colors of Red and blue press 1. if you wish to combine the colors Red and Yellow press 2, if you wish to combine the colors of blue and yellow press 3"))
if (num1 ===1){console.log("those combined colors create purple");}
else if (num1 === 2){console.log("those combined colors create orange");}
else if(num1 === 3){console.log("those combined colors create green");}
else {console.log("error");}
let num2 = Number(prompt("This is the color deconstructor if you wish to see what the colors that make purple press [1],[2] for orange and [3] for Green"));
if (num2 ===2){console.log("this color when deconstructed is made of the two colors Red and Yellow");}
 else if (num2 ===3){console.log("the color green is made the the combo of blue and yellow");}
else if (num2 === 1){console.log("the combo of colors that make purple is red and blue ");}
else {console.log("error")}




