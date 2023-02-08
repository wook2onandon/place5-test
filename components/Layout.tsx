import { ReactNode } from 'react';
import Nav from './Nav';

type ComponentProps = {
  children: ReactNode;
};

const Layout = ({ children }: ComponentProps) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
