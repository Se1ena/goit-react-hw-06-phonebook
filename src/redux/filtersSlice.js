import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    setFilter(state, action){
        state.name = action.payload;
    }
  }
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;