import { useEffect, useState } from "react";
import Country from "./Country";

const AllCountries = () => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    setAllCountries(data);
    console.log(data);
  };

  return (
    <section>
      {allCountries.map((country) => (
        <div key={country.name.common} className="card">
          <img
            src={country.flags?.svg || country.flags?.png}
            alt={country.name.common}
          />
          <h2>{country.name.common}</h2>
          <div>
            <p>
              <span>Population:</span> {country.population}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllCountries;
