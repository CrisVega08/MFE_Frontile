import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './screens/HomeApp';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
console.log('Host running');
