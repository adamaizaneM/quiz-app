// Array to store quiz questions and answers
const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyperlinks and Text Markup Language",
        b: "Hyper Text Markup Language",
        c: "Home Tool Markup Language",
        d: "Hyperlinking Text Markup Language",
        correct: "b"
    },
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        a: "<script src='app.js'>",
        b: "<script href='app.js'>",
        c: "<script ref='app.js'>",
        d: "<script name='app.js'>",
        correct: "a"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        a: "Laravel",
        b: "Django",
        c: "React",
        d: "Ruby on Rails",
        correct: "c"
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "var carName;",
        b: "variable carName;",
        c: "v carName;",
        d: "carName = var;",
        correct: "a"
    },
    // Additional Questions
    {
        question: "Which company developed JavaScript?",
        a: "Microsoft",
        b: "Netscape",
        c: "Apple",
        d: "IBM",
        correct: "b"
    },
    {
        question: "What does CSS stand for?",
        a: "Creative Style Sheets",
        b: "Colorful Style Sheets",
        c: "Computer Style Sheets",
        d: "Cascading Style Sheets",
        correct: "d"
    },
    {
        question: "What HTML tag is used to display a picture?",
        a: "<picture>",
        b: "<image>",
        c: "<img>",
        d: "<src>",
        correct: "c"
    },
    {
        question: "What year was the World Wide Web invented?",
        a: "1989",
        b: "1991",
        c: "1985",
        d: "1990",
        correct: "a"
    },
    {
        question: "Which HTML element is used for the largest heading?",
        a: "<head>",
        b: "<h6>",
        c: "<h1>",
        d: "<heading>",
        correct: "c"
    },
    {
        question: "What is the purpose of CSS?",
        a: "To create web apps",
        b: "To store data",
        c: "To design web pages",
        d: "To manipulate data",
        correct: "c"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<break>",
        c: "<lb>",
        d: "<linebreak>",
        correct: "a"
    },
    {
        question: "Which symbol is used in jQuery to start a selector?",
        a: "$",
        b: "&",
        c: "!",
        d: "@",
        correct: "a"
    },
    {
        question: "What is the correct way to comment out code in HTML?",
        a: "<!-- Comment -->",
        b: "// Comment",
        c: "/* Comment */",
        d: "` Comment `",
        correct: "a"
    },
    {
        question: "Which attribute specifies a link's target URL?",
        a: "src",
        b: "href",
        c: "style",
        d: "class",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBTN = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBTN.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>`;
        }
    }
});
