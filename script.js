//All required elements
const start_btn=document.querySelector(".start_btn")
const info_box=document.querySelector(".info_box")
const exit_btn=info_box.querySelector(".buttons .quit")
const continue_btn=info_box.querySelector(".buttons .restart")
const topics_box=document.querySelector(".topics_box")
const back_btn=topics_box.querySelector(".buttons .back")
const next_btn_topics=topics_box.querySelector(".buttons .next")
const quiz_box=document.querySelector(".quiz_box")
const option_list=document.querySelector(".option_list")
const timeCount=quiz_box.querySelector('.timer .timer_sec')


//Start quiz button clicled
start_btn.onclick=()=>{
    info_box.classList.add("activeInfo") //show info box
}

//exit button clicked
exit_btn.onclick=()=>{
    info_box.classList.remove("activeInfo") //hide info box
}
continue_btn.onclick=()=>{
    info_box.classList.remove("activeInfo") //hide info box
    topics_box.classList.add("activesub") //hide info box
}

back_btn.onclick=()=>{
    topics_box.classList.remove("activesub")
    info_box.classList.add("activeInfo") //hide info box
}

//continue button clicked
next_btn_topics.onclick=()=>{
    topics_box.classList.remove("activesub") //hide info box
    quiz_box.classList.add("activeQuiz") //Show the quiz box
showQuestions(0)
queCounter(1)
startTimer(10)

}

let que_count=0;
let que_numb=1;
let counter
let timeValue=10
let userScore=0

const next_btn=quiz_box.querySelector(".next_btn")
const result_box=document.querySelector('.result_box')
const result_quiz=result_box.querySelector('.buttons .restart')
const quit_quiz=result_box.querySelector('.buttons .quit')


document.addEventListener("DOMContentLoaded", function () {
    const quizBox = document.querySelector(".quiz_box");
    const loadingScreen = document.querySelector(".loading-screen");
    const countdownElement = document.getElementById("countdown");
    let count = 3;
  
    function startCountdown() {
      if (count > 0) {
        countdownElement.textContent = count;
        count--;
        setTimeout(startCountdown, 1000);
      } else {
        // Oculta la pantalla de carga y muestra el quiz
        loadingScreen.style.opacity = 0;
        loadingScreen.style.pointerEvents = "none";
        quizBox.style.opacity = 1;
        quizBox.style.pointerEvents = "auto";
      }
    }
  
    next_btn_topics.addEventListener("click", function () {
      // Muestra la pantalla de carga y comienza el contador al hacer clic en "Next"
      loadingScreen.style.opacity = 1;
      loadingScreen.style.pointerEvents = "auto";
      startCountdown();
    });
  });
  
  
  


result_quiz.onclick=()=>
{
    result_box.classList.remove("activeResult")
    quiz_box.classList.add("activeQuiz")
    
    let que_count=0;
let que_numb=1;
let timeValue=10
let userScore=0
showQuestions(que_count)
    queCounter(que_numb)
    clearInterval(counter)
    startTimer(timeValue)
    next_btn.style.display='none'
}

quit_quiz.onclick=()=>
{
    window.location.reload()
}

//Next button click
next_btn.onclick=()=>{
    if(que_count<questions.length-1){
        que_count++
        que_numb++
    showQuestions(que_count)
    queCounter(que_numb)
    clearInterval(counter)
    startTimer(timeValue)
    next_btn.style.display='none'
    }else{
        console.log("que completed")
        showResultBox()
    }
}

//geting questions and options from array
function showQuestions(index){
    const que_text=document.querySelector(".que_text")
    let que_tag=`<span>${questions[index].numb} . ${questions[index].question}</span>`;
    let option_tag=`<div class="option"><span>${questions[index].options[0]}</span></div>`+
    `<div class="option"><span>${questions[index].options[1]}</span></div>`+
    `<div class="option"><span>${questions[index].options[2]}</span></div>`+
    `<div class="option"><span>${questions[index].options[3]}</span></div>`;
que_text.innerHTML=que_tag;
option_list.innerHTML=option_tag;

const option=option_list.querySelectorAll('.option')
for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
    
}
}

let tickIcon=`<div class="icon tick"><i class="fa-solid fa-check"></i></div>`
let crossIcon=`<div class="icon cross"><i class="fa fa-times" ></i></div>`


