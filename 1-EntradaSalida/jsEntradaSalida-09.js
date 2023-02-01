
/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//varieble 
	//para calcular aumento de sueldo.
	let sueldo;
	let aumento;
	let nuevoSueldo;

	//dato
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	
	//calcular
	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;
}
