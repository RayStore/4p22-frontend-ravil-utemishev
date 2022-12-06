import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import Checkout from '../pages/Checkout';
import Catalog from '../pages/Catalog/Catalog';

const Routers = () => {
  return <Routes>
    <Route path='catalog' element={<Catalog/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
  </Routes>
}

export default Routers;