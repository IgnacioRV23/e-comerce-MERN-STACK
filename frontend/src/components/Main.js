import React from 'react'
import '../styles/btn.css';
import '../styles/main.css';
import '../styles/cards.css';
import { imgMain } from '../js/imgMain';
import {Carousel} from './Carousel';

export const Main = () => {
  return (
    <main className="main">
      <Carousel/>

      <div className="container_sale">
        <h2 className="title-sale">Descuentos</h2>

        <div className="container-btn-list">
          <a href="#" className="sales">Ver todo</a>
        </div>

        <div className="container-cards">
          <article className="card">
            <div className="container-card-img">
              <p className="tag-sale">10%OFF</p>
              <img src={imgMain.bagWoman} alt="bag-woman" className="product-img" />
            </div>
            <div className="card-detail">
              <p className="product-name">Nombre del producto</p>
              <p className="product-detail">Detalle</p>
              <p className="price-off">$16</p>
              <p className="price-red">$10</p>
            </div>
            <div className="card-container-btn">
              <button className="btn btn-black">Agregar al carrito</button>
              <button className="btn btn-red">Comprar</button>
            </div>
          </article>
        </div>
      </div>

      <div className="container_category">
        <section className="category">
          <img src={imgMain.elec} alt="category-electronics" className="category-img" />
          <img src={imgMain.elec2} alt="category-img2" id="imgElec"
            className="category-hidden" />
          <a href="#" className="title-category" id="titleElec">Electrónica</a>
        </section>

        <section className="category">
          <img src={imgMain.woman} alt="category-woman" className="category-img" />
          <img src={imgMain.woman2} alt="category-woman" className="category-hidden" id="imgWoman" />
          <a href="#" className="title-category" id="titleWoman">Mujer</a>
        </section>

        <section className="category">
          <img src={imgMain.care} alt="category-care" className="category-img" />
          <img src={imgMain.care2} alt="category-care" className="category-hidden" id="imgCare" />
          <a href="#" className="title-category" id="titleCare">Salud y belleza</a>
        </section>

        <section className="category-home category">
          <img src={imgMain.home} alt="category-home" className="category-img" />
          <img src={imgMain.home2} alt="category-home" className="category-hidden" id="imgHome" />
          <a href="#" className="title-category" id="titleHome">Hogar</a>
        </section>

        <section className="category">
          <img src={imgMain.man} alt="category-man" className="category-img" />
          <img src={imgMain.man2} alt="category-man" className="category-hidden"
            id="imgMan" />
          <a href="#" className="title-category" id="titleMan">Hombre</a>
        </section>

        <section className="category">
          <img src={imgMain.kids} alt="category-kids" className="category-img" />
          <img src={imgMain.kids2} alt="category-kids" className="category-hidden"
            id="imgKids" />
          <a href="#" className="title-category" id="titleKids">Infantil</a>
        </section>
      </div>

      <div className="container_sale">
        <h2 className="title-sale">Productos flash</h2>

        <div className="container-btn-list">
          <a href="#" className="sales">Ver todo</a>
        </div>

        <div className="container-cards cards-flash">
          <article className="card">
            <div className="container-card-img">
              <div className="tag-flash">
                <img src={imgMain.bolt} alt="icon-bolt" />
                <p className="flash">Flash</p>
              </div>
              <img src={imgMain.bagWoman} alt="bag-woman" className="product-img" />
            </div>
            <div className="card-detail">
              <p className="product-name">Nombre del producto</p>
              <p className="product-detail">Detalle</p>
              <p className="price-off">$16</p>
              <p className="price-red">$10</p>
            </div>
            <div className="card-container-btn">
              <button className="btn btn-black">Agregar al carrito</button>
              <button className="btn btn-red">Comprar</button>
            </div>
          </article>
        </div>
      </div>

      <div className="container_anuncio">
        <img src={imgMain.ad} alt="anuncio" className="img-anuncio" />
      </div>

      <div className="container_brands">
        <img src={imgMain.apple} alt="brand" className="brand" />
        <img src={imgMain.huawei} alt="brand" className="brand" />
        <img src={imgMain.samsung} alt="brand" className="brand" />
        <img src={imgMain.homeDepot} alt="brand" className="brand" />
        <img src={imgMain.gap} alt="brand" className="brand" />
        <img src={imgMain.adidas} alt="brand" className="brand" />
        <img src={imgMain.nike} alt="brand" className="brand" />
        <img src={imgMain.zara} alt="brand" className="brand" />
      </div>
    </main>
  )
}