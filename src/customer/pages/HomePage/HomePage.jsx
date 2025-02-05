import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory'
import ImageTextSection from '../../components/ImageTextSection/ImageTextSection'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />

        <div>
            <ShopByCategory />
        </div>

        <div className="my-28">
          <ImageTextSection />
        </div>
    </div>
  )
}

export default HomePage