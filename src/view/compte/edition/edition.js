import "../compte.css";
import { getCurrentUserProfile, isUserLoggedIn, updateCurrentUserProfile } from "../../../lib/social-network-library-master";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';

function Edition() {

    /* Variable d'état */
    const [Profile, setProfile] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [occupation, setOccupation] = useState("");

    /* Récupération des infos du profil connecté */
    const recupUser = async () => {
        let result = await getCurrentUserProfile();
        console.log("profil connecté", result);
        setProfile(result)
    }

    /* Affichage des informations mises à jour */
    useEffect(()=>{
        recupUser()
    }, [])

    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    /* Evénements sur les inputs */
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleOccupation = (e) => {
        setOccupation(e.target.value);
    }

    /* Evénénement clic sur le bouton */
    const handleClick = async () => {
        let updateResult = await updateCurrentUserProfile(firstName, lastName, email, age, occupation);
        console.log("update", updateResult);
        document.querySelector("#firstName").value = "";
        document.querySelector("#lastName").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#age").value = "";
        document.querySelector("#occupation").value = "";
        recupUser()
    }

    return (
        <div className="standart">
            <h3>Modifier mon profil</h3>
            <label>Prénom:</label>
            <input onChange={handleFirstName} type="text" id="firstName"></input><br />
            <label>Nom:</label>
            <input onChange={handleLastName} type="text" id="lastName"></input><br />
            <label>Adresse e-mail:</label>
            <input onChange={handleEmail} type="text" id="email"></input><br />
            <label>Âge:</label>
            <input onChange={handleAge} type="text" id="age"></input><br />
            <label>Poste:</label>
            <input onChange={handleOccupation} type="text" id="occupation"></input><br />
            <button onClick={handleClick}>Sauvegarder les modifications</button>

            <div>
                <h3>Mon profil</h3>
                <p>Prénom: {Profile.firstname}</p>
                <p>Nom: {Profile.lastname}</p>
                <p>E-mail: {Profile.email}</p>
                <p>Âge: {Profile.age}</p>
                <p>Poste: {Profile.occupation}</p>
            </div>
        </div>
    )
}

export default Edition;