import React, { Component } from 'react'

export default class DemoLogin extends Component {
  state = {
    result: 'default value',
  }
  handleSubmit = (event) => {
    /* State là thuộc tính của component để quản lý các biến thay đổi trên giao diện của 1 component */
    event.preventDefault()
    // không dược thay đổi state trực tiếp vì giao diện không được render lại
    // this.state.result = 'Đăng nhập thành công'
    let newState = {
      result: 'Đăng nhập thành công',
    }
    /* setState: là phương thức của component, dùng để thay đổi giá trị state, đồng thời làm giao diện render lại với giá trị state mới */
    this.setState(newState)
  }

  render() {
    return (
      <div className="container">
        <form className="card w-25 mx-auto" onSubmit={this.handleSubmit}>
          <div className="card-header bg-dark text-white text-center">
            Login
          </div>
          <div className="card-body">
            <p>User Name</p>
            <input className="form-control" id="username" />
            <input className="form-control" id="password" />
          </div>
          <div className="card-footer text-center">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>
        </form>
        <div className="alert alert-success w-25 mx-auto">
          <p>{this.state.result}</p>
        </div>
      </div>
    )
  }
}
