import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col} from 'react-bootstrap';
import { useState } from "react";
import Crea from "./crea/crea";
import Log from "./log/log";
import "./compte.css"

function Home () {

    /* Variables d'état */
    const [Composant, setComposant] = useState(<Log/>)
    const [Message, setMessage] = useState("Créer un compte")

    /* Evénement de clic */
    const btn = () => {
        if (Composant.type.name === "Log") {
            setComposant(<Crea/>);
            setMessage("Vous connecter")
        } else {
            setComposant(<Log/>);
            setMessage("Créer un compte")
        }
    }

    return (
        
        <div className="standart">

            <Row>
                
                <Col><br/>

                    <Button variant="success" onClick={btn}>{Message}</Button>

                </Col>

            </Row>

            {Composant}

        </div>
    )
}

export default Home;