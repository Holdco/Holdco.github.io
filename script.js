var a =0;
var winCount = 0;
var numCount = 0;
var count = document.getElementById("winnum");
var numm=document.getElementById("numm");

var jiandao = document.getElementById("jiandao");
var shitou = document.getElementById("shitou");
var bu = document.getElementById("bu");
var player = document.getElementById("player");


jiandao.onclick = function(){
	document.getElementById("my-result").src="img/jiandao.jpg";
	a=1;
}
shitou.onclick = function(){
	document.getElementById("my-result").src="img/shitou.jpg";
	a=2;
}
bu.onclick = function(){
	document.getElementById("my-result").src="img/bu.jpg";
	a=3;
}

player.onclick = function(){
	var b = Math.floor(Math.random() * 3 + 1);
	numCount +=1;
	computerJpg(b);
	checkResult(a,b);
	count.innerHTML = winCount;
	numm.innerHTML=numCount;
};

function computerJpg(b){
	switch(b){
		case 1:
			document.getElementById("computer-result").src="img/jiandao.jpg";
			break;
		case 2:
			document.getElementById("computer-result").src="img/shitou.jpg";
			break;
		case 3:
			document.getElementById("computer-result").src="img/bu.jpg";
	}
}

function checkResult(a,b){
	switch(a-b){
		case 0:
			document.getElementById("result-text").innerHTML = "Tie";
			break;
		case 1:
		case -2:
			document.getElementById("result-text").innerHTML="You Win";
			winCount +=1;
			break;
		case -1:
		case 2:
			document.getElementById("result-text").innerHTML="You Lose";
	}
};