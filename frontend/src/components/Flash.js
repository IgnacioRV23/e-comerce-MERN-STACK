import React, { useEffect, useState } from 'react'
import bolt from '../icons/bolt.svg';
import bagWoman from '../img/main/bag-woman.png';

export const Flash = () => {
    const [hour, setHour] = useState('');

    const [minute, setMinute] = useState('');

    const [second, setSecond] = useState('');

    useEffect(() => {
        showTime();
    }, []);

    function showTime(){
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        setHour((h < 10) ? "0" + h : h);
        setMinute((m < 10) ? "0" + m : m);
        setSecond((s < 10) ? "0" + s : s);
        setTimeout(showTime, 1000);
    }

    return (
        <div className="container_sale">
            <h2 className="title-sale">Productos flash</h2>

            <div className="container_clock">
                <div className='time'>{hour}</div>
                <p className='point'>:</p>
                <div className='time'>{minute}</div>
                <p className='point'>:</p>
                <div className='time'>{second}</div>
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