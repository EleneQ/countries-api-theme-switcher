import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;

  return (
    <Link to={`/${country.name.common.toLowerCase().replace(/\s/g, "%20")}`}>
      <div key={name.common} className="card">
        <img src={flags?.svg || flags?.png} alt={`Flag of ${name.official}`} />
        <h2>{name.official}</h2>
        <div>
          <ul>
            <li>
              <span>Population:</span> {population}
            </li>
            <li>
              <span>Region:</span> {region}
            </li>
            <li>
              <span>Capital:</span> {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
