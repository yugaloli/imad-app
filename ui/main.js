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
var nameis = nameInput.value;
var submit=document.getElementById('submit');
submit.onclick= function(){
  var name=['name1','name2','name3'];
  var list='';
  for(var i=0;i<names.length;i++)
  {
      list+="<li>"+name[i]+"</li>";
  }
  var ul=document.getElementById("namelist");
  ul.innerHTML=list;
};