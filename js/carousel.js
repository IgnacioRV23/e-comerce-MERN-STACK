let counter = 1;

const carousel = () => {
    
    const imgCarousel = document.getElementById("imgCarousel");

    switch (counter) {
        case 1:
            imgCarousel.src = "/img/banner1.png";
            counter = 2;
        break;

        case 2:
            imgCarousel.src = "/img/banner2.png";
            counter = 3;
        break;

        case 3:
            imgCarousel.src = "/img/banner3.png";
            counter = 4;
        break;

        case 4:
            imgCarousel.src = "/img/banner4.png"
            counter = 1;
        break;
    }
}

setInterval(carousel, 4000);