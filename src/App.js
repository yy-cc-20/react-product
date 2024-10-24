import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import './App.css';

import Header from './components/Navigation/Header/Header';
import Breadcrumb from './components/Navigation/Breadcrumb/Breadcrumb';
import LeftMenu  from './components/Navigation/LeftMenu/LeftMenu';
import { ProtectedRoute } from './components/Navigation/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './services/AuthProvider';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Authentication/Login/Login';
import MyProfile from './pages/MyProfile/MyProfile';
import Product from './pages/Products/Product';
import Unauthorized from './pages/Authentication/Unauthorized/Unauthorized';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ForgetPassword from './pages/Authentication/ForgetPassword/ForgetPassword';
import ChangePassword from './pages/ChangePassword/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      
      <AuthProvider>
        <Header></Header>
        <Breadcrumb></Breadcrumb>
        <LeftMenu></LeftMenu>
        
        <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SignIn" element={<Login />}/>
          <Route path="/fgtpswd" element={<ForgetPassword />} />
          <Route path="/Unauthorized" element={<Unauthorized />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/Profile" element={<MyProfile />}/>
            <Route path="/changepswd" element={<ChangePassword />} />
            <Route path="/Product" element={<Product />} />
            <Route path='/Product/:id' element={<ProductDetails />} />
          </Route>

          <Route path='*' element={<Navigate to="/Dashboard" replace />} />
        </Routes>
      </AuthProvider>   
    </BrowserRouter>
  );
}

export default App;