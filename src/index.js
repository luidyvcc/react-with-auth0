import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './Auth';

const auth = new Auth();

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

let username = auth.getProfile().given_name || 'Johnny';

let initialState = {
  name: username,
  location: window.location.pathname.replace(/^\/?|\/$/g, ''),
  auth
};

window.setState(initialState);

reportWebVitals();
