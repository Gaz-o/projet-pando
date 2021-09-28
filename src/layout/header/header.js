import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import "./header.css";


function Header() {

    return(

        <div>
            <Navbar bg="light" expand="lg">
  
                <Container>
    
                    <Navbar.Brand href="#home">Pando - Réseau social</Navbar.Brand>
    
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
                            <Navbar.Collapse id="basic-navbar-nav">
        
                                <Nav className="me-auto">
                        
                                    <Nav.Link>Compte</Nav.Link>
                    
                                    <Nav.Link>Feed</Nav.Link>

                                    <Nav.Link>Ma Page</Nav.Link>
                
                                </Nav>
        
                            </Navbar.Collapse>
  
                </Container>

            </Navbar>

        </div>
        
        

    );
}



export default Header;