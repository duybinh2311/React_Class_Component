import React, { Component } from 'react'
export default class RenderWithMap extends Component {
  product = [
    { id: 1, name: 'red car', price: 1000, img: './img/products/red-car.jpg' },
    {
      id: 2,
      name: 'silver car',
      price: 1000,
      img: './img/products/silver-car.jpg',
    },
    {
      id: 3,
      name: 'black car',
      price: 1000,
      img: './img/products/black-car.jpg',
    },
    {
      id: 4,
      name: 'steel car',
      price: 1000,
      img: './img/products/steel-car.jpg',
    },
  ]
  /* viết hàm bằng method hay property đều gọi bằng this được trong class */
  renderProduct = () => {
    /* mảng các thẻ tr dựa trên dữ liệu của this */
    let output = []
    for (let prod of this.product) {
      let jsxTr = (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} style={{ width: 50 }} />
          </td>
        </tr>
      )
      output.push(jsxTr)
    }
    return output
  }
  renderMapTr() {
    let arrJSXTr = this.product.map((prod) => {
      return (
        <tr key={prod.id}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} style={{ width: 50 }} />
          </td>
        </tr>
      )
    })
    return arrJSXTr
  }
  renderCardProduct() {
    let arrJSXCol = this.product.map((prod) => {
      return (
        <div className="col-3" key={prod.id}>
          <div className="card text-center">
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <img src={prod.img} className='w-100' />
          </div>
        </div>
      )
    })
    return arrJSXCol
  }
  render() {
    return (
      <div className="container">
        <h3>Danh sách sản phẩm</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderMapTr()}</tbody>
        </table>
        <hr />
        <h3 className="text-center">Product list</h3>
        <div className="row justify-content-center">
          {this.renderCardProduct()}
        </div>
      </div>
    )
  }
}
