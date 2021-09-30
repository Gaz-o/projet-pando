import "../compte.css";
import { getCurrentUserProfile, isUserLoggedIn} from "../../../lib/social-network-library-master";
import { useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';

function Edition() {

    /* Variables d'état */
    const [Profile, setProfile] = useState([]);

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

    return (
        <div className="standart">
            <h3>Mon profil</h3>
            <p>Prénom: <span>{Profile.firstname}</span></p>
            <p>Nom: <span>{Profile.lastname}</span></p>
            <p>Âge: <span></span></p>
            <p>Email: <span>{Profile.email}</span></p>
            <p>Poste: <span></span></p>
        </div>
    )
}

export default Edition;