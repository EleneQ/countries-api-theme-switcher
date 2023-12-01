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

export default AllCountries;
