import React, { Component } from 'react'
import DemoLogin from './DemoLogin'
import BaiTapChonXe from './BaiTapChonXe'
import DemoChangeFontSize from './DemoChangeFontSize'
import DemoChangeColor from './DemoChangeColor'
import DemoPageLogin from './DemoPageLogin'

export default class State extends Component {
  render() {
    return (
      <div>
        {/* <DemoLogin /> */}
        {/* <BaiTapChonXe />
        <DemoChangeFontSize />
        <DemoChangeColor /> */}
        <DemoPageLogin />
      </div>
    )
  }
}
