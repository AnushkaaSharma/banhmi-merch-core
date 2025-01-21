import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />

        <div>
            <ShopByCategory />
        </div>
    </div>
  )
}

export default HomePage