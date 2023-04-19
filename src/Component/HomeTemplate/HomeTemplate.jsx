import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Cart from '../Props/ProductList/ProductDetail/Cart'
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <header className="header p-3 bg-dark text-white">
          <nav className="d-flex">
            <NavLink
              to={''}
              style={({ isActive }) => {
                return { border: isActive ? 'solid orange 1px' : '' }
              }}
              className={({ isActive }) =>
                isActive
                  ? 'text-dark mx-2 nav-link bg-white'
                  : 'text-white bg-dark mx-2 nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink
              to={'/cart'}
              style={({ isActive }) => {
                return { border: isActive ? 'solid orange 1px' : '' }
              }}
              className={({ isActive }) =>
                isActive
                  ? 'text-dark mx-2 nav-link bg-white'
                  : 'text-white bg-dark mx-2 nav-link'
              }
            >
              Cart
            </NavLink>
            <NavLink
              to={'/car'}
              style={({ isActive }) => {
                return { border: isActive ? 'solid 1px orange' : '' }
              }}
              className={({ isActive }) =>
                isActive
                  ? 'text-dark mx-2 nav-link bg-white'
                  : 'text-white bg-dark mx-2 nav-link'
              }
            >
              Car
            </NavLink>
            <NavLink
              to={'/login'}
              style={({ isActive }) => {
                return { border: isActive ? 'solid 1px orange' : '' }
              }}
              className={({ isActive }) =>
                isActive
                  ? 'text-dark mx-2 nav-link bg-white'
                  : 'text-white bg-dark mx-2 nav-link'
              }
            >
              Login
            </NavLink>
            <NavLink
              to={'/react-form'}
              style={({ isActive }) => {
                return { border: isActive ? 'solid 1px orange' : '' }
              }}
              className={({ isActive }) =>
                isActive
                  ? 'text-dark mx-2 nav-link bg-white'
                  : 'text-white bg-dark mx-2 nav-link'
              }
            >
              Form
            </NavLink>
            <NavLink
              to={'/react-lifecycle'}
              style={({ isActive }) => {
                return { border: isActive ? 'solid 1px orange' : '' }
              }}
              className={({ isActive }) =>
                isActive
                  ? 'text-dark mx-2 nav-link bg-white'
                  : 'text-white bg-dark mx-2 nav-link'
              }
            >
              React LifeCycle
            </NavLink>
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
