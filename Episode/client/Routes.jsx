
import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import App from './components/App'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
)

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'))
});
