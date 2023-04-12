import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    /* lấy ra giá trị các object truyền vào thuộc tính iinfo */
    /* children: là 1 props đặc biệt dùng để hiển thị nội dung innerHTML của thẻ component */
    const { info, children, TheBaiTap } = this.props
    return (
      <div className="bg-dark p-3 text-white mt-2">
        <h3>{info.tieuDe}</h3>
        <p>{info.noiDung}</p>
        {children}
        <TheBaiTap></TheBaiTap>
      </div>
    )
  }
}
