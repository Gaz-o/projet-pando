import "./maPage.css";
import {Redirect} from 'react-router-dom';
import { isUserLoggedIn } from "../../lib/social-network-library-master";

function MaPage () {
    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>MaPage</h1>
        </div>
    )
}

export default MaPage;