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
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Shoes</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            Awesome Shoes
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Size</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">38.2</p>

            <img
              className="dark:hidden"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2.svg"
              alt="next"
            />
            <img
              className="hidden dark:block"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2dark.svg"
              alt="next"
            />
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
        <div>
          <div className="border-t border-b py-4 mt-7 border-gray-200">
            <div data-menu className="flex justify-between items-center cursor-pointer">
              <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
              <button
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                role="button"
                aria-label="show or hide"
              >
                <img
                  className="transform dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                />
                <img
                  className="transform hidden dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4dark.svg"
                  alt="dropdown"
                />
              </button>
            </div>
            <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are
              nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div className="border-b py-4 border-gray-200">
            <div data-menu className="flex justify-between items-center cursor-pointer">
              <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Contact us</p>
              <button
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                role="button"
                aria-label="show or hide"
              >
                <img
                  className="transform dark:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                  alt="dropdown"
                />
                <img
                  className="transform hidden dark:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4dark.svg"
                  alt="dropdown"
                />
              </button>
            </div>
            <div className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">
              If you have any questions on how to return your item to us, contact us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
