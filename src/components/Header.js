import React from "react";

function Header(props) {
    return <nav className="navbar navbar-light bg-light">
    <h2><i className="fa fa-users" aria-hidden="true"></i>{' '}
    Welcome to Employee Directory</h2>

    <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
  
}

export default Header;