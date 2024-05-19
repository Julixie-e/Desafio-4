
function SumaProductos (cantidadDeseada, precioUnitario){
    let total = precioUnitario * cantidadDeseada
    return total;

}


let cantidadDeseada = parseInt (prompt ( "ingrese la cantidad de zapatillas que quiere compar:"))
let precioUnitario = 7000;
let totalcompra =  SumaProductos (cantidadDeseada, precioUnitario);
alert ( " El total de su compra es de $ " +  totalcompra);