import React from 'react'
import PropTypes from 'prop-types'

const Blog = ({ post }) => {
    const show = post.map((value, i) =>
        <div className="col-lg-4 mb-5">
            <div className="news-entry-item">
                <div>
                    <a href="#" className="thumbnail">
                        <img src={value.image} height="300px" alt="Image" className="img-fluid" />

                    </a>
                    <h3 className="mb-0"><a href="#">{value.title}</a></h3>
                    <div className="mb-3">

                    </div>
                    <p>{value.content}</p>
                </div>
            </div>
        </div>
    )





    return (
        <div>
            <div className="site-section pb-0">
                <div className="container">
                    <div className="row">

                        {show}
                    </div>
                </div>
            </div>
        </div>

    )
}

Blog.propTypes = {

}

export default Blog
