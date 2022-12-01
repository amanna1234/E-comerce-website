
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Allproducts from './pages/Allproducts';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Footer from './components/Footer';
import Scrolltop from './components/Scrolltop';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/allproducts' element = {<Allproducts/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/singleproduct/:id' element = {<SingleProduct/>}/>
    </Routes>
    <Scrolltop/>
    <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
