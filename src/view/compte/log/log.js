import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, FormControl, InputGroup ,Button, Row, Col, Card} from 'react-bootstrap';
import { useEffect, useState } from "react";
import "../compte.css";
import { login, logout, isUserLoggedIn } from "../../../lib/social-network-library-master";

function Log() {

    /* Variables d'état */
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Erreur, setErreur] = useState("Rentrer votre Mail et MDP")
    
    /* Setters - Mise à jour des variables d'état */
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    /* Variables d'état qui ont besoin des setters */
    const [Message, setMessage] = useState(nolog())
    const [BTN, setBTN] = useState("Soumettre")

    /* Condition d'affichage du formulaire de connexion */
    const btn = async () => {
        let co
        if (isUserLoggedIn() === true) {
            co = await logout();
            setErreur("Rentrer votre Mail et MDP");
            setMessage(nolog())
            setBTN("Soumettre")
            console.log("deco is", co)
        } else {
            co = await login(Email, Password);
            setPassword("");
            setEmail("");
            setErreur(co.message);
            console.log(co);
            if (co.success) {
                setMessage("Si vous le voulez vous pouvez vous")
                setBTN("Déconnecter")
            }
        }
    }

    /* Mise à jour de l'affichage */
    useEffect(() => {
        if (isUserLoggedIn() === true) {
            setErreur("")
            setMessage("Si vous le voulez vous pouvez vous")
            setBTN("Déconnecter")
        }
    }, []);
    
    /* Fonction d'affichage */
    function nolog() {
        
        return (
            
        <div>

            <Container>

                <Row className="justify-content-md-center">

                    <Col lg="3">

                    </Col>

                        <Col lg="6">
        
                                <InputGroup className="mb-3">

                                    <FormControl type="email" className="email" onChange={inputEmail} placeholder="Email" />

                                </InputGroup>

                                <InputGroup className="mb-3">

                                    <FormControl type="password" className="password" onChange={inputPassword} placeholder="Mot de passe" />

                                </InputGroup>

                        </Col>

                    <Col lg="3">

                    </Col>

                </Row>

            </Container>

        </div>

        )
    }

    return (
        
        <div>

            <Container>

                <Row className="justify-content-md-center">

                    <Col lg="3">

                    </Col>

                        <Col lg="6">

                                <Card id="loginForm">

                                <p id="message">{Erreur}</p>

                                {Message}

                                <br /><br />

                                <Button variant="primary" size="sm" onClick={btn}>{BTN}</Button>

                                </Card>

                        </Col>

                    <Col lg="3">

                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default Log;