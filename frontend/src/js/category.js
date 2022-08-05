//Código que permite cambiar la imagen de fondo, utilizando las funciones hover y leave.

export const titleHover = (idElement) => {
    if (window.screen.width >= 1024) {
        const img = document.getElementById(idElement);
        img.classList.replace('category-hidden', 'category-img');
    }
};

export const titleLeave = (idElement) => {

    if (window.screen.width >= 1024) {
        const img = document.getElementById(idElement);
        img.classList.replace('category-img', 'category-hidden');
    }
};