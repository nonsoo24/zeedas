import Navbar from "components/layout-components/Navbar";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import "./dashboardLayout.css";

const DashboardLayout = (props) => {
  const location = useLocation();
  const wrapperClass = useMemo(() => {
    if (location.pathname.includes("Resume")) {
      return "resume";
    }
    if (location.pathname.includes("ViewerStats")) {
      return "viewer-stats";
    }
    return "home";
  }, [location.pathname]);
  return (
    <div className="wrapper">
      <Navbar />
      <div className={`wrapper-content wrapper-${wrapperClass}`}>
        <div className="wrapper-children">{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
