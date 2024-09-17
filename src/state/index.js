import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLog: null,
    token: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.userLog = action.payload.userLog;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.userLog = null;
            state.token = null;
        }
    }
})

export const { setLogin, setLogout } = authSlice.actions
export default authSlice.reducer