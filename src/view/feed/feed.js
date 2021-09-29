import { useEffect, useState } from "react";
import { getPosts } from "../../lib/social-network-library-master";
import "./feed.css";

function Nourrir() {

    const [Posts, setPosts] = useState([]);

    const recupPosts = async () => {
        let result = await getPosts();
        return result
    }

    useEffect(()=>{
        recupPosts().then((rep) => {
            setPosts(rep.posts)               
        })
    },[])


    console.log(Posts, recupPosts(), 1);

    const LaFonction = () => {
        return Posts.map((post) => {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>{post.firstname} a {post.date}</p>
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