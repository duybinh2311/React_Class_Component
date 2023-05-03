import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInfoNhanVien } from '../../redux/actions'
import { changeInfo } from '../../redux/reducers/nhanVienReducer'
export class FormNV extends Component {
  render() {
    return (
      <form>
        <h3>Thông Tin Nhân Viên</h3>
        <div className="input-group mb-3">
          <label htmlFor="maNhanVien" className="input-group-text">
            Mã nhân viên
          </label>
          <input
            type="text"
            className="form-control"
            id="maNhanVien"
            onInput={(event) => {
              this.props.getInfoNhanVien(event.target.id, event.target.value)
            }}
          />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="tenNhanVien" className="input-group-text">
            Tên nhân viên
          </label>
          <input
            type="text"
            className="form-control"
            id="tenNhanVien"
            onInput={(event) => {
              this.props.getInfoNhanVien(event.target.id, event.target.value)
            }}
          />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="luongCoBan" className="input-group-text">
            Lương cơ bản
          </label>
          <input
            type="text"
            className="form-control"
            id="luongCoBan"
            onInput={(event) => {
              this.props.getInfoNhanVien(event.target.id, event.target.value)
            }}
          />
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-success" type="button">
            Hiển Thị
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { getInfoNhanVien, changeInfo }

export default connect(mapStateToProps, mapDispatchToProps)(FormNV)
