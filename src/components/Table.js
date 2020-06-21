import React from "react";

function Table(props) {
    return <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">ID# <i class="fa fa-sort" aria-hidden="true"></i></th>
                    <th scope="col">Name <i class="fa fa-sort" aria-hidden="true"></i></th>
                    <th scope="col">Email <i class="fa fa-sort" aria-hidden="true"></i></th>
                    <th scope="col">Phone <i class="fa fa-sort" aria-hidden="true"></i></th>
                </tr>
            </thead>
            <tbody>
        
                {props.children}

            </tbody>
        </table>
}

export default Table;