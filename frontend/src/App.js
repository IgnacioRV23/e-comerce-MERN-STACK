import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      {/*Componente de navegacion.*/}
      <Nav/>

      {/*Componente de todo el apartado principal.*/}
      <Main/>

      {/*Componente de todo el apartado de pie de pagina.*/}
      <Footer/>
    </>
  );
};

export default App;