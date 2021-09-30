import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import "../compte.css";
import {
  getCurrentUserProfile,
  isUserLoggedIn,
  updateCurrentUserProfile,
} from "../../../lib/social-network-library-master";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

function Edition() {
  /*const profilPic = () => {
        
        return <img src={pic} alt="pic" />;
      }

    /* Variable d'état */
  const [Profile, setProfile] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  /* Récupération des infos du profil connecté */
  const recupUser = async () => {
    let result = await getCurrentUserProfile();
    console.log("profil connecté", result);
    setProfile(result);
  };

  /* Affichage des informations mises à jour */
  useEffect(() => {
    recupUser();
  }, []);

  /* Condition de redirection si non connecté */
  if (isUserLoggedIn() !== true) {
    return <Redirect to="/" />;
  }

  /* Evénements sur les inputs */
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  };

  /* Evénénement clic sur le bouton */
  const handleClick = async () => {
    let updateResult = await updateCurrentUserProfile(
      firstName,
      lastName,
      email,
      age,
      occupation
    );
    console.log("update", updateResult);
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#age").value = "";
    document.querySelector("#occupation").value = "";
    recupUser();
  };

  return (
    <div className="standart">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="3"></Col>

          <Col lg="6">
            <br />

            <Card>
              <Card.Body>
                <Card.Title>Modifier mon profil</Card.Title>
                <br />

                <Card.Text>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Prénom:
                    </InputGroup.Text>

                    <FormControl
                      onChange={handleFirstName}
                      placeholder={Profile.firstname}
                      type="text"
                      id="firstName"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <br />

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Nom:
                    </InputGroup.Text>

                    <FormControl
                      onChange={handleLastName}
                      placeholder={Profile.lastname}
                      type="text"
                      id="lastName"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <br />

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      E-mail:
                    </InputGroup.Text>

                    <FormControl
                      onChange={handleEmail}
                      placeholder={Profile.email}
                      type="text"
                      id="email"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <br />

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Age:
                    </InputGroup.Text>

                    <FormControl
                      onChange={handleAge}
                      placeholder={Profile.age}
                      type="text"
                      id="age"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <br />

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Poste:
                    </InputGroup.Text>

                    <FormControl
                      onChange={handleOccupation}
                      placeholder={Profile.occupation}
                      type="text"
                      id="occupation"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <br />

                  <Button onClick={handleClick} variant="outline-success">
                    Sauvegarder les modifications
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>

          <Col lg="3"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Edition;
