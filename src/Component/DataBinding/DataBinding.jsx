import React, { Component } from 'react'

const TITLE = 'CyberSoft'

const renderInfo = (name, age) => {
  // nội dung của hàm trả về trong jsx là primitive value (string, boolean, number, jsx)
  return `Xin chào ${name}, ${age} tuổi`
}

export default class DataBinding extends Component {
  user = {
    userName: 'Khải',
    password: 123,
  }
  render() {
    return (
      <div className='container'>
        <h3>{TITLE}</h3>
        <p>{renderInfo('Tùng', 18)}</p>
        <div className="card w-25">
          <h3 className="card-header text-center bg-dark text-white">User info</h3>
          <p>User name</p>
          <input
            type="text"
            className="form-control"
            value={this.user.userName}
          />
          <p>Password</p>
          <input
            type="text"
            className="form-control"
            value={this.user.password}
          />
        </div>
      </div>
    )
  }
}
