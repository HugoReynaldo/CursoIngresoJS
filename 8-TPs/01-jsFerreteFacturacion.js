/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioNumeroUno;
    let precioNumeroDos;
    let precioNumeroTres;
    let suma;

    //datos que traigo y lo paso a numero 
    precioNumeroUno = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precioNumeroDos = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precioNumeroTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    //con esto se hace la cuenta
    suma = precioNumeroUno + precioNumeroDos + precioNumeroTres;

    //mostralo al usuario.
    alert("La suma es $ " + suma);

    
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);

    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);

    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    alert("El promedio es $ " + suma / 3);
    

}
function PrecioFinal () 
{
	
}