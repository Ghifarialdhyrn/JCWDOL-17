<<<<<<< HEAD
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

=======
/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
const initialState = {
  value: 0,
};

interface ICounter {
  value: number;
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<ICounter>) => {
      state.value += action.payload.value;
      return state;
    },
<<<<<<< HEAD

=======
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
    decrement: (state, action: PayloadAction<ICounter>) => {
      state.value -= action.payload.value;
      return state;
    },
<<<<<<< HEAD

=======
>>>>>>> 79f708c950eb1bb5ae327d64377807df43d70eb2
    reset: (state, action: PayloadAction<ICounter>) => {
      state = initialState;
      return state;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
