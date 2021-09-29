import "../compte.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, FormControl, InputGroup ,Button, Row, Col, Card} from 'react-bootstrap';
import { useState } from "react";
import { register } from "../../../lib/social-network-library-master";

function Crea() {

    /* Variable d'états - Informations */
    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    /* Fonctions de mise à jour - Informations */
    const handleFirstNameInput = (e) => {
        SetFirstName(e.target.value);
    }
    
    const handleLastNameInput = (e) => {
        SetLastName(e.target.value);
    }

    const handleEmailInput = (e) => {
        SetEmail(e.target.value);
    }

    const handlePasswordInput = (e) => {
        SetPassword(e.target.value);
    }

    /* Evénénement clic sur le bouton */
    const handleClick = async () => {
        let result = await register(firstName, lastName, email, password);
        console.log(result);
        document.querySelector("#firstNameInput").value = "";
        document.querySelector("#lastNameInput").value = "";
        document.querySelector("#emailInput").value = "";
        document.querySelector("#passwordInput").value = "";
    }

  return (

    <div>

      <Container>

        <Row className="justify-content-md-center">

            <Col lg="3">

            </Col>

              <Col lg="6">

                <Card class="creaForm">

                <h5>Mettez-vous au vert ! Créez un compte sur Pando :</h5><br/>

                  <InputGroup className="mb-3">

                    <FormControl onChange={handleFirstNameInput} type="text" id="firstNameInput" placeholder="Prénom"/>

                  </InputGroup><br/>

                  <InputGroup className="mb-3">

                    <FormControl onChange={handleLastNameInput} type="text" id="lastNameInput" placeholder="Nom de famille"/>

                  </InputGroup><br/>

                  <InputGroup className="mb-3">

                    <FormControl onChange={handleEmailInput} type="email" id="emailInput" placeholder="Adresse e-mail"/>

                  </InputGroup><br/>

                  <InputGroup className="mb-3">

                    <FormControl onChange={handlePasswordInput} type="password" id="passwordInput" placeholder="Mot de passe"/>

                  </InputGroup><br/>

                  <Button variant="success"onClick={handleClick}>Suivant</Button>

                </Card>

              </Col>

          <Col lg="3">

          </Col>

        </Row>

    </Container>

    </div>
  );
}

export default Crea;
