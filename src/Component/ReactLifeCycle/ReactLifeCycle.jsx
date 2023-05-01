import Rorangeeact, { Component } from 'react'
import Child from './Child'

export default class ReactLifeCycle extends Component {
  /* Khởi tạo */
  constructor(props) {
    super(props)
    this.state = {
      number: 10,
      like: 1,
      objectLike: {
        like: 1,
      },
    }
    console.log('%c constructor', 'color:chartreuse')
  }
  /* Thay đổi state trước khi render */
  static getDerivedStateFromProps(props, state) {
    console.log('%c getDerivedStateFromProps', 'color:chartreuse')
    return null
  }
  /* Kiểm tra thay đổi của state và props, nếu có sẽ re-render */
  /* Return true sẽ kích hoạt re-render */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%c shouldComponentUpdate', 'color:chartreuse')
    return true
  }
  /* Render component */
  render() {
    console.log('%c render', 'color:chartreuse')
    return (
      <div className="container">
        <h3 className="bg-dark text-white p-3 mt-2">
          Life Cycle <span>{this.state.number}</span>
        </h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ number: this.state.number + 1 })
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => {
            this.setState({
              objectLike: {
                like: this.state.objectLike.like + 1,
              },
            })
          }}
        >
          <i className="fa fa-heart"></i>
        </button>
        <Child objectLike={this.state.objectLike} />
      </div>
    )
  }
  timeout = {}
  /* Hoàn thành Lifecycle Mouting */
  componentDidMount() {
    console.log('%c componentDidMount', 'color:chartreuse')
    this.timeout = setInterval(() => {
      console.log('server response')
    }, 1000)
  }
  /* Hoàn thành LifeCycle Updating */
  componentDidUpdate(prevProps, prevState) {
    console.log('%c componentDidUpdate', 'color:chartreuse')
  }
  /* Hoàn thành LifeCycle Unmounting  */
  componentWillUnmount() {
    clearInterval(this.timeout)
  }
  /* Bắt lỗi và xuất ra 1 file riêng nếu cần  */
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }
}
