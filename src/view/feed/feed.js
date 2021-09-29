import { useEffect, useState } from "react";
import { getPosts } from "../../lib/social-network-library-master";
import "./feed.css";

function Nourrir() {

    const [Posts, setPosts] = useState({});


    /* async function recupposts(page, limit) {
        let result = await getPosts(page, limit);
        setPosts(result)
        console.log(result, 2);
    } */

    const btn = async () => {
        let result = await getPosts(1, 20);
        setPosts(result)
        console.log(result, 2)
    }

    /* useEffect(() => {
        if (Posts === {}) {
            recupposts(1, 20)
        }
    }, [Posts]); */

    const LaFonction = () => {
        return Posts.map((post) => {
            console.log(post.Posts);
            return (
                <div>
                    <p>test</p>
                </div>
            );
        })
    };

    console.log(Posts, 1);

    return (
        <div>
            <button className="urg" onClick={btn}>Urg</button>
            {LaFonction}
        </div>
    )

};

export default Nourrir;