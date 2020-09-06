import React from 'react';
import './App.css';
import { storeRedux } from './redux/store.redux';
import { Provider } from 'react-redux';
import PrivateRoute from './routers'
import { history } from './helpers/history';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { TestPage } from './pages/test.page';


function App() {
  console.log(process.env.API_HOST);
  return (
      <div className="jumbotron">
          <div className="container">
              <div className="col-sm-8 col-sm-offset-2">
                  {alert.message &&
                  <div className={`alert ${alert.type}`}>{alert.message}</div>
                  }
                  <Router>
                      <Route path="/" component={TestPage} />
                  </Router>
              </div>
          </div>
      </div>
  );
}

export default App;
