import React, { Component, PureComponent } from 'react'
/* 
  PureComponent có thể hiện giống Component nhưng loại bỏ LifeCycle shouldComponentUpdate, thay vào đó PureComponent sẽ tự kiểm tra thay đổi của props và state mới, nếu có component sẽ re-render
  Lưu ý: nó sẽ so sánh theo shallow compare (primitive value)
*/
export default class Child extends Component {
  /* Khởi tạo */
  constructor(props) {
    super(props)
    this.state = {}
    console.log('%c constructor', 'color:aqua')
  }
  /* Thay đổi state trước khi render */
  /* Return về object chứa những thay đổi của state mới hoặc null nếu không có thay đổi */
  static getDerivedStateFromProps(props, state) {
    console.log('%c getDerivedStateFromProps', 'color:aqua')
    return null
  }
  /* Kiểm tra thay đổi của state và props, nếu có sẽ re-render */
  /* Return true sẽ kích hoạt re-render */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%c shouldComponentUpdate', 'color:aqua')
    if (nextProps.objectLike != this.props.objectLike) {
      return true
    }
    return false
  }
  /* Render */
  render() {
    console.log('%c render', 'color:aqua')
    const { objectLike } = this.props
    return (
      <h3 className="bg-dark text-white p-3 mt-2">
        Child <span>{objectLike.like}</span>
      </h3>
    )
  }
  /* Hoàn thành lifeCycle Mouting */
  componentDidMount() {
    console.log('%c componentDidMount', 'color:aqua')
  }
  /* Hoàn thành LifeCycle Updating */
  componentDidUpdate(prevProps, prevState) {
    console.log('%c componentDidUpdate', 'color:aqua')
  }
  /* Bắt lỗi và xuất ra 1 file riêng nếu cần  */
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }
}
