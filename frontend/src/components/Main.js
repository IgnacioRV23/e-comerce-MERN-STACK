import React from 'react'
import '../styles/btn.css';
import '../styles/main.css';
import '../styles/cards.css';
import { imgMain } from '../js/imgMain';

export const Main = () => {
  return (
    <main class="main">
      <div class="carousel">
        <img src={imgMain.banner1} alt="img-banner1" class="img-show" id="imgBanner1" />
        <img src={imgMain.banner2} alt="img-banner2" class="img-left" id="imgBanner2" />
        <img src={imgMain.banner3} alt="img-banner3" class="img-left" id="imgBanner3" />
        <img src={imgMain.banner4} alt="img-banner4" class="img-left" id="imgBanner4" />
        <img src={imgMain.banner5} alt="img-banner6" class="img-left" id="imgBanner5" />
      </div>

      <div class="container_sale">
        <h2 class="title-sale">Descuentos</h2>

        <div class="container-btn-list">
          <a href="#" class="sales">Ver todo</a>
        </div>

        <div class="container-cards">
          <article class="card">
            <div class="container-card-img">
              <p class="tag-sale">10%OFF</p>
              <img src={imgMain.bagWoman} alt="bag-woman" class="product-img" />
            </div>
            <div class="card-detail">
              <p class="product-name">Nombre del producto</p>
              <p class="product-detail">Detalle</p>
              <p class="price-off">$16</p>
              <p class="price-red">$10</p>
            </div>
            <div class="card-container-btn">
              <button class="btn btn-black">Agregar al carrito</button>
              <button class="btn btn-red">Comprar</button>
            </div>
          </article>
        </div>
      </div>

      <div class="container_category">
        <section class="category">
          <img src={imgMain.elec} alt="category-electronics" class="category-img" />
          <img src={imgMain.elec2} alt="category-img2" id="imgElec"
            class="category-hidden" />
          <a href="#" class="title-category" id="titleElec">Electrónica</a>
        </section>

        <section class="category">
          <img src={imgMain.woman} alt="category-woman" class="category-img" />
          <img src={imgMain.woman2} alt="category-woman" class="category-hidden" id="imgWoman" />
          <a href="#" class="title-category" id="titleWoman">Mujer</a>
        </section>

        <section class="category">
          <img src={imgMain.care} alt="category-care" class="category-img" />
          <img src={imgMain.care2} alt="category-care" class="category-hidden" id="imgCare" />
          <a href="#" class="title-category" id="titleCare">Salud y belleza</a>
        </section>

        <section class="category-home category">
          <img src={imgMain.home} alt="category-home" class="category-img" />
          <img src={imgMain.home2} alt="category-home" class="category-hidden" id="imgHome" />
          <a href="#" class="title-category" id="titleHome">Hogar</a>
        </section>

        <section class="category">
          <img src={imgMain.man} alt="category-man" class="category-img" />
          <img src={imgMain.man2} alt="category-man" class="category-hidden"
            id="imgMan" />
          <a href="#" class="title-category" id="titleMan">Hombre</a>
        </section>

        <section class="category">
          <img src={imgMain.kids} alt="category-kids" class="category-img" />
          <img src={imgMain.kids2} alt="category-kids" class="category-hidden"
            id="imgKids" />
          <a href="#" class="title-category" id="titleKids">Infantil</a>
        </section>
      </div>

      <div class="container_sale">
        <h2 class="title-sale">Productos flash</h2>

        <div class="container-btn-list">
          <a href="#" class="sales">Ver todo</a>
        </div>

        <div class="container-cards cards-flash">
          <article class="card">
            <div class="container-card-img">
              <div class="tag-flash">
                <img src={imgMain.bolt} alt="icon-bolt" />
                <p class="flash">Flash</p>
              </div>
              <img src={imgMain.bagWoman} alt="bag-woman" class="product-img" />
            </div>
            <div class="card-detail">
              <p class="product-name">Nombre del producto</p>
              <p class="product-detail">Detalle</p>
              <p class="price-off">$16</p>
              <p class="price-red">$10</p>
            </div>
            <div class="card-container-btn">
              <button class="btn btn-black">Agregar al carrito</button>
              <button class="btn btn-red">Comprar</button>
            </div>
          </article>
        </div>
      </div>

      <div class="container_anuncio">
        <img src={imgMain.ad} alt="anuncio" class="img-anuncio" />
      </div>

      <div class="container_brands">
        <img src={imgMain.apple} alt="brand" class="brand" />
        <img src={imgMain.huawei} alt="brand" class="brand" />
        <img src={imgMain.samsung} alt="brand" class="brand" />
        <img src={imgMain.homeDepot} alt="brand" class="brand" />
        <img src={imgMain.gap} alt="brand" class="brand" />
        <img src={imgMain.adidas} alt="brand" class="brand" />
        <img src={imgMain.nike} alt="brand" class="brand" />
        <img src={imgMain.zara} alt="brand" class="brand" />
      </div>
    </main>
  )
}