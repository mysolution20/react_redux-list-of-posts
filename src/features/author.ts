import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';

const initialState = null as User | null;

const slice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    set: (_state, action: PayloadAction<User | null>) => action.payload,
  },
});

export const { set } = slice.actions;
export default slice.reducer;
