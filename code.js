// helloWorld function 
/*function helloWorld() {
    return "Hello, World!";
}*/

const helloWorld = function () {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === true || input === false || input === "") {
        return helloWorld();
    } else if (input === null) {
        return "Hello, null?";
    } else if (typeof input === "number") {
        return "Your name is a number?";
    }
    else {
        return `Hello, ${input}!`;
    }
}

function isFive(input) {
    if (input === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(input){
    if (typeof input === "number") {
        if (input % 2 === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function isVowel(input) {
    if (input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U' || input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
        return true;
    } else {
        return false;
    }
}