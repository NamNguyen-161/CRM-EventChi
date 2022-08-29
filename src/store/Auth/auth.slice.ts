import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./auth.state";

export const initialState: AuthState = Object.freeze({
  role: "",
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

const AuthReducer = authSlice.reducer;
const AuthAction = authSlice.actions;

export const { setRole } = AuthAction;

export default AuthReducer;
