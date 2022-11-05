import {Navbar, Nav, Container} from 'react-bootstrap';
const Footer  = () => {
    return(

        <div>
             <Navbar bg="success" variant="dark" className='fixed-bottom'>
                <Container>
                    <Navbar.Brand href="#home"><strong>Langkat Memikat</strong></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>        
        </div>

    );
}

export default Footer;