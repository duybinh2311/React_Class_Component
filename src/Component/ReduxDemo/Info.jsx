import React, { Component } from 'react'
import { connect } from 'react-redux'

class Info extends Component {
  render() {
    console.log(this.props)
    let { nhanvienReducer } = this.props
    return (
      <div className="card">
        <img src="https://i.pravatar.cc?u=5" alt="..." />
        <div className="card-body">
          <h3>Họ tên: {nhanvienReducer.tenNhanVien}</h3>
          <p>Mã nhân viên: {nhanvienReducer.maNhanVien}</p>
          <p>Lương Căn bản: {nhanvienReducer.luongCoBan}$ </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Info)
