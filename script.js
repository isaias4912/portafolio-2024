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
const formulario = document.getElementById('formularioContacto');
const mensajeConfirmacion = document.getElementById('mensajeconfirmacion');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Enviar el formulario (código para enviar el formulario al servidor)

  // Mostrar mensaje de confirmación
  mensajeConfirmacion.style.display = 'block';
});





