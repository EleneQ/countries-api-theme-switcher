import { useState } from "react";

const options = [
  { label: "All", value: "all" },
  { label: "Africa", value: "africa" },
  { label: "Americas", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

const FilterRegions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState("");

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (region) => {
    setIsOpen(false);
    setActiveRegion(region.label);
  };

  const renderedRegions = options.map((region) => {
    return (
      <li
        className="region-list-item"
        onClick={() => handleOptionClick(region)}
        key={region.value}
      >
        {region.label}
      </li>
    );
  });

  return (
    <section className={isOpen ? "filter-region active" : "filter-region"}>
      <p onClick={handleClick}>{activeRegion || "Filter By Region"}</p>
      {isOpen && <ul className="region-list">{renderedRegions}</ul>}
    </section>
  );
};

export default FilterRegions;
