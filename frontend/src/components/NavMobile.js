import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CategoryContext } from '../context/categoryContext';

export const NavMobile = () => {

    const {setCategory} = useContext(CategoryContext);

    return (
        <div className="nav-links-mobile">
            <Link to='/api/products/elec' onClick={e => setCategory('elec')}>Electrónica</Link>
            <Link to='/api/products/woman' onClick={e => setCategory('woman')}>Mujer</Link>
            <Link to='/api/products/man' onClick={e => setCategory('man')}>Hombre</Link>
            <Link to='/api/products/kids' onClick={e => setCategory('kids')}>Infantil</Link>
            <Link to='/api/products/home' onClick={e => setCategory('home')}>Hogar</Link>
            <Link to='/api/products/care' onClick={e => setCategory('care')}>Salud y belleza</Link>
        </div>
    )
};