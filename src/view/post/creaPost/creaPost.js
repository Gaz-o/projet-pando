import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form, FormControl, InputGroup ,Button, Row, Col} from 'react-bootstrap';
import "../post.css";
import { useEffect, useState } from "react";
//A introduire après les constantes d'état :
import { Redirect } from 'react-router-dom';
import { isUserLoggedIn, createPost } from "../../../lib/social-network-library-master";

function CreatePost() {

    const [status, setStatus] = useState({ content:"", title:"", etat:"" });
    const [emptyField, setMessage] = useState("");
    const [showPosts, setShowposts] = useState("");
    const [feed, setFeed] = useState([]);
    
    useEffect (() => 
        console.log(status), [status]
    );
    useEffect (() => 
        console.log(feed), [feed]
    );

    useEffect (() => 
        console.log(status), [status]
    );
    useEffect (() => 
        console.log(feed), [feed]
    );

    useEffect (() => 
        console.log(showPosts), [showPosts]
    );
    
    if(isUserLoggedIn() !== true) {
        return <Redirect to="/" />
    }

    const getTitle = (e) => { 
        setStatus({...status, title: e.target.value});
        console.log("title on change:" +e.target.value);
    }
    const getContent = (e) => {
        setStatus({...status, content: e.target.value});
        console.log("content on change :" +e.target.value);
    }

    const post = async () => {

        if (status.title === "" && status.content === "") {
            setMessage("Tous les champs sont requis");
        }else{
        setFeed([...feed, status]);
        setStatus({...status.etat, etat: "Posted"});
        setShowposts("Titre : "+status.title+" Content : "+status.content);
        let result = await createPost(status.title, status.content);
        console.log(result);
        document.querySelector("#postTitle").value = "";
        document.querySelector("#postContent").value = "";}
    }

    
    return (

        <div className="standart"><br/>

            <h6>Publier sur Pando</h6>

                <Container>

                    <Row className="justify-content-md-center">

                        <Col lg="3">

                        </Col>

                        <Col lg="6">

                            <p id="emptyMessage">{emptyField}</p>

                            <Form id="title">

                                <InputGroup className="mb-3">

                                    <FormControl id="postTitle" type="text" onChange={getTitle} placeholder="Ajouter un titre :" aria-label="task" aria-describedby="basic-addon"/>
                                    
                                </InputGroup>

                                <FormControl as="textarea" id="postContent" type="text" onChange={getContent} placeholder="Votre contenu :" aria-label="task" aria-describedby="basic-addon"/><br/>

                                <Button variant="outline-success" onClick={post}>Publier</Button>

                            </Form><br/><br/>

                            <p>{showPosts}</p>

                        </Col>

                        <Col lg="3">

                        </Col>

                    </Row>

                </Container>

        </div>

    )
}

export default CreatePost;