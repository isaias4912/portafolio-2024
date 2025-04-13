$(document).ready(function(){
    $(".sidemenu-toggler").click(function(){
        $(".sidemenu").addClass("active");
    });
    $(".close").click(function(){
        $(".sidemenu").removeClass("active");
    });

    // $(window).scroll(function(){
    //     var sc= $(window).scrollTop();
    //     if(sc>150){
    //         $(".header").addClass("sticky");

    //     }else{
    //         $(".header").removeClass("sticky");
    //     }
    // });
    let menu = document.querySelector('.stik');

window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 20) {
    menu.classList.add('sticky');
  } else {
    menu.classList.remove('sticky');
  }
});

});


// const formulario = document.getElementById('formularioContacto');
// const mensajeConfirmacion = document.getElementById('mensajeconfirmacion');
// formulario.addEventListener('submit', function(event) {
//   event.preventDefault(); // Evita el envío del formulario por defecto

//   // Enviar el formulario (código para enviar el formulario al servidor)

//   // Mostrar mensaje de confirmación
//   mensajeConfirmacion.style.display = 'block';
// });


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formularioContacto");
    const mensajeDiv = document.getElementById("formMensaje");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const nombre = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const mensaje = form.querySelector('textarea[name="message"]');

        const data = new FormData();
        data.append("name", nombre.value);
        data.append("email", email.value);
        data.append("message", mensaje.value);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                // Limpiar campos
                nombre.value = "";
                email.value = "";
                mensaje.value = "";

                mostrarMensaje("¡Mensaje enviado con éxito!", "green");
            } else {
                mostrarMensaje("Hubo un error al enviar el mensaje.", "red");
            }
        } catch (error) {
            mostrarMensaje("Error de conexión. Inténtalo más tarde.", "red");
        }
    });
    function mostrarMensaje(texto, color) {
      mensajeDiv.style.color = color;
      mensajeDiv.textContent = texto;
      setTimeout(() => {
        mensajeDiv.textContent = "";
      }, 5000);
    }

   
});

// const swith =document.querySelector('.switch');

// swith.addEventListener('click',e=>{
//     swith.classList.toggle('active');
// })





















