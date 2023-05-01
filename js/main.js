function generateRandomNumber(maxNumber) {
   let newNumber = Math.floor(Math.random() * maxNumber + 1);
   return newNumber    
}

function hide(element) {
    element.classList.add("dNone")
    console.log(`L'elemento ${element} è stato nascosto`)
}

function askAnswers(question1, question2, question3, question4, question5) {
    question1 = parseInt(prompt("Che numero hai visto?"));

    return question1
}

function checkAnswer (answer, correctAnswer) {
    if (answer == correctAnswer) {
        points++;
        exactNumbers.push(answer)
        return answer
    } else {
        console.log (`${answer} è la risposta sbagliata, ${correctAnswer} era quella giusta`);
    }
}

let numbers = document.querySelectorAll("#box > p")
let section = document.querySelector("section")
let points = 0
let answer1;
let answer2;
let answer3;
let answer4;
let answer5;
let result = document.getElementById("risposta");
let exactNumbers = []

for (let i = 0; i < 5; i++) {
    let newNumber = generateRandomNumber(100)

    numbers[i].innerHTML = newNumber
    
}

setTimeout(function() {
    hide(section);
}, 30 * 1000)

setTimeout(function() {
    answer1 = askAnswers(answer1);
    answer2 = askAnswers(answer2);
    answer3 = askAnswers(answer3);
    answer4 = askAnswers(answer4);
    answer5 = askAnswers(answer5);
}, 31 * 1000);

setTimeout(function() {
    checkAnswer(answer1, numbers[0].innerText)
    checkAnswer(answer2, numbers[1].innerText)
    checkAnswer(answer3, numbers[2].innerText)
    checkAnswer(answer4, numbers[3].innerText)
    checkAnswer(answer5, numbers[4].innerText)
    result.innerText = `Le risposte corrette sono: ${points}, e sono ${exactNumbers}`
}, 32 * 1000);