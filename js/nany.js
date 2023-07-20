   
   
const productos = [
    {
        id: 1,
        nombre: "Abanico",
        precio: 21000,
        imagen1: "./img/abanico rojo.png",
        imagen2: "./img/collar de olaca.png",
        imagen3: "./img/bolso de mano .png",
        color: "Rojo",
    },
    {
        id: 2,
        nombre: "Bolso de mano",
        precio: 5600,
        imagen1: "./img/bolso de mano .png",
        imagen3: "./img/Abanico rosa.jpg",
        imagen2: "./img/collar de olaca.png",
        color: "verde , azul",
    },
    {
        id: 3,
        nombre: "Collar",
        precio: 755760,
        imagen1: "./img/collar de olaca.png",
        imagen2: "./img/bolso gris.png",
        imagen3: "./img/bolso de mano .png",
        color: "Gris",
    }, 
    {
        id: 4,
        nombre: "Abanico",
        precio: 9760,
        imagen1: "./img/Abanico rosa.jpg",
        imagen2: "./img/collar de olaca.png",
        imagen3: "./img/bolso de mano .png",
        color: "Rosa",
    },
    {
     id: 5,
     nombre: "Bolso",
     precio: 4850,
     imagen1: "./img/bolso gris.png",
     imagen2: "./img/Abanico rosa.jpg",
     imagen3: "./img/collar de olaca.png",
     color: "Gris",
 },
 {
     id: 6,
     nombre: "Chancletas",
     precio: 45760,
     imagen1: "./img/chancletas violeta.png",
     imagen3: "./img/bolso de mano .png",
     imagen2: "./img/collar de olaca.png",
     color: "Violeta",
 }, 
 {
     id: 7,
     nombre: "collar",
     precio: 8500,
     imagen1: "./img/collar de bolas.png",
     imagen2: "./img/Abanico rosa.jpg",
     imagen3: "./img/bolso de mano .png",
     color: "Gris",
 },
 {
     id: 8,
     nombre: "Bolso",
     precio: 45760,
     imagen1: "./img/bolso marron.png",
     imagen2: "./img/collar de olaca.png",
     imagen3: "./img/bolso de mano .png",
     color: "Marrón",
 }, 
    
 ];
 
 // FORMATO DE PRECIO le damos el formato de precio automatico internacional y le vamos añadiendo el formatPrecio a todo lo que tiene que ver con moneda
 const formatPrecio = (precio) => {
     const newPrecio = new window.Intl.NumberFormat("es-ES", {
         style: "currency",
         currency: "XAF"
     }).format(precio);
     return newPrecio;
 }
 
 const form = document.querySelector(".container-suscribirse");
 function generarProductoHTML(producto) {
    const productoHTML = `
    <div class="producto">
    <div class="slider">
    <div class="product-info">
    <h2><span>Nombre:</span> ${producto.nombre}</h2>
    <h2><span>Precio:</span> ${formatPrecio(producto.precio)}</h2>
    <h2><span>Color:</span> ${producto.color}</h2>
    </div>
    <img src="${producto.imagen1}" alt="${producto.nombre}">
    <img src="${producto.imagen2}" alt="${producto.nombre}">
    <img src="${producto.imagen3}" alt="${producto.nombre}">
    </div>
    <button class="enviar" onclick="enviarPorWhatsapp(${producto.id})">Solicitar compra</button>
    </div>`;
    document.querySelector(".productos").innerHTML += productoHTML;
};

            
  function cargarProductos() {
     for(const producto of productos) {
         generarProductoHTML(producto);
     }
  }
  

  function enviarPorWhatsapp(id) {
     const producto = productos.find(p =>p.id === id);
     const mensaje = `Hola Moda Nany, me interesa el producto de nombre ${producto.nombre}  que tiene el precio de ${formatPrecio(producto.precio)}  y el ID = ${producto.id}.  ¿podemos hablar sobre él?`
     const url = `https://wa.me/240555517225?text=${encodeURIComponent(mensaje)}`;
     window.open(url)
     form.reset();
  }
 
  window.onload = function() {
     cargarProductos();
  }
 
/***Si el scroll es mayor que 0 activa la classe logo gira a 360deg */
window.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector(".logo").classList.add("active");
    } else {
        document.querySelector(" .logo").classList.remove("active");
    }
    navbar.classList.remove("active");
};
  