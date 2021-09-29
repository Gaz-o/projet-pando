import "../compte.css";
import { useState } from "react";
import { register } from "../../../lib/social-network-library-master";

function Crea() {

    /* Variable d'états - Informations */
    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    /* Fonctions de mise à jour - Informations */
    const handleFirstNameInput = (e) => {
        SetFirstName(e.target.value);
    }
    
    const handleLastNameInput = (e) => {
        SetLastName(e.target.value);
    }

    const handleEmailInput = (e) => {
        SetEmail(e.target.value);
    }

    const handlePasswordInput = (e) => {
        SetPassword(e.target.value);
    }

    /* Evénénement clic sur le bouton */
    const handleClick = async () => {
        let result = await register(firstName, lastName, email, password);
        console.log(result);
        document.querySelector("#firstNameInput").value = "";
        document.querySelector("#lastNameInput").value = "";
        document.querySelector("#emailInput").value = "";
        document.querySelector("#passwordInput").value = "";
    }

  return (
    <div>
      <input onChange={handleFirstNameInput} type="text" id="firstNameInput" placeholder="Prénom"></input>
      <br />
      <input onChange={handleLastNameInput} type="text" id="lastNameInput" placeholder="Nom de famille"></input>
      <br />
      <input onChange={handleEmailInput} type="email" id="emailInput" placeholder="Adresse e-mail"></input>
      <br />
      <input onChange={handlePasswordInput} type="password" id="passwordInput" placeholder="Mot de passe"></input>
      <br />
      <button onClick={handleClick}>Suivant</button>
    </div>
  );
}

export default Crea;
