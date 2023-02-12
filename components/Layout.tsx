import { ReactNode } from 'react';
import Nav from './Nav';
import SideBar from './SideBar';

type ComponentProps = {
  children: ReactNode;
};

//기본적인 layout component
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
