import React from 'react'

export default function RequestRow(props) {
    return (
        <tr class="table-danger">
            <th scope="row"></th>
            <td>{props.requestingHospital}</td>
            <td>{props.blood}</td>
            <td>{props.requestedUnits}</td>
            <td>{props.status}</td>
        </tr>

    )
}
