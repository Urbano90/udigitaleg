

//Aparicion de los textos de contactos cuando se pasa el cursor sobre el icono
document.querySelector(".llamada ").addEventListener("mouseover", () => {
    document.querySelectorAll(".llamada span").forEach((enlace) => {
       enlace.style.display="flex";
       enlace.style.transition="2s";
    })
});


document.querySelector(".llamada ").addEventListener("mouseleave", () => {
  document.querySelectorAll(".llamada  span").forEach((enlace) => {
     enlace.style.display="none";
  })
})

document.querySelector(".whatsapp ").addEventListener("mouseover", () => {
   document.querySelectorAll(".whatsapp span").forEach((enlace) => {
      enlace.style.display="flex";
      enlace.style.transition="2s";
   })
});
document.querySelector(".whatsapp ").addEventListener("mouseleave", () => {
   document.querySelectorAll(".whatsapp span").forEach((enlace) => {
      enlace.style.display="none";
   })
});