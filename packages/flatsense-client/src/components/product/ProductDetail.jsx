import React, { useState } from 'react';
import { useProduct } from '@flatsense/client-toolkit';


function ProductThumbnail({ images }) {
  const [mainImage, setMainImage] = useState(() => images[0].src);

  return (
    <div>
        <img className="w-full" alt="shoes" src={mainImage} />
      <div className="overflow-x-auto flex items-center mt-3 pb-3 pr-8 space-x-3" style={{ marginRight: '-2rem' }}>
        {
          images.map(({ id, src }) => <img key={`${id}`} alt="image-tag-one" className="sm:w-48 w-3/12" src={src} onClick={() => setMainImage(src)}/ >)
        }
        </div>
      </div>
  )
}

function ProductOption({ option }) {

  const { name, values } = option;

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-medium text-gray-900">{name}</h3>
      <div className="flex items-center flex-wrap gap-4">
        {
          values.map(({ name, value }, index) => <label key={`${value}_${index}`} htmlFor={`option-${name}-${value}`}>
            <input className="sr-only" type="radio" id={`option-${name}-${value}`} name={`option[${name}]`} value={value} />
            <div className="p-2 border cursor-pointer rounded text-sm md:text-md text-gray-900">{value}</div>
          </label>)
        }
      </div>
    </div>
  )
}

export function ProductDetail() {
  const product = useProduct();
  if (!product) return <></>;

  const { images, productType, title, options, description } = product;

  return (
    <div className="items-start justify-center">
      <ProductThumbnail images={ images} />
      <div className="mt-3">
        <div className="pb-2">
          <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">{productType}</p>
          <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
            {title}
          </h1>
        </div>
        <div className="flex md:block">
          <div className="text-gray-900 text-lg font-semibold mr-2">$85</div>
          <div className="text-gray-500 line-through text-lg font-semibold">$110</div>
        </div>
        {
          options.map((option) => <ProductOption key={`${option.id}`} option={option} />)
        }
        
        <div className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{'__html': description}}>
        </div>
      </div>
    </div>
  );
}
