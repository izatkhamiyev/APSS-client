import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <header className="header">
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarBrand className='' href='/ '>APSS</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav style={{ flex: 1 }} navbar className="col-12 col-md-8 justify-content-center">
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/articles'>Articles</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/contact'>Contact us</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/about'>About</NavLink>
                                </NavItem>
                                {
                                    this.props.logoutPage ?
                                        <NavItem className="nav-item ml-auto">
                                            <Button outline color="primary" className='nav-link' onClick={this.props.logoutAdmin}>Logout</Button>
                                        </NavItem>
                                        :
                                        null

                                }
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}

export default Header;