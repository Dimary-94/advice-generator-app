import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
