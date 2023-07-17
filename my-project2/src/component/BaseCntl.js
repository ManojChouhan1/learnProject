import { Component } from 'react'
// import axios from 'axios';

export default class BaseCntl extends Component {
   

    // get() {
    //     const url = "http://api.sunilos.com:9080/ORSP10/Role/get/" + this.props.params.id;
    //     axios.get(url).then((response) => {
    //         this.setState({
    //             name: response.data.result.data.name,
    //             discription: response.data.result.data.discription,
    //             id: response.data.result.data.id
    //         })
    //     })
    // }
    /* login done  */
   
    /*  resistration  */
    // submit(name, method) {
    //     console.log(name + " " + method)
    //     console.log("resistration")
    //     // event.preventDefault();
    //     this.setState({
    //         epassword: '',
    //         message: '',
    //         inputError: ''
    //     })
    //     let url = `http://api.sunilos.com:9080/ORSP10/${name}/${method}`;
    //     axios.post(url, this.state).then((response) => {
    //         console.log(response.data);


    //         if (response.data.result.inputerror && this.state.password === "") {
    //             this.setState({ inputError: response.data.result.inputerror, epassword: 'must not be empty' })
    //         } else if (response.data.result.inputerror) {
    //             this.setState({ inputError: response.data.result.inputerror })
    //         } else if (this.state.password === "") {
    //             this.setState({ epassword: 'must not be empty' })
    //         } else if (response.data.result.message) {
    //             // //     this.props.showAlert("Role id incorrect", "danger")
    //             this.setState({ message: "loginId already exists" })
    //         } else if (response.data.success) {
    //             //     this.props.showAlert("loginId already exists", "info")
    //             this.setState({ message: " save successfully!!!" })


    //         } else {
    //             // this.props.showAlert("UserId save successfully!!!", "success")
    //             this.setState({ message: " Role id incorrect" })

    //         }
    //     }).catch((err) => {
    //         console.log(err.name + " " + err.message + " " + err.code)
    //     })
    // }

    //  changeState =(event)=>{

    //     // this.setState({firstName:event.target.value})
    //     // this.state.form[event.target.name]=event.target.value;
    //     var data = this.state['form'];
    //     data = event.target.value ;
    //     this.setState(data)
    //     this.setState({})
    // }

    // changeState = (e) => {
    //     var data={};
    //     data[e.target.name]=e.target.value;
    //     this.setState(data);
    // }

    // changeFormState = (e) => {
    //     var data=this.state["form"];
    //     data[e.target.name]=e.target.value;
    //     this.setState(data);
    //     this.setState({});
    // }

    // changeFormState = (e) => {
    //     // var data = this.state;
    //     // data[e.target.name] = e.target.value;
    //     // this.setState({data})
    //     // // this.setState({})
    //     var data={};
    //     data[e.target.name]=e.target.value;
    //     this.setState({ data});
    //     this.setState({ });
    // }
//     reset = () => {
//         console.log("Allthig is reset")
//         this.setState({
//             inputError: {
//                 id: '',
//                 name: '',
//                 address: '',
//                 phoneNo: '',
//                 city: '',
//                 state: '',
//                 message: '',
//                 error: '',
//                 firstName: '',
//                 lastName: '',
//                 loginId: '',
//                 password: '',
//                 roleId: '',
//                 collegeId: '',
//                 mobileNo: '',
//                 email: '',
//                 rollNo: '',
//                 physics: '',
//                 chemistry: '',
//                 maths: '',
//                 studentId: '',
//                 discription: '',
//             },
//             id: '',
//             address: '',
//             phoneNo: '',
//             city: '',
//             state: '',
//             firstName: '',
//             lastName: '',
//             password: '',
//             loginId: '',
//             roleId: '',
//             collegeId: '',
//             mobileNo: '',
//             email: '',
//             rollNo: '',
//             name: '',
//             physics: '',
//             chemistry: '',
//             maths: '',
//             studentId: '',
//             discription: '',
//             message: '',
//             epassword: ''
//         })

//     }

// }

// let url = "http://api.sunilos.com:9080/ORSP10/ ${this.props} /delete/" + id;      delete
// let url = "http://api.sunilos.com:9080/ORSP10/ ${this.props} /save"              save
// var url = "http://api.sunilos.com:9080/ORSP10/${this.props}/get/" + id;                get()
// var url = "http://api.sunilos.com:9080/ORSP10/ ${this.props} /search"          // student list


}