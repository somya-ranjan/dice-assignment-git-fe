import React from "react";

export const guestRoutes = [
  {
    path: "/sign-in",
    name: "SignIn",
    exact: true,
    component: React.lazy(() => import("../../view/auth/SignIn")),
  },

  {
    redirectRoute: true,
    name: "SignIn",
    path: "/sign-in",
  },
];
export const userRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: React.lazy(() => import("../../view/home/Home")),
  },

  {
    redirectRoute: true,
    name: "Home",
    path: "/",
  },
];
