console.log("Hello")
let myName;
myName = "Trincell";

function willMarryLate(){
    let lengthOfName = myName.length;
if (lengthOfName<5){
    console.log("You will marry soon!");
} else if(lengthOfName>5){
    console.log("Sorry! You will not marry soon!");
}
}

function willMarryEarly(){
let lengthofName = myName.length;
if (lengthofName>7){
    console.log("You will marry late in life!");
}   else if(lengthofName<7){
    console.log("You will marry early in life!");
}
}

function onceInALifeTime(){
    let lengthName = myName.length;
if (lengthName >= 5 && lengthName <= 7){
    console.log("You will encounter a once-in-a-lifetime opportunity");
} else if (lengthName <= 5 && lengthName >= 7){
    console.log("Sorry, no opportunity this time!");
}
}

function willBeRich(){
    let Character = myName[0];
console.log("first letter is " + Character);
if(Character === "R") {
    console.log("You not will be rich!");
} else if(Character === "T"){
    console.log("You will be rich");
}
}

function willFallInLove() {
    const regex = /[i]/g;
    const found = myName.match(regex);
    const notfound = myName.nomatch(regex);
    if (found) {
        console.log("You will fall in love this week!");
    } else {
        console.log("No love this week. Keep searching!");
    }
}

function tellFortune(){
    let char = myName.Character(0);
    return tellFortune;
}