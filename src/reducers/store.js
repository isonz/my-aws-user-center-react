import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

export const storeRedux = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
    )
);
sagaMiddleware.run(rootSaga);




// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import rootReducer from './index';
//
// const loggerMiddleware = createLogger();
//
// export const storeRedux = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )
// );
