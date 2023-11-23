import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user : {
    userName?: string;
    email?: string;
    isAdmin?: boolean;
    isConnected?: boolean;
  } | null
}

const initialState: UserState = {
  user : null
}

export const userSlice = createSlice({
  name: 'fromOpen',
  initialState,
  reducers: {

    userLogOut: (state) => {
      state.user = null
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user
    },
  },
})

// Action creators are generated for each case reducer function
export const { userLogOut, setUser } = userSlice.actions

export default userSlice.reducer