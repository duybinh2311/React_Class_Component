import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TableCart extends Component {
  renderTableCart = () => {
    const { cartItemReducer } = this.props
    return cartItemReducer.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>
            <img src={item.image} style={{ width: 50 }} />
          </td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>Quantity</td>
          <td>Total</td>
          <td>
            <button className="btn btn-danger">X</button>
          </td>
        </tr>
      )
    })
  }
  render() {
    console.log(this.props.cartItemReducer)
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
        <tbody>{this.renderTableCart()}</tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItemReducer: state.cartItemReducer,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TableCart)
