/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//variable
	let primerNumero;
	let segundoNumero; 
	let resultado;

	//pedir datos
	primerNumero = document.getElementById("txtIdNumeroUno").value;

	//pasarlo a numeros
	primerNumero = parseInt(primerNumero)

	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	segundoNumero = parseInt(segundoNumero)

	//hace la cuenta
	resultado = primerNumero + segundoNumero;

	//resultado 
	alert("La suma es " + resultado);
}

