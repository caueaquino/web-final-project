import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css';

export default class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="login-page">

                <div className="login-box">
                    
                    <div className="title-box">
                        <h1 className="first-title">Calendar</h1>
                        <h1 className="second-title">App</h1>
                    </div>

                    <div className="email-box">
                        <label>Email</label>
                        <input type="email" name="email" id="email"></input>
                    </div>

                    <div className="password-box">
                        <label>Password</label>
                        <input type="password" name="password" id="password"></input>
                    </div>

                    <div className="buttons-box">
                        <button>Sign in</button>
                        <button>Create account</button>
                    </div>
                </div>

            </div>
        )
    }
}
