import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  maNhanVien: '',
  tenNhanVien: '',
  luongCoBan: '',
}

const nhanVienReducer = createSlice({
  name: 'nhanVienReducer',
  initialState,
  reducers: {
    changeInfo: (state, action) => {
      state[action.payload.id] = action.payload.value
    },
  },
})

export const { changeInfo } = nhanVienReducer.actions

export default nhanVienReducer.reducer
