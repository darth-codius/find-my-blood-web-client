import React from 'react'

export default function RequestRow({ request }) {
    return (
        <tr className="table-danger">
            <td>{request.requestingHospital}</td>
            <td>{request.blood}</td>
            <td>{request.requestedUnits} Units</td>
            <td><img src="/img/accepted.svg" alt="" /></td>
        </tr>

    )
}
