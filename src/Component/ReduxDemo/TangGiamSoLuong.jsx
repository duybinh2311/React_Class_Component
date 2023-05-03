import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tangSoLuong, giamSoLuong } from '../../redux/actions'

class TangGiamSoLuong extends Component {
  render() {
    return (
      <div className="container">
        <h1>Number: {this.props.number}</h1>
        <button
          onClick={() => {
            this.props.tangSoLuong()
          }}
          className="btn btn-primary me-2"
          style={{ width: 40 }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.giamSoLuong()
          }}
          className="btn btn-danger"
          style={{ width: 40 }}
        >
          -
        </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    number: state.number,
  }
}
const mapDispatchToProps = { tangSoLuong, giamSoLuong }
export default connect(mapStateToProps, mapDispatchToProps)(TangGiamSoLuong)
