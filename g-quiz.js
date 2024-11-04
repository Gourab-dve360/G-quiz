const categories = {
    "Pipes and Cisterns": [
        { question: "What is the ratio of two pipes?", options: ["A", "B", "C", "D"], answer: 0 },
        { question: "If Pipe A fills in 10 hours, B in 15, together?", options: ["6 hours", "8 hours", "5 hours", "7 hours"], answer: 0 },
        { question: "Probability of drawing a red card?", options: ["1/2", "1/4", "1/13", "1/3"], answer: 0 },
        { question: "Getting a Heads or Tails?", options: ["1/2", "1", "1/3", "1/4"], answer: 1 },
        { question: "Probability of picking 2 at random?", options: ["1/10", "1/5", "1/6", "1/8"], answer: 2 },
        { question: "Any face card chosen is?", options: ["1/4", "1/6", "1/13", "1/3"], answer: 2 },
        { question: "Ace drawn from deck?", options: ["1/6", "1/3", "1/4", "1/13"], answer: 3 },
        { question: "2 dice rolled, total 7?", options: ["1/3", "1/6", "1/5", "1/8"], answer: 2 },
        { question: "Choosing heart from deck?", options: ["1/4", "1/13", "1/2", "1/3"], answer: 0 },
        { question: "Probability of even number roll?", options: ["1/2", "1/3", "1/4", "1/6"], answer: 0 },
        /* More sample questions */
    ],
    "Probability": [
        { question: "Probability of rolling a 1?", options: ["1/6", "1/2", "1/3", "1/4"], answer: 0 },
        { question: "Probability of drawing an Ace?", options: ["1/52", "1/13", "1/26", "1/39"], answer: 1 },
        { question: "Probability of drawing a red card?", options: ["1/2", "1/4", "1/13", "1/3"], answer: 0 },
        { question: "Getting a Heads or Tails?", options: ["1/2", "1", "1/3", "1/4"], answer: 1 },
        { question: "Probability of picking 2 at random?", options: ["1/10", "1/5", "1/6", "1/8"], answer: 2 },
        { question: "Any face card chosen is?", options: ["1/4", "1/6", "1/13", "1/3"], answer: 2 },
        { question: "Ace drawn from deck?", options: ["1/6", "1/3", "1/4", "1/13"], answer: 3 },
        { question: "2 dice rolled, total 7?", options: ["1/3", "1/6", "1/5", "1/8"], answer: 2 },
        { question: "Choosing heart from deck?", options: ["1/4", "1/13", "1/2", "1/3"], answer: 0 },
        { question: "Probability of even number roll?", options: ["1/2", "1/3", "1/4", "1/6"], answer: 0 },
        /* More sample questions */
    ],
    "Problems on Ages": [
        { question: "Age problem 1?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: 0 },
        { question: "Age problem 2?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: 1 },
        { question: "A's age is twice B's age. If B is 10, find A.", options: ["15", "20", "30", "25"], answer: 1 },
        { question: "Average age of siblings is 15. Total of 3 ages?", options: ["45", "40", "50", "60"], answer: 0 },
        { question: "If A is 3 times B, B is 10, find A.", options: ["20", "25", "30", "35"], answer: 2 },
        { question: "Ratio of ages 6:7; total is 39. Find younger.", options: ["18", "20", "22", "24"], answer: 1 },
        { question: "Sum of father's age 3 times son's; 60 yrs total?", options: ["50", "30", "45", "35"], answer: 1 },
        { question: "Mother's age is 4 times daughter's; she’s 40.", options: ["10", "20", "5", "15"], answer: 0 },
        { question: "Average of 5 family ages is 20. Sum?", options: ["100", "80", "90", "60"], answer: 0 },
        { question: "Brother is twice sister’s. Sister is 12. Brother?", options: ["20", "24", "15", "18"], answer: 1 }
    
        /* More sample questions */
    ],
    "Profit and Loss": [
        { question: "Profit or Loss problem 1?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: 0 },
        { question: "Profit or Loss problem 2?", options: ["Option 1", "Option 2", "Option 3", "Option 4"], answer: 2 },
        { question: "Selling at $150, profit $50, find cost.", options: ["100", "110", "130", "120"], answer: 0 },
        { question: "Discount $30 on $200, sale price?", options: ["150", "160", "170", "180"], answer: 2 },
        { question: "Profit of $60 on $300. Percent?", options: ["20%", "15%", "25%", "10%"], answer: 1 },
        { question: "Buying at $80, sold for $120. Gain?", options: ["25%", "50%", "30%", "40%"], answer: 1 },
        { question: "Selling price $150, cost $120, profit?", options: ["15%", "20%", "25%", "30%"], answer: 1 },
        { question: "If loss is $15 on $100, loss %?", options: ["10%", "15%", "20%", "25%"], answer: 0 },
        { question: "Profit of $50 on $200. Percent?", options: ["25%", "20%", "15%", "10%"], answer: 0 },
        { question: "Buy $60, sell $90, find profit %.", options: ["40%", "50%", "45%", "30%"], answer: 1 }
 
        /* More sample questions */
    ]
};

let userName = '';
let selectedCategory = '';
let score = 0;
let questionIndex = 0;
let timer;
let totalTimeTaken = 0;
let quizStartTime = 0;

document.getElementById('enter-btn').addEventListener('click', () => {
    userName = document.getElementById('user-name').value;
    if (userName) {
        document.getElementById('category-heading').style.display = 'block'; 
        document.getElementById('category-options').style.display = 'flex'; 
        document.getElementById('start-btn').style.display = 'none';
        document.getElementById('back-to-name-btn').style.display = 'block';
    } else {
        alert("Please enter your name.");
    }
});

document.getElementById('user-name').addEventListener('focus', () => {
    document.getElementById('user-name').value = userName;
});

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedCategory = btn.getAttribute('data-category');
        document.getElementById('start-btn').style.display = 'block'; 
    });
});

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('back-to-name-btn').addEventListener('click', () => {
    document.getElementById('home-page').classList.add('active');
    document.getElementById('category-heading').style.display = 'none'; 
    document.getElementById('category-options').style.display = 'none'; 
    document.getElementById('start-btn').style.display = 'none'; 
    document.getElementById('back-to-name-btn').style.display = 'none';
});

