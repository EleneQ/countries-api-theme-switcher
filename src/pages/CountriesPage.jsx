import { useState, useEffect, useCallback } from "react";
import { Search, AllRelevantCountries, SearchMessage } from "../components";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchedForCountries, setSearchedForCountries] = useState([]);

  /* 
    The useCallback hook is used to memoize the
    getAllCountries function so that it's created
    only once during the initial rendering of the
    component. This memoization is particularly useful
    in scenarios where the function's used as a dependency
    for other hooks, like the useEffect hook in this example.
    By memoizing the function, we ensure that the reference
    to it remains constant between renders, which can be
    beneficial for performance optimization. Without useCallback,
    a new function reference would be created on every render,
    potentially leading to unnecessary re-execution of certain
    hooks that depend on it.
  */
  const getAllCountries = useCallback(async () => {
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
  });

  /* 
    the .trim() is to only fetch data when search isn't empty.

    the else statement handles empty search term (e.g., fetch all countries).

    teh abort has to do with the asynchronous nature of getCountriesByName and the fast updates in the search term. When you delete letters quickly, multiple asynchronous requests may be initiated in quick succession, and the responses may arrive out of order, leading to unexpected behavior
  */
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getAllCountries();
    }

    return () => {
      mounted = false;
    };
  }, []);

  const handleOnSearchChange = (search) => {
    setSearch(search);
    searchCountries(search.trim(), countries);
  };

  const searchCountries = (search, countriesToSearch) => {
    try {
      const searchedForCountriesArray = countriesToSearch.filter((country) => {
        const countryNameLower = country.name.common.toLowerCase();
        return countryNameLower.includes(search.toLowerCase());
      });
      setSearchedForCountries(searchedForCountriesArray);
    } catch (error) {
      console.error("Error searching countries:", error);
    }
  };

  return (
    <main>
      <Search
        search={search}
        onSearchChange={handleOnSearchChange}
        setCountries={setCountries}
        searchCountries={searchCountries}
      />
      <section className="countries-section">
        {loading ? (
          <SearchMessage />
        ) : search.length > 0 ? (
          searchedForCountries.length > 0 ? (
            <AllRelevantCountries countries={searchedForCountries} />
          ) : (
            <p>No Countries found...</p>
          )
        ) : (
          <AllRelevantCountries countries={countries} />
        )}
      </section>
    </main>
  );
};

export default Countries;
