import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import Stack from "react-bootstrap/Stack";

const Header = () => {
  return (
    <header className="shadow-sm">
      <Stack className="header-content-container" direction="horizontal">
        <nav className="me-auto">
          <Link to="/" aria-label="Get Back To Home">
            <h1>Where in the world?</h1>
          </Link>
        </nav>
        <Toggle />
      </Stack>
    </header>
  );
};

export default Header;