function startQuiz() {
    questionIndex = 0;
    score = 0;
    quizStartTime = Date.now();
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('quiz-page').classList.add('active');
    document.getElementById('quiz-category').innerText = selectedCategory;
    document.getElementById('question-number').innerText = `Question 1`;
    showQuestion();
}

function showQuestion() {
    const questionData = categories[selectedCategory][questionIndex];
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');
    questionBox.innerText = questionData.question; 
    document.getElementById('question').innerHTML = ""; 
    document.getElementById('question').appendChild(questionBox); 

    document.getElementById('options').innerHTML = ''; 
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(index));
        document.getElementById('options').appendChild(button);
    });

    startTimer();
}

function startTimer() {
    let timeLeft = 10;
    document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showCorrectAnswer(); 
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const questionData = categories[selectedCategory][questionIndex];
    if (selectedOption === questionData.answer) {
        score++; 
    }
    showCorrectAnswer();
}
let currentQuestionIndex = 0;

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    updateQuestionNumber();
});

function updateQuestionNumber() {
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1}`;
}

// Initialize with first question number
updateQuestionNumber();

function showCorrectAnswer() {
    const questionData = categories[selectedCategory][questionIndex];
    const correctAnswer = questionData.answer;
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
        if (index === correctAnswer) {
            btn.classList.add('correct-answer');
        }
    });

    document.getElementById('score').innerText = `Score: ${score}`; 

    questionIndex++;

    if (questionIndex < categories[selectedCategory].length) {
        document.getElementById('next-btn').style.display = 'block'; 
        document.getElementById('submit-btn').style.display = 'none'; 
    } else {
        document.getElementById('next-btn').style.display = 'none'; 
        document.getElementById('submit-btn').style.display = 'block'; 
    }
}

document.getElementById('next-btn').addEventListener('click', () => {
    document.getElementById('next-btn').style.display = 'none';
    showQuestion();
});

document.getElementById('submit-btn').addEventListener('click', () => {
    totalTimeTaken = Math.floor((Date.now() - quizStartTime) / 1000); 
    showResults();
});

function showResults() {
    clearInterval(timer); 
    document.getElementById('quiz-page').classList.remove('active');
    document.getElementById('results-page').classList.add('active');
    document.getElementById('result-name').innerText = userName;
    document.getElementById('total-time').innerText = totalTimeTaken; 
    document.getElementById('attempted-questions').innerText = categories[selectedCategory].length;
    document.getElementById('correct-answers').innerText = score;
    document.getElementById('wrong-answers').innerText = categories[selectedCategory].length - score;
    const percentage = (score / categories[selectedCategory].length) * 100;
    document.getElementById('percentage').innerText = percentage.toFixed(2);
}

document.getElementById('start-again-btn-results').addEventListener('click', () => {
    resetGame();
    document.getElementById('category-heading').style.display = 'block'; 
    document.getElementById('category-options').style.display = 'flex'; 
    document.getElementById('start-btn').style.display = 'none'; 
    document.getElementById('results-page').classList.remove('active'); 
    document.getElementById('home-page').classList.add('active'); 
});

document.getElementById('home-btn-results').addEventListener('click', () => {
    resetGame();
    document.getElementById('home-page').classList.add('active'); 
    document.getElementById('results-page').classList.remove('active'); 
});

function resetGame() {
    userName = '';
    selectedCategory = '';
    score = 0;
    questionIndex = 0;
    totalTimeTaken = 0;
    document.getElementById('user-name').value = '';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('category-heading').style.display = 'none'; 
    document.getElementById('category-options').style.display = 'none'; 
    document.getElementById('back-to-name-btn').style.display = 'none';
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.disabled = false; 
        btn.classList.remove('selected'); 
    });
    document.getElementById('score').innerText = `Score: ${score}`; 
}