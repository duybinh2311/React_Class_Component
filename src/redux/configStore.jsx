import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    number: (state = 1, action) => {
      if (action.type === 'TANG_GIAM_SO_LUONG') {
        return (state = state + action.payload)
      }
      return state
    },
    color: (state = 'red') => {
      return state
    },
    imgCar: (state = './img/products/red-car.jpg', action) => {
      return state
    },
    nhanvienReducer: (
      state = {
        maNhanVien: '001',
        tenNhanVien: 'Nguyễn Duy Bình',
        luongCoBan: '1000',
      },
      action
    ) => {
      if (action.type === 'CHANGE_INFO') {
        let { id, value } = action.payload
        state[id] = value
      }
      return { ...state }
    },
  },
})
