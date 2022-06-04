import React from 'react';
import { Link } from 'react-router-dom';
import { useCollection } from '@flatsense/client-toolkit';

export default function CollectionView() {
  const collection = useCollection();

  if (!collection) return <></>;
  const { title, description, products } = collection;

  return (
    <>
      <div className="pt-1 pb-4">
        <h2 className="text-base font-medium text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 grid-cols-2 gap-x-4">
        {products.map(({ images, title, id }) => (
          <Link to={`/products/${id.split('Product/')[1]}`} className="group" key={id}>
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={images[0].src}
                alt={images[0].altText}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$85</p>
          </Link>
        ))}
      </div>
    </>
  );
}
