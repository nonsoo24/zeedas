import DashboardLayout from "layouts/DashboardLayout";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import routes from "./routes";

const Routes = () => (
  <DashboardLayout>
    <RouterRoutes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.component} />
      ))}
    </RouterRoutes>
  </DashboardLayout>
);
export default Routes;
