
import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    rows: [],
  },
  reducers: {
    setRows: (state, action) => {
      state.rows = action.payload;
    },
  },
});

export const { setRows } = tableSlice.actions;
export default tableSlice.reducer;
