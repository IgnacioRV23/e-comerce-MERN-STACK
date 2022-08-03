import React from 'react'
import '../styles/nav.css';

//Importaciones de las imagenes necesarias.
import logo from '../img/main/logo.png';
import search from '../icons/search.svg';
import close from '../icons/close.svg';
import cart from '../icons/cart.svg';

export const Nav = () => {
    return (
        <div>
            <nav class="nav">
                <img src={logo} alt="logo-need-to" class="logo" />
                <div class="container-nav-links">
                    <a href="#">Electrónica</a>
                    <a href="#">Mujer</a>
                    <a href="#">Hombre</a>
                    <a href="#">Infantil</a>
                    <a href="#">Juguetería</a>
                    <a href="#">Hogar</a>
                    <a href="#">Salud y belleza</a>
                </div>
                <div class="container-nav-search">
                    <img src={search} alt="icon-search" class="nav-icon" />
                    <input type="text" placeholder="Search" class="nav-search" />
                    <img src={close} alt="icon-close" class="nav-icon" />
                </div>

                <div class="container-cart">
                    <img src={cart} alt="icon-cart" class="icon-cart" />
                    <div class="cart-count">
                        20
                    </div>
                </div>
            </nav>
        </div>
    )
}