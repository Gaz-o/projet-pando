import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button, Container, Row, Col} from 'react-bootstrap';
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

                    <Container class="container">

                        <Row>

                            <Col lg="3">

                            </Col>

                                <Col lg="6"><br/>

                                    <Card class="card">
            
                                        <Card.Body>

                                            <Card.Title>{post.title}</Card.Title>

                                                <Card.Text>{post.content}<br/><br/><p>{post.firstname} a {(post.date instanceof Date) ? post.date.toLocaleDateString() : new Date(post.date).toLocaleDateString()}</p></Card.Text>

                                                    <Button variant="primary">Go somewhere</Button>

                                        </Card.Body>

                                    </Card><br/>
                                    
                                </Col>

                            <Col lg="3">

                            </Col>

                        </Row>

                        </Container>

                </div>
            )
        })
    };

    return (
        <div>
            {LaFonction()}
        </div>
    )

}

export default Nourrir;