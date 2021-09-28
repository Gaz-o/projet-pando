import "../compte.css";
import { getCurrentUserProfile } from "../../../lib/social-network-library-master";
import { useState } from "react";

function Edition () {

    /* Variable d'état */
    const [profile, SetProfile] = useState({firstname:"", lastname:"", email:"", _id:""});

    const handleClick = async () => {
        let currentUserProfile = await getCurrentUserProfile();
    }

    return (
        <div>
            <h3>Edition</h3>
            <button onClick={handleClick}>Afficher</button>
        </div>
    )
}

export default Edition;