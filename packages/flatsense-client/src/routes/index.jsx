import Main from '../pages/Main';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

export default [
  {
    path: '/',
    element: <Main />,
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
