import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Box>Loading...</Box>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LandingPage />,
      children: [{ path: "landing", element: <LandingPage /> }],
    },
  ]);
}

// Pages
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
