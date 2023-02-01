/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//variable.
	let dividendo;
	let divisor;
	let resultado;

	//dato.
	dividendo = document.getElementById("txtIdNumeroDividendo").value;

	dividendo = parseInt(dividendo);

	divisor = document.getElementById("txtIdNumeroDivisor").value;

	divisor = parseInt(divisor);

	//hace la cuenta.
	resultado = dividendo % divisor;

	//muestra el resultado.
	alert("El resto es " + resultado);

}
