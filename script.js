var home = document.querySelector(".home");
var about = document.querySelector(".about");
var service = document.querySelector(".service");
var main = document.querySelector(".main");
var homeBtn = document.querySelector("#homeBtn");
var aboutBtn = document.querySelector("#aboutBtn");
var serviceBtn = document.querySelector("#serviceBtn");

function toggle1(){
    if(home.style.display == "flex"){
        
        about.style.display = "none";
        service.style.display = "none";
    }
    else{
        home.style.display = "flex";
        about.style.display = "none";
        service.style.display = "none";
    }
}
function toggle2(){
    home.style.display = 'none';
    if(about.style.display == 'flex'){
        
        home.style.display = "none";
        service.style.display = "none";
    }else{
        about.style.display = "flex";
        home.style.display = "none";
        service.style.display = "none";
    }
    
}
function toggle3(){
    home.style.display = 'none';
    if(service.style.display == 'flex'){
        
        home.style.display = "none";
        about.style.display = "none";
    }else{
        service.style.display = "flex";
        home.style.display = "none";
        about.style.display = "none";
    }
}



// function homeDiv() {
//     home.style.display = 'block';
//     sobreMim.style.display = 'none'
//     projeto.style.display = 'none'
//     contato.style.display = 'none'
//  }
// function toggle() { // pagina sobre mim

//     home.style.display = 'none';
//     if(sobreMim.style.display == 'flex'){
//         contato.style.display = 'none'
//         projeto.style.display = 'none'
//         sobreMim.style.display = 'none'
//         home.style.display = 'block'
//     }
//     else {
//         contato.style.display = 'none'
//         projeto.style.display = 'none'
//         sobreMim.style.display = 'flex'
//     }
//  }
// function toggle2() { // pagina de projetos

//     home.style.display = 'none';
//     if(projeto.style.display == 'flex'){
//         contato.style.display = 'none'
//         projeto.style.display = 'none'
//         sobreMim.style.display = 'none'
//         home.style.display = 'block'
//     }
//     else {
//         contato.style.display = 'none'
//         sobreMim.style.display = 'none'
//         projeto.style.display = 'flex';
//     }
// }
// function toggle3() { // pagina de contato

//  home.style.display = 'none';
//  if(contato.style.display == 'flex'){
//      contato.style.display = 'none'
//      projeto.style.display = 'none'
//      sobreMim.style.display = 'none'
//      home.style.display = 'block'
//  }
//  else {
     
//      sobreMim.style.display = 'none'
//      projeto.style.display = 'none'
//      contato.style.display = 'flex'
//  }
// }