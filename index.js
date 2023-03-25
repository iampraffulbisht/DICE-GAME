rolldice = () => {
var randomnumber1 = Math.floor(Math.random()*6+1);
var image1 = "images/dice"+randomnumber1+".png";
document.querySelector(".dice .img1").setAttribute("src",image1);
if(randomnumber1===6){
    document.querySelector("h1").innerHTML="Bingo! You got 6";
}
else{
    document.querySelector("h1").innerHTML="You got "+randomnumber1;
}
}