import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class RequestAPI extends Component {
  state = {
    arrProduct: [],
  }
  getAllProductAPI = () => {
    axios
      .get('https://shop.cyberlearn.vn/api/Product')
      .then((result) => {
        this.setState({
          arrProduct: result.data.content,
        })
      })
      .catch((error) => {
        throw error
      })
  }
  render() {
    return (
      <div className="container py-5">
        <button
          className="btn btn-success"
          onClick={() => {
            this.getAllProductAPI()
          }}
        >
          Get Data API
        </button>
        <h3 className="text-center">Shoes Shop</h3>
        <div className="row g-3">
          {this.state.arrProduct.map((prod) => {
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
    this.getAllProductAPI()
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(RequestAPI)
