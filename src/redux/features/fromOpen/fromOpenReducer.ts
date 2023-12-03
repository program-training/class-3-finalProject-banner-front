import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FromOpenState {
  value: boolean
}

const initialState: FromOpenState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'fromOpen',
  initialState,
  reducers: {
    isOpenTrue: (state) => {
      state.value = true
    },
    isOpenFalse: (state) => {
      state.value = false
    },
    changeByValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { isOpenFalse, isOpenTrue, changeByValue } = counterSlice.actions

export default counterSlice.reducer