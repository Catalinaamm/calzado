let imagen = document.querySelector(".imagx");
let fondo = document.querySelector(".fondo");
let verde = document.querySelector(".color5");
let footer = document.querySelector(".foo");
let mitad1 = document.querySelector(".mitad1");
let mitad2 = document.querySelector(".mitad2");
let mitad3 = document.querySelector(".mitad3");

imagen.addEventListener("click", cambiarColor);
fondo.addEventListener("click", otroColor);
verde.addEventListener("click", colorMilitar);
footer.addEventListener("click", colorGris);

mitad1.addEventListener("click",amarilla);
mitad2.addEventListener("click",illaa);
mitad3.addEventListener("click",mitadamarilla);

function cambiarColor(){
    imagen.style.backgroundColor = "#736F5D" ;
}
function otroColor(){
    fondo.style.backgroundColor = "#736F5D" ;
}
function colorMilitar(){
    verde.style.backgroundColor =" #73693b";
}
function colorGris(){
    footer.style.backgroundColor = "#736F5D";
}
function amarilla(){
    mitad1.style.backgroundColor = "#F3DF7B";
}
function illaa(){
    mitad2.style.backgroundColor = "#F3DF7B";
}
function mitadamarilla(){
    mitad3.style.backgroundColor = "#F3DF7B";
}
