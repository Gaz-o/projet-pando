import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {

    
    return (
        <div>
            <Navbar bg="success" expand="lg" className="border-bottom">

                <Container>

                        <Navbar.Brand href="/home">Pando - Réseau social</Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                
                                    <Navbar.Collapse id="basic-navbar-nav">

                                    <Nav>
                                            <Link className="nav-link" to="/compte"><Button variant="success" className="button">Compte</Button></Link>
                                            <Link className="nav-link" to="/feed"><Button variant="success" className="button">L'arbre foret</Button></Link>
                                            
                                    </Nav>

                                    <Nav>

                                            <Link className="nav-link" to="/creaPost"><Button variant="success" className="button">Ma feuille</Button></Link>
                                            <Link className="nav-link" to="/maPage"><Button variant="success" className="button">Ma branche</Button></Link>

                                    </Nav>

                            </Navbar.Collapse>

                </Container>
            
            </Navbar>

        </div>
    );
}



export default Header;