import Cart from './pages/Cart';
import Home from './pages/home';
import Login from './pages/Login';
import Product from './pages/product';
import ProductList from './pages/productlist';
import Register from './pages/Register';
import {
  BrowserRouter,
  // redirect,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  // const user=true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/login' element={ <Login/> } />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/products' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
