import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Profile extends Component {
  render() {
    if (!localStorage.getItem('token')) {
      alert('Phải đăng nhập')
      return <Navigate to={'/login'} />
    }
    return <div>Profile</div>
  }
}
