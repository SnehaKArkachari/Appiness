import React, { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap';

class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleSubmit = (e) => {

        if ((this.state.username === 'hruday@gmail.com') && (this.state.password === 'hruday123')) {
            this.setState({

            })
            window.location.href = "/Dashboard"
        }

        else {
            this.setState({
                error: 'Incorrect Username or Password'
            })

            return false;
        }

        console.log('username data', this.state.username)
        console.log('username data', this.state.password)

    }

    changeFunction = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {

        return (
            <div>

                <div className="container-fluid"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "azure", height: "100vh"
                    }}>

                    <div className="row">
                        <Card style={{ width: "60rem", backgroundColor: "#def2f1", padding: "3rem" }}>

                            <Card.Title style={{ fontSize: "60px", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>Login</Card.Title>
                            <br />
                            <Form>
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-4 ">
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "22px" }}>User Name</Form.Label>
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" className="form-control" name="username" placeholder="Enter username" onChange={this.changeFunction}
                                            value={this.state.username} required onKeyPress={event => event.key === "Enter" && this.handleSubmit()} />
                                    </div>

                                </div>

                                <br />



                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-4 ">
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "22px" }}>Password</Form.Label>
                                    </div>
                                    <div className="col-md-4">
                                        <input value={this.state.password} name="password" onChange={this.changeFunction} type="password"
                                            className="form-control" placeholder="Enter password" required onKeyPress={event => event.key === "Enter" && this.handleSubmit()} />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-6"></div>
                                    {this.state.error ?
                                        <div style={{ color: "red", fontWeight: "bold", marginLeft: "14px" }}>
                                            {this.state.error}
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                                <br />
                                <br />
                                <center>
                                    <Button variant="info" onClick={this.handleSubmit}
                                        style={{ backgroundColor: "rgb(144, 192, 192)", color: "Black", border: "2px solid #17a2b8" }}>Login</Button>
                                </center>
                            </Form>
                        </Card>

                    </div>

                </div>
            </div >
        )
    }
}
export default Login
