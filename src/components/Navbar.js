import React from 'react'
import  '../styles/Navbar.css'

import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar sticky-top navbar-dark bg-success navbar" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Posts">Your Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/Posts">Posts <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle active" to="/Posts" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/DataStructure">Data Structure</Link>   
                        <Link className="dropdown-item" to="/Computer">Computer Network</Link>
                        <Link className="dropdown-item" to="/javascript">Javascript</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="/Algorithm">Algorithm</Link>
                        <Link className="dropdown-item" to="/AppDevelopment">App Development</Link>
             
        
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>


   </>

  )
}

export default Navbar