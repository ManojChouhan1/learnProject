import React from 'react'
import BaseCntl from '../component/BaseCntl';

export default class AddStudent extends BaseCntl {
  constructor(props) {
    super(props);

    this.state = {
      inputError: {
        id: '',
        firstName: '',
        lastName: '',
        collegeId: '',
        mobileNo: '',
        email: '',
        error: '',
        message: ''
      },

      id: '',
      firstName: '',
      lastName: '',
      collegeId: '',
      mobileNo: '',
      email: '',
    };
  }
  render() {
    return (
      <div>
        <h3 align='center'>AddStudent</h3>
        <div align="center" className='t1'>
          <table align='center'>
            <tbody className='tb1'>
              <tr>
                <td>
                  <input type="number" name='id' id='id' onChange={(e) => this.setState({ id: e.target.value })}
                    value={this.state.id} hidden />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="fname">First name</label> <br />
                  <input type="text" name='name' id='fname' onChange={(e) => this.setState({ firstName: e.target.value })}
                    value={this.state.firstName} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="lname">Last name</label> <br />
                  <input type="text" name='laname' id='lname' onChange={(e) => this.setState({ lastName: e.target.value })}
                    value={this.state.lastName} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="log">College id</label> <br />
                  <input type="text" id='log' onChange={(e) => this.setState({ collegeId: e.target.value })}
                    value={this.state.collegeId} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="pass">Email id</label> <br />
                  <input type="password" id='pass' onChange={(e) => this.setState({ email: e.target.value })}
                    value={this.state.email} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="role">Mobile Number</label> <br />
                  {/* <select name="" id="">
                <option value="Name">Click Name for role id<input type="text" id='role'  /></option>
              </select> */}
                  <input type="text" id='role' onChange={(e) => this.setState({ mobileNo: e.target.value })}
                    value={this.state.mobileNo} required />
                </td>
              </tr>

              <tr>
                <td>
                  <button className='btn btn-primary' onClick={(event) => this.submit("Student","save")}> Submit</button>
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
