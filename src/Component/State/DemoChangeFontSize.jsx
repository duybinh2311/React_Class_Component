import React, { Component } from 'react'

export default class DemoChangeFontSize extends Component {
  state = {
    fSize: 16,
  }
  render() {
    return (
      <div className="container my-5">
        <h3>Bài tập tăng giảm Font Size</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          provident autem debitis amet ut in fugit saepe error nobis iusto!
        </p>
        <button
          className="btn btn-success mx-2"
          onClick={() =>
            this.setState({
              fSize: this.state.fSize + 1,
            })
          }
        >
          +
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() =>
            this.setState({
              fSize: this.state.fSize - 1,
            })
          }
        >
          -
        </button>
      </div>
    )
  }
}
