import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/Header.tsx';
import {store} from "./redux/store.js";
import { Provider } from 'react-redux';
import Counter from './app/components/Counter.jsx';
import DestinationList from './app/components/DestinationList.jsx';
import DestinationHeader from './app/components/DestinationHeader.tsx';
import DestinationFact from './app/components/DestinationFact.jsx';
import ResetApp from './app/components/ResetApp.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
    <Provider store={store}>
     <Header />
     <ResetApp />
     <Counter />
     <DestinationHeader />
     <DestinationList />
     <DestinationFact />
    </Provider>
  </div>
  
);


