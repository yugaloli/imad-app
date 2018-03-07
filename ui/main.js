/*//counter

var button = document.getElementById('x');
button.onclick= function (){
    var request=new XMLHttpRequest();
    request.onreadystatechange =function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var counter=req.responseText;
                var span=document.getElementById('a');
                span.innerHTML=counter.toString();
            }   
            
        }
    };
    request.open('GET','http://yugaloli123.imad.hasura-app.io/counter');
    request.send(null);
   
};*/
// submit name
var nameInput =document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit');