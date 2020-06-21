import React from "react";

function Header(props) {
    return <nav className="navbar navbar-light bg-light">
    <h2><i className="fa fa-users" aria-hidden="true"></i>{' '}
    Welcome to Employee Directory</h2>

    <form className="form-inline">
    <input 
    onChange={props.handleSearch}
    value={props.value}
    name="search"
    type="text"
    className="form-control"
    placeholder="Search For an Employee"
    id="search"
    />
    
    </form>
  </nav>
  
}

export default Header;