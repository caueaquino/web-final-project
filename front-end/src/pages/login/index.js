import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './styles.css';

export default class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }

    login() {

    }

    render() {
        return (
            <div className="login-page">

                <div className="login-box">
                    
                    <div className="title-box">
                        <h1 className="first-title">Calendar</h1>
                        <h1 className="second-title">App</h1>
                    </div>

                    <h2 className="title-login">Login</h2>

                    <div className="name-box">
                        <label>Name</label>
                        <input type="name" name="name" id="name"></input>
                    </div>

                    <div className="password-box">
                        <label>Password</label>
                        <input type="password" name="password" id="password"></input>
                    </div>

                    <div className="buttons-box">
                        <button onClick={this.login}>Sign in</button>
                        <Link to="./register"><button>Create account</button></Link>
                    </div>
                </div>

            </div>
        )
    }
}
