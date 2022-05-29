import {combineReducers} from 'redux';
import counterReducer from './counter';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    counterReducer,
    cartReducer
})

export default rootReducer;