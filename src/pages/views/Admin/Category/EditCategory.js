import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const EditCategory = ({ category, onUpdateCate }) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let history = useHistory();
    let categories = category.find((data) => data.id == id);
    const [currentCategory, setCurrentCategory] = useState(categories);
    console.log(currentCategory);
    const onHandleSubmit = (e) => {
        //   e.preventDefault();
        onUpdateCate(currentCategory);
        history.push("/admin/category");
    };
    const onHandleChangeCate = (e) => {
        const { name, value } = e.target;
        setCurrentCategory({
            ...currentCategory,
            [name]: value,
        });
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50" >
                <div className="form-group">
                    <label htmlFor="CateName">Tên sản phẩm</label>
                    <input type="text" name="name" value={currentCategory.name} onChange={onHandleChangeCate} className="form-control" ref={register({ required: true })} />
                    {errors.name && <span>This field is required</span>}
                </div>


                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditCategory.propTypes = {
    category: PropTypes.array
}

export default EditCategory