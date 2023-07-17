import React, { Component } from 'react'
import './App.css';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import {  Routes, Route } from "react-router-dom";
import Registration from './component/Registration';
import AddCollege from './component1/AddCollege';
import AddMarksheet from './component1/AddMarksheet';
import AddStudent from './component1/AddStudent';
import AddRole from './component1/AddRole';
import UserList from './component2/UserList';
import RoleList from './component2/RoleList';
import StusentList from './component2/StusentList';
import MarksheetList from './component2/MarksheetList';
import CollegeList from './component2/CollegeList';
import Logout from './component/Logout';
import Alert from './component/Alert';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      alert: null
    }

  }

  alertMessage = (msg, type) => {
    this.setState({ alert: { type: type, message: msg } })

    setTimeout(() => {
    }, 2500);
  }
  render() {
    console.log(this.state.alert)
    return (
      <div >
        
          <Dashboard />
          <Alert alert={this.state.alert} />
          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/adduser' element={<Registration />} />
            <Route path='/addcollege' element={<AddCollege />} />
            <Route path='/addmarksheet' element={<AddMarksheet />} />
            <Route path='/addstudent' element={<AddStudent />} />
            <Route path='/addrole' element={<AddRole />} />

            <Route path='/userlist' element={<UserList />} />
            <Route path='/collegelist' element={<CollegeList />} />
            <Route path='/marksheetlist' element={<MarksheetList />} />
            <Route path='/studentlist' element={<StusentList />} />
            <Route path='/rolelist' element={<RoleList />} />
            <Route path='/logout' element={<Logout />} />

            <Route path='/adduser/:id' element={<Registration />} />
            <Route path='/addcollege/:id' element={<AddCollege />} />
            <Route path='/addmarksheet/:id' element={<AddMarksheet />} />
            <Route path='/addstudent/:id' element={<AddStudent />} />
            <Route path='/addrole/:id' element={<AddRole />} />

            {/* <Route path="/addcollege/:id" element={<AddCollege props={{ ...this.props }} />} /> */}

          </Routes>

      </div>
    )
  }
}

// const withRouter= (WrappedComponent) => props => {
//   const param = useParams();
// return  <WrappedComponent param={param} {...props} />

// }
/* <Link 
  key={id} 
  to={{
    pathname: this.props.match.url + '/' + foo,
    search: '?foo=' + foo
  }} /> */
