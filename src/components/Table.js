import React from "react";

function Table(props) {
    return <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">ID#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
        
                {props.children}

            </tbody>
        </table>
}

export default Table;