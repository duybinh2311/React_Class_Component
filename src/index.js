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

/* Cấu hình React Router DOM */
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomeTemplate from './Component/HomeTemplate/HomeTemplate'
import Login from './Component/Pages/Login'
import Profile from './Component/Pages/Profile'
import ReactFormDemo from './Component/ReactFormDemo/ReactFormDemo'
import ReactLifeCycle from './Component/ReactLifeCycle/ReactLifeCycle'

/* Cấu hình Redux */
import { Provider } from 'react-redux'
import { store } from './redux/configStore'
import TangGiamSoLuong from './Component/ReduxDemo/TangGiamSoLuong'
import BaiTapChonXe from './Component/ReduxDemo/BaiTapChonXe'
import FormNhanVien from './Component/ReduxDemo/FormNhanVien'

/* Nội dung toàn bộ website sẽ được chứa trong hàm render */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/react-form" element={<ReactFormDemo />} />
          <Route path="/react-lifecycle" element={<ReactLifeCycle />} />
          <Route path="/redux-demo-1" element={<TangGiamSoLuong />} />
          <Route path="/redux-demo-2" element={<BaiTapChonXe />} />
          <Route path="/redux-demo-3" element={<FormNhanVien />} />
          <Route path="*" element={<Navigate to={''} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