function optionSelected(answer){
    clearInterval(counter)
    let userAns=answer.textContent;
    let correctAns=questions[que_count].answer;
    let allOptions=option_list.children.length
    if(userAns==correctAns){
        userScore+=1
        console.log(userScore)
        answer.classList.add('correct')
    console.log("correct")
    answer.insertAdjacentHTML('beforeend',tickIcon)
    }
    else{
        answer.classList.add('incorrect')
        console.log("wrong")
        answer.insertAdjacentHTML('beforeend',crossIcon)
    }


    //if answer is incorrect then automatically select correct
    for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent==correctAns){
            option_list.children[i].setAttribute("class", "option correct");

        }
        
    }


    //once user selected disabled all option
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled')
        
    }
    next_btn.style.display='block'
}

function showResultBox(){
    info_box.classList.remove("activeInfo") //hide info box
    quiz_box.classList.remove("activeQuiz") //hide the quiz box
    result_box.classList.add("activeResult") //show the result box
const scoreText=result_box.querySelector(".score_text")
if(userScore>3){
    let scoreTag=`<span>congrats!,you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
scoreText.innerHTML=scoreTag
}
else if(userScore>1){
    let scoreTag=`<span>nice,you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
scoreText.innerHTML=scoreTag
}else {
    let scoreTag=`<span>Sorry,you got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
scoreText.innerHTML=scoreTag
}
}




function startTimer(time){
    counter=setInterval(timer,1000);
    function timer(){
timeCount.textContent=time
time--
if(time<9){
    let addZero=timeCount.textContent
    timeCount.textContent="0"+addZero
}
if(time<0){
    clearInterval(counter)
    timeCount.textContent="00"

    let correctAns=questions[que_count].answer;
    let allOptions=option_list.children.length

    for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent==correctAns){
            option_list.children[i].setAttribute("class", "option correct");

        }
        
    }


    
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled')
        
    }
    next_btn.style.display='block'
}
    }
}



function queCounter(index){
    
const bottom_ques_counter= quiz_box.querySelector(".total_que")
let totalQuesCounting=`<span><p>${index}</p> of <p>${questions.length}</p> questions</span>`

bottom_ques_counter.innerHTML=totalQuesCounting
}


const descriptionBox = document.querySelector(".description_box");
const topicsBox = document.querySelector(".topics_box");

const topicDescriptions = {
    subtema1: "Descripción de Information Questions.",
    subtema2: "Descripción de Indirect questions.",
    subtema3: "Descripción de Simple Past.",
    subtema4: "Descripción de Simple Present and Present Continuous.",
    subtema5: "Descripción de Present Perfect with ever, never, for, and since.",
    subtema6: "Descripción de Present Perfect with already and yet."
};

document.getElementById("subtema1").addEventListener("click", function () {
    updateDescription("subtema1");
});

document.getElementById("subtema2").addEventListener("click", function () {
    updateDescription("subtema2");
});

document.getElementById("subtema3").addEventListener("click", function () {
    updateDescription("subtema3");
});

document.getElementById("subtema4").addEventListener("click", function () {
    updateDescription("subtema4");
});

document.getElementById("subtema5").addEventListener("click", function () {
    updateDescription("subtema5");
});

document.getElementById("subtema6").addEventListener("click", function () {
    updateDescription("subtema6");
});

function updateDescription(subtema) {
    // Verifica si hay una descripción disponible para el subtema
    if (topicDescriptions[subtema] !== undefined) {
        // Actualiza la descripción_box con la descripción del subtema
        descriptionBox.querySelector(".description_title span").textContent = topicDescriptions[subtema];
        // Muestra la description_box
        descriptionBox.classList.add("activeDescription");

        // Oculta la topics_box
        topicsBox.classList.remove("activesub");
    } else {
        console.error(`No se encontró una descripción para ${subtema}.`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // ... (tu código existente)

    // Agregar eventos de clic para los botones "back" y "next" en description_box
    const descriptionBox = document.querySelector(".description_box");
    const backBtnDescription = descriptionBox.querySelector(".buttons .back_d");
    const nextBtnDescription = descriptionBox.querySelector(".buttons .next_d");

    backBtnDescription.onclick = () => {
        // Oculta la description_box y muestra la topics_box
        descriptionBox.classList.remove("activeDescription");
        topics_box.classList.add("activesub");
    };

    nextBtnDescription.onclick = () => {
        // Inicializa el quiz
        descriptionBox.classList.remove("activeDescription");
        quiz_box.classList.add("activeQuiz");
        showQuestions(0);
        queCounter(1);
        startTimer(10);
    };
});
