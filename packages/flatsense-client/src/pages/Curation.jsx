import React from 'react';
import dummyProductThumbnail from '../assets/images/dummy-product-thumbnail.jpeg';

export default function Curation() {
  return (
    <div className="grid grid-cols-1 gap-y-10 grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" className="group">
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={dummyProductThumbnail}
            alt=""
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
    </div>
  );
}
