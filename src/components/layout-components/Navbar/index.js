import ZeedasLogo from "assets/svg/ZeedasLogo";
import Dropdown from "components/shared-components/Dropdown";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <ZeedasLogo />
      <Dropdown />
    </div>
  </nav>
);

export default Navbar;
