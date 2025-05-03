const color2 =document.querySelector('.switch2');

color2.addEventListener('click', e=>{
    color2.classList.toggle('active');
    document.body.classList.toggle('active');

    const solIcon = color2.querySelector('.bi-brightness-high-fill');
    const lunaIcon = color2.querySelector('.bi-moon-fill');
// solIcon.classList.toggle('d-none');
// lunaIcon.classList.toggle('d-none');
})






