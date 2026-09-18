"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let a = 2 + 3 * (2 - 4) * 6;
printOut(`2 + 3 * (2 - 4) * 6 = ${a}`);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const inches = ((25 * 1000 + 34 * 10) / 25.4);
printOut(`25 meters and 34 centimeters = ${inches.toFixed(2)} inches`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3days = 3;
const part3hours = 12;
const part3minutes = 14;
const part3seconds = 45;
const part3answer = (part3days * 24 * 60) + (part3hours * 60) + part3minutes + (part3seconds / 60);
printOut(`3 days, 12 hours, 14 minutes, and 45 seconds = ${part3answer} minutes`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totaldays = 6322.52/(24 * 60);
const totalhours = (totaldays - Math.floor(totaldays)) * 24;
const totalminutes = (totalhours - Math.floor(totalhours)) * 60;
const totalseconds = (totalminutes - Math.floor(totalminutes)) * 60;
printOut(`6322.52 minutes = ${Math.floor(totaldays)} days, ${Math.floor(totalhours)} hours, ${Math.floor(totalminutes)} minutes, and ${Math.floor(totalseconds)} seconds`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ExchangeRate = 76 / 8.6;
const USD = 54;
const NOK = USD * ExchangeRate;
printOut(`54 USD = ${Math.round(NOK)} NOK`);
printOut(`NOK ${Math.round(NOK)} = ${Math.round(NOK / ExchangeRate)} USD`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";
let length = text.length;
let char = text.charAt(19);
let part = text.substring(35, 43);
let index = text.indexOf("earth");
printOut(text);
printOut(`the number of characters in the text = ${length}`);
printOut(`the character at position number 19 = ${char}`);
printOut(`Substring the characters from position number 35 and 8 chercters forward= ${part}`);
printOut(`The word "earth" starts in position = ${index}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Comparison1 = 5 > 3;
let Comparison2 = 7 >= 7;
let Comparison3 = "a" > "b";
let Comparison4 = "1" < "a";
let Comparison5 = "2500" < "abcd";
let Comparison6 = "arne" !== "thomas";
let Comparison7 = 2 === 5;
let Comparison8 = "abcd" > "bcd";
printOut(`Is 5 greater than 3? = ${Comparison1}`);
printOut(`Is 7 greater than or equal to 7? = ${Comparison2}`);
printOut(`Is "a" greater than "b"? = ${Comparison3}`);
printOut(`Is "1" less than "a"? = ${Comparison4}`);
printOut(`Is "2500" less than "abcd"? = ${Comparison5}`);
printOut(`Is "arne" not equal to "thomas"? = ${Comparison6}`);
printOut(`Is 2 equal to 5? = ${Comparison7}`);
printOut(`Is "abcd" greater than "bcd"? = ${Comparison8}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let NumText1 = Number("254");
let NumText2 = Number("57.23");
let NumText3 = Number("25 kroner");
let IntText1 = parseInt("254");
let IntText2 = parseInt("57.23");
let IntText3 = parseInt("25 kroner");
let FloatText1 = parseFloat("254");
let FloatText2 = parseFloat("57.23");
let FloatText3 = parseFloat("25 kroner");
printOut({NumText1, NumText2, NumText3});
printOut({IntText1, IntText2, IntText3});
printOut({FloatText1, FloatText2, FloatText3});
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.ceil(Math.random() * 360) + 1;
printOut(`Random number between 1 and 360 : ${r}`);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here! */
let weeks = 131/7;
let days = 131%7;
printOut(`131 days = ${Math.floor(weeks)} weeks and ${days} days`);
printOut(newLine);