export const tangSoLuong = () => {
  return {
    type: 'TANG_GIAM_SO_LUONG',
    payload: 1,
  }
}

export const giamSoLuong = () => {
  return {
    type: 'TANG_GIAM_SO_LUONG',
    payload: -1,
  }
}

export const changeColor = (color) => {
  return {
    type: 'CHANGE_COLOR',
    payload: color,
  }
}

export const getInfoNhanVien = (id, value) => {
  return {
    type: 'nhanVienReducer/changeInfo',
    payload: {
      id: id,
      value: value,
    },
  }
}
