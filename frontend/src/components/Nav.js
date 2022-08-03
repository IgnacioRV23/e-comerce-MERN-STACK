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
            <nav className="nav">
                <img src={logo} alt="logo-need-to" className="logo" />
                <div className="container-nav-links">
                    <a href="#">Electrónica</a>
                    <a href="#">Mujer</a>
                    <a href="#">Hombre</a>
                    <a href="#">Infantil</a>
                    <a href="#">Juguetería</a>
                    <a href="#">Hogar</a>
                    <a href="#">Salud y belleza</a>
                </div>
                <div className="container-nav-search">
                    <img src={search} alt="icon-search" className="nav-icon" />
                    <input type="text" placeholder="Search" className="nav-search" />
                    <img src={close} alt="icon-close" className="nav-icon" />
                </div>

                <div className="container-cart">
                    <img src={cart} alt="icon-cart" className="icon-cart" />
                    <div className="cart-count">
                        20
                    </div>
                </div>
            </nav>
        </div>
    )
}