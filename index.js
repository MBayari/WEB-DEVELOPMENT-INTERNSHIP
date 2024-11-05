function changeBG() {
    var navbar = document.getElementById('navbar');
    var scrollvalue = window.scrollY;
    if(scrollvalue < 150){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBG);