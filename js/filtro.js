

window.addEventListener("load", () => {
  //Alcargar la pagina le añadimos la clase imagenes cargadas
  const grid = new Muuri(".grid", {
    layout: {
         rounding:false
    }
  });
 grid.refreshItems().layout();
  document.getElementById("grid").classList.add("imagenes-cargadas");

  const enlaces = document.querySelectorAll("#categorias a");
  enlaces.forEach( (elemento) => {
     elemento.addEventListener("click", (e) => {
      
      e.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove("activo")); // eliminamos la clase activo a los enlaces al dar click
      e.target.classList.add("activo"); //y activamos la clase activo al enlace preciso que estamos cliqueando a travez de e.target
      const categoria = e.target.innerHTML.toLowerCase();  // para transformarlo en minuscula
      categoria === "todo" ? grid.filter(`[data-categoria]`) : grid.filter(`[data-categoria="${categoria}"]`);
      //si la categoria es igual a todos nos muestra toda la data-categoria, si data-categoria es igual a categoria, nos muestra la categoria
      //hemos utilizado un nuevo metodo de condicional if y else en la linea de arriba
     });
  });
  //TRABAJAMOS AHORA CON LA BARRA DE BUSQUEDA
  document.querySelector("#barra-busqueda").addEventListener("input", (e) => {
      const busqueda = e.target.value.toLowerCase();
      // grid.filter nos muestra los elementos que cumplen o incluyen ciertas carracteristicas
      grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda));

  });
});
const buscar = document.querySelector(".buscar");
const barraBusqueda = document.querySelector(".barra-busqueda");

buscar.addEventListener("click",(e) => {
   barraBusqueda.style.display = 'flex';
});