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
import DemoProps from './Component/Props/DemoProps'
import ProductList from './Component/Props/ProductList/ProductList'
import ProductDetail from './Component/Props/ProductList/ProductDetail/ProductDetail'

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
    {/* <DemoProps /> */}
    {/* <ProductList /> */}
    <ProductDetail/>
  </div>
)
