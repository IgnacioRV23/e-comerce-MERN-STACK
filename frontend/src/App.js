import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Products } from './components/Products';

function App() {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>

      <Footer/>
    </>
  );
};

export default App;