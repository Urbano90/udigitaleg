

const form = document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.querySelector(".name").value;
    const tel = document.querySelector(".tel").value;
    const email = document.querySelector(".email").value;
    const message = document.querySelector(".message").value;
    
    if(name==""|| tel=="" ||email==""|| message=="") {
        alert("Por favor, rellene los campos del formulario");
        return false;
    }
    const emailUrl = `mailto:info@udigitaleg.com?subject=Formulario de contacto&body=Nombre: ${name} \r\n \r\n Correo electronico: ${email} \r\n \r\n Teléfono: ${tel} \r\n \r\n Mensaje:${message}`;
    window.location.href = emailUrl;
    form.reset();
});