import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegions";

const Search = () => {
  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search for a country..." />
      </section>
      <FilterRegions />
    </article>
  );
};

export default Search;
