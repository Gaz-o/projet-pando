import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form, FormControl, InputGroup ,Button} from 'react-bootstrap';
import "../post.css";
import { useState } from "react";

function CreatePost() {

    const [status, setStatus] = useState({ title: "", content: "", etat:"Posted" });
    //const [content, setContent] = useState("");
    const [emptyField, setemptyField] = useState("");
    const [feed, setFeed] = useState([]);

    /*const getTitle = (e) => {
        setStatus(...title, e.target.value);
    }
    const getContent = (e) => {
        setStatus(...content, e.target.value);
    }*/

    const post = (e) => {

        /*if (title !== "" && content !== "") {
            setemptyField("Tous les champs sont requis");
        }else{
            setFeed([...feed, status]);
                console.log(feed);
        }*/
    }
    return (

        <div>

            <h1>Publier</h1>

                <Container>

                    <p>{emptyField}</p>

                    <Form id="title">

                        <InputGroup className="mb-3">

                            <FormControl id="postTitle" type="text"  placeholder="Ajouter un titre :" aria-label="task" aria-describedby="basic-addon"/>

                        </InputGroup>

                        <FormControl as="textarea" id="postContent" type="text"  placeholder="Votre contenu :" aria-label="task" aria-describedby="basic-addon"/>

                        <Button variant="outline-success" onClick={post}>Publier</Button>

                    </Form>

                </Container>

        </div>

    )
}

export default CreatePost;