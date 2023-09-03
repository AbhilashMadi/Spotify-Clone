import { FC, lazy, LazyExoticComponent } from 'react';

export enum Paths {
  LANDING = "/",
  ALBUM = "/album/:albumSlug",
  NOT_FOUND = "/*",
}

const Landing: LazyExoticComponent<FC> = lazy(() => import("../pages/Landing"));
const Album: LazyExoticComponent<FC> = lazy(() => import('../pages/Album'));
const NotFoundPage: LazyExoticComponent<FC> = lazy(() => import("../pages/NotFoundPage"));

export type RouteObject = {
  path: string;
  component: FC;
}

/**
 * Creates a route object.
 * 
 * @param path - The path for the route.
 * @param component - The component to render for the route.
 * @returns A RouteObject representing the route.
 */
function routeObject(path: string, component: FC): RouteObject {
  return {
    path,
    component,
  };
}

const routes: RouteObject[] = [
  routeObject(Paths.LANDING, Landing),
  routeObject(Paths.ALBUM, Album),
  routeObject(Paths.NOT_FOUND, NotFoundPage),
];

export default routes;