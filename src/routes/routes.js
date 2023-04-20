import { lazy } from "react";
import ROUTES from "./routePaths";

const Social = lazy(() => import("pages/Social"));
const ProfileAnalytics = lazy(() => import("pages/ProfileAnalytics"));
const Analytics = lazy(() => import("pages/Analytics"));

const routes = [
  {
    key: "social",
    path: ROUTES.SOCIAL,
    component: <Social />,
  },
  {
    key: "analytics",
    path: ROUTES.ANALYTICS,
    component: <Analytics />,
  },
  {
    key: "profile-analytics",
    path: ROUTES.PROFILE_ANALYTICS,
    component: <ProfileAnalytics />,
  },
];

export default routes;
