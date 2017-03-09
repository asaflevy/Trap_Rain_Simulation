import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import AboutPage from './components/AboutPage';
import Board from './components/Board';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Board} />
    <Route path="/about" component={AboutPage} />
  </Route>
);
