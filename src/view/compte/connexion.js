import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col} from 'react-bootstrap';
import { useState } from "react";
import "./compte.css";
import Crea from "./crea/crea";
import Log from "./log/log";

function Home () {
    const [Create, setCrea] = useState(<Log/>)
    const [Message, setMessage] = useState("Créer un compte")

    const btn = () => {
        if (Create.type.name === "Log") {
            setCrea(<Crea/>);
            setMessage("Vous connecter")
        } else {
            setCrea(<Log/>);
            setMessage("Créer un compte")
        }
    }

    return (
        
        <div>

            {Create}

            <Row>
                
                <Col><br/>

                    <Button variant="success" onClick={btn}>{Message}</Button>

                </Col>

            </Row>

        </div>
    )
};

export default Home;