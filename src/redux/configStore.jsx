import { configureStore } from '@reduxjs/toolkit'
import nhanVienReducer from 'reducers/nhanVienReducer'
import cartReducer from 'reducers/cartReducer'
import productReducer from 'reducers/productReducer'

export const store = configureStore({
  reducer: {
    number: (state = 15, action) => {
      if (action.type === 'TANG_GIAM_SO_LUONG') {
        state = state + action.payload
      }
      return state
    },
    imgCar: (state = './img/products/red-car.jpg', action) => {
      if (action.type === 'CHANGE_COLOR') {
        state = `./img/products/${action.payload}-car.jpg`
      }
      return state
    },
    nhanVien: (
      state = { maNhanVien: '', tenNhanVien: '', luongCoBan: '' },
      action
    ) => {
      if (action.type === 'CHANGE_INFO_NHANVIEN') {
        return { ...state, [action.payload.id]: action.payload.value }
      }
      return state
    },
    nhanVienReducer: nhanVienReducer,
    cartReducer: cartReducer,
    productReducer: productReducer,
  },
})
