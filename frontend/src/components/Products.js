import '../styles/cards.css';
import bolt from '../icons/bolt.svg';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../context/categoryContext';

const productsImg = require.context('../img/products', true);

export const Products = ({ list }) => {

    const { category } = useContext(CategoryContext);

    const [productsArray, setProductsArray] = useState([]);

    //Este metodo se encarga de tomar el valor inicial de un producto calcula el descuento y lo retorna.
    //resultado del descuento = precio del producto * valor porcentual / 100
    //precio final = valor inicial del producto - resultado del descuento. 
    const sale = (price, priceOff) => {
        const descount = (price * priceOff) / 100;
        const result = price - descount;
        return result;
    };

    const getCategory = async () => {
        const products = await axios.get(`http://192.168.100.5:4000/api/products/${category}`);
        setProductsArray(products.data.data);
    };

    useEffect(() => {
        if (category != []) {
            getCategory();
        } else {
            setProductsArray(list);
        }
    }, [category]);

    return (
        <div className='container-cards'>
            {
                productsArray.map((element) => {
                    return (
                        <article className="card" key={element._id}>
                            <div className="container-card-img">
                                {element.sale > 0 ?
                                    <p className="tag-sale">{element.sale}%OFF</p>
                                    : element.sale < 0 ?
                                        <div className="tag-flash">
                                            <img src={bolt} alt="icon-bolt" />
                                            <p className="flash">Flash</p>
                                        </div>
                                        : null
                                }
                                <img src={productsImg(`./${element.image}`)} alt={element.name} className="product-img" />
                            </div>
                            <div className="card-detail">
                                <p className="product-name">{element.name}</p>
                                <p className="product-detail">{element.detail}</p>

                                {element.sale > 0 ?
                                    <p className="price-off">${element.price}</p>
                                    : null
                                }

                                {element.sale > 0 ?
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
                    )
                })
            }
        </div>
    )
}