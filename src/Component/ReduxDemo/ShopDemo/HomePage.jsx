import React, { Component } from 'react'
import { connect } from 'react-redux'
import { arrProduct } from '../../../data/data'
import ProductItem from './ProductItem'

export class HomePage extends Component {
  renderProduct = () => {
    return arrProduct.map((prod) => {
      return (
        <div className="col-3 g-3" key={prod.id}>
          <ProductItem product={prod} />
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center mt-3">Product List</h3>
        <div className="row">{this.renderProduct()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
