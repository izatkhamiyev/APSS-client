import React, { Component } from 'react'
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-1">
                            <div className="row justify-content-center">
                                <h3 className='footer-text'>APSS</h3>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <ul className="list-unstyled">
                                <li><Link className="nav-link footer-link" to="/home">Home</Link></li>
                                <li><Link className="nav-link footer-link" to="/about">About</Link></li>
                                <li><Link className="nav-link footer-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <ul className="list-unstyled">
                                <li><Link className="nav-link footer-link" to="/home">Home</Link></li>
                                <li><Link className="nav-link footer-link" to="/about">About</Link></li>
                                <li><Link className="nav-link footer-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto col-md-4 social">
                            <div className="text-center">
                                <h4 className='footer-text'>Follow us</h4>
                            </div>
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-facebook social-item" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-google social-item" href="http://www.linkedin.com/in/"><i className="fa fa-instagram "></i></a>
                                <a className="btn btn-social-icon btn-vk social-item" href="http://www.linkedin.com/in/"><i className="fa fa-vk "></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p className='footer-text'>© Copyright 2019 APSS</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;