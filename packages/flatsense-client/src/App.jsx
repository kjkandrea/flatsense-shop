import logo from './logo.svg';
import './App.css';
import { getHelloWord } from '@flatsense/client-api';
import Counter from '@flatsense/client-toolkit/src/components/Counter';
import routes from './routes';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

const AppRoutes = () => useRoutes(routes);

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <AppRoutes />
        </Router>
      </Layout>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">{getHelloWord()}</h1>
        <Counter />
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
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
      </header>
    </div>
  );
}

export default App;
