import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // this is the states when no user is logged in//
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload; // the data we get //
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export all the reducers //
export const { signInFailure, signInSuccess, signInStart } = userSlice.actions;
export default userSlice.reducer;
