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
                <input type="email" className="email" onChange={inputEmail} placeholder="E-Mail" />
                <input type="password" className="password" onChange={inputPassword} placeholder="M.D.P" />
            </div>
        )
    }

    return (
        <div>
            <p>{Erreur}</p>
            {Message}
            <button className="btn" onClick={btn}>{BTN}</button>
        </div>
    )
}

export default Log;