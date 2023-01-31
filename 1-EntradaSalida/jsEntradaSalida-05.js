/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	
	nombre = document.getElementById("txtIdNombre").value;

	edad = document.getElementById("txtIdEdad").value;

	//concatenar: hacer espacios en blanco es para que no se quede pegado al texto.
	//el signo + es para pegar caracteres a otros.
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");

}

