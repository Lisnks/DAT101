"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!
*/
let wakeUpTime = 9;
printOut("Wake up time = " + wakeUpTime);

if (wakeUpTime === 7) {
    printOut("I can catch the bus to school.");
} else if (wakeUpTime === 8) {
    printOut("I can take the train to school.");
} else {
    printOut("I have to take the car to school.");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 0;

if (number > 0) {
    printOut(number + " is a positive number.");
} else if (number < 0) {
    printOut(number + " is a negative number.");
} else {
    printOut(number + " is Zero.")
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageMinimum = 4;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Users image size = ${imageUserSize}`);
if (imageUserSize >= imageMinimum) {
    printOut("thank you");
} else {
    printOut("image size is too small");

}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const imageSizeMinimum = 4;
const imageSizeMaximum = 6;
const imageUserSize2 = Math.floor(Math.random() * 8) + 1;
printOut(`Users image size = ${imageUserSize2}`);
if (imageUserSize2 >= imageSizeMinimum) {
    if (imageUserSize2 <= imageSizeMaximum) {
        printOut("thank you for using the correct image size.");
    } else {
        printOut("Image size is too large.");
    }
} else {
    printOut("image size is too small.");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "Mai", "June", "juli", "August", "September", "october", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("the month is: " + monthName);
if (monthName.includes(`r`)) {
    printOut("you must take vitamin D");
} else {
    printOut("you do not need to take vitamin D ")
}


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
switch (monthName) 
{
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        printOut("there are 31 days in the month " + monthName);
        break;
    case "February":
        printOut("there are 28 days in the month " + monthName);
    default:
        printOut("there are 30 days in the month " + monthName);
}

printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if(monthName === "March" || monthName === "May"){
    printOut("Sorry, Gallery is temporarily closed do to refurbishing in " + monthName);
}else if(monthName === "April"){
    printOut("Main Gallery is closed for refurbishing in " + monthName + ", you are welcome into the temporary premises in the building next door");
}else{
    printOut("The Gallery is open in " + monthName+ " Welcome In!");
}
printOut(newLine);
