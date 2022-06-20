var random_num1=Math.floor(Math.random()*6)+1;
var random_num2=Math.floor(Math.random()*6)+1;

// image number 1

var randomImageSource1="images/dice"+random_num1+".png";
document.querySelector(".img1").setAttribute("src",randomImageSource1);

// Image number 2

var randomImageSource2="images/dice"+random_num2+".png";
document.querySelector(".img2").setAttribute("src",randomImageSource2);

if(random_num1>random_num2)
    document.querySelector("h1").textContent="🚩 Player 1 Wins";
if(random_num1<random_num2) 
    document.querySelector("h1").textContent="Player 2 Wins 🚩";
if(random_num1===random_num2)
    document.querySelector("h1").textContent="Game Draw";

