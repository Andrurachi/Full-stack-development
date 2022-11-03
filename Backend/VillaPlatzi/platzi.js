function aleatorio (min, max){
    var resultado;
    resultado = Math.floor(Math.random() *(max - min +1)) + min;
    return resultado;
}

function dibujarFondo(){
    papel.drawImage(fondo, 0, 0);
}

function dibujaVacas(x, y){
    papel.drawImage(vaca, x, y);
}

function dibujaCerdos(x, y){
    papel.drawImage(cerdo, x, y);
}

function dibujaPollos(x, y){
    papel.drawImage(pollo, x, y);
}

function checkKey(e) {

    if (e.keyCode == '38') {
        cerdo_loc_y -= 1
    }
    else if (e.keyCode == '40') {
        cerdo_loc_y += 1
    }
    else if (e.keyCode == '37') {
        cerdo_loc_x -= 1
    }
    else if (e.keyCode == '39') {
        cerdo_loc_x += 1
    }
}

function fps(){
    dibujarFondo();
    dibujaCerdos(cerdo_loc_x,cerdo_loc_y);
    for(f = 0; f < positions.length; f++){
        for(c = 0; c < positions[0].length; c++){

            if(positions[f][c] != 9){
    
                if(positions[f][c] == 1){
                    dibujaVacas(f*83, c*83);
                }
                else if(positions[f][c] == 2){
                    dibujaPollos(f*83, c*83);
                }
            }else{
                positions[f][c] = aleatorio(0,2);
            }
        }
    } 
}

function main() {
    identificadorIntervaloDeTiempo = setInterval(fps, 1000/60);
}

let identificadorIntervaloDeTiempo;

var positions = [
    [9,9,9,9,9,9,],
    [9,9,9,9,9,9,],
    [9,9,9,9,9,9,],
    [9,9,9,9,9,9,],
    [9,9,9,9,9,9,],
    [9,9,9,9,9,9,]
];

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = new Image();
fondo.src = "tile.png";

var vaca = new Image;
vaca.src = "vaca.png";

var cerdo = new Image;
cerdo.src = "cerdo.png";
var cerdo_loc_x = 210;
var cerdo_loc_y = 210;

var pollo = new Image;
pollo.src = "pollo.png";

document.onkeydown = checkKey;

main();

