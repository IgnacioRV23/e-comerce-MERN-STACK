import React, { useContext, useState } from 'react'
import { NavMobile } from './NavMobile';
import '../styles/nav.css';

//Importaciones de las imagenes necesarias.
import logo from '../img/main/logo.png';
import search from '../icons/search.svg';
import close from '../icons/close.svg';
import cart from '../icons/cart.svg';
import menu from '../icons/menu.svg';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../context/categoryContext';

export const Nav = () => {
    const { setCategory } = useContext(CategoryContext);

    //State y funcion encargada de validar cuando se debe de  utilizar el menu en dispositivo movil.
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
                    <Link to='/api/products/elec' onClick={e => setCategory('elec')}>Electrónica</Link>
                    <Link to='/api/products/woman' onClick={e => setCategory('woman')}>Mujer</Link>
                    <Link to='/api/products/man' onClick={e => setCategory('man')}>Hombre</Link>
                    <Link to='/api/products/kids' onClick={e => setCategory('kids')}>Infantil</Link>
                    <Link to='/api/products/home' onClick={e => setCategory('home')}>Hogar</Link>
                    <Link to='/api/products/care' onClick={e => setCategory('care')}>Salud y belleza</Link>
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
                    <img src={checkMenu ? close : menu} alt='menu' className='menu' onClick={showMenu} />
                </div>
            </nav>

            {checkMenu ?
                <NavMobile />
                :
                null
            }
        </div>
    )
};