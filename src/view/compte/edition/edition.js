import "../compte.css";
import { getCurrentUserProfile, isUserLoggedIn, updateCurrentUserProfile } from "../../../lib/social-network-library-master";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import "../compte.css"
function Edition() {

    /* Variable d'état */
    const [Profile, setProfile] = useState([]);

    /* Récupération des infos du profil connecté */
    const recupUser = async () => {
        let result = await getCurrentUserProfile();
        return result
    }

    useEffect(()=>{
        recupUser().then((rep) => {
            setProfile(rep)               
        })
    },[])

    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    console.log(Profile);

    /* Evénénement clic sur le bouton */
    const handleClick = async () => {
        let updateResult = await updateCurrentUserProfile(Profile.firstname, Profile.lastname, Profile.email, Profile.age, Profile.occupation);
        console.log(updateResult);
    }

    return (
        <div className="standart">
            <h3>Mon profil</h3>
            <p>Prénom: <span id="firstNameInput">{Profile.firstname}</span></p>
            <p>Nom: <span id="lastNameInput">{Profile.lastname}</span></p>
            <p>Email: <span id="emailInput">{Profile.email}</span></p>
            <p>Âge: <span id="ageInput">{Profile.age}</span></p>
            <p>Poste: <span id="occupationInput">{Profile.occupation}</span></p>
            <button onClick={handleClick}>Modifier le profil</button>
        </div>
    )
}

export default Edition;