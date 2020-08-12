import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import firebase from '../../../../firebase'


const AddProduct = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onHandleSubmit = (data) => {

        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,

        }
        console.log(newData);
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData)
        history.push("/admin/products");


    };

    return (
        <div class="content-wrapper">
            <section class="content">
                <h3 className="card-title">Thêm sản phẩm</h3>
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="inputProductName"

                            ref={register({ required: true })}
                            aria-describedby="nameHelp"
                        />
                        <small id="nameHelp" className="form-text text-danger">{errors.name && <span>This field is required</span>}</small>

                        <label htmlFor="inputProductImage">Ảnh sản phẩm</label>
                        <input
                            type="text"
                            name="image"
                            className="form-control"
                            id="inputProductImage"

                            ref={register({ required: true })}
                            aria-describedby="imageHelp"
                        />
                        <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>

                    </div>
                    <div className="form-group">
                        <label htmlFor="inputProductPrice">Giá sản phẩm</label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            id="inputProductPrice"

                            ref={register({ required: true })}
                            aria-describedby="priceHelp"
                        />
                        <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>

                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
          </button>
                </form>
            </section>
        </div>
    );
}

export default AddProduct;