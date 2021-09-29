import "../compte.css";
import {Redirect} from 'react-router-dom';
import { isUserLoggedIn } from "../../../lib/social-network-library-master";

function Edition () {

    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Edition</h1>
        </div>
    )
}

export default Edition;