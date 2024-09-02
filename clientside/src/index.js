import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Loader from './components/loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
const online=navigator.onLine;

root.render(
  <React.StrictMode>
    <Provider store={store}>
    {online==true? <App /> : <Loader/> }
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
