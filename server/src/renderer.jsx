import React from 'react';
import App from './client/containers/App.jsx';
// import './client/css/app.css';

import {
  renderToString
} from 'react-dom/server';

const render = (results) => {
  const content = renderToString(<App state={results} />);

  return `<!doctype html>
    <html>
      <head>
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <link rel='stylesheet' href='app.css'>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/modules/series-label.js"></script>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script>
          window.INITIAL_STATE = ${JSON.stringify(results)}
        </script>
        <script src='bundle.js'></script>
      <body>
    </html>
  `;
};

export default render;
