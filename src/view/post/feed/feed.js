import { useEffect, useState } from "react";
import { getPosts } from "../../../lib/social-network-library-master";
import Post from "../post";
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

    return (
        <div>
            <Post posts={Posts}/>
        </div>
    )

}

export default Nourrir;