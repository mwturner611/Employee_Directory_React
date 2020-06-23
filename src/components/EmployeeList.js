import React, { Component } from 'react'
import PropTypes from 'prop-types'


// create an individual row on the employee table for each employee
export class EmployeeList extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.employee.id}</th>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.email}</td>
                <td>{this.props.employee.phone}</td>
            </tr>
        )
    }
}

// proptypes
EmployeeList.propTypes = {
    employee: PropTypes.object.isRequired
}


export default EmployeeList;
