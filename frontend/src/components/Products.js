import React, { useEffect, useState } from 'react'

import axios from 'axios';

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

    return (
        <div>
            {
                list.map((element) => {
                    return (
                        <div key={element._id}>
                            <p>{element.name}</p>
                            <p>{element.detail}</p>
                            <img src={productsImg(`./${element.img}`)} alt='img'/>
                        </div>
                    )
                })
            }
        </div>
    )
}