/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reserva espacio en memoria para guardar nombre del usuario
	let nombre;

	//guardo en la variable el nombre que escribio el usuario de la ventana prompt
	nombre = prompt("ingrese su nombre");

	// buscamos un id que no se encuentra en la pagina js y que lo podemos encontar en la pag de html.
	document.getElementById(txtIdNombre).value = nombre;

	alert(nombre)
}

