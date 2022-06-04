import './assets/css/Main.css';
import routes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import { buildClient } from '@flatsense/client-toolkit';

buildClient({
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
  domain: 'graphql.myshopify.com',
});

const AppRoutes = () => useRoutes(routes);

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
