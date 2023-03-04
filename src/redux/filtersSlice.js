import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  redusers: {
    setFilter(state, action){
        state.name = action.payload;
    }
  }
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;