import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Noticias App</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;