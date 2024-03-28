// Question 1

let city = document.querySelector("#usercity");
let userprint = document.querySelector("#usercity_print");
let first_button = document.querySelector("#citycheck");

first_button.addEventListener("click", () => {
  let user_city = city.value;

  if (user_city) {
    userprint.innerHTML = "Welcome to " + user_city;
  } else {
    userprint.innerHTML = "Enter Your Correct City Name";
  }
});

// Question 2
let gender = document.querySelector("#gender");
let gender_print = document.querySelector("#usergender");
let second_button = document.querySelector("#gendercheck");

second_button.addEventListener("click", () => {
  let user_gender = gender.value;
  console.log(user_gender);

  if (user_gender === "male") {
    gender_print.innerHTML = "Good Morning Sir";
  } else {
    gender_print.innerHTML = "Good Morning Mam ";
  }
});

// Question 3
let signalcolor = document.querySelector("#signal");
let redsignal = document.querySelector("#red-signal");
let yellowsignal = document.querySelector("#yellow-signal");
let greensignal = document.querySelector("#green-signal");
let third_button = document.querySelector("#signalcheck");

third_button.addEventListener("click", () => {
  let user_signalcolor = signalcolor.value;
  console.log(user_signalcolor);

  if (user_signalcolor == "red" || user_signalcolor == "Red") {
    redsignal.innerHTML = "Must Stop";
  } else if (user_signalcolor == "yellow" || user_signalcolor == "Yellow") {
    yellowsignal.innerHTML = "Ready to Move";
  } else if (user_signalcolor == "green" || user_signalcolor == "Green") {
    greensignal.innerHTML = "Move Now";
  } else {
    alert("Not Signal Color");
  }
});

// Question 4
let fuel = document.querySelector("#fuel");
let print_fuel = document.querySelector("#fuelprint");
let fuelcheck = document.querySelector("#fuelcheck");

fuelcheck.addEventListener("click", () => {
  let user_fuel = Number(fuel.value);
  console.log(user_signalcolor);

  if (user_fuel < 0.25) {
    print_fuel.innerHTML = "Please refill the fuel";
  } else {
    print_fuel.innerHTML = "Fuel hai";
  }
});

// Question 5
//a
let a = 5;
if (++a === 6) {
  alert("Given Condition for variable a is true");
} else {
  alert("Given Condition for variable a is false");
}

//b
let b = 82;
if (b++ === 83) {
  alert("Given Condition for variable b is true");
} else {
  alert("Given Condition for variable b is false");
}

//c
let c = 12;
if (c++ === 13) {
  alert("Condition 1 is true");
}
if (c === 13) {
  alert("Condition 2 is true");
}
if (++c < 14) {
  alert("Condition 3 is true");
}
if (c === 14) {
  alert("Condition 4 is true");
}

//d
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if ((totalCost = materialCost + laborCost)) {
  alert("The Cost Equals");
}

//e
if (true) {
  alert("True");
}
if (false) {
  alert(false);
}

//f
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// Question 6
let physics = document.querySelector("#physics");
let math = document.querySelector("#math");
let computer = document.querySelector("#computer");
let percentage_print = document.querySelector("#printpercentage");
let grade_print = document.querySelector("#gradepercentage");
let remarks_print = document.querySelector("#remarkspercentage");
let result_check = document.querySelector("#resultcheck");

result_check.addEventListener("click", () => {
  let user_physics = Number(physics.value);
  if (user_physics > 100) {
    alert("Not Allow because Physics Total Marks is 100");
  }

  let user_math = Number(math.value);
  if (user_math > 100) {
    alert("Not Allow because Math Total Marks is 100");
  }

  let user_computer = Number(computer.value);
  if (user_computer > 100) {
    alert("Not Allow because Computer Total Marks is 100");
  }

  let obtain_marks = Number(user_physics + user_math + user_computer);
  let total_marks = 300;
  let percentage = (obtain_marks / total_marks) * 100;

  if (percentage >= 80) {
    percentage_print.innerHTML = percentage;
    grade_print.innerHTML = " Congratulation ! Your Grade is A+";
    remarks_print.innerHTML = "Excellent";
  } else if (percentage >= 70) {
    percentage_print.innerHTML = percentage;
    grade_print.innerHTML = " Congratulation ! Your Grade is A";
    remarks_print.innerHTML = "Good";
  } else if (percentage >= 60) {
    percentage_print.innerHTML = percentage;
    grade_print.innerHTML = " Your Grade is B";
    remarks_print.innerHTML = "You need to improve";
  } else if (percentage >= 50) {
    percentage_print.innerHTML = percentage;
    grade_print.innerHTML = " Your Grade is C";
    remarks_print.innerHTML = "You need to improve";
  } else {
    percentage_print.innerHTML = percentage;
    grade_print.innerHTML = " You are Fail";
    remarks_print.innerHTML = "Sorry";
  }
});
