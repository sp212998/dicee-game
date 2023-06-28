//for first dice
let randomNumber1 =Math.floor(Math.random()*6 +1);
let randomImage1="dice"+randomNumber1+".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

//for second dice
let randomNumber2 =Math.floor(Math.random()*6 +1);
let randomImage2="dice"+randomNumber2+".png";
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[1].innerHTML="Player one wins."
}

if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[1].innerHTML="Player two wins."
}

if(randomNumber1===randomNumber2){
    document.querySelectorAll("h1")[1].innerHTML="Its a Draw."
}
