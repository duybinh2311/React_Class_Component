import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const product = state.cart.find((prod) => prod.id === action.payload.id)
      if (product) {
        product.quantity++
        return
      }
      state.cart.push({
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
        image: action.payload.image,
      })
    },
    deleteCartItem: (state, action) => {
      state.cart.splice(action.payload, 1)
    },
    increaseQuantity: (state, action) => {
      state.cart[action.payload].quantity += 1
    },
    decreaseQuantity: (state, action) => {
      state.cart[action.payload].quantity -= 1
    },
    checkoutCart: (state, action) => {
      state.cart = action.payload
    },
  },
})

export const {
  addCartItem,
  deleteCartItem,
  checkoutCart,
  increaseQuantity,
  decreaseQuantity,
} = cartReducer.actions

export default cartReducer.reducer
