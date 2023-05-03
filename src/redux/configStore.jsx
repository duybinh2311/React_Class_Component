import { configureStore } from '@reduxjs/toolkit'
import nhanVienReducer from './reducers/nhanVienReducer'
/* 
  Tạo store (trong redux state có thể hiểu là reducer) bằng hàm configureStore của reduxjs/toolkit 

  Tham số truyền vào configureStore là 1 object chứa key reducer (property của configureStore), trong đó chứa toàn bộ state của dự án

  Mỗi key trong reducer là 1 state, khởi tạo state bằng 1 function, trong đó có 2 tham số và return về state:
  - state (cần có giá trị mặc định)
  - action (là 1 object được gửi từ component sử dụng store lên)

  Action là 1 object có 2 key chính là type và payload, được gửi lên thông qua hàm dispatch của object store
  - type: là property để chỉ ra loại của action, redux sẽ dựa vào type để lấy ra state tương ứng thực hiện việc thay đổi state
  - payload: là property chứa dữ liệu gửi lên store để thay đổi state ban đầu

  Action (set state)
  - tự tạo (rxaction): bằng 1 hàm return về 1 object chứa 2 key type (string) và payload (object)
  - createAction: là 1 hàm của reduxjs/toolkit, tham số đầu tiên sẽ là type, tham số thứ 2 là 1 hàm nhận vào giá trị của payload và return về 1 object có key payload chứa giá trị đó
  - createSlice (rxslice): createSlice sẽ tạo ra cả reducer và action, type trong object action được gửi lên sẽ có syntax 'nameReducer/nameAction' => 'nhanVienReducer/changeInfo'

  Reducer (state)
  - tự tạo (rxreducer): tạo ra reducer với state mặc định và xử lý tương ứng cho action gửi lên


  Lưu ý nếu không dùng createSlice thì không nên thay đổi trực tiếp store thông qua reducer, mà phải tạo ra bản sao mới để thay đổi

  Nên sử dụng mapStateToProps và mapDispatchToProps để chuyển đổi các state và dispatch thành props cho component => dễ quản lý

  Chỉ nên return về reducer cần dùng cho component => tránh việc render không cần thiết
*/
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
  },
})
