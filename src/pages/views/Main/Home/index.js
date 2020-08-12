import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ products }) => {
    return (
        <div>
            <div>
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-md-7 mb-5 text-center mx-auto">
                                <span className="caption">Auctions</span>
                                <h2 className="text-black">Current <strong>Auctions</strong></h2>
                            </div>
                        </div>
                        <div className="row auctions-entry">
                            {products.map(({ id, name, image, price }, index) => (

                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="item">
                                        <div>

                                            <a href="/"><img src={image} alt="Image" className="img-fluid" /></a>
                                        </div>
                                        <div className="p-4">
                                            <h3><Link to={`/singleproducts/${id}`}>{name}</Link></h3>
                                            <h3>{price}</h3>
                                            <a type="button" class="btn btn-outline-warning">More </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>








                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <img src="images/banner2.jpg" alt="Image" className="img-fluid" />
                            </div>
                            <div className="col-lg-5 pl-lg-5">
                                <div className="mb-5">
                                    <span className="caption">About?</span>
                                    <h2 className="text-black">About <strong>Us</strong></h2>
                                </div>
                                <div className="d-flex feature-icon mb-3">

                                    <div>
                                        <h3>Fast Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, debitis!</p>
                                    </div>
                                </div>
                                <div className="d-flex feature-icon mb-3">

                                    <div>
                                        <h3>Happy Customers</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, debitis!</p>
                                    </div>
                                </div>
                                <div className="d-flex feature-icon mb-3">

                                    <div>
                                        <h3>24/7 Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, debitis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="schedule-bottom">
                    <div className="col-md-6 agileinfo_schedule_bottom_left">
                        <img src="images/banner-rolex.jpg" alt=" " className="img-responsive" />
                    </div>
                    <div className="col-md-6 agileits_schedule_bottom_right">
                        <div className="w3ls_schedule_bottom_right_grid">
                            <h3>Save up to <span>50%</span> in this week</h3>
                            <p>Suspendisse varius turpis efficitur erat laoreet dapibus.
        Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
                            <div className="col-md-4 w3l_schedule_bottom_right_grid1">

                                <h4>Customers</h4>
                                <h5 className="counter">653</h5>
                            </div>
                            <div className="col-md-4 w3l_schedule_bottom_right_grid1">

                                <h4>Events</h4>
                                <h5 className="counter">823</h5>
                            </div>
                            <div className="col-md-4 w3l_schedule_bottom_right_grid1">

                                <h4>Awards</h4>
                                <h5 className="counter">45</h5>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="clearfix">
                    </div>
                </div>







                <div className="banner-bootom-w3-agileits">
                    <div className="container">
                        <h3 className="wthree_text_info">What's <span>Trending</span></h3>
                        <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
                            <a href="womens.html">
                                <div className="bb-left-agileits-w3layouts-inner grid">
                                    <figure className="effect-roxy">
                                        <img src="images/12.jpg" alt=" " className="img-responsive" />
                                        <figcaption>
                                            <h3><span>S</span>ale </h3>
                                            <p>Upto 55%</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-7 bb-grids bb-middle-agileits-w3layouts">
                            <a href="mens.html">
                                <div className="bb-middle-agileits-w3layouts grid">
                                    <figure className="effect-roxy">
                                        <img src="images/bottom3.jpg" alt=" " className="img-responsive" />
                                        <figcaption>
                                            <h3><span>S</span>ale </h3>
                                            <p>Upto 55%</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </a>
                            <a href="mens.html">
                                <div className="bb-middle-agileits-w3layouts forth grid">
                                    <figure className="effect-roxy">
                                        <img src="images/bb12.jpg" alt=" " className="img-responsive" />
                                        <figcaption>
                                            <h3><span>S</span>ale </h3>
                                            <p>Upto 65%</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </a>
                            <div className="clearfix" />
                        </div>
                    </div></div>










            </div>


        </div>

    )
}

Home.propTypes = {

}

export default Home

