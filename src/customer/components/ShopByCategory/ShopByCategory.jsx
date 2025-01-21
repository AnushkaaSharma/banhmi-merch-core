import React from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import categories from './ShopByCategoryData'; 

const ShopByCategory = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="flex justify-center flex-wrap">
        {categories.map((category, index) => (
          <HomeSectionCard
            key={index}
            title={category.title}
            description={category.description}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;