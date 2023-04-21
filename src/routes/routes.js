import { lazy } from "react";
import ROUTES from "./routePaths";

const Social = lazy(() => import("pages/Home"));
const ProfileAnalytics = lazy(() => import("pages/ViewerStats"));
const Resume = lazy(() => import("pages/Resume"));

const routes = [
  {
    key: "home",
    path: ROUTES.HOME,
    component: <Social />,
  },
  {
    key: "resume",
    path: ROUTES.RESUME,
    component: <Resume />,
  },
  {
    key: "viewer-stats",
    path: ROUTES.VIEWER_STATS,
    component: <ProfileAnalytics />,
  },
];

export default routes;
