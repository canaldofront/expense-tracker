import {configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import appSlice from './app-slice';

const store = configureStore({
    reducer: {ui: uiSlice, app: appSlice}
})

export default store;
