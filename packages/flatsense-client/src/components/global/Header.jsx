import React, { useState } from 'react';
import logo from '../../assets/images/dummy-logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4">
        <button onClick={() => setShowMenu((prev) => !prev)}>
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
        </button>
        {showMenu && <div>나는야 메뉴</div>}
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
