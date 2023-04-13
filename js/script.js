function playGame (playerInput){
    
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    /*let computerMove = 'nieznany ruch';

    if(randomNumber == 1){
        computerMove = 'kamień';
    } else if (randomNumer == 2) {
        computerMove = 'papier';
    } else if (randomNumer == 3) {
        computerMove = 'nożyce';
    }*/

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    /*let playerMove = 'nieznany ruch';

    if(playerInput == '1'){
    playerMove = 'kamień';
    } else if (playerInput == '2'){
        playerMove = 'papier';
    } else if (playerInput == '3'){
        playerMove = 'nożyce';
    }*/

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