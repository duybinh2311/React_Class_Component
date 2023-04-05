import React, { Component } from 'react'

export default class DemoChangeColor extends Component {
  state = {
    color: '#000',
  }
  render() {
    return (
      <div className="container my-5">
        <i
          className="fa fa-home display-1"
          style={{ color: this.state.color }}
        ></i>
        <select
          className="mt-2 form-control w-25"
          onChange={(event) => {
            this.setState({ color: event.target.value })
          }}
        >
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>
      </div>
    )
  }
}
