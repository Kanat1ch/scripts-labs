import React, {Component} from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
           <Container className={'Layout'} fluid>
               <Row>
                   <Col lg={12} className={'navigation'}>
                       <Navbar bg="dark" expand="lg">
                           <NavLink to={'/'} exact className={'navbar-brand'}>База сотрудников</NavLink>
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar id="basic-navbar-nav">
                               <Nav className="mr-auto">
                                   <NavLink to={'/'} exact className={'nav-link'}>Сотрудники</NavLink>
                                   <NavLink to={'/information'} className={'nav-link'}>Информация</NavLink>
                               </Nav>
                           </Navbar>
                       </Navbar>
                   </Col>
                   <Col lg={12} className={'content'}>
                       {this.props.children}
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Layout;