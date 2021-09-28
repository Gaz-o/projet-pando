import { useEffect, useState } from "react";
import "../compte.css";

function Log() {
    const [Log, setLog] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const ValidEmail = "Admin";
    const ValidPasword = "Admin";
    const [Erreur, setErreur] = useState("");

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        setLog(localStorage.getItem("Password"))
    }, [Password]);

    const btn = () => {
        if (Email !== "" && Password !== "") {
            if (Email === ValidEmail && Password === ValidPasword) {
                localStorage.setItem("Password", "Ok Cool")
                setLog("Ok Cool")
                console.log(Email, Password);
            } else {
                console.log(Email, Password);
                setErreur("Dommage un des 2 est pas bon voir les 2")
                console.log("Dommage un des 2 est pas bon voir les 2");
            }
        } else {
            setErreur("un des champs a pas etait remplie")
            console.log("un des champs a pas etait remplie");
            console.log(Email, Password);
        }
        setPassword("")
        setEmail("")
        document.querySelector(".email").value = ""
        document.querySelector(".password").value = ""
    }
    const btnLogOut = () => {
        localStorage.setItem("Password", "")
        setLog("")
    }

    const NoLog = (
        <div>
            <h2>Connexion</h2>
            <p>{Erreur}</p>
            <label>Votre Email</label>
            <input type="email" className="email" onChange={inputEmail} />
            <label>Mot de passe</label>
            <input type="password" className="password" onChange={inputPassword} />
            <button className="btn" onClick={btn}>Soumettre</button>
        </div>
    )

    const YesLog =
        (<div>
            <button className="btn" onClick={btnLogOut}>Deconnexion</button>
        </div>)

    return (
        <div>
            {Log !== "Ok Cool" ? NoLog : YesLog}
        </div>
    )
}

export default Log;