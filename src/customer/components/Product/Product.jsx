import React from 'react'
import ProductCard from '../Product/ProductCard'
import products from "../Product/Data/ProductsData"

const Product = () => {
  return (
    <div className="bg-neutral-100">

      <div className="mx-28 grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            image={product.image} 
            price={product.price} 
          />
          ))}
        </div>
    </div>
  )
}

export default Product