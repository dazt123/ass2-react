import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const EditProduct = ({ products, onUpdate }) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let history = useHistory();
    let product = products.find((data) => data.id == id);
    const [currentProduct, setCurrentProduct] = useState(product);
    console.log(currentProduct);
    const onHandleSubmit = (e) => {
        //   e.preventDefault();
        onUpdate(currentProduct);
        history.push("/admin/products");
    };
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value,
        });
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Ảnh sản phẩm</label>
                    <input type="text" name="image" value={currentProduct.image} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.image && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" value={currentProduct.price} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.price && <span>This field is required</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct