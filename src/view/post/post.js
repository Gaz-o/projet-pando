import { addComment, addLike } from "../../lib/social-network-library-master";
import "./post.css"
import { Button } from 'react-bootstrap';
import { FaThumbsUp, FaComment} from 'react-icons/fa';
import { useState } from "react";

function Post(props) {

    const likes = async (id) => {
        let like = await addLike(id);
        return like
    }

    const [Com, setCom] = useState("")

    const inputcom = (e) => {
        setCom(e.target.value)
    }

    const comment = async (id) => {
        let addcom = await addComment(id, Com);
        return addcom
    }

    console.log(props, 15);

    const forcomment = (comments) => {
        return comments.map((commentaire) => {
            console.log(commentaire);
            return (
                <div className="Commentaire">
                    <p>{commentaire.content} De {commentaire.firstname}</p>
                </div>
            )
        })
    }

    const LaFonction = () => {
        return props.posts.map((post, key) => {
            if (post.firstname === props.identitie) {
                let card
                if (key % 2 === 0) {
                    card = "CardG"
                } else {
                    card = "CardD"
                }
                return affichage(post, card)
            } else if (props.feed === "feed") {
                let card
                if (key % 2 === 0) {
                    card = "CardG"
                } else {
                    card = "CardD"
                }
                return affichage(post, card)
            }

        })
    };

    function affichage(post, card) {
        return (
            <div className={card}>
                <div className="CardTitle">
                    <h3 className="Title">{post.title}</h3>
                    <br/>
                    <p>Posté par {post.firstname} le {(post.date instanceof Date) ? post.date.toLocaleDateString() : new Date(post.date).toLocaleDateString()}</p>
                </div>
                <div className="Contenue">
                    <p>{post.content}</p>
                </div>
                <div className="Comment">
                    {forcomment(post.comments)}
                </div>
                <div className="CardFooter">
                    
                    <button className="btnlike" onClick={() => likes(post._id)}><FaThumbsUp/></button>
                    <p className="like">{post.likes.length}</p><br/>
                    <input className="inputcom" onChange={inputcom} placeholder="Poster un message"></input>
                    <button className="btncom" onClick={() => comment(post._id)}><FaComment/></button>
                </div>
            </div>
        )
    }

    return (
        <div className="Main">{LaFonction()}</div>
    )
}

export default Post;