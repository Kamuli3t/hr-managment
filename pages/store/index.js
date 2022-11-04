import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  intial: { isAuth: false },
  reducers: {
    toggleIsAuth(state) {
      state.isAuth = !state.isAuth;
    },
  },
});
const store = configureStore({
  reducer: { auth: authSlice.reducer },
});
