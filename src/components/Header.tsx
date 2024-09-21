import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/header.css';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import jorgetech from '../assets/imgs/jorgetech.png';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleMainClick = () => {
      navigate('/');
    };

    const handleViewCVClick = () => {
        window.open('/curriculum/CV.docx', '_blank');
    };

    return (
        <header className="cabecalho">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img className="logotipo" src={jorgetech} alt="Logotipo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0 me-2">
                            <Button 
                                id="explore-button" 
                                className="custom-button me-2" 
                                onClick={handleMainClick}
                            >
                                Principal
                            </Button>
                            <Button 
                                id="explore-button" 
                                className="custom-button me-2" 
                                onClick={handleViewCVClick}
                            >
                                Baixar curriculum
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
