import { configureStore,combineReducers, applyMiddleware, createStore, compose } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer from '../reducers/userReducer'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

let store = configureStore({
    reducer: combineReducers({reducer}),
    middleware: customizedMiddleware
  })

export default store;
