import React, { Component } from 'react'

export default class Cart extends Component {
  renderGioHang = () => {
    let { arrGioHang, xoaSanPham, tangGiamSoLuong } = this.props
    return arrGioHang.map((sp) => {
      return (
        <tr key={sp.maSP}>
          <td>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>
            <img src={sp.hinhAnh} alt="" width={50} height={50} />
          </td>
          <td>{sp.giaBan}</td>
          <td>
            <button className="mx-2 btn btn-primary" onClick={() => {
              tangGiamSoLuong(sp.maSP, 1)
            }}>
              +
            </button>{' '}
            {sp.soLuong}
            <button className="mx-2 btn btn-primary" onClick={() => {
              tangGiamSoLuong(sp.maSP, -1)
            }}>-</button>
          </td>
          <td>{sp.giaBan * sp.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                xoaSanPham(sp.maSP)
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã SP</th>
            <th>Hình Ảnh</th>
            <th>Giá Bán</th>
            <th>Số Lượng</th>
            <th>Số Tiền</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    )
  }
}
