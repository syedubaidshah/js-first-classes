// Question 1
let number = 10;
document.write("The result value of a is: " + number + "<br/><br/>");

++number;
document.write("The value of ++a is: " + number + "<br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

number++;
document.write("The value of a++ is: 11 <br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

--number;
document.write("The value of --a is: " + number + "<br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

number--;
document.write("The value of a-- is: 11 <br/>");
document.write("Now the value of a is: " + number + "<br/><br/>");

// Question 2
let a = 2;
let b = 1;
--a;
--a - --b;
--a - --b + ++b;
document.write("a is = " + a + "<br/>");
document.write("b is = " + b + "<br/>");

// Question 3
let name = document.querySelector("#name");
let user_message = document.querySelector("#message");
let button = document.querySelector("#button1");

button.addEventListener("click", () => {
  let user_name = name.value;
  console.log(user_name);

  if (user_name) {
    user_message.innerHTML = user_name;
    console.log(user_name);
  } else {
    user_message.innerText = "Please Enter Your Correct Name";
  }
});

// Question 4,5
let table = document.querySelector("#table");
let print_table = document.querySelector("#table_print");
let button2 = document.querySelector("#button2");

button2.addEventListener("click", () => {
  let user_table = table.value;
  for (let i = 1; i <= 10; i++) {
    print_table.innerHTML +=
      user_table +
      " " +
      "x" +
      " " +
      i +
      " " +
      "=" +
      " " +
      user_table * i +
      "<br/>";
  }
});

// Question 6
let physics = document.querySelector("#physics");
let math = document.querySelector("#math");
let computer = document.querySelector("#computer");
let mark_print = document.querySelector("#marks_print");
let button3 = document.querySelector("#button3");

button3.addEventListener("click", () => {
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
    mark_print.innerHTML = percentage + " Congratulation ! Your Grade is A+";
  } else if (percentage >= 70) {
    mark_print.innerHTML = percentage + " Congratulation ! Your Grade is A";
  } else if (percentage >= 60) {
    mark_print.innerHTML = percentage + " Your Grade is B";
  } else if (percentage >= 50) {
    mark_print.innerHTML = percentage + " Your Grade is C";
  } else {
    mark_print.innerHTML = percentage + " Sorry You are Fail";
  }
});
