import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productSaveReducer, productEditReducer, productDeleteReducer} from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList : productListReducer,
    productEdit : productEditReducer,
    productSave : productSaveReducer,
    productDelete : productDeleteReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;