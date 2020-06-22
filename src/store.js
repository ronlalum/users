import { createStore, combineReducers ,applyMiddleware } from 'redux';
import sitesReducer from './reducers/sitesReducer';
import usersReducer from './reducers/usersReducer';
import thunk from 'redux-thunk';

 
const store = createStore(
    combineReducers({
        sitesReducer,
        usersReducer
    }),{},applyMiddleware(thunk)
);

export default store;