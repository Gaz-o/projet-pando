import { useEffect, useState } from "react";
import { getPosts } from "../../../lib/social-network-library-master";
import Post from "../post";
import "./feed.css";

function Nourrir() {

    return (
        <div>
            <Post feed="feed"/>
        </div>
    )

}

export default Nourrir;