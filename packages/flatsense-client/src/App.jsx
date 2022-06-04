import './assets/css/Main.css';
import routes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import { ClientProvider } from '@flatsense/client-toolkit';
import { CollectionsProvider } from '@flatsense/client-toolkit/src/components/CollectionsProvider';

const clientConfig = {
  storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
  domain: 'graphql.myshopify.com',
};

const AppRoutes = () => useRoutes(routes);

function App() {
  return (
    <ClientProvider config={clientConfig}>
      <CollectionsProvider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </CollectionsProvider>
    </ClientProvider>
  );
}

export default App;
