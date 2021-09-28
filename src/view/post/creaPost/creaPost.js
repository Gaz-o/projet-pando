import 'bootstrap/dist/css/bootstrap.min.css';
import {Textarea,Container,Form, FormControl, InputGroup ,Button} from 'react-bootstrap';
import "../post.css";

function CreatePost() {

    const [status, setStatus] = useState({ title: "", content: "", etat:"Posted" });
    //const [content, setContent] = useState("");
    const [emptyField, setemptyField] = useState("");
    const [feed, setFeed] = useState([]);

    const getTitle = (e) => {
        setStatus(...title, e.target.value);
    }
    const getContent = (e) => {
        setStatus(...content, e.target.value);
    }

    const post = (e) => {

        if (title !== "" && content !== "") {
            setemptyField("Tous les champs sont requis");
        }else{
            setFeed([...feed, status]);
                console.log(feed);
        }
    }
    return (

        <div>

            <h1>Publier</h1>

                <Container>

                    <p>{emptyField}</p>

                    <Form id="title">

                        <InputGroup className="mb-3">

                            <FormControl id="postTitle" type="text" onChange={getTitle} placeholder="Ajouter un titre :" aria-label="task" aria-describedby="basic-addon"/>

                        </InputGroup>

                        <Textarea id="postContent" type="text" onChange={getContent} placeholder="Votre contenu :" aria-label="task" aria-describedby="basic-addon"></Textarea>

                        <Button variant="outline-success" onClick={post}>Publier</Button>

                    </Form>

                </Container>

        </div>

    )
}

export default CreatePost;