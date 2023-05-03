import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <nav className="nav p-3 bg-dark text-white">
          {/* Home */}
          <NavLink
            className={({ isActive }) =>
              `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
            }
            to=""
          >
            Home
          </NavLink>
          {/* Product */}
          <NavLink
            className={({ isActive }) =>
              `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
            }
            to={'/product'}
          >
            Product
          </NavLink>
          {/* Login */}
          <NavLink
            className={({ isActive }) =>
              `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
            }
            to={'/login'}
          >
            Login
          </NavLink>
          {/* React Form */}
          <NavLink
            className={({ isActive }) =>
              `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
            }
            to={'/react-form'}
          >
            React Form
          </NavLink>
          {/* React LifeCycle */}
          <NavLink
            className={({ isActive }) =>
              `mx-2 nav-link ${isActive ? `text-black bg-white` : `text-white`}`
            }
            to={'/react-lifecycle'}
          >
            React LifeCycle
          </NavLink>
          {/* Redux */}
          <div className="dropdown">
            <button
              className="nav-link text-white dropdown-toggle"
              type="button"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux
            </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
              <NavLink className="dropdown-item" to={'/redux-demo-1'}>
                Tăng Giảm Số Lượng
              </NavLink>
              <NavLink className="dropdown-item" to={'/redux-demo-2'}>
                Chọn Xe
              </NavLink>
              <NavLink className="dropdown-item" to={'/redux-demo-3'}>
                Form Nhân Viên
              </NavLink>
            </div>
          </div>
        </nav>
        <main style={{ minHeight: 650 }}>
          <Outlet />
        </main>
        <footer className="bg-dark text-white p-3 text-center">
          <h1>Footer</h1>
        </footer>
      </div>
    )
  }
}
