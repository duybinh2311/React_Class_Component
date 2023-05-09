import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { connect } from 'react-redux'

export class HomeTemplate extends Component {
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
              <NavLink className="dropdown-item" to={'/api'}>
                API State
              </NavLink>
              <NavLink className="dropdown-item" to={'/api-redux'}>
                API - Redux State
              </NavLink>
            </div>
          </div>
          <NavLink
            className={({ isActive }) =>
              `mx-2 nav-link w-auto ms-auto  ${
                isActive ? `text-black bg-white` : `text-white`
              }`
            }
            to={'/cart-page'}
          >
            <i className="fa fa-cart-plus"></i> {this.props.cart.length} -{' '}
            {this.props.cart
              .reduce((total, item) => {
                total += item.quantity * item.price
                return total
              }, 0)
              .toLocaleString()}
          </NavLink>
        </nav>
        <main style={{ minHeight: 770 }}>
          <Outlet />
        </main>
        <footer className="bg-dark text-white p-3 text-center">
          <h1>Footer</h1>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.cartReducer
}

export default connect(mapStateToProps)(HomeTemplate)
