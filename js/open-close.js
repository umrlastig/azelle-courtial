var st=true;
var st2=true;
document.getElementById("showdef").addEventListener('click',function(){
  if (st){
      document.getElementById("ct").style.display = "inherit";
      st=false;
      document.getElementById("showdef").innerHTML="Hide Information";
  }else{
      document.getElementById("ct").style.display = "none";
      st=true;
      document.getElementById("showdef").innerHTML="See more";
}
});

document.getElementById("showdef2").addEventListener('click',function(){
  if (st2){
      document.getElementById("ct2").style.display = "inherit";
      st2=false;
      document.getElementById("showdef2").innerHTML="Hide Information";
  }else{
      document.getElementById("ct2").style.display = "none";
      st2=true;
      document.getElementById("showdef2").innerHTML="See more";
}
});

document.getElementById("showdefFR").addEventListener('click',function(){
  if (st){
      document.getElementById("ct").style.display = "inherit";
      st=false;
      document.getElementById("showdefFR").innerHTML="Cacher les informations";
  }else{
      document.getElementById("ct").style.display = "none";
      st=true;
      document.getElementById("showdefFR").innerHTML="Voir plus";
}
});

document.getElementById("showdefFR2").addEventListener('click',function(){
  if (st2){
      document.getElementById("ct2").style.display = "inherit";
      st2=false;
      document.getElementById("showdefFR2").innerHTML="Cacher les informations";
  }else{
      document.getElementById("ct2").style.display = "none";
      st2=true;
      document.getElementById("showdefFR2").innerHTML="Voir plus";
}
});
