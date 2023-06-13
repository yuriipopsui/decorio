import {combineReducers, configureStore} from '@reduxjs/toolkit';
import getProjectsSlice from './reducers/getProjectsReducer';


const rootReducer = combineReducers({
  projects: getProjectsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

console.log(store.getState());

export default store;