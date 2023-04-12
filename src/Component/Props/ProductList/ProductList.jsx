import React, { Component } from 'react'
import { arrProduct } from '../../../data/data'
import ProductItem from './ProductItem'
export default class ProductList extends Component {
  renderProduct = () => {
    let arrJSX = arrProduct.map((item) => {
      return (
        <div className="col-4 mt-2" key={item.id}>
          <ProductItem prodInfo={item} />
        </div>
      )
    })
    return arrJSX
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Product List</h3>
        <div className="row">
          {this.renderProduct()}
        </div>
      </div>
    )
  }
}
