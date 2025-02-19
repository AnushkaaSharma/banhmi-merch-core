import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import sriracha from '../../../assets/images/product-sriracha.png'
import sweetChili from '../../../assets/images/product-sweetChili.png'
import vietCoffee from '../../../assets/images/product-vietCoffee.png'
import filterCoffee from '../../../assets/images/product-coffeeFilter.png'
import PrimaryButton from '../Buttons/PrimaryButton'

const HomeSectionCarousel = () => {

    // Data for cards
    const cardData = [
        { image: sriracha, title: 'Sriracha', price: '$12.00' },
        { image: sweetChili, title: 'Thai Sweet Chili Sauce', price: '$12.00' },
        { image: vietCoffee, title: 'Vietnamese Coffee', price: '$10.00' },
        { image: filterCoffee, title: 'Coffee Filter', price: '$10.00' },
        { image: sriracha, title: 'Sriracha', price: '$12.00' },
        { image: sweetChili, title: 'Thai Sweet Chili Sauce', price: '$12.00' },
        { image: vietCoffee, title: 'Vietnamese Coffee', price: '$10.00' },
        { image: filterCoffee, title: 'Coffee Filter', price: '$10.00' },
    ];

    // Map through data and pass to HomeSectionCard
    const items = cardData.map((data, index) => (
        <HomeSectionCard key={index} 
                        image={data.image} 
                        title={data.title}
                        price={data.price}
        />
    ));

    // For different screens
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    return (
        <div>
            <div className="grid grid-cols-4 gap-6 mx-28">
            {items}
            {/* <AliceCarousel
                items={items}
                disableButtonsControls
                infinite
                responsive={responsive}
            /> */}            
            </div>
            <div className="mt-10 flex justify-center items-center">
                <PrimaryButton className="w-full max-w-80" text="View More" onClick={() => alert('')} />
            </div>
        </div>
    )
}

export default HomeSectionCarousel