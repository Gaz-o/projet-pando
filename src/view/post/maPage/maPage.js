import "./maPage.css";
import { useEffect, useState } from "react";
import { getCurrentUserProfile, isUserLoggedIn } from "../../../lib/social-network-library-master";
import { Redirect } from 'react-router-dom';
import Post from "../post";

function MaPage() {
    
    /* Variable d'état */
    const [id, setID] = useState("");
    
    /* Récupération du profil connecté */
    const recupUser = async () => {
        let result = await getCurrentUserProfile();
        console.log("firstname :" + result.firstname)
        return result;
    }

    /* Mise à jour de l'ID */
    useEffect(() => {
        recupUser().then((rep) => {
            setID(rep.firstname)
            console.log("user :" + rep)
        })
    }, [])

    /* Condition de redirection */
    if (isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    return (

        <div>
            <Post identitie={id}/>
        </div>
    )

}

export default MaPage;
