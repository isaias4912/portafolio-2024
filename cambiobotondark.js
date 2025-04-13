const color =document.querySelector('.switch');

color.addEventListener('click', e=>{
    color.classList.toggle('active');
    document.body.classList.toggle('active');

    const solIcon = color.querySelector('.bi-brightness-high-fill');
    const lunaIcon = color.querySelector('.bi-moon-fill');
// solIcon.classList.toggle('d-none');
// lunaIcon.classList.toggle('d-none');
})