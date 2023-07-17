import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./form.css"
import { useNavigate, useParams } from 'react-router-dom';

export default function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [rollId, setRollId] = useState('');
  const [id, setId] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState(false);
  const [priload, setPriload] = useState([]);

  const navigate = useNavigate();

  const params = useParams();
  const list = () => {
    axios.get("http://localhost:5000/roll", {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}` }
    }).then((res) => {
      setPriload(res.data)
    })
  }
  const get = () => {
    axios.get("http://localhost:5000/register/" + params.id, {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}` }
    }).then((res) => {
      console.log(res)
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setLoginId(res.data.loginId)
      setPassword(res.data.password)
      setRollId(res.data.rollId)
    })
  }
  useEffect(() => {
    if (params.id) {
      get()
    }
    list();
  }, [])

  function submit() {
    if (firstName && lastName && loginId && password && rollId) {
      if (params.id) {
        axios.put(`http://localhost:5000/register/${params.id}`, { firstName, lastName, loginId, password, rollId }, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}` }
        }).then((resp) => {
          setResult("Register successful")
          setTimeout(() => {
            navigate("/userlist")
          }, 2500);
        }).catch((err) => {
          console.log("register err :", err)
        })
      } else {
        axios.post("http://localhost:5000/register", { firstName, lastName, loginId, password, rollId }, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}` }
        }).then((resp) => {
          if (resp.data.result) {
            setResult(resp.data.result)
          } else {
            setResult("Register successful")
          }
          // navigate("/login");
        }).catch((err) => {
          console.log("register err :", err)
        })
      }
    } else {
      setMsg("must not be empty");
      setError(true);
    }

  }
  function reset() {
    console.log("reset register ")
    setId('');
    setFirstName('');
    setLastName('');
    setLoginId('');
    setPassword('');
    setRollId('');
    setMsg('');
    setResult('');
  }
  function priloader(e) {

    console.log("on mouse")
  }

  // change=(e)=>{
  //   let key = e.target.name;
  //   let value = e.target.value
  //   this.setState([key] : value)
  // }

  const mystyle = { color: "red", margin: "10px" };

  const auth = localStorage.getItem("user")
  return (
    <div >
      <div align='center'>
        <h3>
          {
            auth ?
              !params.id ? "Add user" : "Edit user" : "Registration user"
          }
        </h3>
      </div>
      <div align="center" className='t1'>
        <p style={mystyle}>{result}</p>
        <table align='center'>
          <tbody className='tb1'>
            <tr>
              <td>
                <input type="password" name='id' id='id' onChange={(e) => setId(e.target.value)}
                  value={id} hidden />
              </td>
            </tr>

            <tr>
              <td> <label htmlFor="fname">First name</label> <br />
                <input type="text" name='name' id='fname' onChange={(e) => setFirstName(e.target.value)}
                  value={firstName} required />
              </td>
              {!firstName && error && <td style={mystyle}>{msg}</td>}

            </tr>

            <tr>
              <td> <label htmlFor="lname">Last name</label> <br />
                <input type="text" name='laname' id='lname' onChange={(e) => setLastName(e.target.value)}
                  value={lastName} required />
              </td>
              {!lastName && error && <td style={mystyle}>{msg}</td>}
            </tr>

            <tr>
              <td> <label htmlFor="log">Login id</label> <br />
                <input type="text" id='log' onChange={(e) => setLoginId(e.target.value)}
                  value={loginId} required />
              </td>
              {!loginId && error && <td style={mystyle}>{msg}</td>}
            </tr>

            <tr>
              <td> <label htmlFor="pass">Password</label> <br />
                <input type="password" id='pass' onChange={(e) => setPassword(e.target.value)}
                  value={password} required />
              </td>
              {!password && error && <td style={mystyle}>{msg}</td>}
            </tr>

            <tr>
              <td> <label htmlFor="role">Role id</label> <br />
                <select className='select' name="" id="" onClick={(e) => { setRollId(e.target.value) }}>
                  <option value={rollId}>Select Name</option>
                  {
                    priload.map((ele, i) => {
                      return <option key={i} value={ele._id}>{ele.name}</option>
                    })
                  }
                </select>
                {/* <input type="text" id='role'
                  // onChange={(e) => setRollId(e.target.value)}
                  value={rollId} required /> */}
              </td>
              {!rollId && error && <td style={mystyle}>{msg}</td>}
            </tr>

            <tr>
              <td>
                <button className='btn btn-primary' onClick={() => submit()}> Submit</button>
              </td>
              <td>
                <button className='btn btn-primary btn1' onClick={() => reset()}>Reset</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )

}