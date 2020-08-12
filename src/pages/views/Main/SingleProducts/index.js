import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
const SingleProducts = ({ products }) => {
    let { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-lg-2">
                            <div className="side-box mb-4">
                                <h2>{product.name}</h2>
                                <p>
                                    {/* Price: <strong className="text-black">{product.price}</strong> <br /> */}
                                    Price:<p><span class="text-black">{product.price}</span> </p>
                                </p>


                                <form action="#">
                                    <div className="mb-4">

                                        <button className="btn btn-primary btn-block">Buy Now</button>
                                    </div>

                                </form>


                                <div className="color-quality">
                                    <div className="color-quality-right">
                                        <h5>Quality :</h5>
                                        <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                                            <option value="null">5 Qty</option>
                                            <option value="null">6 Qty</option>
                                            <option value="null">7 Qty</option>
                                            <option value="null">10 Qty</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="occasional">
                                    <h5>Types :</h5>
                                    <div className="colr ert">
                                        <label className="radio"><input type="radio" name="radio" defaultChecked /><i />Male</label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio" /><i />Female </label>
                                    </div>
                                    <div className="colr">
                                        <label className="radio"><input type="radio" name="radio" /><i />Other</label>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>

                                <ul className="social-nav model-3d-0 footer-social w3_agile_social single_page_w3ls">
                                    <li className="share">Share On : </li>
                                    <li><a href="#" className="facebook">
                                        <div className="front"><i className="fa fa-facebook" aria-hidden="true" /></div>
                                        <div className="back"><i className="fa fa-facebook" aria-hidden="true" /></div></a></li>
                                    <li><a href="#" className="twitter">
                                        <div className="front"><i className="fa fa-twitter" aria-hidden="true" /></div>
                                        <div className="back"><i className="fa fa-twitter" aria-hidden="true" /></div></a></li>
                                    <li><a href="#" className="instagram">
                                        <div className="front"><i className="fa fa-instagram" aria-hidden="true" /></div>
                                        <div className="back"><i className="fa fa-instagram" aria-hidden="true" /></div></a></li>
                                    <li><a href="#" className="pinterest">
                                        <div className="front"><i className="fa fa-linkedin" aria-hidden="true" /></div>
                                        <div className="back"><i className="fa fa-linkedin" aria-hidden="true" /></div></a></li>
                                </ul>



                            </div>

                        </div>
                        <div className="col-lg-8 pr-lg-5">
                            <div className=" mb-5">
                                <img src={product.image} alt="Image" className="img-fluid mb-54" />

                            </div>
                            <h2>Đồng hồ Rolex  </h2>
                            <p>Thiết kế hiện đại và trẻ trung phù hợp với những chàng trai năng động. JL-1-1654.2ZD thương hiệu Jacques Lemans nổi tiếng Áo, là phụ kiện thời trang không thể thiếu cho các bạn nam.</p>
                            <p>Thiết kế thể thao năng động, phong cách và khỏe khoắn
                            Size mặt 40mm, chất liệu cường lực chống va đập tốt nhất
                            Vỏ thép không gỉ nguyên bản 316L cao cấp mạ tĩnh điện PVD màu vàng, chống oxi hóa, chống ăn mòn
                            Độ chịu nước 10 ATM: đi mưa, rửa tay, tắm và đi bơi
                            Dây da chính hãng size 20mm, màu nâu vân nổi</p>
                        </div>
                    </div>
                </div>
            </div>


        </div >




    )
}

SingleProducts.propTypes = {

}

export default SingleProducts
