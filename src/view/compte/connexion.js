import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col} from 'react-bootstrap';
import { useState } from "react";
import Crea from "./crea/crea";
import Log from "./log/log";
import "./compte.css"

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
        
        <div className="standart">

            <Row>
                
                <Col><br/>

                    <Button variant="success" onClick={btn}>{Message}</Button>

                </Col>

            </Row>

            {Create}

        </div>
    )
}

export default Home;