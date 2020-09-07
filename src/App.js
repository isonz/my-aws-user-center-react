import React from 'react';
import './App.css';
import {routes}  from './routers'
import renderRoutes from './common/renderRoutes'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {storeRedux} from "./redux/store.redux";


const authed = false;   // 登陆之后可以利用redux修改该值
const authPath = '/auth';

function App() {
  // console.log(process.env.REACT_APP_API_HOST);
  return (
      <Provider store={storeRedux}>
          <BrowserRouter>
              {renderRoutes(routes, authed, authPath)}
          </BrowserRouter>
      </Provider>
  );

}

export default App;
