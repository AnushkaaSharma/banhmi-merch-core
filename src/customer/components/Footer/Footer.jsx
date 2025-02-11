import React from 'react'
import footerBannerImage from '../../../assets/images/footerbanner.png' 
import divider from '../../../assets/images/divider.png'
import map from '../../../assets/images/map.png'

const Footer = () => {
  return (
    <div className="relative">
    <img className="absolute h-full w-full object-cover" src={footerBannerImage} alt="Restaurant Dine in" />
    <div className="relative text-center mx-auto">
        <h4 className="font-heading text-neutral-100 text-h4 font-regular pt-16">Local Pickup Available</h4>
        <img className="w-48 h-auto mx-auto my-5" src={divider} alt="Divider" />
        <p className="font-regular font-body text-p text-neutral-100">Find us at: 78 Frank St., Strathroy, ON, N7G 2R6</p>
        <p className="font-regular font-body text-p text-neutral-100 pt-2">Hours: Tue – Sat 11AM – 8 PM | Sun – Mon Closed</p>
        <div className="grid grid-cols-6 gap-4 my-10">      
            <img className="col-span-4 col-start-2 h-[300px]" src={map} alt="Map" />
        </div>
    </div>

    {/* Footer Bottom Section */}
      <div className="relative grid grid-cols-6 gap-6 bg-neutral-black py-6 mt-10">
        <p className="col-start-1 col-end-3 text-neutral-500 font-regular font-body mx-28 text-p">
            Copyright © 2025 Banh Mi & Bites
        </p>
        <p className="col-span-2 col-end-7 text-neutral-500 font-regular font-body mx-28 text-p">
            Powered By Banh Mi & Bites
        </p>
      </div>
    </div>

  )
}

export default Footer