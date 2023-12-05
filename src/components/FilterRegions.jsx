import { useState } from "react";

const options = [
  { label: "All", value: "all" },
  { label: "Africa", value: "africa" },
  { label: "Americas", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

const FilterRegions = ({ setCountries, searchCountries, search }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("");

  const getCountriesByRegion = async (region) => {
    let url;
    if (region === "all") {
      url = "https://restcountries.com/v3.1/all";
    } else {
      url = `https://restcountries.com/v3.1/region/${region}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      setCountries(data);
      searchCountries(search, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (region) => {
    setIsOpen(false);
    setActiveRegion(region.label);

    getCountriesByRegion(region.value);
  };

  const renderedRegions = options.map((region) => {
    return (
      <li
        className="region-list-item"
        onClick={() => handleOptionClick(region)}
        key={region.value}
        role="option"
        aria-selected={region.value === activeRegion}
      >
        {region.label}
      </li>
    );
  });

  return (
    <section
      className={`filter-region position-relative ${isOpen && "active"}`}
    >
      <p onClick={handleClick} className="p-3 rounded-3 mb-2">
        {activeRegion || "Filter By Region"}
      </p>
      {isOpen && (
        <ul className="region-list position-absolute w-100 rounded-3">
          {renderedRegions}
        </ul>
      )}
    </section>
  );
};

export default FilterRegions;
