const Country = ({ country }) => {
  const { name, flags, population, region, capital } = country;

  return (
    <div key={name.common} className="card">
      <img src={flags?.svg || flags?.png} alt={name.common} />
      <h2>{name.common}</h2>
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
  );
};

export default Country;
