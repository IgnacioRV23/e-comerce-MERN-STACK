import axios from 'axios';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Products } from './components/Products';
import { useState, useEffect } from 'react';
import { CategoryContext } from './context/categoryContext';

function App() {
  //Se utiliza el hook context para realizar una peticion distinta por cada categoria de producto.
  const [category, setCategory] = useState([]);
  
  //Lista de todos los productos dentro de la base de datos.
  const [list, setList] = useState([]);

  const getProducts = async () => {
    try {
      const products = await axios.get('http://192.168.100.5:4000/api/products');
      setList(products.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [list]);

  return (
    <>
      <CategoryContext.Provider value={{category, setCategory}}>
        <Nav />
        <Routes>
          <Route path='/' element={<Main list={list} />} />
          <Route path='/products' element={<Products list={list} />} />
          <Route path='/api/products/:categoryProduct' element={<Products list={list} />}/>
        </Routes>
      </CategoryContext.Provider>

      <Footer />
    </>
  );
};

export default App;