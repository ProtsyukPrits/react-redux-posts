import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BackToTopButton from './BackToTopButton';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <BackToTopButton />
      </main>
    </>
  );
};

export default Layout;
