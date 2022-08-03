import React from 'react'
import { imgCategory } from '../js/imgCategory';

export const Category = () => {
    return (
        <div className="container_category">
            <section className="category">
                <img src={imgCategory.elec} alt="category-electronics" className="category-img" />
                <img src={imgCategory.elec2} alt="category-img2" id="imgElec"
                    className="category-hidden" />
                <a href="#" className="title-category" id="titleElec">Electrónica</a>
            </section>

            <section className="category">
                <img src={imgCategory.woman} alt="category-woman" className="category-img" />
                <img src={imgCategory.woman2} alt="category-woman" className="category-hidden" id="imgWoman" />
                <a href="#" className="title-category" id="titleWoman">Mujer</a>
            </section>

            <section className="category">
                <img src={imgCategory.care} alt="category-care" className="category-img" />
                <img src={imgCategory.care2} alt="category-care" className="category-hidden" id="imgCare" />
                <a href="#" className="title-category" id="titleCare">Salud y belleza</a>
            </section>

            <section className="category-home category">
                <img src={imgCategory.home} alt="category-home" className="category-img" />
                <img src={imgCategory.home2} alt="category-home" className="category-hidden" id="imgHome" />
                <a href="#" className="title-category" id="titleHome">Hogar</a>
            </section>

            <section className="category">
                <img src={imgCategory.man} alt="category-man" className="category-img" />
                <img src={imgCategory.man2} alt="category-man" className="category-hidden"
                    id="imgMan" />
                <a href="#" className="title-category" id="titleMan">Hombre</a>
            </section>

            <section className="category">
                <img src={imgCategory.kids} alt="category-kids" className="category-img" />
                <img src={imgCategory.kids2} alt="category-kids" className="category-hidden"
                    id="imgKids" />
                <a href="#" className="title-category" id="titleKids">Infantil</a>
            </section>
        </div>
    )
};