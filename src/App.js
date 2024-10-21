import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { Fragment, Component } from 'react';

import './App.css';

import Header from './components/Navigation/Header/Header';
import Breadcrumb from './components/Navigation/Breadcrumb/Breadcrumb';
import LeftMenu  from './components/Navigation/LeftMenu/LeftMenu';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Authentication/Login/Login';
import MyProfile from './pages/MyProfile/MyProfile';
import Product from './pages/Products/Product';
import Unauthorized from './pages/Authentication/Unauthorized/Unauthorized';
import ProductDetails from './pages/ProductDetails/ProductDetails';

import { getUsernameFromSession, isLogin } from './services/AuthenticationService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLogin: true//isLogin(),
    };
}

  // shouldComponentUpdate(nextProps, nextState) {
  //   this.setState({
  //     isLogin: false
  //   });
  //   console.log(this.isLogin)
  // }

  handleLogin = () => {

  }

  render() {
    return (
      <Fragment>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
        <Header isLogin={this.state.isLogin} username={getUsernameFromSession()}></Header>
        <BrowserRouter>
          <Breadcrumb></Breadcrumb>
          {this.state.isLogin ? <LeftMenu></LeftMenu> : null}
          <Routes>
            <Route path="/" element={<Navigate to="/Dashboard" replace />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/SignIn" element={!this.state.isLogin ? <Login isLogin={this.handleLogin} /> : <Navigate to="/Profile" replace />} />
            <Route path="/fgtpswd" element={null} />
            <Route path="/Unauthorized" element={<Unauthorized />} />
            <Route path='*' element={<Dashboard />} />

            {/* protected routes */}
            <Route path="/Profile" element={this.state.isLogin ? <MyProfile /> : <Navigate to="/Unauthorized" replace />} />
            <Route path="/changepswd" element={this.state.isLogin ? null : <Navigate to="/Unauthorized" replace />} />
            <Route path="/Product" element={this.state.isLogin ? <Product /> : <Navigate to="/Unauthorized" replace />} />
            <Route path='/Product/:id' element={this.state.isLogin ? <ProductDetails /> : <Navigate to="/Unauthorized" replace />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;