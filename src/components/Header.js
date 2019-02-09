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
            <Navbar dark expand='md'>
                <div className='container'>
                    <NavbarBrand className='mr-auto col-2' href='/ '>APSS</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="" isOpen={this.state.isNavOpen} navbar>
                        <Nav style={{ flex: 1 }} navbar>
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
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;