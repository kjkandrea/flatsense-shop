import React from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/Main.css';
import { getHelloWord } from '@flatsense/client-api';
import Counter from '@flatsense/client-toolkit/src/components/Counter';

export default function Main() {
  return (
    <div className="Main">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">{getHelloWord()}</h1>
        <Counter />
        <p>is main page</p>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </div>
    </div>
  );
}
