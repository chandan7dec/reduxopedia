import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/Header.tsx';
import {store} from "./redux/store.js";
import { Provider } from 'react-redux';
import Counter from './app/components/Counter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
    <Provider store={store}>
     <Header />
     <Counter />
    </Provider>
  </div>
  
);


