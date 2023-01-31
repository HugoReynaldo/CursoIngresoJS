/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2; 
	let resultado;

	resultado = num1 + num2;

	num1 = document.getElementById("txtIdNumeroUno").value;

	num1 = document.getElementById("txtIdNumeroDos").value;

	alert("La suma es " + resultado);
}

