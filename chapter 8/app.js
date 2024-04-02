/******************************question 1***************************************/
let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log(input + " is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log(input + " is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log(input + " is a lowercase letter.");
} else {
    console.log(input + " is not a number, uppercase letter, or lowercase letter.");
}

/******************************question 2***************************************/
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === num2) {
    console.log("The two integers are equal.");
} else {
    let larger;
    if (num1 > num2) {
        larger = num1;
    } else {
        larger = num2;
    }
    console.log("The larger integer is: " + larger);
}

/******************************question 3***************************************/
let number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    console.log("The number entered is positive.");
} else if (number < 0) {
    console.log("The number entered is negative.");
} else {
    console.log("The number entered is zero.");
}

/******************************question 4***************************************/
function isVowel(char) {
    char = char.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    } else {
        return false;
    }
}
let character = prompt("Enter a character:");
let result = isVowel(character);
if (result) {
    console.log("'" + character + "' is a vowel.");
} else {
    console.log("'" + character + "' is not a vowel.");
}

/******************************question 5***************************************/
let correctPassword = "password123";
let userPassword = prompt("Enter your password:");
if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

/******************************question 6***************************************/
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

/******************************question 7***************************************/
let time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time format.");
}