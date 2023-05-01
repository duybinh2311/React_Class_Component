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
import BaiTapChonXe from './Component/State/BaiTapChonXe'
import Login from './Component/Pages/Login'
import Profile from './Component/Pages/Profile'
import ReactFormDemo from './Component/ReactFormDemo/ReactFormDemo'
/* Cấu hình redux */
import { Provider } from 'react-redux'
import { store } from './redux/configStore'
import DemoTangGiamSoLuong from './Component/ReduxDemo/DemoTangGiamSoLuong'
import ReduxBaiTapChonXe from './Component/ReduxDemo/ReduxBaiTapChonXe'
import ReduxFormNhanVien from './Component/ReduxDemo/ReduxFormNhanVien'
import ReactLifeCycle from './Component/ReactLifeCycle/ReactLifeCycle'
/* Nội dung toàn bộ website sẽ được chứa trong hàm render */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="cart" element={<ProductDetail />}></Route>
          <Route path="car" element={<BaiTapChonXe />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="react-form" element={<ReactFormDemo />}></Route>
          <Route path="react-lifecycle" element={<ReactLifeCycle />}></Route>
          <Route path="redux-demo1" element={<DemoTangGiamSoLuong />}></Route>
          <Route path="redux-demo2" element={<ReduxBaiTapChonXe />}></Route>
          <Route path="redux-demo3" element={<ReduxFormNhanVien />}></Route>
          <Route path="*" element={<Navigate to={''} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
