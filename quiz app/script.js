const quizData = [
    {
        question: 'What is 2+2?',
        a: '6',
        b: '5',
        c: '4',
        d: '22',
        correct: 'c'
    }, {
        question: 'What is capital of india?',
        a: 'Mumbai',
        b: 'Delhi',
        c: 'Goa',
        d: 'Hyderabad',
        correct: 'b'
    }, {
        question: 'Where does the sun rise?',
        a: 'west',
        b: 'south',
        c: 'north',
        d: 'east',
        correct: 'd'
    }, {
        question: 'How many planets in solar system?',
        a: '8',
        b: '9',
        c: '7',
        d: '10',
        correct: 'a'
    }
]

const answersEls = document.querySelectorAll(".answer");
const quizel = document.getElementById("quiz");
const questionel = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz= 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionel.innerText= currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    return answer;
}


function deselectAnswer() {

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if(answer){
        if(answer == quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;  
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else {
            quizel.innerHTML = `<h1>You correctly answered ${score}/${quizData.length} questions.</h1>
                                    <button onclick="location.reload()">Reload</button?>`;
        }
    }
});