import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  arrProduct: [],
  productDetai: {},
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProduct: (state, action) => {
      state.arrProduct = action.payload
    },
  },
})

export const { getAllProduct } = productReducer.actions

export default productReducer.reducer

export const getAllProductAPI = async () => {
  try {
    const result = await axios.get('https://shop.cyberlearn.vn/api/Product')
    return result.data.content
  } catch (error) {
    throw error
  }
}
