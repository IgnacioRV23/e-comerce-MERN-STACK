let counter = 1;

const imgBanner1 = document.getElementById("imgBanner1");

const imgBanner2 = document.getElementById("imgBanner2");

const imgBanner3 = document.getElementById("imgBanner3");

const imgBanner4 = document.getElementById("imgBanner4");

const imgBanner5 = document.getElementById("imgBanner5");

const carousel = () => {
    switch (counter) {
        case 1:
            //Se oculta al lado izquierdo la imagen 4.
            imgBanner5.classList.remove("img-right");
            imgBanner5.classList.add("img-left");

            //Se añaden los estilos para la transcición de la imagen.
            imgBanner1.classList.replace("img-show", "img-right");
            imgBanner2.classList.replace("img-left", "img-show");
            counter = 2;
        break;

        case 2:
            //Se oculta al lado izquierdo la imagen 1.
            imgBanner1.classList.replace("img-right", "img-left");

            //Se añaden los estilos para la transcición de la imagen.
            imgBanner2.classList.replace("img-show", "img-right");
            imgBanner3.classList.replace("img-left", "img-show");
            counter = 3;
        break;

        case 3:
            //Se oculta al lado izquierdo la imagen 2.
            imgBanner2.classList.replace("img-right", "img-left");

            //Se añaden los estilos para la transcición de la imagen.
            imgBanner3.classList.replace("img-show", "img-right");
            imgBanner4.classList.replace("img-left", "img-show");
            counter = 4;
        break;

        case 4:
            //Se oculta al lado izquierdo la imagen 3.
            imgBanner3.classList.replace("img-right", "img-left");

            //Se añaden los estilos para la transcición de la imagen.
            imgBanner4.classList.replace("img-show", "img-right");
            imgBanner5.classList.replace("img-left", "img-show");
            counter = 5;
        break;

        case 5:
            //Se oculta al lado izquierdo la imagen 4.
            imgBanner4.classList.replace("img-right", "img-left");

            //Se añaden los estilos para la transcición de la imagen.
            imgBanner5.classList.replace("img-show", "img-right");
            imgBanner1.classList.replace("img-left", "img-show");
            counter = 1;
        break;
    }
}

setInterval(carousel, 4000);