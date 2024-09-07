import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css'
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import jorgetech from '../assets/imgs/jorgetech.png'

const Header: React.FC = () => {
    return (
        <header className="cabecalho">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img className="logotipo" src={jorgetech} alt="Logotipo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <Nav.Link href="#" className="text-light">
                                Principal
                            </Nav.Link>
                            <Nav.Link href="#" className="text-light">
                                Curriculum
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Pesquisar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light" type="submit">
                                Pesquisar
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
