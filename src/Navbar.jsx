import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar({productReducer:{cartItems}}) {
  return (
    <div className='p-4'>
         <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><img src="https://edupoly.in/common/assets/edupoly-logo-light.png" width="100px" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li> */}
                        <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/price">Price</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Courses
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="courses/frontend">Front-End with ReactJS</Link></li>
                                <li><Link className="dropdown-item" to="/">Front-End with Angular</Link></li>
                                <li><Link className="dropdown-item" to="/">FullStack with MERN</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/countries">Countries</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Form Details
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="formdetails/registration">Students</Link></li>
                                <li><Link className="dropdown-item" to="formdetails/employee">Employee</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Redux
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/counter">Counter</Link></li>
                                <li><Link className="dropdown-item" to="/todolist">Todolist</Link></li>
                                <li><Link className="dropdown-item" to="/product">Products</Link></li>
                            </ul>
                        </li>
                    </ul>
                    
                    <form className="d-flex" role="search">
                        <Link to="/cart"><button className="btn btn-outline-success me-2" type="submit">Cart<span className='badge text-bg-warning'>{cartItems.length}</span></button></Link>
                    </form>
                    </div>
                </div>
          </nav>
    </div>

   
  )
}

export default connect(store=>store)(Navbar)
