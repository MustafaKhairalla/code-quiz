var startBtn = document.getElementById("start-btn");
var qSection = document.getElementById("Q")
//counters
var questionsIndex = 0;
var counter = 0;
//preseting the questions vars
var qtitle = questions[questionsIndex].title;
var qChoices = questions[questionsIndex].choices[counter];
var qAnswer = questions[questionsIndex].answer;

var timeEl = document.getElementById("time");
var timer;

var game = 0;
var time = questions.length * 15;

var score = 0;
var scoreEl = document.getElementById("score");

var finalEl = document.getElementById("final");

startBtn.onclick = startQuiz;

function startQuiz(){
    startBtn.classList.add("hide");
    qSection.classList.remove("hide")
    startGame();
    setScore();
}

function startGame(){
    timer = setInterval(timerDown , 1000);
    timeEl.textContent = ("time ") + time;
    presentQuestions();
    
}

function presentQuestions(){
    var currentQ = questions[questionsIndex];
    var titleElement = document.getElementById("titleOfq");
    titleElement.textContent = currentQ.title;

    for(var i=0 ; i < questions[questionsIndex].choices.length ; i++){
        var answer = document.createElement("button");
        answer.setAttribute("class" , "btnChoice");
        answer.setAttribute("value" , questions[questionsIndex].choices[i]);
        answer.textContent = questions[questionsIndex].choices[i];
        answer.onclick = quesctionCheck();

        qSection.appendChild(answer);
        console.log(answer.textContent)
    }
}

function quesctionCheck(){
    if (this.value !== questions[questionsIndex].answer){
        time = time - 15;
    }else{
        score = score + 1;
    }

    questionsIndex ++;

    if(questionsIndex == questions.length){
        endgame();
    }else{
        quesctionCheck();
    }
}

function timerDown(){
    time--;
    timeEl.textContent = ("time ") + time;
}

function setScore(){
    scoreEl.textContent = ("score ") + score;
}

function endgame(){
    //qSection.classList.add("hide")
    var finalResult = document.createElement("h1");

}