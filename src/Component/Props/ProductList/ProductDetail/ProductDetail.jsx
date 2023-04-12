import React, { Component } from 'react'
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
  }
  renderProduct = () => {
    return dataPhone.map((item) => {
      return (
        <div className="card col-4" key={item.maSP}>
          <img src={item.hinhAnh} alt="" height={'100%'} />
          <div className="card-body">
            <h3>{item.tenSP}</h3>
            <p>{item.giaBan.toLocaleString()}</p>
            <button
              className="btn btn-success"
              onClick={() => {
                this.setState({ spChiTiet: item })
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      )
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
