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

function check(){
	var j;
	//row
	var win = document.querySelector("#winner");
	for(j=0;j<3;j++){
		if(arr[j]==null||arr[j+3]==null||arr[j+6]==null)
			continue;
		if(arr[j]==arr[j+3]&&arr[j]==arr[j+6]){
			console.log("WINNER");
			win.innerContent="WON";
			return;
		}

	}
	//col
	for(j=0;j<9;j+=3){
		if(arr[j]==null||arr[j+1]==null||arr[j+2]==null)
			continue;
		if(arr[j]==arr[j+1]&&arr[j]==arr[j+2]){
			console.log("WINNER");
			win.innerText="WON";
			return;
		}

	}
	//diagonal
	if(arr[0]==arr[4]&&arr[0]==arr[8]&&(arr[0]!=null||arr[4]!=null||arr[8]!=null)){
		console.log("WINNER");
		win.innerText="WON";
		return;
	}

	if(arr[2]==arr[4]&&arr[2]==arr[6]&&(arr[2]!=null||arr[4]!=null||arr[6]!=null)){
		console.log("WINNER");
		win.innerText="WON";
		return;
	}


	console.log(arr);
}

function game(){
	player();
	symbol();
	events();
	check();
	return;
}

function player(){
	//player selection
	var player =document.getElementById("player");
	var pl;
	//var playerDisplay=document.getElementById("sel-player");

	if (document.getElementById('p1').checked) {
	  pl = document.getElementById('p1').value;
	}
	else if (document.getElementById('p1').checked) {
	  pl = document.getElementById('p1').value;
	}
	//playerDisplay.innerHTML="";
	console.log(pl);
}

function symbol(){
	var opponent = document.getElementById("xo");
	var op;
	var playerDisplay = document.querySelector("#sel-player");
	if (document.getElementById('O').checked) {
	  op = document.getElementById('O').value;
	}
	else if (document.getElementById('X').checked) {
	  op = document.getElementById('X').value;
	}
	console.log(op);

}

game();
