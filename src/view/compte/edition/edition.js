import "../compte.css";
import { getCurrentUserProfile, isUserLoggedIn, updateCurrentUserProfile } from "../../../lib/social-network-library-master";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';

function Edition () {

    /* Variables d'état */
    /* const [profile, setProfile] = useState({firstname:"", lastname:"", email:"", _id:""}); */
    let userProfile = "";

    /* Récupération des infos du profil connecté */
    const handleClick = async () => {
        userProfile = await getCurrentUserProfile();
        console.log(userProfile, 1);
    }
    
   /*  useEffect(() => {
        if(userProfile !== "") {
            setProfile({...profile, 
            firstname: userProfile.firstname, 
            lastname: userProfile.lastname, 
            email: userProfile.email, 
            _id: userProfile._id
            }, console.log(profile, 2));
        }
    })
    */

    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h3>Mon profil</h3>
            <p>Prénom: <span>{userProfile.firstname}</span></p>
            <p>Nom: <span></span></p>
            <p>Âge: <span></span></p>
            <p>Email: <span></span></p>
            <p>Poste: <span></span></p>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}

export default Edition;