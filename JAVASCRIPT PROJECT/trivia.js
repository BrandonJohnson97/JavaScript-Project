const $ = selector => document.querySelector(selector);
let count = Math.floor(Math.random() * Questions.length)
let questionCount = 1;
let score = 0;


const startQuiz = () =>{
    window.location.href='triviaquestionpage1.html';
    //window.onload = nextQuestion;
    const username = $("#usersname").value;
    console.log(username);
    /*$("#username").innerHTML = username + "start the quiz!";*/
}

const nextQuestion = () =>{
    const allAnswers = document.querySelectorAll(".answers")
    for(answerColor in allAnswers){
        answerColor.style.color = "white";
}
    const answer = Questions[count].correctAnswer;
    document.getElementById("questioncounter").textContent = `Question ${questionCount}`;
    document.getElementById("questioninfo").textContent = Questions[count].question;
    document.getElementById("a").textContent = Questions[count].answers.a;
    document.getElementById("b").textContent = Questions[count].answers.b;
    document.getElementById("c").textContent = Questions[count].answers.c;
    document.getElementById("d").textContent = Questions[count].answers.d;
    count += 1;
    questionCount += 1;

}

const validateAnswerA = () =>{
    const allAnswers = document.getElementsByClassName('answers');
    if($("#a").textContent == Questions[count-1].correctAnswer){
        $("#a").style.backgroundColor = "#00cc00"
        score += 1
    } else{
        $("#a").style.backgroundColor = "#ff0000"
    }
}

const validateAnswerB = () =>{
    const allAnswers = document.getElementsByClassName('answers');
    if($("#b").textContent == Questions[count-1].correctAnswer){
        $("#b").style.backgroundColor = "#00cc00"
        score += 1
    } else{
        $("#b").style.backgroundColor = "#ff0000"
    }
}

const validateAnswerC = () =>{
    const allAnswers = document.getElementsByClassName('answers');
    if($("#c").v == Questions[count-1].correctAnswer){
        $("#c").style.backgroundColor = "#00cc00"
        score += 1
    } else{
        $("#c").style.backgroundColor = "#ff0000"
    }
}

const validateAnswerD = () =>{
    const allAnswers = document.getElementsByClassName('answers');
    if($("#d").textContent == Questions[count-1].correctAnswer){
        $("#d").style.backgroundColor = "#00cc00"
        score += 1
    } else{
        $("#d").style.backgroundColor = "#ff0000"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.onload = nextQuestion();
    //$("#start").addEventListener("click", startQuiz);
    $("#a").addEventListener("click", validateAnswerA);
    $("#b").addEventListener("click", validateAnswerB);
    $("#c").addEventListener("click", validateAnswerC);
    $("#d").addEventListener("click", validateAnswerD);
    $("#nextquestion").addEventListener("click", nextQuestion);
});