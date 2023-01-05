var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "gray";
pincel.fillRect(0, 0, 600, 400);

function exhibirAlerta(evento) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;
  console.log(evento);
  alert(x + "," + y);
}

//everytime it clicks, it will draw a circle
function exhibirAlerta(evento) {
  var x = evento.pageX - pantalla.offsetLeft;
  var y = evento.pageY - pantalla.offsetTop;

  pincel.fillStyle = "blue";
  pincel.beginPath();
  pincel.arc(x, y, 10, 0, 2 * 3.14);
  pincel.fill();
  console.log(x + "," + y);
}

pantalla.onclick = exhibirAlerta;
