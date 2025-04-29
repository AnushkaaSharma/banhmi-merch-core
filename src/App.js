import React from 'react'
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import ShopByCategory from './customer/components/ShopByCategory/ShopByCategory'
import Product from './customer/components/Product/Product'

function App() {
  return (
    <div>
      <Navigation />
      
      <div>
        {/* <HomePage /> */}
        <Product />
      </div>

    </div>
      
  );
}

export default App;
