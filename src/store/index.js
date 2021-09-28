import dataa from './reducres'
import {createStore, combineReducers,applyMiddleware} from 'redux';
import card from './cart'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

let reducers = combineReducers({dataa,card});

const storee = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default storee();