const $ = selector => document.querySelector(selector);
//var count = Math.floor(Math.random() * Questions.length)
var count = 0;0
let questionCount = 1;
var score = 0;


const startQuiz = () =>{
    window.location.href='triviaquestionpage1.html';
    //window.onload = nextQuestion;
    // const username = $("#usersname").value;
    // console.log(username);
    /*$("#username").innerHTML = username + "start the quiz!";*/
}

const nextQuestion = () =>{
    if(count <= Questions.length){
        document.getElementById("nextquestion").innerText = "NEXT QUESTION";
        document.getElementById("questioncounter").textContent = `Question ${questionCount} / ${Questions.length}`;
        document.getElementById("questioninfo").textContent = Questions[count].question;
        document.getElementById("a").textContent = Questions[count].answers.a;
        document.getElementById("b").textContent = Questions[count].answers.b;
        document.getElementById("c").textContent = Questions[count].answers.c;
        document.getElementById("d").textContent = Questions[count].answers.d;
        count += 1;
        questionCount += 1;
    }
}

const validateAnswers = evt =>{
    let clicked = evt.currentTarget.id;
    if(document.getElementById(clicked).textContent == Questions[count - 1].correctAnswer){
        document.getElementById(clicked).style.backgroundColor = "#00cc00"
        score += 1
    } else{
        document.getElementById(clicked).style.backgroundColor = "#ff0000"
    }

    if(document.getElementById(clicked).textContent == Questions[count - 1].correctAnswer){
        document.getElementById(clicked).style.backgroundColor = "#00cc00"
        score += 1
    } else{
        document.getElementById(clicked).style.backgroundColor = "#ff0000"
    }

    if(document.getElementById(clicked).textContent == Questions[count - 1].correctAnswer){
        document.getElementById(clicked).style.backgroundColor = "#00cc00"
        score += 1
    } else{
        document.getElementById(clicked).style.backgroundColor = "#ff0000"
    }

    if(document.getElementById(clicked).textContent == Questions[count - 1].correctAnswer){
        document.getElementById(clicked).style.backgroundColor = "#00cc00"
        score += 1
    } else{
        document.getElementById(clicked).style.backgroundColor = "#ff0000"
    }
}

const buttonColor = () => {
    const allAnswers = document.getElementsByClassName("answers");
    for(let i = 0; i < allAnswers.length; i++){
        allAnswers[i].style.backgroundColor = "white";
    }
}

const displayPage = () => {
    const resultsH1 = $("#quizresults").textContent;
    const percentage = $("#percent").textContent;

    resultsH1 = `You got ${score} out of ${Questions.length} correct!`;

    percentage = `${score*10}%`;
}

document.addEventListener("DOMContentLoaded", () => {
    for(button of document.getElementsByClassName('answers')){
        button.addEventListener("click", validateAnswers);
    }
    //window.onload = nextQuestion();
    // //$("#start").addEventListener("click", startQuiz);
    $("#nextquestion").addEventListener("click", () =>{
        buttonColor();
        nextQuestion();
    });
    // $("#submit").addEventListener("click", () =>{
    //     window.location.href= 'displayscorepage.html';

    //     displayPage();
    // })
});