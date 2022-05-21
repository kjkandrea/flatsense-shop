import Main from '../pages/Main';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import Curation from '../pages/Curation';

export default [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/curation',
    element: <Curation />,
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
