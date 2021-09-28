import "../compte.css";
import { useState } from "react";

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
    const handleClick = () => {
        console.log(firstName, lastName, email, password);
    }

  return (
    <div>
      <h3>Créez votre compte</h3>
      <input onChange={handleFirstNameInput} type="text" id="firstNameInput" placeholder="Prénom"></input>
      <br />
      <input onChange={handleLastNameInput} type="text" id="lastNameInput" placeholder="Nom de famille"></input>
      <br />
      <input onChange={handleEmailInput} type="email" id="emailInput" placeholder="Adresse e-mail"></input>
      <br />
      <input onChange={handlePasswordInput} type="password" id="emailInput" placeholder="Mot de passe"></input>
      <br />
      <button onClick={handleClick}>Suivant</button>
    </div>
  );
}

export default Crea;
