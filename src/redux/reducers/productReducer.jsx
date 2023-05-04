import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: 'nike',
      price: '1000',
      image: 'https://picsum.photos/300/300',
    },
  ],
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getDataProduct: (state, action) => {
      state.arrProduct = action.payload
    },
  },
})

export const { getDataProduct } = productReducer.actions

export default productReducer.reducer

export const getAllProduct = async () => {
  try {
    const result = await axios.get('https://shop.cyberlearn.vn/api/Product')
    return result.data.content
  } catch (error) {
    console.log(error)
    return initialState.arrProduct
  }
}



