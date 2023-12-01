import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegions";

const Search = ({ search, onSearchChange }) => {
  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </section>
      <FilterRegions />
    </article>
  );
};

export default Search;
