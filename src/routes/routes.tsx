import { lazy } from "react";

export interface IRoute {
  path: string;
  isExact: boolean;
  Component: React.ComponentType<any>;
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
  },
  {
    path: "/plan",
    isExact: true,
    Component: lazy(() => import("../components/views/plan")),
  },
  {
    path: "/thanks",
    isExact: true,
    Component: lazy(() => import("../components/views/thanks")),
  },
];
