import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <nav>
          <Link to="/" aria-label="Get Back To Home">
            <h1>Where in the world?</h1>
          </Link>
        </nav>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
