//Código que permite que al hacer hover en los titulos de las categorias, cambia el fondo de color de elemento contenedor.

//Sección de la categoria de electronica.
const imgElec = document.getElementById("imgElec");
const titleElec = document.getElementById("titleElec");

titleElec.addEventListener("mouseover", () => {
    imgElec.classList.add("category-img");
    imgElec.classList.remove("category-hidden");
});

titleElec.addEventListener("mouseleave", () => {
    imgElec.classList.add("category-hidden");
    imgElec.classList.remove("category-img");
});


//Sección de la categoria de mujer.
const imgWoman = document.getElementById("imgWoman");
const titleWoman = document.getElementById("titleWoman");

titleWoman.addEventListener("mouseover", () => {
    imgWoman.classList.add("category-img");
    imgWoman.classList.remove("category-hidden");
});

titleWoman.addEventListener("mouseleave", () => {
    imgWoman.classList.add("category-hidden");
    imgWoman.classList.remove("category-img");
});

//Sección de la categoria de belleza.
const imgCare = document.getElementById("imgCare");
const titleCare = document.getElementById("titleCare");

titleCare.addEventListener("mouseover", () => {
    imgCare.classList.add("category-img");
    imgCare.classList.remove("category-hidden");
});

titleCare.addEventListener("mouseleave", () => {
    imgCare.classList.add("category-hidden");
    imgCare.classList.remove("category-img");
});


//Sección de la categoria de hogar.
const imgHome = document.getElementById("imgHome");
const titleHome = document.getElementById("titleHome");

titleHome.addEventListener("mouseover", () => {
    imgHome.classList.add("category-img");
    imgHome.classList.remove("category-hidden");
});

titleHome.addEventListener("mouseleave", () => {
    imgHome.classList.add("category-hidden");
    imgHome.classList.remove("category-img");
});


//Sección de la categoria de hombre.
const imgMan = document.getElementById("imgMan");
const titleMan = document.getElementById("titleMan");

titleMan.addEventListener("mouseover", () => {
    imgMan.classList.add("category-img");
    imgMan.classList.remove("category-hidden");
});

titleMan.addEventListener("mouseleave", () => {
    imgMan.classList.add("category-hidden");
    imgMan.classList.remove("category-img");
});


//Sección de la categoria de infantil.
const imgKids = document.getElementById("imgKids");
const titleKids = document.getElementById("titleKids");

titleKids.addEventListener("mouseover", () => {
    imgKids.classList.add("category-img");
    imgKids.classList.remove("category-hidden");
});

titleKids.addEventListener("mouseleave", () => {
    imgKids.classList.add("category-hidden");
    imgKids.classList.remove("category-img");
});