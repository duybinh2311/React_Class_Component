import React, { Component } from 'react'
import Child from './Child'
/* 
  Life Cycle Map: Vòng đời của 1 Component
  + Mounting (Quá trình component sinh ra trên UI)
    - constructor (khởi tạo component)
    - getDerivedStateFromProps (lấy giá trị mới của state)
    - render (render component)
    - componentDidMount (hoàn thành đưa component vào cây DOM, thực hiện các tác vụ nếu có)
  + Updating (Quá trình component update trên UI)
    - getDerivedStateFromProps (lấy giá trị mới của state)
    - shouldComponentUpdate (so sánh giá trị props và state mới có khác giá trị props và state cũ không, nếu có thì sẽ gọi hàm render, mặc định trả về true)
    - render (render component)
    - componentDidUpdate (hoàn thành update component trên cây DOM, thực hiện các tác vụ nếu có)
  + Unmount (Quá trình component biến mất trên UI)
    - componentWillUnmount (clear đi các tác vụ chạy ngầm của component trước khi component này biến mất khỏi UI)
*/
export default class ReactLifeCycle extends Component {
  /* Hàm khởi tạo của component, nhận vào các properties truyền vào component và khởi tạo thành một đối tượng props để quản lý các properties đó */
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
      like: 1,
      obLike: {
        like: 1,
      },
    }
    console.log('contructor lifecycle')
  }
  /* Phương thức này được sử dụng khi state của component phụ thuộc vào sự thay đổi của props, nó nhận vào props mới và state của component này trả về object để cập nhật thay đổi của state hoặc null để chỉ ra rằng không có gì thay đổi */
  static getDerivedStateFromProps(newProps, currentState) {
    console.log('getDerivedStateFromProps lifecycle')
    return null
  }
  /* Hàm này được gọi khi phương thức setState được gọi hoặc props của component cha thay đổi gián tiếp gây ra thay đổi ở component con, nếu hàm này return về true, hàm render sẽ được gọi ngay sau đó, return false sẽ chặn hàm gọi hàm render lại component */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate lifecycle')
    return true
  }
  /* Hàm này render ra component => đưa lên giao diện nếu có đẩy vào root */
  render() {
    console.log('render lifecycle')
    return (
      <div className="container">
        Component life cycle:
        <h3>Number: {this.state.number}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            })
          }}
        >
          +
        </button>
        <Child obLike={this.state.obLike} />
        <i
          onClick={() => {
            let newOblike = this.state.obLike
            newOblike.like += 1
            this.setState({
              obLike: { ...newOblike },
            })
          }}
          className="fa fa-heart text-danger display-4"
          style={{ cursor: 'pointer' }}
        ></i>
      </div>
    )
  }
  /* Hàm này được gọi sau khi component được render lần đầu tiên và đặt vào cây DOM. Phương thức này thường được dùng để call API, khi giao diện đã có trên cây DOM sẽ tiến hành xử lý các data trả về để đưa lên giao diện */
  componentDidMount() {
    console.log('componentDidMount lifecycle')
    this.timeout = setInterval(() => {
      console.log('server response')
    }, 1000)
    // Call API
    console.log('componentDidMount chỉ chạy 1 lần sau render lần đầu tiên')
  }
  /* Hàm này được gọi sau khi component render lại do props hoặc state thay đổi */
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate lifecycle')
    console.log(
      'componentDidUpdate chạy sau render mỗi lần props hoặc state thay đổi'
    )
    //Tuyệt đối không setState khi không có điều kiện
    // this.setState({
    //     number:this.state.number + 1
    // })
  }
  /* Hàm này dùng để bắt lỗi xảy ra nếu có trong life cycle */
  componentDidCatch(error, errorInfo) {
    console.log(error)
    console.log(errorInfo)
  }
  /* Hàm này giúp clear đi các hàm chạy ngầm của component trước khi component mất đi khỏi giao diện */
  componentWillUnmount() {
    clearInterval(this.timeout)
  }
}
