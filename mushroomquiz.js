var motherElement = document.getElementById("quiz-section");
var startButton = document.getElementById("start-button");
var question1 = document.getElementById("question-1")
var question2 = document.getElementById("question-2")
var question3 = document.getElementById("question-3")
var question4 = document.getElementById("question-4")
var question5 = document.getElementById("question-5")
var answer1 = document.getElementById("answer-1")
var answer2 = document.getElementById("answer-2")
var answer3 = document.getElementById("answer-3")
var answer4 = document.getElementById("answer-4")
var answer5 = document.getElementById("answer-5")
var questionButton1 = document.querySelectorAll(".button1")
var questionButton2 = document.querySelectorAll(".button2")
var questionButton3 = document.querySelectorAll(".button3")
var questionButton4 = document.querySelectorAll(".button4")
var questionButton5 = document.querySelectorAll(".button5")
var nextQuestion1 =  document.getElementById("next-question1")
var nextQuestion2 =  document.getElementById("next-question2")
var nextQuestion3 =  document.getElementById("next-question3")
var nextQuestion4 =  document.getElementById("next-question4")
var finished = document.getElementById("finished-1")

answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";
answer4.style.display = "none";
answer5.style.display = "none";
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";


startButton.addEventListener("click", function(){
    motherElement.replaceChildren(question1);
    question1.style.display = "block";
})

questionButton1[0].addEventListener("click", function(){
    motherElement.replaceChildren(answer1);
    answer1.style.display = "block";
})

questionButton1[1].addEventListener("click", function(){
    motherElement.replaceChildren(answer1);
    answer1.style.display = "block";
})

questionButton1[2].addEventListener("click", function(){
    motherElement.replaceChildren(answer1);
    answer1.style.display = "block";
})

nextQuestion1.addEventListener("click", function(){
    motherElement.replaceChildren(question2);
    question2.style.display = "block";
})

questionButton2[0].addEventListener("click", function(){
    motherElement.replaceChildren(answer2);
    answer2.style.display = "block";
})

questionButton2[1].addEventListener("click", function(){
    motherElement.replaceChildren(answer2);
    answer2.style.display = "block";
})

nextQuestion2.addEventListener("click", function(){
    motherElement.replaceChildren(question3);
    question3.style.display = "block";
})

questionButton3[0].addEventListener("click", function(){
    motherElement.replaceChildren(answer3);
    answer3.style.display = "block";
})

questionButton3[1].addEventListener("click", function(){
    motherElement.replaceChildren(answer3);
    answer3.style.display = "block";
})

questionButton3[2].addEventListener("click", function(){
    motherElement.replaceChildren(answer3);
    answer3.style.display = "block";
})

questionButton3[3].addEventListener("click", function(){
    motherElement.replaceChildren(answer3);
    answer3.style.display = "block";
})

nextQuestion3.addEventListener("click", function(){
    motherElement.replaceChildren(question4);
    question4.style.display = "block";
})

questionButton4[0].addEventListener("click", function(){
    motherElement.replaceChildren(answer4);
    answer4.style.display = "block";
})
questionButton4[1].addEventListener("click", function(){
    motherElement.replaceChildren(answer4);
    answer4.style.display = "block";
})

nextQuestion4.addEventListener("click", function(){
    motherElement.replaceChildren(question5);
    question5.style.display = "block";
})

questionButton5[0].addEventListener("click", function(){
    motherElement.replaceChildren(answer5);
    answer5.style.display = "block";
})

questionButton5[1].addEventListener("click", function(){
    motherElement.replaceChildren(answer5);
    answer5.style.display = "block";
})

questionButton5[2].addEventListener("click", function(){
    motherElement.replaceChildren(answer5);
    answer5.style.display = "block";
})

questionButton5[3].addEventListener("click", function(){
    motherElement.replaceChildren(answer5);
    answer5.style.display = "block";
})

finished.addEventListener("click", function(){
    motherElement.replaceChildren(startButton);
    startButton.style.display = "block";
})




