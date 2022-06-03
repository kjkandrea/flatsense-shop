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
        <div className="flex md:block">
          <div className="text-gray-900 text-lg font-semibold mr-2">$85</div>
          <div className="text-gray-500 line-through text-lg font-semibold">$110</div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900">Size</h3>
          <div className="flex items-center flex-wrap gap-4">
            <label htmlFor="option-Size-154">
              <input className="sr-only" type="radio" id="option-Size-154" name="option[Size]" value="154" />
              <div className="p-2 border cursor-pointer rounded text-sm md:text-md text-gray-900">240</div>
            </label>
            <label htmlFor="option-Size-158">
              <input className="sr-only" type="radio" id="option-Size-158" name="option[Size]" value="158" />
              <div className="p-2 border cursor-pointer rounded text-sm md:text-md text-gray-900">255</div>
            </label>
            <label htmlFor="option-Size-160">
              <input className="sr-only" type="radio" id="option-Size-160" name="option[Size]" value="160" />
              <div className="p-2 border cursor-pointer rounded text-sm md:text-md bg-gray-900 text-white">265</div>
            </label>
          </div>
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
