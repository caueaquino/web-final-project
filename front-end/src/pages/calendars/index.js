import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as userService from '../../services/user-service';
import * as calendarService from '../../services/calendar-service';

import './styles.css';
import { any } from 'prop-types';


export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      day: '1',
      hour: '1:00',
      calendar: []
    }
  }

  async componentWillMount() {
    this.setState({ calendar: await calendarService.listEvents() });
  }

  async createEvent() {
    const {name, day, hour} = this.state;
    calendarService.createEvent(name, day, hour);
    this.setState({ calendar: await calendarService.listEvents() });
  }

  logout() {
    userService.logout();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
  
    return (
        <div className="calendar-page">
          <h1 className="title-main">Calendar</h1>
          <div className="top-box">
            <h2>Create event</h2>

            <div className="input-box">

              <label className="form-span">Name</label>
              <input type="text" placeholder="Event name" name="name" value={this.state.name} onChange={this.handleChange}/>

              <label className="form-span">Day</label>
              <select className="form-control" value={this.state.day} name="day" onChange={this.handleChange}>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>

              <label className="form-span">Hour</label>
              <select className="form-control" value={this.state.hour} name="hour" onChange={this.handleChange}>
                  <option value="1:00">1:00</option>
                  <option value="2:00">2:00</option>
                  <option value="3:00">3:00</option>
              </select>
              
            </div>

            <div className="button-box">
              <button className="create-button" onClick={()=>this.createEvent()}>
                  <span className="button-text">Create Event</span>
              </button>

              <Link to="./">
                <button onClick={()=>this.logout} className="create-button">
                    <span className="button-text">Logout</span>
                </button>
              </Link>
            </div>

          </div>

            <h2>Events list</h2>

            <table>
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <span className="day">28</span>
                        <span className="long">Monday</span>
                        <span className="short">Mon</span>
                    </th>
                    <th>
                        <span className="day active">29</span>
                        <span className="long">Tuesday</span>
                        <span className="short">Tue</span>
                    </th>
                    <th>
                        <span className="day">30</span>
                        <span className="long">Wendsday</span>
                        <span className="short">We</span>
                    </th>
                    <th>
                        <span className="day">31</span>
                        <span className="long">Thursday</span>
                        <span className="short">Thur</span>
                    </th>
                    <th>
                        <span className="day">1</span>
                        <span className="long">Friday</span>
                        <span className="short">Fri</span>
                    </th>
                    <th>
                        <span className="day">2</span>
                        <span className="long">Saturday</span>
                        <span className="short">Sat</span>
                    </th>
                    <th>
                        <span className="day">3</span>
                        <span className="long">Sunday</span>
                        <span className="short">Sun</span>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td className="hour"><span>1:00</span></td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '1:00' && rs.day == 28) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '1:00' && rs.day == 29) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '1:00' && rs.day == 30) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '1:00' && rs.day == 31) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '1:00' && rs.day == 1) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '1:00' && rs.day == 2) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '1:00' && rs.day == 3) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                </tr>

                <tr>
                    <td className="hour"><span>2:00</span></td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '2:00' && rs.day == 28) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '2:00' && rs.day == 29) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '2:00' && rs.day == 30) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '2:00' && rs.day == 31) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '2:00' && rs.day == 1) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '2:00' && rs.day == 2) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '2:00' && rs.day == 3) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                </tr>

                <tr>
                <td className="hour"><span>3:00</span></td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '3:00' && rs.day == 28) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '3:00' && rs.day == 29) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '3:00' && rs.day == 30) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '3:00' && rs.day == 31) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '3:00' && rs.day == 1) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '3:00' && rs.day == 2) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                    <td>{this.state.calendar.map(rs => {
                      if(rs.hour == '3:00' && rs.day == 3) {
                        return <li>{rs.name}</li>}
                      }
                      )}
                    </td>
                </tr>
              </tbody>
            </table>

        </div>
    );
  }    
}