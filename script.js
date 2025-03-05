
var randomnum=Math.floor(Math.random()*6)+1;
var randomnum1=Math.floor(Math.random()*6)+1;

var ranimg="./images/dice"+randomnum+".png";
var ranimg2="./images/dice"+randomnum1+".png";


document.querySelector(".img1").setAttribute("src",ranimg);
document.querySelector(".img2").setAttribute("src",ranimg2);
if(randomnum>randomnum1){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnum==randomnum1){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";
}


