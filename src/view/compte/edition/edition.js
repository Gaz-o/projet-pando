import "../compte.css";
import { getCurrentUserProfile, isUserLoggedIn, updateCurrentUserProfile } from "../../../lib/social-network-library-master";
import { useState, useEffect, Profiler } from "react";
import { Redirect } from 'react-router-dom';

function Edition () {

    /* Variables d'état */
    const [userProfile, setProfile] = useState({firstname:"", lastname:"", email:"", _id:""}); 
    

    /* Récupération des infos du profil connecté */
    const handleClick = async () => {
        let result = await getCurrentUserProfile(userProfile);
        console.log(result, 1);
    }
    
    useEffect (() => 
        getCurrentUserProfile().then((rep)=>{
            setProfile(rep.userProfile)
            console.log(rep);
        })
    );
     
        /*if(userProfile !== "") {
            setProfile({...userProfile, 
            firstname : result.firstname,
            lastname : userProfile.lastname, 
            email : userProfile.email,
            _id : userProfile._id
            }, console.log(userProfile, 2));
        }*/
    
    

    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h3>Mon profil</h3>
            <p>Prénom: <span></span></p>
            <p>Nom: <span></span></p>
            <p>Âge: <span></span></p>
            <p>Email: <span></span></p>
            <p>Poste: <span></span></p>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}

export default Edition;