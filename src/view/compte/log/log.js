import { useEffect, useState } from "react";
import "../compte.css";
import { login, logout, isUserLoggedIn } from "../../../lib/social-network-library-master";

function Log() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("")

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const btn = async () => {
        let co = await login(Email, Password);
        setMessage(co.message);
        if (isUserLoggedIn() === true) {
        }
    }

    const btnLogOut = async () => {
        let co = await logout()
        setMessage("")
        console.log(co);;
    }

    const NoLog = (
        <div>
            <h2>Connexion</h2>
            <p>{Message}</p>
            <label>Votre Email</label>
            <input type="email" className="email" onChange={inputEmail} />
            <label>Mot de passe</label>
            <input type="password" className="password" onChange={inputPassword} />
            <button className="btn" onClick={btn}>Soumettre</button>
        </div>
    )

    const YesLog =
        (<div>
            <p>{Message}</p>
            <button className="btn" onClick={btnLogOut}>Deconnexion</button>
        </div>)    
    
    if (isUserLoggedIn() === true) {
        return YesLog
    } else {
        return NoLog
    }
}

export default Log;