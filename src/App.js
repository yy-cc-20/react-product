import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { Fragment } from 'react';

import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Authentication/Login/Login';
import Header from './components/Navigation/Header/Header';
import Breadcrumb from './components/Navigation/Breadcrumb/Breadcrumb';

function App() {
  return (
    <Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <Header isLogin={false} username={'username'}></Header>
      <BrowserRouter>
        <Breadcrumb></Breadcrumb>
        <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SignIn" element={<Login isLogin={false} />} />
          <Route path='*' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;