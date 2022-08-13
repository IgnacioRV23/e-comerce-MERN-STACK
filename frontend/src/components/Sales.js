import React from 'react'
const productsImg = require.context('../img/products', true);

export const Sales = ({ list }) => {

    //Este metodo se encarga de tomar el valor inicial de un producto calcula el descuento y lo retorna.
    //resultado del descuento = precio del producto * valor porcentual / 100
    //precio final = valor inicial del producto - resultado del descuento.
    const sale = (price, priceOff) => {
        const descount = (price * priceOff) / 100;
        const result = price - descount;
        return result;
    };

    console.log(list.length)

    return (
        <div className="container_sale">
            <h2 className="title-sale">Descuentos</h2>

            <div className="container-btn-list">
                <a href="#" className="sales">Ver todo</a>
            </div>

            <div className="container-cards">
                {
                    list.map((element, key) => {
                        if (element.sale > 0 && key <= 3) {
                            return (
                                <article className="card" key={element._id}>
                                    <div className="container-card-img">
                                        <p className="tag-sale">{element.sale}%OFF</p>
                                        <img src={productsImg(`./${element.image}`)} alt={element.name} className="product-img" />
                                    </div>
                                    <div className="card-detail">
                                        <p className="product-name">{element.name}</p>
                                        <p className="product-detail">{element.detail}</p>
    
                                        <p className="price-off">${element.price}</p>
                                        <p className="price-red">${sale(element.price, element.sale)}</p>
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
    )
};