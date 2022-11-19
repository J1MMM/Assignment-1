const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener('click', ()=>{
    console.log("clicked");
    menuIcon.classList.toggle("toggle")
})