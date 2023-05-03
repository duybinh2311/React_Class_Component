import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../../redux/actions'

export class BaiTapChonXe extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-6">
            <img src={this.props.imgCar} className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="me-2 btn text-white"
              style={{ background: 'red' }}
              onClick={() => this.props.changeColor('red')}
            >
              Red
            </button>
            <button
              className="me-2 btn text-white"
              style={{ background: 'black' }}
              onClick={() => this.props.changeColor('black')}
            >
              Black
            </button>
            <button
              className="me-2 btn text-white"
              style={{ background: '#808080' }}
              onClick={() => this.props.changeColor('steel')}
            >
              Steel
            </button>
            <button
              className="me-2 btn text-white"
              style={{ background: 'silver' }}
              onClick={() => this.props.changeColor('silver')}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  imgCar: state.imgCar,
})

const mapDispatchToProps = { changeColor }

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapChonXe)
