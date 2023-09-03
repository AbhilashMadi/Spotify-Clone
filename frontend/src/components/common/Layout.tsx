import { ReactNode, FC } from 'react';
import { Navbar, Footer } from '@common';
import { matchPath, useLocation } from 'react-router-dom';
import routes, { Paths } from '@routes';

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  const matchedPath = routes.find((route) => matchPath(route.path, pathname));
  let notFound: boolean = false;

  if (matchedPath?.path === Paths.NOT_FOUND) {
    notFound = true;
  }

  return (
    <>
      {!notFound && <Navbar />}
      <main>
        {children}
      </main>
      {!notFound && <Footer />}
    </>
  );
};

export default Layout;