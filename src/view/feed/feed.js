import { useEffect, useState } from "react";
import { addLike, getPosts } from "../../lib/social-network-library-master";
import "./feed.css";

function Nourrir() {

    const [Posts, setPosts] = useState([]);

    const recupPosts = async () => {
        let result = await getPosts();
        return result
    }

    const likes = async (id) => {
        let like = await addLike(id);
        return like
    }

    useEffect(()=>{
        recupPosts().then((rep) => {
            setPosts(rep.posts)               
        })
    },[])

    const LaFonction = () => {
        return Posts.map((post) => {
            console.log(post.likes ,6)
            return (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>{post.firstname} a {post.date}</p>
                    <button onClick={likes(post._id)}>Like <span>{post.likes.length}</span></button>
                </div>
            )
        })
    };

    return (
        <div>
            {LaFonction()}
        </div>
    )

};

export default Nourrir;