import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;

  return (
    <Link to={`/${country.name.common.toLowerCase().replace(/\s/g, "%20")}`}>
      <div key={name.common} className="country-card">
        <img src={flags?.svg || flags?.png} alt={`Flag of ${name.official}`} />
        <div className="card-info-block">
          <h2>{name.common}</h2>
          <ul className="card-info-list">
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
