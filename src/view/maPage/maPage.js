import "./maPage.css";
import { useEffect, useState } from "react";
import { getPosts,getCurrentUserProfile,isUserLoggedIn } from "../../lib/social-network-library-master";
import { Redirect } from 'react-router-dom';

function MaPage() {
    
    
    const [Posts, setPosts] = useState([]);
    const [Profile, setProfile] = useState([]);
    const [id, setID] = useState("");
    

    const recupUser = async () => {
        let result = await getCurrentUserProfile();
        setID(result.firstname);
        console.log ("firstname :"+result.firstname)
    }

    useEffect(()=>{
        recupUser().then((rep) => {
            setProfile(rep) 
            console.log("user :"+rep)              
        })
    },[])

    console.log(Profile);
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

    const myWall = () => {

        return Posts.map((post) => {
            
            
            if(post.firstname==id){

            return (
                
                <div>
                     
                    <p>{post.firstname} a {(post.date instanceof Date) ? post.date.toLocaleDateString() : new Date(post.date).toLocaleDateString()}</p>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    
                </div>
          )
            }
        
        })
    };
    
    
    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    return (

        <div>
            {myWall()}
        </div>
    )

}

export default MaPage;
