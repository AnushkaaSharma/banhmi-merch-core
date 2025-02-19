import React from 'react'
import vietcoffeeBundle from '../../../assets/images/Viet-coffee-bundle.png'
import vietcoffeeBundle2 from '../../../assets/images/viet-coffee-bundle2.png'
import divider from '../../../assets/images/divider.png'
import PrimaryButton from '../Buttons/PrimaryButton'

const CoffeeBundleSection = () => {
  return (
    <div className="text-neutral-900">
        <img className="w-48 h-auto mx-auto my-10" src={divider} alt="Divider" />
        <div className="grid grid-cols-12 gap-6 lg:mx-28 relative">
        {/*Text container grid 1*/}
        <div className="col-span-5">
            <h4 className="text-h4 text-semibold font-heading text-neutral-900 pb-5">The Ultimate Coffee <br />Bundle!!</h4>
            <p className="font-regular text-p font-body py-6">Bring the café experience home and enjoy your coffee the way it’s meant to be—smooth, strong, and delicious.</p>
            <ul className="list-disc list-inside">
                <li className="font-regular text-p font-body p-2"><span className="font-semibold">Vietnamese Coffee –</span> Rich, bold, and full of flavor, perfect for traditional cà phê sữa đá.</li>
                <li className="font-regular text-p font-body p-2"><span className="font-semibold">Sweetened Condensed Milk –</span> The essential creamy touch to balance the coffee’s strong aroma.</li>
                <li className="font-regular text-p font-body p-2"><span className="font-semibold">Vietnamese Coffee Filter (Phin) –</span> A must-have for brewing the perfect slow-drip coffee</li>
            </ul>
            <PrimaryButton className="mt-10 w-full max-w-40" text="Shop Now" onClick={() => alert('')} />
        </div>

        {/*Img container grid 2*/}
        <div className="col-start-8 col-span-5 relative">
            
            <img className="relative h-[620px] z-0" src={vietcoffeeBundle} alt="Vietnamese Coffee" />
            <img  className="absolute top-[260px] left-1/6 transform -translate-x-1/2 h-[400px] w-[280px] z-10" src={vietcoffeeBundle2} alt="Vietnamese Coffee" />
        </div>
    </div>
    </div>
  )
}

export default CoffeeBundleSection