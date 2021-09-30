import Post from "../post";
import "./feed.css";

function Nourrir() {

    /* Appel du composant Post avec props de feed */
    return (
        <div>
            <Post feed="feed"/>
        </div>
    )

}

export default Nourrir;