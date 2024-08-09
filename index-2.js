function willFallInLove(myName) {
    let x = myName.includes("i");
    if(x){
        return true;
    } else {
        return false;
    }
}
function willMarryLate(myName){
    let a = myName > 7;
    if(a){
        return true;
    } else{
        return false;
    }
}
function willMarryEarly(myName){
    let b = myName < 5;
    if(b){
        return true;
    } else{
        return false;
    }
}
function willBeRich(myName){
    let text = myName;
    let letter = text.charAt(0);
    if(letter === "R"){
        return true;
    } else{
        return false;
    }
}
function onceInALifeTime(myName){
    let c = myName.length
    if(c > 5 && c < 7){
        return true
    }else{
        return false
    }
}

function tellaFortune(myName){
    let n = willMarryLate(myName);
    if(n){
        console.log(`${myName} You will marry late...`);
    } else{
        console.log(`${myName} You will not marry late...`);
    }
    
    let m = willFallInLove(myName);
    if(m){
        console.log(`${myName}You will meet a mysterious stranger before the week is over.`);
    }else{
        console.log(`${myName} you will not meet a mysterious stranger before the week is over`);
    }
    
    let o = willMarryEarly(myName);
    if(o){
        console.log(`${myName} you will marry within a year!`)
    } else{
        console.log(`${myName} you will not marry within a year!`)
    }
    
    let p = willBeRich(myName);
    if(p){
        console.log(`${myName} you will be rich!`)
    } else{
        console.log(`${myName} you will not be rich`)
    }

    let q = onceInALifeTime(myName);
    if(q){
        console.log(`${myName} you will encounter a once-in-a-lifetime opportunity`)
    }else{
        console.log(`${myName} you will not have an opportunity!`)
    }
}

let myName = "";
myName1 = "Trincell";
myName2 = "Sophia";
myName3 = "Bob";
myName4 = "Joe";
myName5 = "Robert";
myName6 = "Briana";
myName7 = "Floshade";

tellaFortune(myName1);
tellaFortune(myName2);
tellaFortune(myName3);
tellaFortune(myName4);
tellaFortune(myName5);
tellaFortune(myName6);
tellaFortune(myName7);


