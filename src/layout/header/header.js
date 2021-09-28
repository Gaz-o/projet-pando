import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import "./header.css";
import {Link} from 'react-router-dom';


function Header() {

    return(

        <div>
            <Navbar bg="light" expand="lg">
  
                <Container>
    
                    <Navbar.Brand href="home">Pando - Réseau social</Navbar.Brand>
    
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
                            <Navbar.Collapse id="basic-navbar-nav">
        
                                <Nav className="me-auto">
                                    
                                        <Link to="/compte">Compte</Link>
                                        <Link to="/feed">L'arbre foret</Link>
                                        <Link to="/post">Ma feuille</Link>
                                        <Link to="/maPage">Ma branche</Link>
                                    
                                </Nav>
        
                            </Navbar.Collapse>
  
                </Container>

            </Navbar>

        </div>
        
    );
}



export default Header;