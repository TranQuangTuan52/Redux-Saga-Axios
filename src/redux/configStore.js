import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'
const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(reducer, {}, composedEnhancer )

sagaMiddleware.run(rootSaga)

export default store