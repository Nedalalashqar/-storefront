import dataa from './data.js'





import {createStore, combineReducers} from 'redux';
import card from './cart'
import { composeWithDevTools } from 'redux-devtools-extension';
let reducers = combineReducers({dataa,card});

const storee = () => {
    return createStore(reducers, composeWithDevTools())
}

export default storee();