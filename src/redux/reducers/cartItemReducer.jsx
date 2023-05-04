import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartItemReducer = createSlice({
  name: 'cartItemReducer',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addCartItem } = cartItemReducer.actions

export default cartItemReducer.reducer
