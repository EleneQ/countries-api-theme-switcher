import { useState, useEffect } from "react";
import Search from "./Search";
import Country from "./Country";
import AllCountries from "./AllCountries";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCountries, setCurrentCountries] = useState([]);

  /* 
    the .trim() is to only fetch data when search isn't empty.

    the else statement handles empty search term (e.g., fetch all countries).

    teh abort has to do with the asynchronous nature of getCountriesByName and the fast updates in the search term. When you delete letters quickly, multiple asynchronous requests may be initiated in quick succession, and the responses may arrive out of order, leading to unexpected behavior
  */
  useEffect(() => {
    getAllCountries();
  }, []);

  const handleOnSearchChange = (search) => {
    setSearch(search);
    searchCountries(search);
  };

  const getAllCountries = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      setCountries(data);
    } catch (error) {
      console.error("Error fetching all countries:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchCountries = (search) => {
    const currentCountriesArray = countries.filter((country) => {
      const countryNameLower = country.name.common.toLowerCase();
      return countryNameLower.includes(search.toLowerCase());
    });
    setCurrentCountries(currentCountriesArray);
  };

  return (
    <main>
      <Search search={search} onSearchChange={handleOnSearchChange} />

      <section className="countries-section">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : search.length > 0 ? (
          currentCountries.map((country) => {
            return <Country key={country.name.common} country={country} />;
          })
        ) : (
          <AllCountries countries={countries} />
        )}
      </section>
    </main>
  );
};

export default Countries;
