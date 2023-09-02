import { FC, useState, useLayoutEffect, ReactNode } from 'react';

interface IPreLoader {
  children: ReactNode;
}

const PreLoader: FC<IPreLoader> = ({ children }) => {
  const [loaderComponent, setLoaderComponent] = useState<FC | null>(null);

  useLayoutEffect(() => {
    import('./Loader').then((module) => {
      setLoaderComponent(module.default);
    })
  }, [])
  return loaderComponent ? <>{loaderComponent}</> : <>{children}</>
}

export default PreLoader;