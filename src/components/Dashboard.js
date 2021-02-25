import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import data from '../data.json';
import './style.css';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <center> <h1>Employee Details</h1><br /></center>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr style={{ backgroundColor: "rgb(144, 192, 192)" }}>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.user.map((emp) => {
                            return (
                                <>
                                    <tr style={{ border: "1px solid black" }}>
                                        <td style={{ border: "1px solid black" }}>
                                            {emp.id}
                                        </td>
                                        <td style={{ border: "1px solid black" }}>
                                            {emp.name}
                                        </td>
                                        <td style={{ border: "1px solid black" }}>
                                            {emp.age}
                                        </td>
                                        <td style={{ border: "1px solid black" }}>
                                            {emp.gender}
                                        </td>
                                        <td style={{ border: "1px solid black" }}>
                                            {emp.email}
                                        </td>
                                        <td style={{ border: "1px solid black" }}>
                                            {emp.phoneNo}
                                        </td>
                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Dashboard