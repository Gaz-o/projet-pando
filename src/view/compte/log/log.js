import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, FormControl, InputGroup ,Button, Row, Col, Card} from 'react-bootstrap';
import { useEffect, useState } from "react";
import "../compte.css";
import { login, logout, isUserLoggedIn } from "../../../lib/social-network-library-master";

function Log() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Erreur, setErreur] = useState("Rentrer votre Mail et MDP")
    
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const [Message, setMessage] = useState(nolog())
    const [BTN, setBTN] = useState("Soumettre")
    let co

    const btn = async () => {
        if (isUserLoggedIn() === true) {
            co = await logout();
            setErreur("Rentrer votre Mail et MDP");
            setMessage(nolog())
            setBTN("Soumettre")
            console.log("deco is", co)
        } else {
            co = await login(Email, Password);
            setPassword("");
            setEmail("")
            setErreur(co.message);
            console.log(co);
            if (co.success) {
                setMessage("Si vous le voulez vous pouvez vous")
                setBTN("Déconnecter")
            }
        }
    }

    useEffect(() => {
        if (isUserLoggedIn() === true) {
            setErreur("")
            setMessage("Si vous le voulez vous pouvez vous")
            setBTN("Déconnecter")
        }
    });
    
    
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