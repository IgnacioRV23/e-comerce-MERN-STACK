import axios from 'axios';
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Products } from './components/Products';
import {useState, useEffect} from 'react';


function App() {
  const [list, setList] = useState([]);

  const getProducts = async () => {
    try {
      const products = await axios.get('http://localhost:4000/api/products');
      setList(products.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Main list={list}/>} />
        <Route path='/products' element={<Products list={list}/>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;