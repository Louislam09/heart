// var texto = document.getElementById('texto_lineas1');
var col = document.getElementById('color');
// var col = document.getElementById('texto_color1');
var boton = document.getElementById('botoncito1');
boton.addEventListener('click', dibujo);

var c = document.getElementById('dibujito1');
var ctx = c.getContext('2d');
var cw = (c.width = 250);
var ch = (c.height = 250);
var cx = cw / 2,
	cy = ch / 2;
var rad = Math.PI / 180;
// var color_usuario = col.value;

function dibujo() {
	// if (col.value == 'AZUL') color_usuario = 'blue';
	// else if (col.value == 'BLANCO' || col.value == 'BLANCA') color_usuario = 'white';
	// else if (col.value == 'ROJO' || col.value == 'ROJA') color_usuario = 'red';
	// else if (col.value == 'AMARILLO' || col.value == 'AMARILLA') color_usuario = 'yellow';
	// else if (col.value == 'ROSADO' || col.value == 'ROSADA') color_usuario = 'pink';
	// else if (col.value == 'NARANJA') color_usuario = 'orange';
	// else if (col.value == 'MARRON') color_usuario = 'brown';
	// else if (col.value == 'GRIS') color_usuario = 'gray';
	// else if (col.value == 'MORADO' || col.value == 'MORADA') color_usuario = 'purple';
	// else if (col.value == 'VERDE') color_usuario = 'green';
	// else if (col.value == '') alert('Escriba un color');
	ctx.lineWidth = 3;

	var r = 5;
	ctx.beginPath();
	// ctx.fillStyle = color_usuario;

	for (var t = 0; t < 360; t++) {
		var x = cx + 16 * r * (Math.sin(t * rad) * Math.sin(t * rad) * Math.sin(t * rad));
		var y =
			cy -
			13 * r * Math.cos(t * rad) +
			5 * r * Math.cos(2 * t * rad) +
			2 * r * Math.cos(3 * t * rad) +
			r * Math.cos(4 * t * rad);
		ctx.lineTo(x, y);
	}
	ctx.closePath();
	ctx.fill();
	ColorChosen();
}
function ColorChosen() {
	var colorSeleccionado = document.getElementById('colorSelector').value;
	ctx.fillStyle = colorSeleccionado;
}
