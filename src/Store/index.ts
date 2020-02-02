import { createStore, applyMiddleware,compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({});

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)

const store = createStore(
    reducer,
    enhancer
)
export default store;