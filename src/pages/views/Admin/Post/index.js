import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const PostManager = ({ post, onRemovePost }) => {
    // console.log(posts);
    const removeHandlePost = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                onRemovePost(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <Link to="/admin/addpost" className="btn btn-outline-primary">Thêm bài viết</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Short</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {post.map(({ id, title, image, short }, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{title}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{short}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandlePost(id)}>Xóa</button>
                                            <Link className='btn btn-primary ml-2' to={`/admin/post/edit/${id}`}>Sửa</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

PostManager.propTypes = {

}

export default PostManager