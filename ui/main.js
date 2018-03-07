//counter
var counter=0;
button = document.getElementById("counter");
button.onClick= function (){
    counter=counter+1;
    span=document.getElementById("count");
    span.innerHTML=counter.toString();
}