import { useCallback, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { SearchMessage } from "../components";

const CountryPage = () => {
  let { name } = useParams();
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [borderCountries, setBorderCountry] = useState([]);

  const getCountryByName = useCallback(async () => {
    try {
      setLoading(true);
      const url = `https://restcountries.com/v3.1/name/${name}`;
      const res = await fetch(url);
      const data = await res.json();

      setCountry(data[0]);

      setBorderCountry([]);
      data[0]?.borders?.forEach((border) => {
        if (border) {
          getCountryByBorder(border, data[0]);
        }
      });

      setLoading(false);
    } catch (error) {
      console.error("Error searching countries:", error);
    }
  }, [name]);

  const getCountryByBorder = useCallback(
    async (border) => {
      try {
        const url = `https://restcountries.com/v3.1/alpha/${border}`;
        const res = await fetch(url);
        const data = await res.json();

        setBorderCountry((prev) => [...prev, data[0].name.common]);
      } catch (error) {
        console.error("Error searching countries:", error);
      }
    },
    [name]
  );

  useEffect(() => {
    window.scroll(0, 0);
    getCountryByName();
  }, [getCountryByName, name]);

  const getOfficialNativeName = (nativeName) => {
    for (const langCode in nativeName) {
      if (nativeName[langCode].official) {
        return nativeName[langCode].official;
      }
    }
    return <p>Unknown</p>;
  };

  return (
    <main>
      {loading ? (
        <SearchMessage />
      ) : (
        <>
          <Link to="/" className="back-link">
            <span>
              <FaLongArrowAltLeft />
            </span>{" "}
            Back
          </Link>

          {country ? (
            <section className="country-page">
              <img src={country.flags?.svg || country.flags?.png} alt={name} />

              <section className="country-page-info">
                <h2>{name}</h2>
                <section className="country-page-info-details">
                  <ul>
                    <li>
                      <span>Native Name:</span>{" "}
                      {country.name &&
                        getOfficialNativeName(country.name.nativeName)}
                    </li>
                    <li>
                      <span>Population:</span> {country.population}
                    </li>
                    <li>
                      <span>Region:</span> {country.region}
                    </li>
                    <li>
                      <span>Sub Region:</span> {country.subregion}
                    </li>
                    <li>
                      <span>Capital:</span> {country.capital}
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <span>Currencies:</span>{" "}
                      {country.currencies
                        ? Object.values(country.currencies)[0]?.name
                        : "Unknown"}
                    </li>
                    <li className="country-languages-list">
                      <span>Languages:</span>{" "}
                      <ul>
                        {country.languages
                          ? Object.values(country.languages).map((name) => (
                              <li key={name}>{name}</li>
                            ))
                          : "Unknown"}
                      </ul>
                    </li>
                  </ul>
                </section>

                <section className="border-countries">
                  <ul className="border-countries-list">
                    <span>Border Countries:</span>{" "}
                    {borderCountries.length ? (
                      borderCountries.map((borderCountry, index) => (
                        <li key={index} className="border-country">
                          <Link to={`/${borderCountry}`}>{borderCountry}</Link>
                        </li>
                      ))
                    ) : (
                      <p>No borders</p>
                    )}
                  </ul>
                </section>
              </section>
            </section>
          ) : null}
        </>
      )}
    </main>
  );
};
export default CountryPage;
