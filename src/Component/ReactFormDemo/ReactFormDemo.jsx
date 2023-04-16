import React, { Component } from 'react'
import CreateProduct from './CreateProduct'

export default class ReactFormDemo extends Component {
  state = {
    arrProduct: [
      {
        idProduct: '01',
        name: 'Iphone X',
        price: 1000,
        type: 'Phone',
        img: 'https://i.pravatar.cc?u=1',
        desc: 'Điện thoại iphonex',
      },
    ],
  }

  addProduct = (prodInfo) => {
    console.log(prodInfo)
    this.state.arrProduct.push(prodInfo)
    this.setState({
      arrProduct: this.state.arrProduct,
    })
  }
  render() {
    return (
      <div className="container">
        <CreateProduct addProduct={this.addProduct} />
        <table className="table mt-2">
          <thead className="bg-dark text-white fw-bold">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>IMG</th>
              <th>Price</th>
              <th>Type</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((prod) => {
              return (
                <tr key={prod.idProduct}>
                  <td>{prod.idProduct}</td>
                  <td>{prod.name}</td>
                  <td>
                    <img src={prod.img} width={50} height={50} alt="" />
                  </td>
                  <td>{prod.price}</td>
                  <td>{prod.type}</td>
                  <td>{prod.desc}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
