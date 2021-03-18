import React from 'react'
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/admin/crud/category-tag">
                                        Create Category
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="/admin/crud/category-tag">
                                        Create Tag
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="/admin/crud/blog">Create Blog</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link to="/admin/crud/blogs">
                                        Update/Delete Blog
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        Update Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">right</div>
                    </div>
                </div>
    )
}

export default Category
