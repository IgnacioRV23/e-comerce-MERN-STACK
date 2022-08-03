import React from 'react'
import bagWoman from '../img/main/bag-woman.png';

export const Sales = () => {
    return (
        <div className="container_sale">
            <h2 className="title-sale">Descuentos</h2>

            <div className="container-btn-list">
                <a href="#" className="sales">Ver todo</a>
            </div>

            <div className="container-cards">
                <article className="card">
                    <div className="container-card-img">
                        <p className="tag-sale">10%OFF</p>
                        <img src={bagWoman} alt="bag-woman" className="product-img" />
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
    )
};