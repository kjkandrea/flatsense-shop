import React, { useState } from 'react';
import logo from '../../assets/images/dummy-logo.svg';
import { Link } from 'react-router-dom';
import { useCollections } from '@flatsense/client-toolkit/src/foundation/useCollections';

export default function Header() {
  const allCollections = useCollections();
  const collections = allCollections.filter(({ image }) => image !== null);

  const [showMenu, setShowMenu] = useState(false);

  const onClickLink = (event) => event.target.tagName === 'A' && setShowMenu(false);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4">
        <button onClick={() => setShowMenu((prev) => !prev)}>
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        {showMenu && (
          <div className="fixed -left-0 top-14 w-full h-screen z-10 bg-gray-50 px-4 md:px-12 py-4">
            <ul onClick={onClickLink}>
              {collections.length > 0 &&
                collections.map(({ title, id }) => (
                  // TODO. to 링크가 이게모야.. 드러워..
                  <li className="border-b border-gray-200" key={id}>
                    <Link
                      className="group py-4 text-gray-700 flex items-center justify-between"
                      to={`/collections/${id.split('Collection/')[1]}`}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              <li className="border-b border-gray-200">
                <Link className="group py-4 text-gray-700 flex items-center justify-between" to="/products/9895276099">
                  Awesome Shoes
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div>
          <Link to="/">
            <img className="w-18" src={logo} alt="dummy logo" />
          </Link>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </nav>
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
    </header>
  );
}
