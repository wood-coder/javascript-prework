let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumer == 2) {
    computerMove = 'papier';
} else if (randomNumer == 3) {
    computerMove = 'nozyce';
}

printMessage('Mój ruch to: ' + computerMove);