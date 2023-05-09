import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AbortedDeferredError } from 'react-router-dom'
import {
  deleteCartItem,
  increaseQuantity,
  decreaseQuantity,
} from 'reducers/cartReducer'

export class TableCart extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.image} style={{ width: 50 }} />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.decreaseQuantity(index)
                      }}
                    >
                      -
                    </button>
                    <button className="btn btn-outline-primary disabled">
                      {item.quantity}
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.increaseQuantity(index)
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{(item.price * item.quantity).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.props.deleteCartItem(index)
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  }
}
const mapDispatchToProps = {
  deleteCartItem,
  increaseQuantity,
  decreaseQuantity,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCart)
