  
const productos = [
    {
        id: 1,
        nombre: "Mercedes Benz",
        precio: 5421300,
        imagen1: "./img/img-agencia-coches/images10.jpg",
        imagen2: "./img/img-agencia-coches/images14.jpg",
        imagen3: "./img/img-agencia-coches/images9.jpg",
        color: "Verde",
        combustible: "Gasolina",
        caja: "Automática"
    },
    {
        id: 2,
        nombre: "Toyota Rav4",
        precio: 6458500,
        imagen1: "./img/img-agencia-coches/images14.jpg",
        imagen2: "./img/img-agencia-coches/images7.jpg",
        imagen3: "./img/img-agencia-coches/images9.jpg",
        color: "Blanco",
        combustible: "Gasoil",
        caja: "Automática"
    },
    {
        id: 3,
        nombre: "Hyundai",
        precio: 7558760,
        imagen1: "./img/img-agencia-coches/images9.jpg",
        imagen2: "./img/img-agencia-coches/images10.jpg",
        imagen3: "./img/img-agencia-coches/images14.jpg",
        color: "Azul",
        combustible: "Gasolina",
        caja: "Automática"
    }, 
    {
        id: 3,
        nombre: "Mercedes Benz",
        precio: 9458760,
        imagen1: "./img/img-agencia-coches/images7.jpg",
        imagen2: "./img/img-agencia-coches/images7.jpg",
        imagen3: "./img/img-agencia-coches/images9.jpg",
        color: "Gris",
        combustible: "Gasoil",
        caja: "Manual"
    },
    {
     id: 2,
     nombre: "Toyota Rav4",
     precio: 8548550,
     imagen1: "./img/img-agencia-coches/images14.jpg",
     imagen2: "./img/img-agencia-coches/images7.jpg",
     imagen3: "./img/img-agencia-coches/images9.jpg",
     color: "Blanco",
     combustible: "Gasoil",
     caja: "Automática"
 },
 {
     id: 3,
     nombre: "Hyundai",
     precio: 4545.760,
     imagen1: "./img/img-agencia-coches/images9.jpg",
     imagen2: "./img/img-agencia-coches/images10.jpg",
     imagen3: "./img/img-agencia-coches/images7.jpg",
     color: "Azul",
     combustible: "Gasolina",
     caja: "Manual"
 }, 
 {
     id: 2,
     nombre: "Toyota Rav4",
     precio: 858500,
     imagen1: "./img/img-agencia-coches/images14.jpg",
     imagen2: "./img/img-agencia-coches/images7.jpg",
     imagen3: "./img/img-agencia-coches/images9.jpg",
     color: "Gris",
     combustible: "Gasolina",
     caja: "Automática"
 },
 {
     id: 3,
     nombre: "Hyundai",
     precio: 458.760,
     imagen1: "./img/img-agencia-coches/images9.jpg",
     imagen2: "./img/img-agencia-coches/images10.jpg",
     imagen3: "./img/img-agencia-coches/images10.jpg",
     color: "Rojo vino",
     combustible: "Gasoil",
     caja: "Manual"
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
 
 function generarProductoHTML(producto) {
     const productoHTML = `
     <div class="producto">
     <div class="slider">
     <div class="product-info">
     <h2><span>Marca:</span> ${producto.nombre}</h2>
     <h2><span>Color:</span> ${producto.color}</h2>
     <h2><span>Precio:</span> ${formatPrecio(producto.precio)}</h2>
     <h2><span>Combustible:</span> ${producto.combustible}</h2>
     <h2><span>Tipo de caja:</span> ${producto.caja}</h2>
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
     const mensaje = `Hola, me interesa el coche Marca ${producto.nombre}  que tiene el precio de ${formatPrecio(producto.precio)}  y el ID = ${producto.id}.  ¿podemos hablar sobre él?`
     const url = `https://wa.me/240555685775?text=${encodeURIComponent(mensaje)}`;
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
