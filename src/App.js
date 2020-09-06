import React from 'react';
import './App.css';
import { storeRedux } from './redux/store.redux';
import { Provider } from 'react-redux';
import { history } from './helpers/history';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import { TestPage } from './pages/test.page';
import {HomePage} from "./pages/home.page";
import {LoginPage} from "./pages/login.page";
import {RegisterPage} from "./pages/register.page";
import { PrivateRoute } from './routers';

function App() {
  console.log(process.env.API_HOST);
  return (
      <div className="jumbotron">
          <div className="container">
              <div className="col-sm-8 col-sm-offset-2">
                  {alert.message &&
                  <div className={`alert ${alert.type}`}>{alert.message}</div>
                  }
                  <Provider store={storeRedux}>
                      <Router history={history}>
                          <Switch>
                              <Route path="/" component={LoginPage} />
                              <Route path="/register" component={RegisterPage} />
                              <Redirect from="*" to="/" />
                          </Switch>
                      </Router>
                  </Provider>

              </div>
          </div>
      </div>
  );
}

export default App;
