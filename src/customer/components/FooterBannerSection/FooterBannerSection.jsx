import React from 'react'
import footerBannerImage from '../../../assets/images/footerbanner.png' 
import divider from '../../../assets/images/divider.png'
import map from '../../../assets/images/map.png'

const FooterBannerSection = () => {
  return (
    <div>
        <img className="absolute h-[640px]" src={footerBannerImage} alt="Restaurant Dine in" />
        <div className="relative text-center mx-auto py-16">
            <h4 className="font-heading text-neutral-100 text-h4 font-regular">Local Pickup Available</h4>
            <img className="w-48 h-auto mx-auto my-5" src={divider} alt="Divider" />
            <p className="font-regular font-body text-p text-neutral-100">Find us at: 78 Frank St., Strathroy, ON, N7G 2R6</p>
            <p className="font-regular font-body text-p text-neutral-100 pt-2">Hours: Tue – Sat 11AM – 8 PM | Sun – Mon Closed</p>
            <div className="grid grid-cols-6 gap-4">      
                <img className="col-span-4 col-start-2 h-[300px] mt-10" src={map} alt="Map" />
            </div>
        </div>
    </div>
  )
}

export default FooterBannerSection