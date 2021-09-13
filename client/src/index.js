import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
