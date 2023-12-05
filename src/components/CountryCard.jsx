import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;

  return (
    <Link to={`/${country.name.common.toLowerCase().replace(/\s/g, "%20")}`}>
      <Card key={name.common} className="country-card rounded-3 border-0">
        <Card.Img
          variant="top"
          src={flags?.svg || flags?.png}
          alt={`Flag of ${name.official}`}
          className="country-card-img"
        />
        <Card.Body className="pb-0 card-info-block">
          <Card.Title className="country-card-title lh-sm">
            {name.common}
          </Card.Title>

          <ListGroup className="card-info-list">
            <ListGroup.Item className="card-info-list-item border-0 p-0 mb-1">
              <span>Population:</span> {population}
            </ListGroup.Item>
            <ListGroup.Item className="card-info-list-item border-0 p-0 mb-1">
              <span>Region:</span> {region}
            </ListGroup.Item>
            <ListGroup.Item className="card-info-list-item border-0 p-0 mb-1">
              <span>Capital:</span> {capital}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* <div key={name.common} className="country-card">
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
      </div> */}
    </Link>
  );
};

export default CountryCard;
