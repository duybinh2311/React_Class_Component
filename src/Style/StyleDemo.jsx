import React, { Component } from 'react'
/* Import css vào component sử dụng như bình thường */
import './style.css'

/* Import css theo dạng module thì truyền selector css vào bằng data bindindg */
import objectStyle from './style.module.css'
export default class StyleDemo extends Component {
  render() {
    const bg = '#24fa56'
    return (
      <div className="container">
        <p className="color-red">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
          totam.
        </p>
        <p className={objectStyle.colorPrimary}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          quaerat!
        </p>
        <p
          className={`${objectStyle['color-danger']} text-center bg-dark p-3 m-2`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          quaerat!
        </p>
        <p style={{ backgroundColor: bg }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          veniam!
        </p>
      </div>
    )
  }
}
