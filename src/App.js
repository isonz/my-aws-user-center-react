import React from 'react';
import './App.css';
import {routes}  from './routers'
import renderRoutes from './common/renderRoutes'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./reducers/store";


const authed = false;   // 登陆之后可以利用redux修改该值
const authPath = process.env.REACT_APP_LOGIN_ENTRANCE;

function App() {
  //console.log(process.env.REACT_APP_API_HOST);
  return (
      <Provider store={store}>
          <BrowserRouter>
              {renderRoutes(routes, authed, authPath)}
          </BrowserRouter>
      </Provider>
  );

}

export default App;
