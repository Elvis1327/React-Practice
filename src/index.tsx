import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles/styles.scss';
import { TodoProvider } from './context/TodoProvider';

ReactDOM.render(
  <TodoProvider>
      <App />
  </TodoProvider>,
  document.getElementById('root')
);

