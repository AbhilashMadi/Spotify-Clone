import { FC, Suspense } from 'react';
import { Layout } from '@common';
import { Route, Routes } from 'react-router-dom';
import routes, { Paths, RouteObject } from '@routes';
import { ContextProvider } from '@context/ContextProvider';
import { Loader } from '@common'

const App: FC = () => {

  return (
    <ContextProvider>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            {routes.map((obj: RouteObject) => (
              <Route
                key={obj.path}
                index={obj.path === Paths.LANDING ? true : false}
                path={obj.path}
                element={<obj.component />}
              />))}
            <Route path="/*" element={<p>404 NOT FOUND</p>} />
          </Routes>
        </Layout>
      </Suspense>
    </ContextProvider>
  );
};

export default App;