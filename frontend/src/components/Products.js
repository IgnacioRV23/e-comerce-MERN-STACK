import axios from 'axios';
import '../styles/cards.css';
import React, { useEffect, useState } from 'react'

const productsImg = require.context('../img/products', true);

export const Products = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await axios.get('http://localhost:4000/api/products');
            setList(products.data.data);
        };
        getProducts();
    }, []);

    //Este metodo se encarga de tomar el valor inicial de un producto calcula el descuento y lo retorna.
    //resultado del descuento = precio del producto * valor porcentual / 100
    //precio final = valor inicial del producto - resultado del descuento. 
    const sale = (price, priceOff) => {
        const descount = (price * priceOff) / 100;
        const result = price - descount;
        return result;
    };

    return (
        <div>
            {
                list.map((element) => {
                    return (
                        <div className="container-cards" key={element._id}>
                            <article className="card">
                                <div className="container-card-img">
                                    { element.sale > 0 ?
                                        <p className="tag-sale">{element.sale}%OFF</p>
                                        :null
                                    }
                                    <img src={productsImg(`./${element.image}`)} alt={element.name} className="product-img" />
                                </div>
                                <div className="card-detail">
                                    <p className="product-name">{element.name}</p>
                                    <p className="product-detail">{element.detail}</p>
                                    
                                    { element.sale > 0 ?
                                        <p className="price-off">${element.price}</p>
                                        : null
                                    }

                                    { element.sale > 0 ?
                                        <p className="price-red">${sale(element.price, element.sale)}</p>
                                        :
                                        <p className="price">${element.price}</p>
                                    }

                                </div>
                                <div className="card-container-btn">
                                    <button className="btn btn-black">Agregar al carrito</button>
                                    <button className="btn btn-red">Comprar</button>
                                </div>
                            </article>
                        </div>
                    )
                })
            }
        </div>
    )
}