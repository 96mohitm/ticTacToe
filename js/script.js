var arr=[null, null, null, null, null, null, null, null, null];

var v0=document.querySelector("#b0");
var v1=document.querySelector("#b1");
var v2=document.querySelector("#b2");
var v3=document.querySelector("#b3");
var v4=document.querySelector("#b4");
var v5=document.querySelector("#b5");
var v6=document.querySelector("#b6");
var v7=document.querySelector("#b7");
var v8=document.querySelector("#b8");

console.log(v1);

var i=-1;
function events(){
v0.addEventListener('click',function(){
	//v0.innerText="0";
	i++;
	if(i%2){
		arr[0]=1;
		v0.innerText='X';
		check();
		return;
	}
	else{
		arr[0]=0;
		v0.innerText='0';
		check();
		return;
	}
	//console.log(arr[0]);
	
});

console.log(arr);

v1.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[1]=1;
		v1.innerText='X';
		check();
		return;
	}
	else{
		arr[1]=0;
		v1.innerText='O';
		check();
		return;
	}
});

v2.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[2]=1;
		v2.innerText='X';
		check();
		return;
	}
	else{
		arr[2]=0;
		v2.innerText='O';
		check();
		return;
	}
});

v3.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[3]=1;
		v3.innerText='X';
		check();
		return;
	}
	else{
		arr[3]=0;
		v3.innerText='O';
		check();
		return;
	}
});

v4.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[4]=1;
		v4.innerText='X';
		check();
		return;
	}
	else{
		arr[4]=0;
		v4.innerText='O';
		check();
		return;
	}
});

v5.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[5]=1;
		v5.innerText='X';
		check();
		return;
	}
	else{
		arr[5]=0;
		v5.innerText='O';
		check();
		return;
	}
});

v6.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[6]=1;
		v6.innerText='X';
		check();
		return;
	}
	else{
		arr[6]=0;
		v6.innerText='O';
		check();
		return;
	}
});

v7.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[7]=1;
		v7.innerText='X';
		check();
		return;
	}
	else{
		arr[7]=0;
		v7.innerText='O';
		check();
		return;
	}
});

v8.addEventListener('click',function(){
	i++;
	if(i%2){
		arr[8]=1;
		v8.innerText='X';
		check();
		return;
	}
	else{
		arr[8]=0;
		v8.innerText='O';
		check();
		return;
	}
});
check();
}

var j;
var win = document.querySelector("#winner");

function check(){
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
	events();
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
