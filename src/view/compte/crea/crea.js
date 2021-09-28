import "../compte.css";
import { useState, useEffect } from "react";

function Crea() {

    /* Variable d'états - Coordonnées */
    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, SetEmail] = useState("");
    const [birthday, SetBirthday] = useState();

    /* Fonctions de mise à jour - Coordonnées */
    const handleFirstNameInput = (e) => {
        SetFirstName(e.target.value);
    }
    
    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    /* Evénénement clic sur le bouton */
    const handleClick = () => {
        console.log("Suivant");
    }

  return (
    <div>
      <h1>Créez votre compte</h1>
      <input onChange={handleFirstNameInput} type="text" id="firstNameInput" placeholder="Prénom"></input>
      <input onChange={handleLastNameInput} type="text" id="lastNameInput" placeholder="Nom de famille"></input>
      <input onChange={handleEmailInput} type="email" id="emailInput" placeholder="Adresse e-mail"></input>
      <label for="birthdayInput">Date de naissance:</label>
      <input onChange={handleBirthdayInput} type="date" id="birthdayInput" name="birthdayInput"></input>
      <button onClick={handleClick}>Suivant</button>
    </div>
  );
}

export default Crea;
