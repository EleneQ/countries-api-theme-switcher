import Toggle from "./Toggle";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <nav>
          <h1>Where in the world?</h1>
        </nav>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
