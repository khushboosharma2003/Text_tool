// import React from 'react'
import PropTypes from 'prop-types'
import React from "react";
import {Link} from "react-router-dom";

function Navbar(props)
{
    return(
        <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to = '/'>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to = "/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      
      </ul>
      <div className={`form-check form-switch text-${props.mode ==='light'?'dark' : 'light' }`}>
  <input className="form-check-input " type="checkbox" onClick={props.chngMode}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">DARK MODE </label>
</div>
    </div>
    </div>
</nav>

        </>
    )
}

// prop types

Navbar.propTypes ={
        title : PropTypes.string
}

//default props
Navbar.defaultProps={
        title :"kukur"
}
// is required ... now we have to pass title that is compulsion

// Navbar.propTypes ={
//     title : PropTypes.string.isRequired
// }
export default Navbar;

