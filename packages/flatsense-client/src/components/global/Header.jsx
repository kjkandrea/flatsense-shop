import React from 'react';
import logo from '../../assets/images/dummy-logo.svg';

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-5 shadow">
        <img className="w-28" src={logo} alt="dummy logo" />
        <div className="block lg:flex lg:items-center lg:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
