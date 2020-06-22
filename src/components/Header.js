import React from "react";

function Header(props) {
    return <nav className="navbar navbar-light bg-light">
    <h2><i className="fa fa-users" aria-hidden="true"></i>{' '}
    Welcome to Employee Directory</h2>

    <form className="form-inline">
    <input 
    style={{margin:'5px'}}
    onChange={props.handleSearch}
    value={props.value}
    name="search"
    type="text"
    className="form-control"
    placeholder="Search For an Employee"
    id="search"
    />
    <button 
    className="btn btn-outline-success my-2 my-sm-0" 
    type="submit"
    onClick={props.handleSubmit} 
    style={{ padding:'5px',margin:'5px' }}>
      Search
      </button>
    
    </form>
  </nav>
  
}

export default Header;