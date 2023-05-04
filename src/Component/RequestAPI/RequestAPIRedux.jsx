import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getDataProduct,
  getAllProduct,
} from '../../redux/reducers/productReducer'

export class RequestAPIRedux extends Component {
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() =>
            getAllProduct().then((data) => {
              this.props.getDataProduct(data)
            })
          }
        >
          Get data API
        </button>
        <h3 className="text-center mt-3">Shoes Shop</h3>
        <div className="row">
          {this.props.arrProduct.map((prod) => {
            return (
              <div className="col-4" key={prod.id}>
                <div className="card">
                  <img src={prod.image} alt="" />
                  <div className="card-body">
                    <h3>{prod.name}</h3>
                    <p>{prod.price} $</p>
                    <button className="btn btn-dark">
                      <i className="fa fa-cart-plus"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  componentDidMount() {
    getAllProduct().then((data) => {
      this.props.getDataProduct(data)
    })
  }
}

const mapStateToProps = (state) => ({
  arrProduct: state.productReducer.arrProduct,
})

const mapDispatchToProps = { getDataProduct }

export default connect(mapStateToProps, mapDispatchToProps)(RequestAPIRedux)
