import { ReactNode, FC } from 'react';
import { Navbar, Footer } from '@common';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
