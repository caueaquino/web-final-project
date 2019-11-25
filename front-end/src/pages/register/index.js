import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as userService from '../../services/user-service';


import './styles.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'carol',
      password: 'aoba'
    }
  }


  createAccount = async (e) => {
    e.preventDefault();
    const {name, password} = this.state;
    
    if(!name || !password)
      alert('Fill the fields to complete register');

    userService.registerUser(name, password);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      return (
          <div className="register-page">

              <div className="register-box">
                  
                  <div className="title-box">
                      <h1 className="first-title">Calendar</h1>
                      <h1 className="second-title">App</h1>
                  </div>
                  
                  <h2 className="title-register">Register</h2>

                  <div className="name-box">
                      <label>Name</label>
                      <input value={this.state.name} onChange={this.handleChange} type="text" name="name" />
                  </div>

                  <div className="password-box">
                      <label>Password</label>
                      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" ></input>
                  </div>

                  <div className="buttons-box">
                      <button onClick={this.createAccount}>Confirm</button>
                      <Link to="./"><button>Cancel</button></Link>
                  </div>
              </div>

          </div>
      )
  }
}
