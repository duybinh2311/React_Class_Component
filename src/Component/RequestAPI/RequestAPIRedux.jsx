import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProductAPI, getAllProduct } from 'reducers/productReducer'

export class RequestAPIRedux extends Component {
  render() {
    return (
      <div className="container py-5">
        <h3 className="text-center  ">Shoes Shop</h3>
        <div className="row g-3">
          {this.props.arrProduct.map((prod) => {
            return (
              <div className="col-4" key={prod.id}>
                <div className="card">
                  <img src={prod.image} alt="" />
                  <div className="card-body">
                    <h3>{prod.name}</h3>
                    <p>{prod.price}$</p>
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
    getAllProductAPI().then((data) => {
      this.props.getAllProduct(data)
    })
  }
}

const mapStateToProps = (state) => ({
  arrProduct: state.productReducer.arrProduct,
})

const mapDispatchToProps = { getAllProduct }

export default connect(mapStateToProps, mapDispatchToProps)(RequestAPIRedux)
