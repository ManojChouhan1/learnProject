import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default class CollegeList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      "address": "",
      "city": "",
      "name": "",
      "state": "",
      "phoneNo": "",
      "id": ''
    }
  }
   update() {
    const url = "http://api.sunilos.com:9080/ORSP10/College/search";
     axios.post(url, this.state).then((responce) => {
      this.setState({ list: responce.data.result.data })
    })
  }
  componentDidMount() {
    this.update()
  }
  render() {
    return (
      <div>
        <h3>CollegeList</h3>
        <Table id='ta' striped bordered hover >
          <thead>
            <tr>
              <td>#</td>
              <td>College Id's</td>
              <td>College Name</td>
              <td>Phone Number</td>
              <td>Address</td>
              <td>City</td>
              <td>State</td>
              <td colSpan={2}>Operation</td>
            </tr>
          </thead>
          <tbody>
            {this.state.list &&
              this.state.list.map((item, i) => {
                return (
                  <tr key={i}>
                    <td > {i + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phoneNo}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td><Link key={item.id}  to={"/addcollege/" + item.id}  >Edit </Link></td>
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


/* <Link 

to={{
  pathname: this.props.match.url + '/' + foo,
  search: '?foo=' + foo
}} /> */