const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
// const link = document.getElementsByClassName("navegacion--enlace");


abrir.addEventListener('click', () => {
    nav.classList.add("visible");
})


function link__presionar(){
    return nav.classList.remove("visible");

}



cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})

