import React, { Component } from 'react'
import { connect } from 'react-redux'

//Xoá export
class FormNhanVien extends Component {
  handleChangeInput = (event) => {
    let { id, value } = event.target
    const action = {
      type: 'CHANGE_INFO',
      payload: { id, value },
    }
    /* Đưa object id value lên redux */
    this.props.dispatch(action)
  }
  render() {
    return (
      <form>
        <h3>Thông tin nhân viên</h3>
        <div className="form-group mt-3">
          <input
            className="form-control"
            id="maNhanVien"
            onInput={this.handleChangeInput}
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            id="tenNhanVien"
            onInput={this.handleChangeInput}
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            id="luongCoBan"
            onInput={this.handleChangeInput}
          />
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-success" type="submit">
            Hiển thị
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(FormNhanVien)
