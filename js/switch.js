
function switchf(p){
console.log(p.innerHTML);
if(p.innerHTML == '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>'){
    p.innerHTML = '<i class="fa-solid fa-toggle-on"></i>'
     document.documentElement.style.setProperty("--blue","#0d2b1d");
      document.documentElement.style.setProperty("--green","#6b8f71");
      document.documentElement.style.setProperty("--wight","#ffffff");
      document.documentElement.style.setProperty("--brown","#a6a6a6");
      document.documentElement.style.setProperty("--black","#d0d0d0");
      document.documentElement.style.setProperty("--red","#e3efd3");
      document.documentElement.style.setProperty("--gamwirvale","rgba(0,0,0,0.6)");
      document.documentElement.style.setProperty("--darktextcolor","#ffffff");
}
else{
    p.innerHTML = '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>';
    document.documentElement.style.setProperty("--blue","#a6a6a6"); 
       document.documentElement.style.setProperty("--green","#d0d0d0");
      document.documentElement.style.setProperty("--wight","#FFFFFF");
    document.documentElement.style.setProperty("--brown","#0d2b1d");
      document.documentElement.style.setProperty("--black","#e3efd3");
document.documentElement.style.setProperty("--red","#6b8f71");
    document.documentElement.style.setProperty("--gamwirvale","rgba(255,255,255,0.6)");
    document.documentElement.style.setProperty("--darktextcolor","#000000");
}
}