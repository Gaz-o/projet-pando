import { useState } from "react";
import "../compte.css";
import { login, logout } from "../../../lib/social-network-library-master";

function Log() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("")
    const [Success, setSuccess] = useState("")

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const btn = async () => {
        let result = await login(Email, Password);
        setMessage(result.message);
        setSuccess(result.success);
    }

    const btnLogOut = async () => {
        let out = await logout()
        setSuccess("")
        setMessage("")
        console.log(out);
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

    return (
        <div>
            { Success !== true ? NoLog : YesLog}
        </div>
    )
}

export default Log;