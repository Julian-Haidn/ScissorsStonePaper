var startScreen = document.getElementById("startscreen");
var startTrigger = document.getElementById("startTrigger");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var checkBot = document.getElementById("checkBot");


startTrigger.onclick = function(){ //hide startscreen
	hideStart();
}

function hideStart(){
	startScreen.style.transform = "translateY(-100%)";
	setTimeout(() => { //suchte ein Random item aus
		startScreen.style.display = "none";
		startScreen.style.transform = "translateY(0)";
		
		//input von Startscreen
		name1 = input1.value;
		name2 = input2.value;
		winPoints = input3.value;
		bot = checkBot.checked;
		
		//Spielfeld befüllen
		pointsToWin.textContent = winPoints + " Points to win";
		player1Name.textContent = name1;
		player2Name.textContent = name2;
		player1Points.textContent = points1;
		player2Points.textContent = points2;
		
		moveOn = true;
		startgame = true;
		botMove(); //Der Bot wird aktiviert
	}, 500);
}

checkBot.onclick = function(){ //Name ändern wenn Bot ausgewählt
	if(checkBot.checked){
		input2.value = "Bot{";
		input2.disabled = true;
		input2.style.opacity = 0.7;
		
	}
	else{
		input2.value = "Player 2";
		input2.disabled = false;
		input2.style.opacity = 1;
	}
}