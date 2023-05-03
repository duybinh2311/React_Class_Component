import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Info extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://i.pravatar.cc?u=5" className="w-100" />
        <div className="card-body">
          <h3>Họ tên: {this.props.tenNhanVien}</h3>
          <p>
            Mã nhân viên: <b>{this.props.maNhanVien}</b>
            <br />
            Lương cơ bản: <b>{this.props.luongCoBan}$</b>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.nhanVienReducer
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
