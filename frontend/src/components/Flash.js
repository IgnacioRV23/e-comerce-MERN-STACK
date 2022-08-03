import React from 'react'
import bolt from '../icons/bolt.svg';
import bagWoman from '../img/main/bag-woman.png';

export const Flash = () => {
    return (
        <div className="container_sale">
            <h2 className="title-sale">Productos flash</h2>

            <div className="container-btn-list">
                <a href="#" className="sales">Ver todo</a>
            </div>

            <div className="container-cards cards-flash">
                <article className="card">
                    <div className="container-card-img">
                        <div className="tag-flash">
                            <img src={bolt} alt="icon-bolt" />
                            <p className="flash">Flash</p>
                        </div>
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