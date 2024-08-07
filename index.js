// name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime oppurtunity"
// first letter is 'R': "will be rich" https://www.w3schools.com/jsref/jsref_charat.asp
// Name contains an 'i': "will fall in love this week"

let myName;
myName = "Trin";
let lengthOfName = myName.length;
if (lengthOfName<5){
    console.log("You will marry soon!")
}

let name;
name = "Trincell";
let lengthofName = name.length;
if (lengthofName>7){
    console.log("You will marry late in life!")
}

let Name = "Trincel";
let lengthName = Name.length;
if (lengthName >= 5 && lengthName <= 7){
    console.log("You will encounter a once-in-a-lifetime opportunity")
}