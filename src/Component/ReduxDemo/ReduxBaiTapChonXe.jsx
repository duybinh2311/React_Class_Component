import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReduxBaiTapChonXe extends Component {
  render() {
    // state lấy được từ redux store sẽ được chuyển thành props của component
    console.log(this.props)
    return (
      <div className="container">
        <h1>Bài tập chọn xe</h1>
        <div className="row">
          <div className="col-6">
            <img src={this.props.imgCar} className="w-100" />
          </div>
          <div className="col-6">
            <button
              className="mx-2 btn text-white"
              style={{ background: 'red' }}
            >
              Red
            </button>
            <button
              className="mx-2 btn text-white"
              style={{ background: 'black' }}
            >
              Black
            </button>
            <button
              className="mx-2 btn text-white"
              style={{ background: '#EEE' }}
            >
              Steel
            </button>
            <button
              className="mx-2 btn text-white"
              style={{ background: 'silver' }}
            >
              Silver
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ReduxBaiTapChonXe)
