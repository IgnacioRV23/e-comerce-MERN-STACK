import React from 'react'
import { Link } from 'react-router-dom';

export const NavMobile = () => {
    return (
        <div className="nav-links-mobile">
            <Link to="/products">Electrónica</Link>
            <Link to="/products">Mujer</Link>
            <Link to="/products">Hombre</Link>
            <Link to="/products">Infantil</Link>
            <Link to="/products">Hogar</Link>
            <Link to="/products">Salud y belleza</Link>
        </div>
    )
};