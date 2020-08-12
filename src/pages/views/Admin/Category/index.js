import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import makeRequest from '../../../../api/axiosHttp';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

const CategoryManager = ({ category, onRemoveCate }) => {






    const removeHandleCate = (id) => {

        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                onRemoveCate(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        // onRemove(id);
        console.log(id)

    }



    return (
        <div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">

                    <Link to="/admin/add-category" className="btn btn-outline-primary"> Thêm danh mục</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>

                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map(({ id, name }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td>
                                            <Link className='btn btn-outline-primary' to={`/admin/category/edit/${id}`}>Sửa</Link>
                                            <button className="btn btn-outline-danger" onClick={() => removeHandleCate(id)}>Xóa</button>
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

CategoryManager.propTypes = {

}

export default CategoryManager