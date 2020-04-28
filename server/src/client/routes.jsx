import React from 'react';
import {
  Route
} from 'react-router-dom';
import App from './containers/App.jsx';

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/list' component={() => <div>List</div>}></Route>
    </div>
  );
};

export default Routes;
