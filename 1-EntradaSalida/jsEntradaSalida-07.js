/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
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
	resultado = primerNumero - segundoNumero;

	//resultado 
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	//variable
	let primerNumero;
	let segundoNumero; 
	let resultado;

	//pedir datos
	primerNumero = document.getElementById("txtIdNumeroUno").value;

	//pasarlo a numeros
	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById("txtIdNumeroDos").value;

	segundoNumero = parseInt(segundoNumero)

	//hace la cuenta
	resultado = primerNumero * segundoNumero;

	//resultado 
	alert("La mustiplicacion es " + resultado);
}

function dividir()
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
	resultado = primerNumero / segundoNumero;

	//resultado 
	alert("La divicion es " + resultado);
}

