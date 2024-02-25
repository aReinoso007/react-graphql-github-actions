import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GET_CHARACTERS_LOCATIONS } from "../queries/Queries";

const SearchComponent: React.FC = () => {
  const [name, setName] = useState<string>("");

  const [getLocations, { data, loading, error }] = useLazyQuery(
    GET_CHARACTERS_LOCATIONS,
    {
      variables: { name },
    }
  );
  const search = () =>{
    getLocations();
  }

  return (
    <Container>
        <br />
      <Row>
        <Col>
          <input
            value={name}
            type="text"
            placeholder="Search..."
            onChange={(event) => setName(event.target.value)}
          />
        </Col>
        <Col>
          <Button onClick={search}>Search</Button>
        </Col>
      </Row>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
            {data.characters.results.map((character: any, index: any) => {
                return <li key={index}>{character.location.name}</li>;
            })}
        </ul>
      )}
    </Container>
  );
};

export default SearchComponent;
