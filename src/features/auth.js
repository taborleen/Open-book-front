import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, lastname, email, tel, login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, lastname, email, tel, login, password }),
      });

      const data = await res.json();
      console.log(data)
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const doLogin = createAsyncThunk(
  "auth/doLogin",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      } else {
        localStorage.setItem("token", data.token);
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  signupIn: false,
  signinUp: false,
  error: null,
  registered: false,
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.signupIn = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.signupIn = false;
        state.error = null;
        state.registered = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.signupIn = false;
        state.error = action.payload;
      })
      .addCase(doLogin.pending, (state, action) => {
        state.signinUp = true;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.signinUp = false;
        state.error = null;
        console.log(action);
        state.token = action.payload.token;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.signinUp = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
