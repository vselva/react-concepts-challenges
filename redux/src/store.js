import { configureStore } from "@reduxjs/toolkit";
import customerReducer  from './slices/customerSlice';

// configureStore to combine the slice into a Redux store.
const store = configureStore({
    devTools: true,
    reducer: {
        // state of the store wil come here
        customers: customerReducer
    }
});

export default store;
