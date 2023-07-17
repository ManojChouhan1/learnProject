// import React, { Component } from 'react'
import axios from 'axios';
import BaseCntl from './BaseCntl';
import "./form.css"

export default class Registration extends BaseCntl {
  constructor(props) {
    super(props);

    this.state = {
      inputError: {
        id: '',
        firstName: '',
        lastName: '',
        loginId: '',
        password: '',
        roleId: '',
        message: '',
        error: ''
      },

      id: '',
      firstName: '',
      lastName: '',
      password: '',
      loginId: '',
      roleId: '',
      path: window.location.pathname.split("/")[2]
    };
  }
  componentDidMount() {
    if (this.state.path) {
      this.get();
    }
  }
  get() {
    const url = "http://api.sunilos.com:9080/ORSP10/Auth/get/" + this.state.path;
    axios.get(url).then((response) => {
      // console.log(response)
      this.setState({

        id: response.data.result.data.id,
        firstName: response.data.result.data.firstName,
        lastName: response.data.result.data.lastName,
        password: response.data.result.data.password,
        loginId: response.data.result.data.loginId,
        roleId: response.data.result.data.roleId,
      })
    })
  }

  // change=(e)=>{
  //   let key = e.target.name;
  //   let value = e.target.value
  //   this.setState([key] : value)
  // }

  render() {
    // console.log(this.state)
    return (
      <div >
        <div align='center'>

          {
            !localStorage.getItem("Name") ? <h3>Registration</h3>
              :
              this.state.path ? <h3>Edit user</h3> : <h3>Add user</h3>

          }

        </div>
        <div align="center" className='t1'>
          <p style={{ color: "red", margin: "10px" }}>{this.state.message}</p>
          <table align='center'>
            <tbody className='tb1'>
              <tr>
                <td>
                  <input type="password" name='id' id='id' onChange={(e) => this.setState({ id: e.target.value })}
                    value={this.state.id} hidden />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="fname">First name</label> <br />
                  <input type="text" name='name' id='fname' onChange={(e) => this.setState({ firstName: e.target.value })}
                    value={this.state.firstName} required />
                </td>
                <td style={{ color: "red", margin: "10px" }}>{this.state.inputError.firstName}</td>

              </tr>

              <tr>
                <td> <label htmlFor="lname">Last name</label> <br />
                  <input type="text" name='laname' id='lname' onChange={(e) => this.setState({ lastName: e.target.value })}
                    value={this.state.lastName} required />
                </td>
                <td style={{ color: "red", margin: "10px" }}>{this.state.inputError.lastName}</td>
              </tr>

              <tr>
                <td> <label htmlFor="log">Login id</label> <br />
                  <input type="text" id='log' onChange={(e) => this.setState({ loginId: e.target.value })}
                    value={this.state.loginId} required />
                </td>
                <td style={{ color: "red", margin: "10px" }}>{this.state.inputError.loginId}</td>
              </tr>

              <tr>
                <td> <label htmlFor="pass">Password</label> <br />
                  <input type="password" id='pass' onChange={(e) => this.setState({ password: e.target.value })}
                    value={this.state.password} required />
                </td>
                <td style={{ color: "red", margin: "10px" }}>{this.state.epassword}</td>
              </tr>

              <tr>
                <td> <label htmlFor="role">Role id</label> <br />
                  {/* <select name="" id="">
                <option value="Name">Click Name for role id<input type="text" id='role'  /></option>
              </select> */}
                  <input type="text" id='role' onChange={(e) => this.setState({ roleId: e.target.value })}
                    value={this.state.roleId} required />
                </td>
                <td style={{ color: "red", margin: "10px" }}>{this.state.inputError.roleId}</td>
              </tr>

              <tr>
                <td>
                  <button className='btn btn-primary' onClick={() => this.submit("User", "save")}> Submit</button>
                </td>
                <td>
                  <button className='btn btn-primary btn1' onClick={this.reset}>Reset</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    )
  }
}