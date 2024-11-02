import React from 'react'
import SubHeader from '../Component/SubHeader'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <SubHeader />
      <Header />
      <Outlet  />
      <Footer />
    </div>
  );
}

export default Layout