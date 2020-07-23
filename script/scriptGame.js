window.onkeydown = function(e) { //Wenn eine Taste gedrückt wird

	if(moveOn){
		switch (e.keyCode) { 
			case 65: selectLeft=1; break; //a
			case 83: selectLeft=2; break; //s
			case 68: selectLeft=3; break; //d

			case 37: selectRight=1; break; //left
			case 38: selectRight=2; break;  //up
			case 39: selectRight=3; break;  //right
		}
		
		trigger();
	}
		
	if(!startgame && e.keyCode == 13) // Bei Enter hide Startscreen
		hideStart();
}
function trigger(){
	if(statusLeft == 0 && selectLeft != 0){
		infoLeft.textContent = "selected";
		statusLeft = 1;
	}
	if(statusRight == 0 && selectRight != 0){
		infoRight.textContent = "selected";
		statusRight = 1;
	}
	
	if(statusRight == 1 && statusLeft == 1 ){//Wenn beide gewählt haben
		itemLeft.src = items[selectLeft][0]; //alle anzeigen
		infoLeft.textContent = items[selectLeft][1];
		itemRight.src = items[selectRight+3][0];
		infoRight.textContent = items[selectRight+3][1];
		moveOn = false;
		
		setTimeout(() => { evaluate(); }, 1000); //auswerten
	}
}

function evaluate(){
	var result;
	
	switch (selectLeft-selectRight) { 
  		case -2: case 1: // Wenn links gewonnen hat
			result = name1 + " won";
			points1++;
		break;
		case 2: case -1: // Wenn Rechts gewonnen hat
			result = name2 + " won";
			points2++;
		break;
		case 0: case -1: 
			result = "draw";
		break;
		default:
			result = "Error";
		break;
	}
	
	player1Points.textContent = points1;
	player2Points.textContent = points2;
	
	if(points1 >= winPoints || points2 >= winPoints){
		endText.textContent = result;
		endScreen.style.opacity = 100;
		moveOn = false;
	}
	else{
		// -- Winscreen zeigen -- 
		winText.textContent = result;
		//winScreen.style.display = "block"; 
		winScreen.style.opacity = 100;

		setTimeout(() => {
			winScreen.style.opacity = 0; 
			reset();
		}, 1800);
	}
}

function reset(){
	itemLeft.src = items[0][0];
	infoLeft.textContent = items[0][1];
	itemRight.src = items[0][0];
	infoRight.textContent = items[0][1];
	
	selectLeft = 0;
	selectRight = 0;
	statusLeft = 0;
	statusRight = 0;
	moveOn = true;
	
	botMove();
}

function botMove(){
	if(bot){ //Der Bot macht einen Zug
		setTimeout(() => {
			selectRight = Math.floor(Math.random() * 3) + 1;
			console.log(items[selectRight][1]);

			trigger();
		}, Math.random() * 4000);
	}
}