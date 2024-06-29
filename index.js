var num=Math.floor(Math.random()*6)+1;
var num1=Math.floor(Math.random()*6)+1;

if(num==1){
    document.querySelector("img").setAttribute("src","dice1.png");
}else if(num==2){
    document.querySelector("img").setAttribute("src","dice2.png");
}else if(num==3){
    document.querySelector("img").setAttribute("src","dice3.png");
}else if(num==4){
    document.querySelector("img").setAttribute("src","dice4.png");
}else if(num==5){
    document.querySelector("img").setAttribute("src","dice5.png");
}else {
    document.querySelector("img").setAttribute("src","dice6.png");
}

if(num1==1){
    document.querySelector(".ans img").setAttribute("src","dice1.png");
}else if(num1==2){
    document.querySelector(".ans img").setAttribute("src","dice2.png");
}else if(num1==3){
    document.querySelector(".ans img").setAttribute("src","dice3.png");
}else if(num1==4){
    document.querySelector(".ans img").setAttribute("src","dice4.png");
}else if(num1==5){
    document.querySelector(".ans img").setAttribute("src","dice5.png");
}else {
    document.querySelector(".ans img").setAttribute("src","dice6.png");
}

if(num>num1){
    document.querySelector("h1").innerHTML="<img class='win' src='winner.png' style='height: 80px; width: 80px;'> Player 1 Wins";
}else if(num1>num){
    document.querySelector("h1").innerHTML="<img class='win' src='winner.png' style='height: 80px; width: 80px;'> Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}