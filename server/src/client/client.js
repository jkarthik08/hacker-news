import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';

const state = window.INITIAL_STATE;

ReactDOM.hydrate(<App state = {state} />, document.getElementById('root'));
