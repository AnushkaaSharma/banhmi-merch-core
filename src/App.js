import React from 'react'
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import ShopByCategory from './customer/components/ShopByCategory/ShopByCategory'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'

function App() {
  return (
    <div>
      <Navigation />
      
      <div>
        <HomePage />
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
      </div>

    </div>
      
  );
}

export default App;
