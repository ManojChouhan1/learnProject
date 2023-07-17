import React from 'react'
import BaseCntl from '../component/BaseCntl';

export default class AddRole extends BaseCntl {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        id: '',
        name: '',
        discription: '',
        error: '',
        message: ''
      },

      id: '',
      name: '',
      discription: '',
    };
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3 align="center" >AddRole</h3>
        <div align="center" className='t1'>
          <table align='center'>
            <tbody className='tb1'>

              <tr>
                <td> <label htmlFor="fname">Name</label> <br />
                  <input type="text" name='name' id='fname' onChange={(e) => this.setState({ name: e.target.value })}
                    value={this.state.name} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="lname">Discription</label> <br />
                  <input type="text" name='discriptions' id='lname' onChange={(e) => this.setState({ discription: e.target.value })}
                    value={this.state.discription} required />
                </td>
              </tr>

              <tr>
                <td>
                  <button className='btn btn-primary' onClick={() => this.login("Role","save")}> Submit</button>
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
