import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";



const middleware = [thunk];


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(...middleware)
    );

export default store