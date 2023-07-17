import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Registration from './Registration';

export default class DashLog extends Component {
    constructor() {
        super();
        this.state = {
            mode: "white"
        }
    }

    modeHandl = () => {
        if (this.state.mode === "blue") {
            document.body.style.backgroundColor = "White"
            document.body.style.color = "black"
            this.setState({ mode: "white" })
        } else if (this.state.mode === "white") {
            document.body.style.backgroundColor = "blue"
            document.body.style.color = "white"
            this.setState({ mode: "blue" })
        }
    }

    render() {
        let mystyle = {
            width: '90px',
            borderRadius: '10px',
            height: '40px'
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark " data-bs-theme="dark">
                    <div className="container-fluid">
                        <img style={mystyle} src={require("../image/Logo.jpg")} alt="Rays-logo" />
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/registration">Registration</Link>
                                </li>
                            </ul>

                            <div className="nav-item form-check form-switch form-check-reverse text-light" >
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onChange={this.modeHandl} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckReverse">Dark mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </div>
        )
    }
}
