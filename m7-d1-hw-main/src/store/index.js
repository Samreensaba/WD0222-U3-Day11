import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import faviourites from './reducers/favourites'
import thunk from 'redux-thunk'
export default createStore(mainReducer)