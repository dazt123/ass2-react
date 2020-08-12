import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'


const EditPost = ({ post, onUpdatePost }) => {
    let { id } = useParams();
    let history = useHistory();
    let posts = post.find((data) => data.id == id);
    const [currentPost, setCurrentPost] = useState(posts);
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (e) => {
        Swal.fire(
            'Updated!',
            'Your file has been updated.',
            'success'
        )
        onUpdatePost(currentPost);
        history.push("/admin/post");
    };
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentPost({
            ...currentPost,
            [name]: value,
        });
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-100" >
                <div className="form-group">
                    <label htmlFor="productName">Tiêu đề</label>
                    <input type="text" name="title" defaultValue={currentPost.title} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.title && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả ngắn</label>
                    <textarea type="text" name="short" defaultValue={currentPost.short} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.short_desc && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Mô tả dài</label>
                    <textarea type="text" name="content" defaultValue={currentPost.content} onChange={onHandleChange} className="form-control" ref={register({ required: true })} />
                    {errors.desc_post && <span style={{ color: "red" }}>Tên sản phẩm không được để trống</span>}
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditPost.propTypes = {

}

export default EditPost