import React from 'react';
import dummyProductThumbnail from '../assets/images/dummy-product-thumbnail.jpeg';

export default function Product() {
  return (
    <div className="items-start justify-center">
      <div>
        <img className="w-full" alt="shoes" src={dummyProductThumbnail} />
        <div className="overflow-x-auto flex items-center mt-3 pb-3 pr-8 space-x-3" style={{ marginRight: '-2rem' }}>
          <img alt="image-tag-one" className="sm:w-48 w-3/12" src={dummyProductThumbnail} />
          <img alt="image-tag-one" className="sm:w-48 w-3/12" src={dummyProductThumbnail} />
          <img alt="image-tag-one" className="sm:w-48 w-3/12" src={dummyProductThumbnail} />
          <img alt="image-tag-one" className="sm:w-48 w-3/12" src={dummyProductThumbnail} />
        </div>
      </div>
      <div className="mt-3">
        <div className="pb-2">
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Shoes</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            Awesome Shoes
          </h1>
        </div>
        <div className="flex md:block border-b border-gray-200 pb-6">
          <div className="text-gray-900 text-lg font-semibold mr-2">$600.00</div>
          <div className="text-gray-500 line-through text-lg font-semibold">$649.95</div>
        </div>

        <div>
          <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
            It is a long established fact that a reader will be distracted by thereadable content of a page when looking
            at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Code: 8BN321AF2IF0NYA</p>
          <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Length: 13.2 inches</p>
          <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Height: 10 inches</p>
          <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Depth: 5.1 inches</p>
          <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">
            Composition: 100% calf leather, inside: 100% lamb leather
          </p>
        </div>
      </div>
    </div>
  );
}
