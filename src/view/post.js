import { addLike } from "../lib/social-network-library-master";
import "./post.css"
import {Button} from 'react-bootstrap';

function Post (props) {

    const likes = async (id) => {
        let like = await addLike(id);
        return like
    }

    const LaFonction = () => {
        return props.posts.map((post) => {
            return (
                <div className="Card">
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