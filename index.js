var adventure = document.querySelector("#adventure"),
counterForAdv = 0,
advString = "welcome to my website where i can show you my adventure...",
startTyping = setInterval(function(){
adventure.textContent += advString[counterForAdv];
counterForAdv+=1;
if (counterForAdv> advString.length-1){
clearInterval(startTyping);
}
},100);
