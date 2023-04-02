import React, { Component } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

export default class Home extends Component {
  // Phương thức hiển thị giao diện của component
  render() {
    // Nội dung component sẽ chứa trong 1 thẻ bất kì
    return (
      <div>
        <Header></Header>
        {/* Không set width bên trong component vì component có thể sử dụng ở nhiều giao diện khác nhau */}
        <div className="d-flex">
          <div className="w-25">
            <Navigation></Navigation>
          </div>
          <div className="w-75">
            <Content></Content>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
