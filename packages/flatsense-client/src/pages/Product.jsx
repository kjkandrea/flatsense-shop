import React from 'react';

export default function Product() {
  return (
    <div className="items-start justify-center">
      <div>
        <img className="w-full" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
        <div className="flex items-center justify-between mt-3 space-x-4">
          <img alt="image-tag-one" className="w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
          <img alt="image-tag-one" className="w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
          <img alt="image-tag-one" className="w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
          <img alt="image-tag-one" className="w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
        </div>
      </div>
      <div className="mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Balenciaga Fall Collection</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            Balenciaga Signature Sweatshirt
          </h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Colours</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300">Smoke Blue with red accents</p>
            <div className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer"></div>
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
        <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800w-full py-4 hover:bg-gray-700 focus:outline-none">
          <img
            className="mr-3 dark:hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1.svg"
            alt="location"
          />
          <img
            className="mr-3 hidden dark:block"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/svg1dark.svg"
            alt="location"
          />
          Check availability in store
        </button>
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
