/* Import các thư viện của React */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Component/Home/Home'
import DataBinding from './Component/DataBinding/DataBinding'
import HandleEvent from './Component/HandleEvent/HandleEvent'
import State from './Component/State/State'
import StyleDemo from './Style/StyleDemo'
import RenderWithMap from './Component/RenderWithMap/RenderWithMap'
import './Style/index.scss'

/* Nội dung toàn bộ website sẽ được chứa trong hàm render */
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    {/* <Home /> */}
    {/* <DataBinding /> */}
    {/* <HandleEvent /> */}
    {/* <State /> */}
    {/* <StyleDemo /> */}
    {/* <RenderWithMap/> */}
    <h3 className="color-red">Hello</h3>
  </div>
)
