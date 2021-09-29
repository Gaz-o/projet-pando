import { addLike } from "../../lib/social-network-library-master";
import "./post.css"
import {Button} from 'react-bootstrap';

function Post (props) {

    const likes = async (id) => {
        let like = await addLike(id);
        return like
    }

    const LaFonction = () => {
        return props.posts.map((post, key) => {
            let card
            if (key%2 === 0) {
                card = "CardG"
            } else {
                card = "CardD"
            }
            console.log(card);
            return (
                <div className={card}>
                    <div className="CardTitle">
                        <h3 className="Title">{post.title}</h3>
                        <p className="name">De {post.firstname}</p>
                    </div>
                    <div className="Contenue">
                        <p>{post.content}</p>
                    </div>
                    <div className="CardFooter">
                        <Button className="btnlike" variant="success" onClick={() => likes(post._id)}>Like</Button>
                        <p className="like">{post.likes.length}</p>
                    </div>
                </div>
            )
        })
    };

    return (
        <div className="Main">{LaFonction()}</div>
    )
}

export default Post;