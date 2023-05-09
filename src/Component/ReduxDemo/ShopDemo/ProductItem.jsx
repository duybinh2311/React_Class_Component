import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '@/redux/reducers/cartReducer'

export class ProductItem extends Component {
  render() {
    const { product } = this.props
    return (
      <div className="card">
        <img src={product.image} className="w-100" />
        <div className="card-body">
          <h3
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {product.name}
          </h3>
          <p>{product.price}</p>
          <button
            onClick={() => {
              this.props.addCartItem(product)
            }}
            className="btn btn-dark"
          >
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { addCartItem }

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
