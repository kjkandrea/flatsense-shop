import Main from '../pages/Main';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import Collection from '../pages/Collection';

export default [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/collection/:id',
    element: <Collection />,
  },
  {
    path: '/products/:id',
    element: <Product />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
