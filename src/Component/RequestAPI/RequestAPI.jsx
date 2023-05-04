import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export class RequestAPI extends Component {
  state = {
    arrProduct: [],
  }
  getAllProduct = () => {
    axios
      .get('https://shop.cyberlearn.vn/api/Product')
      .then((result) => {
        this.setState({
          arrProduct: result.data.content,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => this.getAllProduct()}
        >
          Get data API
        </button>
        <h3 className="text-center mt-3">Shoes Shop</h3>
        <div className="row">
          {this.state.arrProduct.map((prod) => {
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
    this.getAllProduct()
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RequestAPI)
