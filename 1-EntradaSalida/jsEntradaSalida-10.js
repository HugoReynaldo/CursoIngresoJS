/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe; 
	let resultado;
	let descuento;
	//pedir datos para el inporte.
	importe = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 / 100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = descuento;

}
