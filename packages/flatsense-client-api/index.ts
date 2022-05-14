import { HelloText } from './types';

export const getHelloWord = (): HelloText => 'Hello, flatsense! 🐶';

export const sayHello = (helloText: HelloText) => console.log(helloText);
