import React from 'react';
import './App.css';
import {routes}  from './routers'
import renderRoutes from './helpers/renderRoutes'
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import {storeRedux} from "./redux/store";


const authPath = process.env.REACT_APP_LOGIN_ENTRANCE;

function App() {
    //console.log(process.env.REACT_APP_API_HOST);
    const loggedIn = storeRedux.getState().auth.loggedIn;
    //console.log(loggedIn);
    return (
      <Provider store={storeRedux}>
          <BrowserRouter>
              {renderRoutes(routes, loggedIn, authPath)}
          </BrowserRouter>
      </Provider>
    );
}
export default App;
