// 1. 04/20/2024 15:45:30
let myTime1 = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MM/dd/yyy HH:mm:ss");
console.log(myTime1);

// 2. Thu 20/4/2024 13.45
let myTime2 = dateFns.format(new Date(2024, 3, 20, 13, 45), "E dd/M/yyyy HH.mm");
console.log(myTime2);

// 3. 2024-04-20 3:45 Thursday
let myTime3 = dateFns.format(new Date(2024, 3, 20, 3, 45), "yyy-MM-dd H:mm EEEE");
console.log(myTime3);


// 4. April 20th, 2024 01.45.30 PM
let myTime4 = dateFns.format(new Date(2024, 3, 20, 13, 45, 30), "MMMM do, yyy hh.mm.ss a");
console.log(myTime4);

// 5. 20 April 2024 at 01:45 PM
let myTime5 = dateFns.format(new Date(2024, 3, 20, 13, 45), "dd MMMM yyy 'at' hh:mm a");
console.log(myTime5);