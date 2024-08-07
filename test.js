let myName = "Trincell"

function tellFortune(myName) {
    const lengthOfName = myName.length;
    const firstLetter = myName[0].toUpperCase();

    if (lengthOfName < 5) {
        console.log("You will marry soon!");
        return true;
    } else if (lengthOfName > 7) {
        console.log("Sorry! You will not marry soon!");
        return false;
    } else {
        console.log("You will encounter a once-in-a-lifetime opportunity");
        console.log(`First letter of your name: ${firstLetter}`);
        if (firstLetter === "R") {
            console.log("You will not be rich!");
            return false;
        } else if (firstLetter === "T") {
            console.log("You will be rich");
            return true;
        } else {
            console.log("No love this week. Keep searching!");
            return false;
        }
    }
}
