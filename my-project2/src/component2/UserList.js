import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Link} from 'react-router-dom';

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      firstName: '',
      lastName: '',
      loginId: '',
      password: '',
      roleId: '',
      id: ''
    }
  }

  update() {
    let url = "http://api.sunilos.com:9080/ORSP10/User/search";
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data })
      // console.error(this.state.list)
    }
    )
  }
  componentDidMount() {
    this.update();
  }
   delete(key){
    let url = "http://api.sunilos.com:9080/ORSP10/User/delete/"+ key;
    axios.get(url).then((res) => {
      this.update();
      // console.error(this.state.list)
    })
   }
  render() {
    return (
      <div>
        <h3>UserList</h3>
        <Table striped bordered hover >
          <thead>
            <tr >
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email id's</th>
              <th>Role id's</th>
              <th colSpan={2} >Operation</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.loginId}</td>
                    <td>{item.roleId}</td>
                    <td> <Link to={"/adduser/" + item.id} ><button>Edit</button></Link></td>

{/* 
                    <Link
                      // key={id}
                      to={{
                        pathname: this.props.match.url + '/' + item.id,
                        search: '?item.id=' + item.id
                      }} /> */}

                    <td><button type='button' onClick={() => this.delete(item.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
