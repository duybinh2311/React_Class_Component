import React, { Component } from 'react'
import { store } from '../../redux/configStore'
import { connect } from 'react-redux'

class DemoTangGiamSoLuong extends Component {
  render() {
    return (
      <div className="container">
        <h1>Number: {store.getState().number}</h1>
        <button
          className="btn btn-dark mx-2"
          onClick={() => {
            // action là dữ liệu sẽ gửi lên redux store
            const action = {
              type: 'TANG_GIAM_SO_LUONG',
              payload: 1,
            }
            // dùng method dispatch để gửi dữ liệu lên redux store
            store.dispatch(action)
          }}
        >
          +
        </button>
        <button className="btn btn-dark mx-2">-</button>
      </div>
    )
  }
}

//Hàm lấy state từ redux về và biến this.props của component
const mapStateToProps = (state) => {
  return {
    number: state.number,
  }
}
const ComponentWithRedux = connect(mapStateToProps)(DemoTangGiamSoLuong)
export default ComponentWithRedux
