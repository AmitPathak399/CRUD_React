import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Cruddata() {
    return (
        <div>
            <div className='row'>
                <div className='container'>
                    <div className='card'>
                        <div className="card-title">
                            <h1>CURD APP</h1>
                        </div>
                        <div className='card-body'>
                            <Link to="/empcreate" className='btn btn-success mb-3'>Add New</Link>
                            <table className='table table-bordered'>
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone Number</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Amit</td>
                                        <td>ak@gmail.com</td>
                                        <td>8431956656</td>
                                        <td>
                                            <button className="btn btn-success m-2">Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


