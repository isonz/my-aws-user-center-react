import React from 'react';
import './App.css';
import { storeRedux } from './redux/store.redux';
import {Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import Routers from './routers'
import { history } from './helpers/history';


function App() {
  console.log(process.env.API_HOST);
  return (
      <Provider store={storeRedux}>
        <Router history={history}>
          <Routers/>
        </Router>
      </Provider>
  );
}

export default App;
