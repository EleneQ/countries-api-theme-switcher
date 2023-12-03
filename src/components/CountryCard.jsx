import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;

  return (
    <Link to={`/${country.name.common.toLowerCase().replace(/\s/g, "%20")}`}>
      <div key={name.common} className="card">
        <img src={flags?.svg || flags?.png} alt={name.common} />
        <h2>{name.official}</h2>
        <div>
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
