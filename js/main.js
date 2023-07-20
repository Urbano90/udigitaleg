const btnDepartamentos = document.getElementById('btn-departamentos');
const CerrarBtnDepartamentos = document.getElementById('cerrar-btn-departamentos');
const contenedor = document.querySelector("main");
const grids = document.getElementById('grids');
const contenedorEnlacesnav = document.querySelector('#menu .contenedor-enlaces-nav');
const contenedorSubcategorias = document.querySelector('#grids .contenedor-subcategorias');
const enlaces = document.querySelector(".enlaces")
const cuerpo = document.querySelector(".cuerpo");
const btnCerrarMenu = document.getElementById('btn-menu-cerrar');   /* const cerrar menu */
const  esDispositivoMovil = () => window.innerWidth <= 900;   /* cuando es un dispositivo movil y la pantalla es menor a 800px */
const categorias = document.querySelector(".categorias");

btnDepartamentos.addEventListener('click', () => { /* cuando pasamos el cursor en la grids queremos mostrarlo activo*/
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
    grids.classList.add('activo');
    btnDepartamentos.style.display="none";
    CerrarBtnDepartamentos.classList.add("activo");
    document.querySelector('body').style.overflow = 'hidden'; /* activamos el scroll cuando el menu no está activo */
    document.querySelector('main').style.opacity = '.7'; /* activamos el scroll cuando el menu no está activo */
   }
});

categorias.addEventListener('click', () => {
  document.querySelector(".mensaje-subcategoria").style.display="none";
});

CerrarBtnDepartamentos.addEventListener('click', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
    grids.classList.remove('activo');
    btnDepartamentos.style.display="flex";
    CerrarBtnDepartamentos.classList.remove("activo");
    document.querySelector('body').style.overflow = 'visible'; /* activamos el scroll cuando el menu no está activo */
    document.querySelector('main').style.opacity = '1'; /* activamos el scroll cuando el menu no está activo */
   }
});

contenedor.addEventListener('click', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
    grids.classList.remove('activo');
    btnDepartamentos.style.display="flex";
    CerrarBtnDepartamentos.classList.remove("activo");
    document.querySelector('body').style.overflow = 'visible'; /* activamos el scroll cuando el menu no está activo */
    document.querySelector('main').style.opacity = '1'; /* activamos el scroll cuando el menu no está activo */
   }
});

/* Aquí vamos a empezar a filtrar todos los elementos de la subcategoria para poder mostrarlos cuando pasamos el cursor en las diferentes categorias*/
document.querySelectorAll('#menu .categorias a').forEach ((elemento) => {  /* Accedemos a todos los enlaces de las categorias*/
  elemento.addEventListener('mouseover', (e) => {  /* Por cada elemento le pasamos un eventLisstener para mostrar los elementos */
      if(!esDispositivoMovil()) {
        document.querySelectorAll('#menu .subcategoria').forEach ((categoria) =>{
          categoria.classList.remove('activo');
          if(categoria.dataset.categoria == e.target.dataset.categoria) {
            categoria.classList.add('activo');
          }
        });
      }
  });
});

/* trabajamos para dispositivos móviles cuando hacemos click en el menu*/
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {  /* hacemos aparecer y desaparecer el menu de la izquierda cuando hacemos click al icono menu */
  e.preventDefault();
  if(contenedorEnlacesnav.classList.contains('activo')){
    contenedorEnlacesnav.classList.remove('activo');   /* aparecer el menu */
    btnCerrarMenu.classList.remove("activo");
    document.querySelector('body').style.overflow = 'visible'; /* activamos el scroll cuando el menu no está activo */
    document.querySelector('main').style.opacity = '1'; /* activamos el scroll cuando el menu no está activo */
  }else {
    contenedorEnlacesnav.classList.add('activo');  /* desaparecer el menu */
    btnCerrarMenu.classList.add("activo");
    document.querySelector('body').style.overflow = 'hidden' ; /* Desactivamos el scroll cuando el menu está activo */
    document.querySelector('main').style.opacity = '.7'; /* activamos el scroll cuando el menu no está activo */
  }
});

contenedor.addEventListener('click', () => {
  if(esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grids al pasar el cursor*/
  contenedorEnlacesnav.classList.remove('activo');   /* aparecer el menu */
  btnCerrarMenu.classList.remove("activo");
  document.querySelector('body').style.overflow = 'visible'; /* activamos el scroll cuando el menu no está activo */
  document.querySelector('main').style.opacity = '1'; /* activamos el scroll cuando el menu no está activo */
    CerrarBtnDepartamentos.classList.remove("activo");
   }
});
/* Todos los departamentos para mostrar en pantalla cuando se hace un click */
btnDepartamentos.addEventListener('click', (e) => {
  e.preventDefault();
  grids.classList.add('activo');
  btnCerrarMenu.classList.add('activo');
});

/* Boton de regresar en el menu de categorías */
document.querySelector('#grids .categorias .btn-regresar').addEventListener('click', (e) => {
  e.preventDefault();
  grids.classList.remove('activo');
  
});

document.querySelectorAll('#menu .categorias a').forEach ((elemento) => {
  elemento.addEventListener('click', (e) => {
    if(esDispositivoMovil()) {
      contenedorSubcategorias.classList.add('activo')
      document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
        categoria.classList.remove('activo');
          if(categoria.dataset.categoria == e.target.dataset.categoria) {
            categoria.classList.add('activo');
          }
      })
    }
  })
});

/* Al pulsar cualquier link del menu  */
enlaces.addEventListener("click", function() {
  if(esDispositivoMovil()) {
    grids.classList.remove('activo');
    contenedorEnlacesnav.classList.remove('activo'); 
    btnCerrarMenu.classList.remove("activo");
  document.querySelector("body").style.overflow="visible"; 
  document.querySelector('main').style.opacity = '1'; /* activamos el scroll cuando el menu no está activo */ 
  }
});

document.querySelectorAll("#grids .subcategoria .enlaces-subcategoria .pagina").forEach ((elemento) => {
  elemento.addEventListener('click', (e) => {
  if(esDispositivoMovil()) {
    grids.classList.remove('activo');
    contenedorEnlacesnav.classList.remove('activo');
    btnCerrarMenu.classList.remove("activo"); 
    document.querySelector("body").style.overflow="visible"; 
    document.querySelector('main').style.opacity = '1'; /* activamos el scroll cuando el menu no está activo */
    }
  })  
});

/* Boton regresar subcategorias */
document.querySelectorAll('#grids .contenedor-subcategorias .btn-regresar').forEach((boton) => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    contenedorSubcategorias.classList.remove('activo');
   });
});

/* Aqui programamos el boton de cerrar*/
btnCerrarMenu.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelectorAll('#menu .activo').forEach((elemento) => {
      elemento.classList.remove('activo');
  });
  document.querySelector('body').style.overflow = 'visible';  /*en esta linea activamos el scroll que hemos del body que hemos inhabilitado */
  document.querySelector('main').style.opacity = '1'; /* activamos el scroll cuando el menu no está activo */
});

