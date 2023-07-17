import React from 'react'
import BaseCntl from '../component/BaseCntl';
// import withRouter from '../component2/withRouter';

class AddCollege extends BaseCntl {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        name: '',
        address: '',
        phoneNo: '',
        city: '',
        state: '',
        message: '',
        error: ''
      },

      id: '',
      name: '',
      address: '',
      phoneNo: '',
      city: '',
      state: ''
    };
  }
  render() {
    console.log(this.props)
    // console.log(history)
    return (
      <div>
        <h3 align='center'>AddCollege</h3>
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
                <td> <label htmlFor="lname">Address</label> <br />
                  <input type="text" name='address' id='lname' onChange={(e) => this.setState({ address: e.target.value })}
                    value={this.state.address} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="log">Phone number</label> <br />
                  <input type="number" id='log' onChange={(e) => this.setState({ phoneNo: e.target.value })}
                    value={this.state.phoneNo} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="pass">City</label> <br />
                  <input type="text" name='city' id='pass' onChange={(e) => this.setState({ city: e.target.value })}
                    value={this.state.city} required />
                </td>
              </tr>

              <tr>
                <td> <label htmlFor="role">State</label> <br />
                  <input type="text" name='state' id='role' onChange={(e) => this.setState({ state: e.target.value })}
                    value={this.state.state} required />
                </td>
              </tr>

              <tr>
                <td>
                  <button className='btn btn-primary' onClick={() => this.submit("College","save")}> Submit</button>
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
export default AddCollege;