import React from 'react';
import './config/reactotron';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'font-awesome/css/font-awesome.css';
import './styles.css';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
    <ToastContainer />
  </Provider>
);

export default App;
