const quizData = [
    {
        question: "It is not nessesary to say Please and Thank You when Talking to People",
        a: "True",
        b: "False",
        c: "Who Knows?",
        d: "None of the Above",

        correct: "b",
    },
    {
        question: "What is the right thing to do when a national anthem plays at an event?",
        a: "Talk to other",
        b: "Do Nothing",
        c: "Stay seated and be quiet",
        d: "Remove your at and stand with others",
        correct: "d",
    },
    {
        question: "You're over at a friend's house for dinner and are served a dish you've never had or seen before. What do you do?",
        a: "Make a pouty face and play with the food",
        b: "Wait until people dont notice and give it to the family dog",
        c: "Be grateful and give the food a chance",
        d: "None of the above",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})