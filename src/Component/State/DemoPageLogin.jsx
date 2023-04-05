import React, { Component } from 'react'
export default class DemoPageLogin extends Component {
  state = {
    isLogin: true, // mặc định chưa đăng nhập
  }
  renderLogin() {
    if (this.state.isLogin) {
      return (
        <div className="btn btn-success">
          <button className="btn btn-success">Profile - Bình</button>
          <button
            className="btn btn-light mx-2"
            onClick={() => {
              this.setState({
                isLogin: false,
              })
            }}
          >
            Đăng Xuất
          </button>
        </div>
      )
    }
    return (
      <button
        className="btn btn-success"
        onClick={() => {
          this.setState({
            isLogin: true,
          })
        }}
      >
        Login
      </button>
    )
  }
  render() {
    return (
      <div className="bg-dark text-white py-3">
        <div className="d-flex">
          <div className="w-75 text-center">
            <a href="#" className="mx-2 text-decoration-none">
              Home
            </a>
            <a href="#" className="mx-2 text-decoration-none">
              About
            </a>
            <a href="#" className="mx-2 text-decoration-none">
              Cart
            </a>
          </div>
          <div className="text-end w-25 px-5">
            {/* render if else theo toán tử 3 ngôi */}
            {/* {this.state.isLogin ? (
              <button className="btn btn-success">Duy Bình</button>
            ) : (
              <button className="btn btn-success">Login</button>
            )} */}
            {this.renderLogin()}
          </div>
        </div>
      </div>
    )
  }
}
