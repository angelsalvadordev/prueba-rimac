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
    Component: lazy(() => import("../pages/home")),
  },
  {
    path: "/insured",
    isExact: true,
    Component: lazy(() => import("../pages/insured")),
  },
  {
    path: "/plan",
    isExact: true,
    Component: lazy(() => import("../pages/plan")),
  },
  {
    path: "/thanks",
    isExact: true,
    Component: lazy(() => import("../pages/thanks")),
  },
];
