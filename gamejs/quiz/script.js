let Questions =[];
quesTag = document.getElementById("ques");

async function fetchQuestions(){
    try{
            const res = await fetch("https://opentdb.com/api.php?amount=10");
        if(!res.ok){
            throw new Error("Couldn't fetch questions");
        }
        const data =await res.json();
        Questions = data.results;
    }
    catch (err){
        console.error(err);
        ques.innerHTML = `<h5 style="background-color:"red"">${err}</h5>`;
    }
}

let currentQuestion = 0;
let score = 0;

if(Questions === 0){
    ques.innerHTML = <h5>Please wait!</h5>
}

function loadQues(){
    const opt = document.getElementById("opt");

    let currentQuesText = Questions[currentQuestion].question;
    ques.innerText = currentQuesText;

    opt.innerHTML = "";
    const correctAnswer = Questions[currentQuestion].correct_answer;
    const incorrectAnswer = Questions[currentQuestion].incorrect_answers;

    const options = [correctAnswer, ... incorrectAnswer];

    options.sort((o1,o2)=>Math.random()<0.5);

    options.forEach((option, idx)=>{
        const optDiv = document.createElement('div');
        const optionTag = document.createElement('input');
        const labelTag = document. createElement('label');

        optionTag.type = 'radio';
        // optionTag.name = option${idx};
        optionTag.name = "answer";
        option.id = "answer";
        optionTag.value = option;
        
        labelTag.textContent = option;
        // labelTag.htmlfor = option${idx};
        
        optDiv.appendChild(optionTag);
        optDiv.appendChild(labelTag);

        opt.appendChild(optDiv);
    });
}

setTimeout(()=>{
    loadQues();
    if(Questions.length === 0){
        ques.innerHTML = `<h5> style='color: red'>unable to fetch data, Please try again!</h5>`;
    }
}, 2000);

function checkAnswer(){
    const selectedAns = document.querySelector('input[name="answer"]:checked').value;
    if(selectedAns === Questions[currentQuestion].correct_answer){
        score++;
    }
    nextQuestion();
}

function nextQuestion(){
    if(currentQuestion< Questions.length - 1){
        currentQuestion++;
        loadQues();
    }
    else{
        document.getElementById('opt').remove();
        document.getElementById('ques').remove();
        document.getElementById('btn').remove();
        showTotal();
    }
}

function showTotal(){
    const totalScore = document.querySelector('#score');
    totalScore.innerHTML = <h3>Your Score: ${score}/10</h3>;
    Questions.forEach((ques, idx) => {
        totalScore.innerHTML += `
        <p>
            ${idx + 1}: ${ques.correct_answer}
            </p>`;
    });
}
fetchQuestions();

