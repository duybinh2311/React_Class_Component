import React, { Component, startTransition } from 'react'

export default class CreateProduct extends Component {
  state = {
    values: {
      idProduct: '',
      name: '',
      price: '',
      img: '',
      type: 'phone',
      desc: '',
    },
    errors: {
      idProduct: '(*)',
      name: '(*)',
      price: '(*)',
      img: '(*)',
      desc: '(*)',
    },
  }
  handleSubmit = (event) => {
    event.preventDefault()
    /* Kiểm tra nếu hợp lệ thì mới add product */
    // Duyệt this.state.erros
    // for (let key in this.state.errors) {
    //   if (this.state.errors[key] !== '') {
    //     alert('Dữ liệu nhập vào không hợp lệ')
    //     return
    //   }
    // }
    // Call API
    let { addProduct } = this.props
    addProduct(this.state.values)
  }
  handleChangeInput = (event) => {
    let { value, id } = event.target
    let dataType = event.target.getAttribute('data-type')
    let minLength = event.target.getAttribute('data-minlength')
    let maxLength = event.target.getAttribute('data-maxlength')
    // Xử lý this.state.values
    let newValues = { ...this.state.values }
    newValues[id] = value

    // Xử lý this.state.errors
    let newErrors = { ...this.state.errors }
    let messError = ''
    if (value.trim() === '') {
      messError = id + ' không được bỏ trống !'
    } else {
      if (dataType) {
        switch (dataType) {
          case 'number': {
            let regexNumber = /^\d+$/
            if (!regexNumber.test(value)) {
              messError = id + ' phải là số !'
            }
            break
          }
          case 'string': {
            let regexString = /^[a-z A-Z]+$/
            if (!regexString.test(value)) {
              messError = id + ' phải là ký tự !'
            }
            break
          }
        }
      }
    }
    newErrors[id] = messError

    this.setState({
      values: newValues,
      errors: newErrors,
    })
  }
  /* Can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gắn vào state */
  // static getDerivedStateFromProps(newProps,currentState) {
  //     if(newProps.productEdit.idProduct !== currentState.values.idProduct) {
  //         //Bấm sửa
  //         currentState.values = {...newProps.productEdit}
  //         return currentState;
  //     }
  //     return null;
  //   }
  /* Chỉ chạy khi props thay đổi và chạy trước khi render (thường dùng cho việc gán props vào state) */
  componentWillReceiveProps(newProps) {
    this.setState({ values: newProps.productEdit })
  }
  render() {
    let { idProduct, name, price, type, img, desc } = this.state.values
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">Product Info</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>ID</p>
                <input
                  name="idProduct"
                  className="form-control"
                  id="idProduct"
                  onInput={this.handleChangeInput}
                  value={idProduct}
                />
                <p className="text-danger">{this.state.errors.idProduct}</p>
              </div>
              <div className="form-group">
                <p>Name</p>
                <input
                  name="name"
                  className="form-control"
                  id="name"
                  onInput={this.handleChangeInput}
                  value={name}
                />
                <p className="text-danger">{this.state.errors.name}</p>
              </div>
              <div className="form-group">
                <p>Price</p>
                <input
                  name="price"
                  className="form-control"
                  id="price"
                  data-type="number"
                  onInput={this.handleChangeInput}
                  value={price}
                />
                <p className="text-danger">{this.state.errors.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Img</p>
                <input
                  name="img"
                  className="form-control"
                  id="img"
                  onInput={this.handleChangeInput}
                  value={img}
                />
                <p className="text-danger">{this.state.errors.img}</p>
              </div>
              <div className="form-group">
                <p>Type</p>
                <select
                  className="form-control"
                  id="type"
                  name="type"
                  onInput={this.handleChangeInput}
                  value={type}
                >
                  <option value="phone">Phone</option>
                  <option value="table">Table</option>
                  <option value="laptop">Laptop</option>
                </select>
                <p className="text-danger" style={{ visibility: 'hidden' }}>
                  {this.state.errors.desc}
                </p>
              </div>
              <div className="form-group">
                <p>Desc</p>
                <input
                  name="desc"
                  id="desc"
                  data-minlength="6"
                  data-maxlenght="32"
                  className="form-control"
                  onInput={this.handleChangeInput}
                  value={desc}
                />
                <p className="text-danger">{this.state.errors.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" type="submit">
            Create
          </button>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
              // lấy hàm update từ component cha truyền vào
              let { updateProduct } = this.props
              // gửi ra dữ liệu sau khi thay đổi product
              updateProduct(this.state.values)
            }}
          >
            Update
          </button>
        </div>
      </form>
    )
  }
}
