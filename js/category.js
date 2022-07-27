//Código que permite que al hacer hover en los titulos de las categorias, cambia el fondo de color de elemento contenedor.

//Sección de la categoria de electronica.
const imgElec = document.getElementById("imgElec");
const titleElec = document.getElementById("titleElec");

titleElec.addEventListener("mouseover", () => {
    imgElec.classList.add("category-img-hover");
});

titleElec.addEventListener("mouseleave", () => {
    imgElec.classList.remove("category-img-hover");
});


//Sección de la categoria de mujer.
const imgWoman = document.getElementById("imgWoman");
const titleWoman = document.getElementById("titleWoman");

titleWoman.addEventListener("mouseover", () => {
    imgWoman.classList.add("category-img-hover");
});

titleWoman.addEventListener("mouseleave", () => {
    imgWoman.classList.remove("category-img-hover");
});


//Sección de la categoria de hombre.
const imgMan = document.getElementById("imgMan");
const titleMan = document.getElementById("titleMan");

titleMan.addEventListener("mouseover", () => {
    imgMan.classList.add("category-img-hover");
});

titleMan.addEventListener("mouseleave", () => {
    imgMan.classList.remove("category-img-hover");
});


//Sección de la categoria de hogar.
const imgHome = document.getElementById("imgHome");
const titleHome = document.getElementById("titleHome");

titleHome.addEventListener("mouseover", () => {
    imgHome.classList.add("category-img-hover");
});

titleHome.addEventListener("mouseleave", () => {
    imgHome.classList.remove("category-img-hover");
});