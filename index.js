//Creating random numbers
var randomNumber1;
randomNumber1=(Math.floor(Math.random()*6))+1;//As it will return 0-5 so add 1 to get 1-6
//console.log(randomNumber1);

var randomNumber2;
randomNumber2=(Math.floor(Math.random()*6))+1;


      var image1="images/dice"+ randomNumber1 +".png";
      document.querySelector(".dice .img1").setAttribute("src",image1);

      var image2="images/dice"+ randomNumber2 +".png";
      document.querySelector(".dice .img2").setAttribute("src",image2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
}
else{
  document.querySelector("h1").innerHTML="Draw!"
}