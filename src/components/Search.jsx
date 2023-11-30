import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegions";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </section>
      <FilterRegions />
    </article>
  );
};

export default Search;
