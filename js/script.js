function playGame (playerInput){
    
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    let solve = displayResult(computerMove,playerMove);

    printMessage('Wynik: ' + solve);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
});