function closeMenu() {
    let btnClose = document.getElementById("btnClose").style.display;
    
    if(btnClose == "none"){
        document.getElementById("btnClose").style.display = 'block';
    }else{
        document.getElementById("btnClose").style.display = 'none';
    }
}