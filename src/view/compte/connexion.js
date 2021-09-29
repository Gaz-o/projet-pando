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
            <button className="btn" onClick={btn}>{Message}</button>
            {Create}
        </div>
    )
};

export default Home;