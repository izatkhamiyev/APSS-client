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
            <>
                <div className='logo'>
                    <h1>APSS</h1>
                </div>
                <div className='line'>

                </div>
                <Navbar light expand='md' sticky='top'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav style={{ flex: 1 }} navbar className="col-12 col-md-12 justify-content-center">
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/contact'>Events</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/about'>Kazakhstan</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/about'>Analysis</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/about'>Numbers</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className='nav-link' to='/about'>Our Selection</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-auto'>
                                {
                                    this.props.logoutPage ?
                                        <NavItem className="nav-item ml-auto">
                                            <a className='btn nav-link' onClick={this.props.logoutAdmin}>Logout</a>
                                        </NavItem>
                                        :
                                        null
                                }
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
             </>
        );
    }
}

export default Header;