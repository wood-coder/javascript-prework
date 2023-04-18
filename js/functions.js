let printMessage = function (msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

let clearMessages = function (){
	document.getElementById('messages').innerHTML = '';
}

let getMoveName = function (argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce'
    }
   
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  
  let displayResult = function (argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    console.log('Ruchy:', argComputerMove, argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      return 'Remis!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return 'Remis!';
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        return 'Remis!';
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Ty przegrywasz!';
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Ty przegrywasz!';
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz!';
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Ty przegrywasz!';
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
        return 'Podałeś nieprawidłowy numer';
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
        return 'Podałeś nieprawidłowy numer';
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
        return 'Podałeś nieprawidłowy numer'
    }
  }