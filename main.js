var nomeConvidados=[];
function submit(){
    var convidado1=document.getElementById("nome1").value;
    nomeConvidados.push(convidado1);
    var comprimento=nomeConvidados.length;
    document.getElementById("mostrar").innerHTML=nomeConvidados.toString();
    
 }
  function show(){
    var i=nomeConvidados.join("<br>");
     document.getElementById("p1").innerHTML=i.toString();
     document.getElementById("Buttonsort").style.display="block"
    
 }
 
 function sorting(){
   nomeConvidados.sort();
   var i=nomeConvidados.join("<br>");
     document.getElementById("sorted").innerHTML=i.toString();
    
 }

 function search(){
    
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
   for(j=0;j<nomeConvidados.length;j++){
    if(s==nomeConvidados[j]){
        found=found+1
    }
   }
   document.getElementById("p2").innerHTML="nome encotrado"+found+"vez(es)";}