import { FC, Suspense } from 'react';
import { Layout } from '@common';
import { Route, Routes } from 'react-router-dom';
import routes, { Paths, RouteObject } from '@routes';
import { ContextProvider } from '@context/ContextProvider';
import { Toast } from '@ui/toast';

const App: FC = () => {

  return (
    <ContextProvider>
      <Layout>
        <Suspense fallback={<>Loading...</>}>
          {/* <Toast /> */}
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
        </Suspense>
      </Layout>
    </ContextProvider>
  );
};

export default App;