import React, { Component } from 'react';
import Axios from 'axios';

const list_URL = 'http://api-navetest.herokuapp.com/v1/users?ranking=true'

class ListAllUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  compareInformation(e) {
    e.preventDefault();
    // const form = {
    //   email: this.email.value,
    //   password: this.pass.value
    // }
    // console.log(form);
  
    const config = {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI0ZmU3ZWMwZi1mNTcwLTQ1MDYtOTliNi03NTljYzQxNmYyNGYiLCJlbWFpbCI6ImNlQGNlM3MuY29tIn0sImlhdCI6MTU0MzA5MDU3OX0.QYznP33sgZKB1G1U3gqlCat1iYfYVmDnfwDSwfQ6dDk"
      }
    }

    Axios.get(list_URL, config)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  
  render() {
    return (
        <section className="container-default">
            <h1>List All Users</h1>
            <div className="row">
                <button typ="button" className="button" onClick={(e) => this.compareInformation(e) }>
                  Try
                </button>
            </div>
        </section>
    );
  }
}

export default ListAllUsers;
