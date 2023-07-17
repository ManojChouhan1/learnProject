import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios';
import App from '../App';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginId: "",
      password: "",
      inputError: {
        loginId: "",
        password: ""
      },
    };
  }

  reset() {
    this.setState({
      loginId: "",
      password: "",
      message: "",
      inputError: ""
    })

  }
  login(name, method) {
    console.log(name+"  "+method)
    // event.preventDefault();
    this.setState({
      loginId: "", password: "", message: '',
      inputError: ''
    })
    // const url = "http://api.sunilos.com:9080/ORSP10/Auth/login"
    let url = `http://api.sunilos.com:9080/ORSP10/${name}/${method}`;

    axios.post(url, this.state).then((response) => {
      console.log(response.data.result.message)
      if (response.data.result.inputerror) {
        this.setState({ inputError: response.data.result.inputerror })
      } else if (response.data.result.message) {
        this.setState({ message: response.data.result.message })
        // this.props.showAlert(response.data.result.message, "info")
      }
      else if (response.data.success) {
        localStorage.setItem("Name", response.data.result.data.name)
        console.log("login is done")
        // window.location.href="/"
        // sessionStorage.setItem("tokan", "Session time out please login again")
        // localStorage.getItem("path") !== null ? window.location.pathname = localStorage.getItem("path") : window.location.href = "/"
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      }
      //  else {
      //   console.log("Daya kuch to gadbad hai")
      // }
    }).catch((err) => { this.setState({ error: err.name + " " + err.message }) })
  }


  render() {
    // console.log(" name ")
    return (
      <div >
        <h3 align='center'>LOGIN FORM</h3>
        <p style={{ color: "red" }}>{this.state.error} {localStorage.getItem("logmsg")}</p>

        <div align="center" className='t1'>
          <p style={{ color: "red" }}>{this.state.message}</p>
          <table align='center'>
            <tbody className='tb1'>
              <tr>
                <td> <label htmlFor="fname">Login id</label> <br />
                  <input type="text" name='name' id='fname' onChange={(e) => this.setState({ loginId: e.target.value })}
                    value={this.state.loginId} required />
                  <p style={{ color: "red", margin: "10px" }}>{this.state.inputError.loginId}</p>

                </td>
              </tr>
              <tr>
                <td> <label htmlFor="lname">Password</label> <br />
                  <input type="text" name='laname' id='lname' onChange={(e) => this.setState({ password: e.target.value })}
                    value={this.state.password} required />
                  <p style={{ color: "red", margin: "10px" }}>{this.state.inputError.password}</p>

                </td>
              </tr>
              <tr>
                <td>
                  <button className='btn btn-primary' onClick={() => this.login("Auth", "login")}> Submit</button>
                </td>
                <td>
                  <button className='btn btn-primary btn1' onClick={this.reset}>Reset</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div >
    )
  }
}
