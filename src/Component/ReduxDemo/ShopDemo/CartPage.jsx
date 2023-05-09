import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableCart from './TableCart'
import { checkoutCart } from 'reducers/cartReducer'

export class CartPage extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-3">Cart</h3>
        <TableCart />
        <div className="text-end">
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#checkoutModal"
          >
            Thanh toán
          </button>
        </div>
        <div
          className="modal fade"
          id="checkoutModal"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered "
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Pay Out
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                Bạn muốn thanh toán sản phẩm trong giỏ hàng ?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    this.props.checkoutCart([])
                  }}
                >
                  Payout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { checkoutCart }

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
