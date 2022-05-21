import './assets/css/Main.css';
import routes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

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
