//Spieler Elemente
var player1Name = document.getElementById("player1Name");
var player2Name = document.getElementById("player2Name");
var player1Points = document.getElementById("player1Points");
var player2Points = document.getElementById("player2Points");
var itemLeft = document.getElementById("selectedItemLeft");
var itemRight = document.getElementById("selectedItemRight");
var infoLeft = document.getElementById("selectStatusLeft");
var infoRight = document.getElementById("selectStatusRight");

//Menu Elemente
var pointsToWin = document.getElementById("pointsToWin");
var winScreen = document.getElementById("winScreen");
var winText = document.getElementById("winText");
var endScreen = document.getElementById("endScreen");
var endText = document.getElementById("endText");

//Items
var items = [
	["img/game/selected/unknown.svg", "choosing..."],
	
	["img/game/selected/leftScissors.svg", "Scissors"],
	["img/game/selected/leftStone.svg", "Stone"],
	["img/game/selected/leftPaper.svg", "Paper"],
	["img/game/selected/rightScissors.svg", "Scissors"],
	["img/game/selected/rightStone.svg", "Stone"],
	["img/game/selected/rightPaper.svg", "Paper"],
];

//Variablen Menu
var selectLeft = 0;
var selectRight = 0;
var statusLeft = 0; // 0 -> not selected, 1 -> selected
var statusRight = 0;
var points1 = 0;
var points2 = 0;

//Starteinstellungen
var name1 = "Player 1";
var name2 = "Player 2";
var winPoints = 3;
var bot = true; //bei true spielt man gegen einen Bot

//debuging
var startgame = false; //false wenn das Spiel nocht nicht gestartet ist
var moveOn = false; //ist auf false wenn das spiel vorbei ist