import './assets/css/Main.css';
import routes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

const AppRoutes = () => useRoutes(routes);

function App() {
  return (
    <Layout>
      <Router>
        <AppRoutes />
      </Router>
    </Layout>
  );
}

export default App;
