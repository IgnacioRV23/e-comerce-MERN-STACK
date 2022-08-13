import React from 'react'
import '../styles/btn.css';
import '../styles/main.css';
import '../styles/cards.css';
import '../styles/responsive.css';

//Importacion de los componentes necesarios.
import { Carousel } from './Carousel';
import { Sales } from './Sales';
import { Category } from './Category';
import { Flash } from './Flash';
import { imgMain } from '../js/imgMain';

export const Main = ({list}) => {
  return (
    <main className="main">
      <Carousel />

      <Sales list={list}/>

      <Category />

      <Flash />

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
};