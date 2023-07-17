import React from 'react'
import BaseCntl from '../component/BaseCntl';

export default class AddMarksheet extends BaseCntl {
  constructor(props) {
    super(props);
    this.state = {

      inputError: {
        id: '',
        rollNo: '',
        name: '',
        physics: '',
        chemistry: '',
        maths: '',
        studentId: '',
        message: '',
        error: ''
      },

      id: '',
      rollNo: '',
      name: '',
      physics: '',
      chemistry: '',
      maths: '',
      studentId: ''
    }
  }

  render() {
    return (
      <div>
        <h3 align='center' >AddMarksheet</h3>
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
                <td> <label htmlFor="fname">Name</label> <br />
                  <input type="text" name='name' id='fname' onChange={(e) => this.setState({ name: e.target.value })}
                    value={this.state.name} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="lname">Student id</label> <br />
                  <input type="number" name='student' id='lname' onChange={(e) => this.setState({ studentId: e.target.value })}
                    value={this.state.studentId} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="log">Roll number</label> <br />
                  <input type="number" id='log' onChange={(e) => this.setState({ rollNo: e.target.value })}
                    value={this.state.rollNo} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="pass">Physics</label> <br />
                  <input type="number" name='physics' id='pass' onChange={(e) => this.setState({ physics: e.target.value })}
                    value={this.state.physics} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="pass">Mathemetics</label> <br />
                  <input type="number" name='math' id='pass' onChange={(e) => this.setState({ maths: e.target.value })}
                    value={this.state.maths} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="role">Chamistry</label> <br />
                  {/* <select name="" id="">
                <option value="Name">Click Name for role id<input type="text" id='role'  /></option>
              </select> */}
                  <input type="number" name='chemistry' id='role' onChange={(e) => this.setState({ chemistry: e.target.value })}
                    value={this.state.chemistry} required />
                </td>
              </tr>

              <tr>
                <td>
                  <button className='btn btn-primary' onClick={() => this.submit("Marksheet","save")}> Submit</button>
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
