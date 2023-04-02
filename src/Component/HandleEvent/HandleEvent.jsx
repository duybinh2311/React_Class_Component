import React, { Component } from 'react'

export default class HandleEvent extends Component {
  handleClick(event) {
    // alert('Hello CyberSoft')
    event.target.className = 'btn btn-danger'
  }
  render() {
    const handleEvent = (event) => {
      alert('Hello CyberSoft')
    }
    return (
      <div className="container">
        <h3>HandleEvent</h3>
        <button className="btn btn-success" onClick={this.handleClick}>
          Click Me
        </button>
        <button className="btn btn-success" onClick={handleEvent}>
          Click Me
        </button>
      </div>
    )
  }
}
