import PropTypes from "prop-types";
import CountryCard from "./CountryCard";

const AllCountries = ({ countries }) => {
  return (
    <>
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </>
  );
};

AllCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default AllCountries;
