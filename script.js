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

// var nav = document.querySelector('nav');

// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add('bg-dark', 'shadow');
//   } else {
//     nav.classList.remove('bg-dark', 'shadow');
//   }

// var header=document.getElementById('header');

// window.addEventListener('scroll',()=>{
//   var scroll = window.scrollY
//   if(scroll>10){
//     header.style.backgroundColor='#121212'
//   }else{
//     header.style.backgroundColor= '#3bb78f'
//   }
// });






