import PropTypes from "prop-types";
import Country from "./Country";

const AllCountries = ({ countries }) => {
  return (
    <>
      {countries.map((country) => (
        <Country key={country.name.common} country={country} />
      ))}
    </>
  );
};

AllCountries.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default AllCountries;
