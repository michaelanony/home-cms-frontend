import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducers'
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)

const store = createStore(
    reducer,
    enhancer
)

sagaMiddleware.run(rootSaga);

export default store;