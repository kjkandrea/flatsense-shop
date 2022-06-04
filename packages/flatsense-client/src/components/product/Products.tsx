import React from 'react';
import { Link } from 'react-router-dom';
import dummyProductThumbnail from '../../assets/images/dummy-product-thumbnail.jpeg';

export function Products() {
  return (
    <div className="grid grid-cols-1 gap-y-10 grid-cols-2 gap-x-4">
      {Array.from({ length: 10 }, (_, index) => index).map((key) => (
        <Link to="/products/9895276099" className="group" key={key}>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={dummyProductThumbnail}
              alt=""
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">Awesome Shoes</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$85</p>
        </Link>
      ))}
    </div>
  );
}
