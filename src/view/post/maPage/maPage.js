import "./maPage.css";
import { useEffect, useState } from "react";
import { getCurrentUserProfile, isUserLoggedIn } from "../../../lib/social-network-library-master";
import { Redirect } from 'react-router-dom';
import Post from "../post";

function MaPage() {
    
    const [id, setID] = useState("");
    

    const recupUser = async () => {
        let result = await getCurrentUserProfile();
        console.log("firstname :" + result.firstname)
    }

    useEffect(() => {
        recupUser().then((rep) => {
            setID(result.firstname);
            console.log("user :" + rep)
        })
    }, [])


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
