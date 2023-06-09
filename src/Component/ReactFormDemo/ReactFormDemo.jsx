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
      {
        idProduct: '02',
        name: 'Iphone 11',
        price: 1000,
        type: 'Phone',
        img: 'https://i.pravatar.cc?u=1',
        desc: 'Điện thoại iphonex',
      },
      {
        idProduct: '03',
        name: 'Iphone 12',
        price: 1000,
        type: 'Phone',
        img: 'https://i.pravatar.cc?u=1',
        desc: 'Điện thoại iphonex',
      },
    ],
    productEdit: {
      idProduct: '',
      name: '',
      price: 0,
      type: '',
      img: '',
      desc: '',
    },
  }
  addProduct = (prodInfo) => {
    this.state.arrProduct.push(prodInfo)
    this.setState({
      arrProduct: this.state.arrProduct,
    })
  }
  delProduct = (idProductDel) => {
    let indexDel = this.state.arrProduct.findIndex(
      (prod) => prod.idProduct === idProductDel
    )
    if (indexDel !== -1) {
      this.state.arrProduct.splice(indexDel, 1)
    }
    /* Cuối cùng set state */
    this.setState({
      arrProduct: this.state.arrProduct,
    })
  }
  updateProduct = (newProduct) => {
    let prod = this.state.arrProduct.find(
      (prod) => prod.idProduct == newProduct.idProduct
    )
    if (prod) {
      for (let key in prod) {
        prod[key] = newProduct[key]
      }
    }
    //Set State sau khi cập nhật
    this.setState({
      arrProduct: this.state.arrProduct,
    })
  }
  render() {
    return (
      <div className="container">
        <CreateProduct
          productEdit={this.state.productEdit}
          addProduct={this.addProduct}
          updateProduct={this.updateProduct}
        />
        <table className="table mt-2">
          <thead className="bg-dark text-white fw-bold">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>IMG</th>
              <th>Price</th>
              <th>Type</th>
              <th>Desc</th>
              <th></th>
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
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.setState({
                          productEdit: prod,
                        })
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.delProduct(prod.idProduct)
                      }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
