import React, { Component } from 'react'
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 col-md-3">
                            <div className="row justify-content-center">
                                <h3 className='footer-text'>APSS</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 style={{ color: 'black' }}>
                                Who we Are ?
                            </h3>
                            <p>I came back to the University of Montreal and I wasn’t sure about what I should be doing. I worked at the university as a program manager of International Studies. I was an undergrad, then a graduate student, then an admin, and later I would become a postdoc at the same university (laughs).</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="social-items">
                            <a className="fa-stack" href="http://www.facebook.com/profile.php?id=" target="_blank">
                                <i className="fa fa-circle-thin fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x"></i>
                            </a>
                            <a className="fa-stack" href="http://www.facebook.com/profile.php?id=" target="_blank">
                                <i className="fa fa-circle-thin fa-stack-2x"></i>
                                <i className="fa fa-instagram fa-stack-1x"></i>
                            </a>
                            <a className="fa-stack" href="http://www.facebook.com/profile.php?id=" target="_blank">
                                <i className="fa fa-circle-thin fa-stack-2x"></i>
                                <i className="fa fa-vk fa-stack-1x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
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