import { createSlice } from "@reduxjs/toolkit";

// Create Slice
// Slice is part of whole state
// creates two reducers - addCustomer, deleteCustomer
const initialState = [];

const customerSlice = createSlice({
    name: 'Customer',
    initialState,
    reducers: {
        addCustomer (state, action) {
            console.log('pushed payload:', action.payload);
            state.push(action.payload);
        },
        deleteCustomer (state, action) {
            const deleteIndex = action.payload;
            console.log('Deleted a Customer', deleteIndex, state[deleteIndex]);
            return state.filter((val, index) => index !== deleteIndex);
        }
    }
});

// Export Action Creator
// To call the reducer, Action Creater is required 
export const { addCustomer, deleteCustomer } = customerSlice.actions;

// Exports Reducer for this state
export default customerSlice.reducer;
