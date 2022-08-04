//Código que permite cambiar la imagen de fondo, utilizando las funciones hover y leave.

export const titleHover = (idElement) => {
    const img = document.getElementById(idElement);
    img.classList.replace('category-hidden', 'category-img');
};

export const titleLeave = (idElement) => {
    const img = document.getElementById(idElement);
    img.classList.replace('category-img', 'category-hidden');
};