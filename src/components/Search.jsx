import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegions";
import Stack from "react-bootstrap/Stack";

const Search = ({ search, onSearchChange, setCountries, searchCountries }) => {
  return (
    <Stack
      direction="horizontal"
      className="search-section justify-content-between"
    >
      <section className="input-block position-relative rounded-3">
        <FaSearch className="search-icon position-absolute" />
        <input
          className="border-0 w-100 rounded-3"
          type="text"
          name="search"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search for a country"
        />
      </section>
      <FilterRegions
        setCountries={setCountries}
        searchCountries={searchCountries}
        search={search}
      />
    </Stack>
  );
};

export default Search;
