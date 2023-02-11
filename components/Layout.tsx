import { ReactNode } from 'react';
import Nav from './Nav';
import SideBar from './SideBar';

type ComponentProps = {
  children: ReactNode;
};

const Layout = ({ children }: ComponentProps) => {
  return (
    <>
      <Nav />
      <SideBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
