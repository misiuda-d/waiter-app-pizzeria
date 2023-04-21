import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" className="rounded px-1">
            <Container>
                <Navbar.Brand>Waiter.app</Navbar.Brand>
                <Nav >
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;