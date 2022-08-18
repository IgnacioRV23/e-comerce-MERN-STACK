import bolt from '../icons/bolt.svg';
import React, { useEffect, useState } from 'react'
const productsImg = require.context('../img/products', true);

export const Flash = ({ list }) => {
    const [hour, setHour] = useState('');

    const [minute, setMinute] = useState('');

    const [second, setSecond] = useState('');

    var productsArray = [];

    function maxProducts() {
        let count = 0;
        list.map(element => {
            if(element.sale < 0  && count < 4) {
                productsArray.push(element);
                count++;
            }
        });
    }
    maxProducts();

    useEffect(() => {
        showTime();
    }, []);

    const showTime = () => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        setHour((h < 10) ? "0" + h : h);
        setMinute((m < 10) ? "0" + m : m);
        setSecond((s < 10) ? "0" + s : s);
        setTimeout(showTime, 1000);
    };

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
                <div className="container-cards">
                    {
                        productsArray.map((element) => {
                            if (element.sale < 0) {
                                return (
                                    <article className="card" key={element._id}>
                                        <div className="container-card-img">
                                            <div className="tag-flash">
                                                <img src={bolt} alt="icon-bolt" />
                                                <p className="flash">Flash</p>
                                            </div>
                                            <img src={productsImg(`./${element.image}`)} alt={element.name} className="product-img" />
                                        </div>
                                        <div className="card-detail">
                                            <p className="product-name">{element.name}</p>
                                            <p className="product-detail">{element.detail}</p>

                                            <p className="price">${element.price}</p>
                                        </div>
                                        <div className="card-container-btn">
                                            <button className="btn btn-black">Agregar al carrito</button>
                                            <button className="btn btn-red">Comprar</button>
                                        </div>
                                    </article>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
};