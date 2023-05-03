import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormNV from './FormNV'
import Info from './Info'

export class FormNhanVien extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Form Nhân Viên</h3>
        <div className="row">
          <div className="col-6">
            <FormNV />
          </div>
          <div className="col-6">
            <Info />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FormNhanVien)
