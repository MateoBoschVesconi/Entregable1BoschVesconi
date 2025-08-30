const productos = [
  { nombre: "Remera", precio: 5000 },
  { nombre: "Pantalon", precio: 10000 },
  { nombre: "Zapatilla", precio: 15000 },
  { nombre: "Gorra", precio: 3000 },
  { nombre: "Lentes", precio: 2500 },
];

let carrito = [];
let total = 0;

const listaProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("carrito");
const totalElemento = document.getElementById("total");
const btnFinalizar = document.getElementById("finalizar");

function mostrarProductos() {
  productos.forEach((producto, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <span>${producto.nombre} - $${producto.precio}</span>
      <button data-index="${index}">Agregar</button>
    `;
    listaProductos.appendChild(div);
  });
}

function agregarAlCarrito(indice) {
  const productoElegido = productos[indice];
  carrito.push(productoElegido);
  total += productoElegido.precio;

  renderCarrito();
}

function renderCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });

  totalElemento.textContent = total;
}

btnFinalizar.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  let resumen = "Resumen de tu compra:\n";
  carrito.forEach((item) => {
    resumen += `- ${item.nombre} - $${item.precio}\n`;
  });
  resumen += `Total a pagar: $${total}`;

  alert(resumen);
  console.log(resumen);

  carrito = [];
  total = 0;
  renderCarrito();
});

listaProductos.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-index");
    agregarAlCarrito(index);
  }
});

mostrarProductos();
