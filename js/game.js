let gamoachine = () => {
    
    
    if(document.getElementById("button").innerHTML == "STOP"){
        document.getElementById("button").innerHTML = "START";
        document.getElementById("mamardasay").style.display = "none";
        document.getElementById("savesN").style.display = "none";
        document.getElementById("checkanswer").style.display = "none";
        document.getElementById("showanswer").style.display = "none";

    }
    else{
        document.getElementById("button").innerHTML = "STOP";
        document.getElementById("mamardasay").style.display = "block";
        document.getElementById("savesN").style.display = "block";
        document.getElementById("checkanswer").style.display = "block";
        document.getElementById("showanswer").style.display = "block";
    }
}