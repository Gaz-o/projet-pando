import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {

    /* Implémentation des links de react-router-dom */
    return (
        <div>
            <Navbar bg="success" expand="lg" className="border-bottom">
                <Container>
                    <h3 href="/home">Pando - Réseau social</h3>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="">
                        <Nav>
                            <Link className="nav-link" to="/compte"><Button variant="success" className="button">Compte</Button></Link>
                            <Link className="nav-link" to="/feed"><Button variant="success" className="button">L'arbre foret</Button></Link>
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