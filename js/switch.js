
function switchf(p){
console.log(p.innerHTML);
if(p.innerHTML == '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>'){
    p.innerHTML = '<i class="fa-solid fa-toggle-on"></i>'
     document.documentElement.style.setProperty("--blue","#2c3e50");
      document.documentElement.style.setProperty("--green","#4ca1af");
      document.documentElement.style.setProperty("--wight","#2c5364");
      document.documentElement.style.setProperty("--brown","#abbaab");
      document.documentElement.style.setProperty("--black","#ffffff");
      document.documentElement.style.setProperty("--gamwirvale","rgba(0,0,0,0.6)");
      document.documentElement.style.setProperty("--darktextcolor","#ffffff");
}
else{
    p.innerHTML = '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>';
    document.documentElement.style.setProperty("--blue","#abbaab");
    document.documentElement.style.setProperty("--brown","#2c3e50");
      document.documentElement.style.setProperty("--black","#4ca1af");
    document.documentElement.style.setProperty("--green","#ffffff");
    document.documentElement.style.setProperty("--wight","#FFFFFF");
    document.documentElement.style.setProperty("--gamwirvale","rgba(255,255,255,0.6)");
    document.documentElement.style.setProperty("--darktextcolor","#000000");
}
}