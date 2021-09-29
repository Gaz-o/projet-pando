import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form, FormControl, InputGroup ,Button} from 'react-bootstrap';
import "../post.css";
import { useEffect, useState } from "react";

function CreatePost() {

    const [status, setStatus] = useState({ content:"", title:"", etat:"" });
    const [emptyField, setMessage] = useState("");
    const [showPosts, setShowposts] = useState("");
    const [feed, setFeed] = useState([]);

    const getTitle = (e) => {
        setStatus({...status, title: e.target.value});
        console.log("title on change:" +e.target.value);
    }
    const getContent = (e) => {
        setStatus({...status, content: e.target.value});
        console.log("content on change :" +e.target.value);
    }

    const post = (e) => {

        if (status.title === "" && status.content === "") {
            setMessage("Tous les champs sont requis");
        }else{
            setFeed([...feed, status]);
            setStatus({...status.etat, etat: "Posted"});
            console.log("Titre : "+status.title+" Content : "+status.content);
            setShowposts("Titre : "+status.title+" Content : "+status.content);
        }

    }

    
    useEffect (() => 
        console.log(status), [status]
    );
    useEffect (() => 
        console.log(feed), [feed]
    );

    useEffect (() => 
        console.log(showPosts), [showPosts]
    );

    
    return (

        <div>

            <h6>Publier sur Pando</h6>

                <Container>

                    <p id="emptyMessage">{emptyField}</p>

                    <Form id="title">

                        <InputGroup className="mb-3">

                            <FormControl id="postTitle" type="text" onChange={getTitle} placeholder="Ajouter un titre :" aria-label="task" aria-describedby="basic-addon"/>
                            
                        </InputGroup>

                        <FormControl as="textarea" id="postContent" type="text" onChange={getContent} placeholder="Votre contenu :" aria-label="task" aria-describedby="basic-addon"/><br/>

                        <Button variant="outline-success" onClick={post}>Publier</Button>

                    </Form><br/><br/>

                    <p>{showPosts}</p>

                </Container>

        </div>

    )
}

export default CreatePost;