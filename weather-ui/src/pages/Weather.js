import Header from "../components/Header";
import Meta from "../components/Meta";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import useState from "react-usestateref";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Spinner from "react-bootstrap/Spinner";

const Weather = () => {
    const [zipcode, setZipcode, zipcodeRef] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [error, setError, errorRef] = useState(false);
    const [results, setResults] = useState("");

    const handleInputZipcode = (event) => {
        setZipcode(event.target.value);
    };

    const handleSubmitZipcode = () => {
        const fullURL =
            "http://localhost:5000/weather?zipcode=" + zipcodeRef.current;
        setSpinner(true);
        setResults("");

        fetch(fullURL)
            .then((response) => response.json())
            .then((data) => {
                setResults(data);
                setSpinner(false);

                if (data && data.error) {
                    setError(data);
                } else {
                    setError(null);
                }
            })
            .catch((error) => {
                setError(error);
                setSpinner(false);
            });
    };

    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <Form.Group className="mb-3">
                    <Form.Label>
                        <h5>Find Weather information by ZIP code</h5>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter ZIP Code"
                        onChange={(e) => handleInputZipcode(e)}
                    />
                    <br />
                    <Button onClick={handleSubmitZipcode} type="button">
                        Fetch
                    </Button>
                </Form.Group>
            </div>

            {spinner ? (
                <>
                    <div className="d-flex flex-column align-items-center">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <div style={{ fontWeight: 900, fontSize: "18px" }}>
                            <br />
                            Fetching Weather information .........
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}

            {errorRef.current ? (
                <>
                    <div className="d-flex flex-column align-items-center">
                        <Alert key="danger" variant="danger">
                            <h2 style={{ color: "red" }}>
                                <div>An Error occurred.</div>
                                <div></div>
                                <div
                                    style={{
                                        fontWeight: 900,
                                        fontSize: "12px",
                                        color: "black",
                                    }}
                                >
                                    {errorRef.current.error.message}
                                </div>
                            </h2>
                        </Alert>
                    </div>
                </>
            ) : (
                <>
                    <div className="d-flex flex-column align-items-center">
                        {results ? (
                            <>
                                <Alert key="light" variant="light">
                                    <h2 style={{ color: "black" }}>
                                        {results.location.country} - {results.location.region}-{" "}
                                        {results.location.name}
                                    </h2>
                                </Alert>

                                <CardGroup>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img
                                            variant="top"
                                            src="temperature.jpg"
                                            height={150}
                                        />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text
                                                style={{
                                                    fontWeight: 900,
                                                    fontSize: "52px",
                                                }}
                                            >
                                                {results.current.temp_f}{" "}
                                                <span style={{ fontSize: "16px" }}> Fahrenheit</span>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                <h4>Temperature</h4>
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src="humudity.png" height={150} />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text
                                                style={{
                                                    fontWeight: 900,
                                                    fontSize: "52px",
                                                }}
                                            >
                                                {results.current.humidity}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                <h4>Humidity</h4>
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src="wind_speed.jpg" height={150} />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text
                                                style={{
                                                    fontWeight: 900,
                                                    fontSize: "52px",
                                                }}
                                            >
                                                {results.current.wind_mph}{" "}
                                                <span style={{ fontSize: "16px" }}> Mile(s)</span>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                <h4>Wind Speed</h4>
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>

                                <br />

                                <hr />

                                <CardGroup>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src="visibility.png" height={150} />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text
                                                style={{
                                                    fontWeight: 900,
                                                    fontSize: "52px",
                                                }}
                                            >
                                                {results.current.vis_miles}{" "}
                                                <span style={{ fontSize: "16px" }}> Mile(s)</span>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                <h4>Visibility</h4>
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Img variant="top" src="feels_like.jpg" height={150} />
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text
                                                style={{
                                                    fontWeight: 900,
                                                    fontSize: "52px",
                                                }}
                                            >
                                                {results.current.vis_miles}{" "}
                                                <span style={{ fontSize: "16px" }}> Centigrade</span>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">
                                                <h4>Feels Like</h4>
                                            </small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Weather;
