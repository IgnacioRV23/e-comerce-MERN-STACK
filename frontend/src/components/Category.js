import React from 'react'
import { Link } from 'react-router-dom';
import {titleHover, titleLeave} from '../js/category';
import { imgCategory } from '../js/imgCategory';

export const Category = () => {
    return (
        <div className="container_category">
            <section className="category">
                <img src={imgCategory.elec} alt="category-electronics" className="category-img" />
                <img src={imgCategory.elec2} alt="category-img2" id="imgElec"
                    className="category-hidden" />
                <Link to='/products' className="title-category" onMouseOver={e => titleHover('imgElec')} onMouseLeave={e => titleLeave('imgElec')}>Electrónica</Link>
            </section>

            <section className="category">
                <img src={imgCategory.woman} alt="category-woman" className="category-img" />
                <img src={imgCategory.woman2} alt="category-woman" className="category-hidden" id="imgWoman" />
                <Link to='/products' className="title-category" onMouseOver={e => titleHover('imgWoman')} onMouseLeave={e => titleLeave('imgWoman')}>Mujer</Link>
            </section>

            <section className="category">
                <img src={imgCategory.care} alt="category-care" className="category-img" />
                <img src={imgCategory.care2} alt="category-care" className="category-hidden" id="imgCare" />
                <Link to='/products' className="title-category" onMouseOver={e => titleHover('imgCare')} onMouseLeave={e => titleLeave('imgCare')}>Salud y belleza</Link>
            </section>

            <section className="category-home category">
                <img src={imgCategory.home} alt="category-home" className="category-img" />
                <img src={imgCategory.home2} alt="category-home" className="category-hidden" id="imgHome" />
                <Link to='/products' className="title-category" onMouseOver={e => titleHover('imgHome')} onMouseLeave={e => titleLeave('imgHome')}>Hogar</Link>
            </section>

            <section className="category">
                <img src={imgCategory.man} alt="category-man" className="category-img" />
                <img src={imgCategory.man2} alt="category-man" className="category-hidden"
                    id="imgMan" />
                <Link to='/products' className="title-category" onMouseOver={e => titleHover('imgMan')} onMouseLeave={e => titleLeave('imgMan')}>Hombre</Link>
            </section>

            <section className="category">
                <img src={imgCategory.kids} alt="category-kids" className="category-img" />
                <img src={imgCategory.kids2} alt="category-kids" className="category-hidden"
                    id="imgKids" />
                <Link to='/products' className="title-category" onMouseOver={e => titleHover('imgKids')} onMouseLeave={e => titleLeave('imgKids')}>Infantil</Link>
            </section>
        </div>
    )
};