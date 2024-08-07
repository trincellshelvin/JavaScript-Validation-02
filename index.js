// Name contains an 'i': "will fall in love this week"

let myName;
myName = "Trin";
let lengthOfName = myName.length;
if (lengthOfName<5){
    console.log("You will marry soon!")
}

myName = "Trincell";
let lengthofName = myName.length;
if (lengthofName>7){
    console.log("You will marry late in life!")
}

myName = "Trincel";
let lengthName = myName.length;
if (lengthName >= 5 && lengthOfName <= 7){
    console.log("You will encounter a once-in-a-lifetime opportunity")
}

let Character = myName[0];
console.log("first letter is " + Character);
if(Character === "T") {
    console.log("You will be rich!")
}