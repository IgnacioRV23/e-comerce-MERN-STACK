import React from 'react'
import '../styles/detail.css';
import bagWoman from '../img/main/bag-woman.png';

export const Detail = () => {
    return (
        <main class="container_detail">
            <div class="container-img">
                <img src={bagWoman} alt="img-detail" class="img-detail" />
            </div>

            <div class="container-detail">
                <div class="detail">
                    <p class="detail-name-product">Nombre del producto</p>

                    <p class="title-text-detail">Descripción</p>
                    <p class="text-detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    <p class="title-category-detail">Categoría</p>
                    <p class="category-detail">Lorem ipsum.</p>

                    <p class="title-price-detail">Precio</p>
                    <p class="price-detail">$10</p>
                </div>
            </div>
        </main>
    )
};