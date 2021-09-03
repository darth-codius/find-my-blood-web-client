import React from 'react'

export default function RequestRow({ request }) {
    return (
        <tr className="table-danger">
            <th scope="row"></th>
            <td>{request.requestingHospital}</td>
            <td>{request.blood}</td>
            <td>{request.requestedUnits}</td>
            <td>{request.status}</td>
        </tr>

    )
}
