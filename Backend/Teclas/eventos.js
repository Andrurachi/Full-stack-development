document.addEventListener("mousedown",pressMouse);
document.addEventListener("mouseup",releaseMouse);
document.addEventListener("keydown",eraser); 
document.addEventListener("mousemove",dibujarMouse); 


var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var positionX = 150;
var positionY = 150;
var long_linea = 1;
var ispressed = false;
var borrar = 0;

function pressMouse(evento){
    ispressed = true;
    positionX = evento.layerX;
    positionY = evento.layerY;
}

function releaseMouse(evento){
    ispressed = false;
    positionX = evento.layerX;
    positionY = evento.layerY;
}

function eraser(evento){
    if(evento.keyCode == 66){
        if(borrar == 1){
            borrar = 0;
        }else{
            borrar = 1;
        }
    }
    positionX = evento.layerX;
    positionY = evento.layerY;
}

function dibujarLineas(color, x_inicial, y_inicial, x_final, y_final, lienzo, ancho)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = ancho;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse(evento){
    
    if(ispressed && borrar == 0){
        dibujarLineas("red", positionX, positionY, evento.layerX, evento.layerY, papel, 1);
    }
    else if(ispressed && borrar == 1){
        dibujarLineas("white", positionX, positionY, evento.layerX, evento.layerY, papel, 20);
    }
    positionX = evento.layerX;
    positionY = evento.layerY;
}