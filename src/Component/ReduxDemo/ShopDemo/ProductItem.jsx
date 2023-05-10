import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '@/redux/reducers/cartReducer'
import toast from 'react-hot-toast'
import { getAllProductAPI } from 'reducers/productReducer'

export class ProductItem extends Component {
  render() {
    const { product } = this.props
    const myPromise = getAllProductAPI()
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
              toast.success('Đã thêm sản phẩm')
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
