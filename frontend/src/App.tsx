import { FC, Suspense } from 'react';
import { Layout } from '@common';
import { Route, Routes } from 'react-router-dom';
import routes, { Paths, RouteObject } from '@routes';
import { ContextProvider } from '@context/ContextProvider';
import { Loader, LostConnection } from '@common';
import { Toaster } from '@ui/toaster';

const App: FC = () => {

  return (
    <ContextProvider>
      <Suspense fallback={<Loader />}>
        <LostConnection>
          <Layout>
            <Routes>
              {routes.map((obj: RouteObject) => (
                <Route
                  key={obj.path}
                  index={obj.path === Paths.LANDING ? true : false}
                  path={obj.path}
                  element={<obj.component />}
                />))}
            </Routes>
          </Layout>
        </LostConnection>
      </Suspense>
      <Toaster />
    </ContextProvider>
  );
};

export default App;