import "../compte.css";
import { getCurrentUserProfile, isUserLoggedIn } from "../../../lib/social-network-library-master";
import { useState } from "react";
import { Redirect } from 'react-router-dom';

function Edition () {

    /* Variable d'état */
    const [profile, SetProfile] = useState({firstname:"", lastname:"", email:"", _id:""});

    const handleClick = async () => {
        let currentUserProfile = await getCurrentUserProfile();
    }

    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h3>Edition</h3>
            <button onClick={handleClick}>Afficher</button>
        </div>
    )
}

export default Edition;