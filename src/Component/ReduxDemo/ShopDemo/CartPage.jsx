import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableCart from './TableCart'

export class CartPage extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-3">Cart</h3>
        <TableCart />
        <div className='text-end'>
          <button className="btn btn-danger">Thanh toán</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
