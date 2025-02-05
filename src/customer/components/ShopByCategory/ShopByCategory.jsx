import React from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import categories from './ShopByCategoryData'
import divider from '../../../assets/images/divider.png'
import noodles from '../../../assets/images/Category Card.png'
import sauce from '../../../assets/images/Category Card (2).png'

const ShopByCategory = () => {
  return (
    <div className="my-16 mx-28">
      <h4 className="text-h4 text-semibold font-heading text-neutral-900 text-center pb-5">
        Shop By Category
      </h4>
      <img className="w-48 h-auto mx-auto" src={divider} alt="Divider" />
      <div className="grid grid-cols-2 gap-5 my-10">
        <div className="relative h-full w-full">
          {/* Background Image */}
          <img className="h-full w-full object-cover" src={noodles} alt="Noodles" />
          {/* Content (Bottom Left) */}
          <div className="absolute bottom-0 left-0 p-6 text-neutral-100">
            <h2 className="text-h5 font-semibold pb-2">Noodles</h2>
            <a className="text-p py-2 font-regular border-b-2 border-solid border-neutral-100" href="#">View All</a>
          </div>
        </div>

        {/*Second Category*/}
        <div className="relative h-full w-full">
          {/* Background Image */}
          <img className="h-full w-full object-cover" src={sauce} alt="Sauce" />
          {/* Content (Bottom Left) */}
          <div className="absolute bottom-0 left-0 p-6 text-neutral-100">
            <h2 className="text-h5 font-semibold pb-2">Noodles</h2>
            <a className="text-p py-2 font-regular border-b-2 border-solid border-neutral-100" href="#">View All</a>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ShopByCategory;