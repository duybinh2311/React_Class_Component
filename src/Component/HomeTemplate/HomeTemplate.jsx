import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
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
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Redux
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/redux-demo1">
                  Demo Tăng giảm SL
                </NavLink>
                <NavLink className="dropdown-item" to="/redux-demo2">
                  Demo Chọn xe
                </NavLink>
                <NavLink className="dropdown-item" to="/redux-demo3">
                  Demo Form Nhân Viên
                </NavLink>
              </div>
            </div>
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
