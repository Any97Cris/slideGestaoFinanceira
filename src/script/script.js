var btnClose = document.getElementById("btnClose");
var btnStart = document.getElementById("btnStart");
var menuLateral = document.getElementById("menu");


btnStart.addEventListener("click", function() {
    opcoesMenu = document.getElementsByTagName("ul");
    
    if(menuLateral === "block"){
        menuLateral.style.display = "none";
        
    }else {
        menuLateral.style.display = "block";
        
    }
});

btnClose.addEventListener("click", function() {
    let menuLateral = document.getElementById("menu");

    return menuLateral.style.display = "none";
});

