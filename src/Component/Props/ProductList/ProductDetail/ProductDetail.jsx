import React, { Component } from 'react'
import Cart from './Cart'
import Item from './Item'

const dataPhone = [
  {
    maSP: 1,
    tenSP: 'VinSmart Live',
    manHinh: 'AMOLED, 6.2, Full HD+',
    heDieuHanh: 'Android 9.0 (Pie)',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 5700000,
    hinhAnh: './img/vsphone.jpg',
  },
  {
    maSP: 2,
    tenSP: 'Meizu 16Xs',
    manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
    heDieuHanh: 'Android 9.0 (Pie); Flyme',
    cameraTruoc: '20 MP',
    cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 7600000,
    hinhAnh: './img/meizuphone.jpg',
  },
  {
    maSP: 3,
    tenSP: 'Iphone XS Max',
    manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
    heDieuHanh: 'iOS 12',
    cameraSau: 'Chính 12 MP & Phụ 12 MP',
    cameraTruoc: '7 MP',
    ram: '4 GB',
    rom: '64 GB',
    giaBan: 27000000,
    hinhAnh: './img/applephone.jpg',
  },
]
export default class ProductDetail extends Component {
  state = {
    spChiTiet: {
      maSP: 3,
      tenSP: 'Iphone XS Max',
      manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
      heDieuHanh: 'iOS 12',
      cameraSau: 'Chính 12 MP & Phụ 12 MP',
      cameraTruoc: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 27000000,
      hinhAnh: './img/applephone.jpg',
    },
    arrGioHang: [
      {
        maSP: 3,
        tenSP: 'Iphone XS Max',
        giaBan: 27000000,
        hinhAnh: './img/applephone.jpg',
        soLuong: 2,
      },
    ],
  }
  /* state đặt ở component nào thì hàm setState viết ở component đó */
  themGioHang = (spClick) => {
    spClick = { ...spClick, soLuong: 1 }
    //Kiểm tra sản phẩm đã có trong arr Giỏ hàng hay chưa ? Nếu có thì lấy ra tăng số lượng. Chưa có thì push vào
    let gioHang = this.state.arrGioHang
    let spGH = gioHang.find((item) => item.maSP === spClick.maSP)
    if (spGH) {
      spGH.soLuong += 1
    } else {
      gioHang.push(spClick)
    }
    //Gán lại state = state mới
    this.setState({
      arrGioHang: gioHang,
    })
  }
  xoaSanPham = (maSP) => {
    /* Dựa vào mã tìm index của sản phẩm cần xóa trong arrGioHang */
    let index = this.state.arrGioHang.findIndex((item) => item.maSP === maSP)
    if (index !== -1) {
      this.state.arrGioHang.splice(index, 1)
    }
    /* Set lại giá trị mới cho state */
    this.setState({
      arrGioHang: this.state.arrGioHang,
    })
  }
  tangGiamSoLuong = (maSP, soLuong) => {
    /* Tìm ra sản phẩm được click dựa vào mã */
    let sanpham = this.state.arrGioHang.find((sp) => sp.maSP === maSP)
    if (sanpham && sanpham.soLuong > 0) {
      sanpham.soLuong += soLuong 
      if (sanpham.soLuong < 1) {
        if (window.confirm('Bạn có muốn xóa không')) {
          this.xoaSanPham(sanpham.maSP)
          return
        } else {
          sanpham.soLuong -= soLuong 
        }
      }
    }
    /* Cập nhật state mới */
    this.setState({
      arrGioHang: this.state.arrGioHang,
    })
  }
  renderProduct = () => {
    return dataPhone.map((dienThoai) => {
      return (
        <div className="col-md-4 mt-2" key={dienThoai.maSP}>
          <Item
            phone={dienThoai}
            xemChiTiet={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />
        </div>
      )
    })
  }
  xemChiTiet = (spClick) => {
    console.log(spClick)
    this.setState({
      spChiTiet: spClick,
    })
  }
  render() {
    let {
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      hinhAnh,
    } = this.state.spChiTiet
    return (
      <div className="container">
        <h3>Giỏ hàng</h3>
        <Cart
          arrGioHang={this.state.arrGioHang}
          xoaSanPham={this.xoaSanPham}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <h3>Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>
        <br />
        <br />
        <div className="row">
          <div className="col-3">
            <h3 className="text-center">{tenSP}</h3>
            <img src={hinhAnh} alt="..." className="w-100" />
          </div>
          <div className="col-9">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Màn Hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{rom}h</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
