import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Hotels} from './types/data';
import {offers} from './mocks/offers';

const data: Hotels = offers;

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root'));
