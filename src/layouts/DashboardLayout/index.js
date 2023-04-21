import Navbar from "components/layout-components/Navbar";
import "./dashboardLayout.css";

const DashboardLayout = (props) => (
  <div className="wrapper">
    <Navbar />
    <div className="container wrapper-content">
      <div className="wrapper-children">{props.children}</div>
    </div>
  </div>
);

export default DashboardLayout;
