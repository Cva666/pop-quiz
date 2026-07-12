let score = 0;

// Question one

let Q1 = prompt("What is the suare root of 144?\nA) 13\nB) 12");
let q1 = document.getElementById("q1");
if (Q1 !== null && Q1.trim().toLowerCase() === "b") {
  score++;
  q1.innerText = "What is the square root 144? B.) 12";
} else if (Q1 !== null && Q1.trim().toLowerCase() === "a") {
  q1.innerText = "What is the square root 144? A.) 13";
} else {
  alert("Please input a valid response.");
}

// Question 2
let Q2 = prompt("what is 5 minus 12?\nA) 7\nB) -7");
let q2 = document.getElementById("q2");
if (Q2 !== null && Q2.trim().toLowerCase() === "b") {
  score++;
  q2.innerText = "what is 5 minus 12? B.) -7";
} else if (Q2 !== null && Q2.trim().toLowerCase() === "a") {
  q2.innerText = "what is 5 minus 12? A.) 7";
} else {
  alert("Please input a valid response.");
}

// question 3

let Q3 = prompt("What is 7 X 4?\nA.) 28/nB.)14");
let q3 = document.getElementById("q3");
if (Q3 !== null && Q3.trim().toLowerCase() === "a") {
  q3.innerText = "What is 7 X 4? A.) 28";
  score++;
} else if (Q3 !== null && Q3.trim().toLowerCase() === "b") {
  q3.innerText = "What is 7 X 4? B.) 14";
} else {
  alert("Please input a valid response.");
}

// Submit button
const scoreTotal = document.getElementById("total");
const submit = document.getElementById("subBtn");

submit.addEventListener("click", function () {
  scoreTotal.innerText = score;
  if (score === 3) {
    alert("Congratz on all being correct!!!");
  } else if (score === 2) {
    alert("Almost got 2 right! try again");
  } else if (score === 1) {
    alert("you got one right. try again");
  } else {
    alert("Try again! 0 right.");
  }
});
