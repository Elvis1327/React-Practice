import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/styles.scss';
import { CrudProvider } from './context/index';

ReactDOM.render(
  <CrudProvider >
    <App />
  </CrudProvider>,
  document.getElementById('root')
);

