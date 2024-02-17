import React from 'react'

import Header from '../Header/Zaglavlje';
import Router from '../../router/Router';
import Footer from '../Footer/Podnozje';

const Layout = () => {
  return (
    <>
    <Header />
    <Router />
    <Footer />
    </>
  )
};

export default Layout;