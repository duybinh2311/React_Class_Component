import React, { Component } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Cart from '../Props/ProductList/ProductDetail/Cart'
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className="header p-3 bg-dark text-white">
          <nav className="d-flex">
            {/* <a href="/" className="text-white mx-2 nav-link">
              Home
            </a>
            <a href="cart" className="text-white mx-2 nav-link">
              Cart
            </a> */}
            <Link to={''} className="text=white mx-2 nav-link">
              Home
            </Link>
            <Link to={'/cart'} className="text=white mx-2 nav-link">
              Cart
            </Link>
          </nav>
        </header>
        <main style={{ minHeight: 650 }}>
          <Outlet></Outlet>
        </main>
        <footer className="bg-dark text-white p-3 text-center">
          <h1>Footer</h1>
        </footer>
      </div>
    )
  }
}
