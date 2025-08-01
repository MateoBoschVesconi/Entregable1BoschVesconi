const productos = [
  { nombre: "Remera", precio: 5000 },
  { nombre: "Pantalon", precio: 10000 },
  { nombre: "Zapatilla", precio: 15000 },
  { nombre: "Gorra", precio: 3000 },
  { nombre: "Lentes", precio: 2500 },
];

let carrito = [];
let total = 0;

function mostrarProductos() {
  let mensaje = "¿Que Productos le gustaria comprar?\n";

  for (let i = 0; i < productos.length; i++) {
    mensaje += `${i + 1}.${productos[i].nombre} - ${productos[i].precio}\n`;
  }
  mensaje += "Ingresa el numero del producto: ";
  let opcion = prompt(mensaje);

  return opcion;
}

let seguirComprando = true;

while (seguirComprando) {
  let opcion = mostrarProductos();

  if (opcion >= 1 && opcion <= productos.length) {
    let indice = Number(opcion) - 1;
    let productoElegido = productos[indice];

    carrito.push(productoElegido);
    total += productoElegido.precio;

    alert(
      `Agregaste ${productoElegido.nombre} al carrito. Total Hasta ahora: ${total}`
    );
  } else {
    alert("Opcion Invalida, Porfavor elige un numero correcto.  ");
  }

  seguirComprando = confirm("¿Queres comprar otro producto?");
}

// Mostrar resumen final
let resumen = "Resumen de tu compra:\n";
for (let i = 0; i < carrito.length; i++) {
  resumen += `- ${carrito[i].nombre} - ${carrito[i].precio}\n`;
}
resumen += `Total a pagar: ${total}`;
alert(resumen);
console.log(resumen);
