let userScore = 0;
let compScore = 0;
const user_span = document.querySelector('#user-score');
const comp_span = document.querySelector('#comp-score');
const rock_div = document.querySelector('#Rock');
const paper_div = document.querySelector('#Paper');
const scissors_div = document.querySelector('#Scissors');
const results = document.querySelector('.result');

let game = (userChoice) => {
    let compChoice = getCompChoice();
    let result;
    switch(userChoice + compChoice){
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            result = 'draw';
            getCount(result);
            changeResult(result, userChoice, compChoice);
            break;
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            result = 'win';
            getCount(result);
            changeResult(result, userChoice, compChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            result = 'lost';
            getCount(result);
            changeResult(result, userChoice, compChoice);
            break;
    }
}
let changeResult= (result,userChoice, compChoice) => {
    let msg;
    let smallUserMsg = '(user)'.fontsize(3);
    let smallCompMsg = '(comp)'.fontsize(3);
    let userChoice_div = document.getElementById(userChoice);
    if(result == 'draw'){
        msg = `${userChoice}${smallUserMsg} equals ${compChoice}${smallCompMsg}. It's a ${result}!`;
        userChoice_div.classList.add('gray-glory');
        setTimeout(()=> {
            userChoice_div.classList.remove('gray-glory');
        }, 400);
    }
    else if(result =='win'){
        msg = `${userChoice}${smallUserMsg} beats ${compChoice}${smallCompMsg}. You ${result}!`;
        userChoice_div.classList.add('green-glory');
        setTimeout(()=> {
            userChoice_div.classList.remove('green-glory');
        }, 400);
    }
    else{
        msg = `${userChoice}${smallUserMsg} loses to ${compChoice}${smallCompMsg}. You ${result}!`;
        userChoice_div.classList.add('red-glory');
        setTimeout(()=> {
            userChoice_div.classList.remove('red-glory');
        }, 400);
    }
    results.innerHTML = msg;
}

let getCompChoice = () => {
    let compChoices = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    return compChoices[randomNum];
}

let changeScore = () => {
    user_span.innerHTML = userScore;
    comp_span.innerHTML = compScore;
}

let getCount = (result) => {
    if(result == "draw"){
        changeScore();
    }
    else if(result == "win"){
        userScore++;
        changeScore();
    }
    else{
        compScore++;
        changeScore();
    }
}


rock_div.addEventListener('click', () => {
    game('Rock');
})

paper_div.addEventListener('click', () => {
    game('Paper');
})

scissors_div.addEventListener('click', () => {
    game('Scissors');
})