import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory'
import ImageTextSection from '../../components/ImageTextSection/ImageTextSection'
import Footer from '../../components/Footer/Footer'
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'


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

        <div className='my-28'>
          <ExploreProducts />
          <HomeSectionCarousel />
        </div>

        <div>
          <Footer />
        </div>
    </div>
  )
}

export default HomePage