import React, { useState } from 'react'
import { NavMobile } from './NavMobile';
import '../styles/nav.css';

//Importaciones de las imagenes necesarias.
import logo from '../img/main/logo.png';
import search from '../icons/search.svg';
import close from '../icons/close.svg';
import cart from '../icons/cart.svg';
import menu from '../icons/menu.svg';
import { Link } from 'react-router-dom';

export const Nav = () => {
    const [checkMenu, setCheckMenu] = useState(false);

    const showMenu = () => {
        if (checkMenu) {
            setCheckMenu(false);
        }

        if (!checkMenu) {
            setCheckMenu(true);
        }
    };

    return (
        <div>
            <nav className="nav">
                <Link to='/' className='link-logo'>
                    <img src={logo} alt="logo-need-to" className="logo" />
                </Link>
                <div className="container-nav-links">
                    <Link to='/products'>Electrónica</Link>
                    <Link to='/products'>Mujer</Link>
                    <Link to='/products'>Hombre</Link>
                    <Link to='/products'>Infantil</Link>
                    <Link to='/products'>Hogar</Link>
                    <Link to='/products'>Salud y belleza</Link>
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

                <div className='container_menu'>
                    <img src={checkMenu ? close : menu} alt='menu' className='menu' onClick={showMenu}/>
                </div>
            </nav>

            { checkMenu ? 
                <NavMobile/>
                :
                null
            }
        </div>
    )
};