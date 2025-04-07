import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Goals from './components/Goals/Goals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <App />
        <Goals />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
