var arr=[null, null, null, null, null, null, null, null, null];

var i=-1;

var myObj = {
	b0:0,
	b1:1,
	b2:2,
	b3:3,
	b4:4,
	b5:5,
	b6:6,
	b7:7,
	b8:8,
}

var e=document.getElementById('board');

function com_event(){
	document.getElementById("board").addEventListener("click",function(e){
		var x=e.target.id;
		console.log(e);
		var a=myObj[x];
		if(arr[a]!=null)
			return;
		i++;
		if(i%2){
			arr[a]=1;
			document.getElementById(x).innerText='X';
			check();
			return;
		}
		else{
			arr[a]=0;
			document.getElementById(x).innerText='O';
			check();
			return;
		}
	});
}

var j;
var win = document.querySelector("#winner");

function check(){

	var k;
	for(k=0;k<9;k++){
		if(arr[k]==null)
			break;
		else
			continue;
	}
	if(k==9){
		win.innerText="Its a Draw!";
		setTimeout(ref ,2000);
	}

	//row
	
	for(j=0;j<3;j++){
		if(arr[j]==null||arr[j+3]==null||arr[j+6]==null)
			continue;
		if(arr[j]==arr[j+3]&&arr[j]==arr[j+6]){
			console.log("WINNER");
			displayWinner();
			return;
		}

	}
	//col
	for(j=0;j<9;j+=3){
		if(arr[j]==null||arr[j+1]==null||arr[j+2]==null)
			continue;
		if(arr[j]==arr[j+1]&&arr[j]==arr[j+2]){
			console.log("WINNER");
			displayWinner();
			return;
		}

	}
	//diagonal
	if(arr[0]==arr[4]&&arr[0]==arr[8]&&(arr[0]!=null||arr[4]!=null||arr[8]!=null)){
		console.log("WINNER");
		j=4;
		displayWinner();
		return;
	}

	if(arr[2]==arr[4]&&arr[2]==arr[6]&&(arr[2]!=null||arr[4]!=null||arr[6]!=null)){
		console.log("WINNER");
		j=4;
		displayWinner();
		return;
	}



	console.log(arr);
}

function game(){
	//player();
	//symbol();
	//events();
	com_event()
	check();
	return;
}
var pl;
function getPlayer(pl="One Player"){
	//player selection
	//var playerDisplay=document.getElementById("sel-player");
	//playerDisplay.innerHTML="";
	console.log(pl);
}

var op

function getXo(data = "X"){
	op=data;
	console.log(op);
}

function displayWinner(){

	if(arr[j]==0){
		if(op==="X")
			win.innerText="Player 2 WON!";
		else
			win.innerText="Player 1 WON!";
	}
	else {
		if(op==="X")
			win.innerText="Player 1 WON!";
		else
			win.innerText="Player 2 WON!";
	}
	setTimeout(ref ,2000);
}

function ref() {
    location.reload();
}

game();
