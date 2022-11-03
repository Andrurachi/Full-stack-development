var texto = document.getElementById ("n_lineas");
var boton = document.getElementById ("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

dibujarLineas(1, 1, 1, 300);
dibujarLineas(0, 0, 300, 0);
dibujarLineas(300, 0, 300, 300);
dibujarLineas(300, 300, 0, 300);

function dibujarLineas (x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = "blue";
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var yi, xf;
    var x = 0;
    var espacio = ancho / lineas;
 
    while(x < lineas)
{
    dibujarLineas(0, yi, xf, 300);
    yi = espacio * x;
    xf = espacio * (x + 1);
    x = x + 1;  

}
x = 0, yi = 0, xf = 300;
while(x < lineas)
{
dibujarLineas(300, yi, xf, 300);
yi = espacio * (x + 1);
xf = xf - espacio;
x = x + 1;  
}
x = 0, yi = 0, xf = 0;
while(x< lineas)
{
dibujarLineas(300, yi, xf, 0);
yi = espacio * x;
xf = espacio * (x + 1);
x = x + 1;  
}
x = 0, yi = 0, xf = 300;
while(x < lineas)
{
dibujarLineas(0, yi, xf, 0);
yi = espacio * (x + 1);
xf = xf - espacio;
x = x + 1;  
} 


}

