const quizData = [
    {
        question: 'What is the third plannet from the sun?',
        a: 'Mercury',
        b: 'Pluto',
        c: 'Uranus',
        d: 'Earth',
        correct: 'd',
    },
    {
        question:'What is the most used JS Framework of 2020?',
        a:'React',
        b:'Vue',
        c:'Angular',
        d:'Android',
        correct: 'b',
    },
    {
        question: 'What is the speed limit on German Autoban?',
        a:'70 km/h',
        b:'90 km/h',
        c:'140km/h',
        d:'there is no speed limit',
        correct:'d',
    },
    {
        question:'What was King Arthur mage name?',
        a:'Aurel',
        b:'Harry Potter',
        c:'Maria',
        d:'Merlin',
        correct:'d',
    },

];
const quiz = document.getElementById('quiz');
const answerEL = document.querySelectorAll('.answer');
const questionEl= document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
     
}

function getSelected(){
    let answer = undefined;

    answerEL.forEach((answerEL)=>{
        if(answerEL.checked){
            answer = answerEL.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEL.forEach((answerEL)=>{
        answerEL.checked = false;
    });
}
submitBn.addEventListener("click", ()=>{

    const answer = getSelected();
    if(answer){
        if(answer ===quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>Correct answers ${score}/${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`;

        }
    }

    
});