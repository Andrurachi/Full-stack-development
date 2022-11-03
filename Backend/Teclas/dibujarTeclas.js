var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
//document.addEventListener("mouse down", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var positionX = 150;
var positionY = 150;
var long_linea = 1;

function dibujarLineas (color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento){
    
    switch(evento.keyCode){

        case teclas.UP:
            dibujarLineas("red", positionX, positionY, positionX, positionY - long_linea, papel);
            positionY -= long_linea;
        break;

        case teclas.DOWN:
            dibujarLineas("red", positionX, positionY, positionX, positionY + long_linea, papel);
            positionY += long_linea;
        break;

        case teclas.LEFT:
            dibujarLineas("red", positionX, positionY, positionX - long_linea, positionY, papel);
            positionX -= long_linea;
        break;

        case teclas.RIGHT:
            dibujarLineas("red", positionX, positionY, positionX + long_linea, positionY, papel);
            positionX += long_linea;
        break;
    }
}