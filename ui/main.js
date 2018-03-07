//counter
var counter=0;
button = document.getElementById("counter");
button.onClick= function (){
    counter=counter+1;
    span=document.getElementById("span");
    span.innerHTML=counter.toString();
}