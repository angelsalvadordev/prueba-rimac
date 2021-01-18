import { lazy } from "react";

export interface IRoute {
  path: string;
  isExact: boolean;
  Component: React.ComponentType<any>;
  privateRoute?: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    isExact: true,
    Component: lazy(() => import("../components/views/home")),
  },
  {
    path: "/insured",
    isExact: true,
    Component: lazy(() => import("../components/views/insured")),
    privateRoute: true,
  },
  {
    path: "/plan",
    isExact: true,
    Component: lazy(() => import("../components/views/plan")),
    privateRoute: true,
  },
  {
    path: "/thanks",
    isExact: true,
    Component: lazy(() => import("../components/views/thanks")),
    privateRoute: true,
  },
];
