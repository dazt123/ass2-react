import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <div>
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div>
                <header className="site-navbar py-4 site-navbar-target" role="banner">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="site-logo">
                                <a href="/" className="d-block">
                                    <h2><a href="/"><span>E</span>lite Shoppy </a></h2>
                                </a>
                            </div>
                            <div className="mr-auto">
                                <nav className="site-navigation position-relative text-right" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li className="active">
                                            <a href="/" className="nav-link text-left">Home</a>
                                        </li>
                                        <li className="has-children">
                                            <a href="services.html" className="nav-link text-left">Shopping</a>
                                            <ul className="dropdown">
                                                <li><a href="services.html">Sell Items</a></li>
                                                <li><a href="services.html">Buy Items</a></li>
                                                <li><a href="services.html">Submit a Bid</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/blog" className="nav-link text-left">Blog</Link>
                                        </li>
                                        <li>
                                            <a href="buy.html" className="nav-link text-left">Contact</a>
                                        </li>


                                    </ul>
                                </nav>
                            </div>
                            {/* 
                            <div className="header-bot">
                                <div classname="header-bot_inner_wthreeinfo_header_mid">
                                    <div classname="col-md-4 header-middle">
                                        <form action="#" method="post">
                                            <input type="search" name="search" placeholder="Search here..." required />
                                            <input type="submit" defaultvalue=" " />
                                            <div classname="clearfix">
                                            </div></form>
                                    </div>
                                </div></div> */}



                            <div className="ml-auto">
                                <div className="social-wrap">
                                    <a href="login.html" className="text-white">Sign In / Register</a>
                                    <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3 text-white" style={{ position: 'relative', top: 7 }} /></a>
                                </div>
                            </div>
                        </div>


                    </div>

                </header>
                {/* <div class="hero-slide owl-carousel site-blocks-cover"> */}
                <div className="intro-section" style={{ backgroundImage: 'url("images/banner5.jpg")' }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                                <h1>“WHAT ARE YOU MADE OF?”</h1>
                                <p>We have boutiques all over the world, in the most exclusive locations. Discover our global themes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

Header.propTypes = {

}

export default Header
