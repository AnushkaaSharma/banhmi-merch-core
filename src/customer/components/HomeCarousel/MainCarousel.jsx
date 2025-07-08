import React from 'react';
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../css/MainCarousel.css';
import divider from '../../../assets/images/divider.png'

const MainCarousel = () => {
  const items = MainCarouselData.map((item, index) => (
    <div key={index} className="relative w-full h-[600px]">
      {/* Image */}
      <img
        className="w-full h-full object-cover"
        role="presentation"
        src={item.image}
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black-900/70 z-10" />

      {/* Overlay Text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <img className="w-48 h-auto mx-auto mb-4" src={divider} alt="Divider" />
        <h4 className="font-heading text-neutral-100 text-h4">From our kitchen to yours — taste the tradition</h4>
        <p className="font-body font-regular text-neutral-400 pt-4">Enjoy the bold, handcrafted flavours of our signature sauces, made to elevate every meal at home.</p>
      </div>
    </div>
  ));

  const renderDotsItem = ({ isActive }) => {
    return (
      <button
        className={`w-2 h-2 rounded-full border-0 cursor-pointer ${
          isActive ? 'bg-primary-500' : 'bg-neutral-400'
        }`}
        style={{ margin: '0 4px' }}
        aria-label="dot"
      />
    );
  };

  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
        renderDotsItem={renderDotsItem}
      />
    </div>
  );
};

export default MainCarousel;
