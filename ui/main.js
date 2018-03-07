//counter

var button = document.getElementById('x');
var counter=0;
button.onclick= function (){
    counter=counter+1;
    var span=document.getElementById('a');
    span.innerHTML=counter.toString();
};