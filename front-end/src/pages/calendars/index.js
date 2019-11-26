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
      calendar: [1,2,3,4,5,6],
      test: any
    }
  }

  componentWillMount() {
    console.log(calendarService.listEvents());
    this.setState({ test:calendarService.listEvents() });
  }

  createEvent() {
    const {name, day, hour} = this.state;
    calendarService.createEvent(name, day, hour);
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

              <label className="form-span" for="input1">Name</label>
              <input type="text" placeholder="Event name" name="name" value={this.state.name} onChange={this.handleChange}/>

              <label className="form-span" for="select1">Day</label>
              <select className="form-control" value={this.state.day} name="day" onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
              </select>

              <label className="form-span" for="select2">Hour</label>
              <select className="form-control" value={this.state.hour} name="hour" onChange={this.handleChange}>
                  <option value="1:00">1:00</option>
                  <option value="2:00">2:00</option>
                  <option value="3:00">3:00</option>
                  <option value="4:00">4:00</option>
                  <option value="5:00">5:00</option>
                  <option value="6:00">6:00</option>
                  <option value="7:00">7:00</option>
                  <option value="8:00">8:00</option>
                  <option value="9:00">9:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
                  <option value="24:00">24:00</option>
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

          <div className="events-box">
            <h2>Events list</h2>
         {this.state.calendar.map(() => {
            return (<div className="main-box">
                      <div className="first-box">
                        <span>Day: 31</span>
                        <span>Hour: 12:00</span>
                      </div>

                      <div className="second-box">
                        <span>Name: Event to pass in the test.</span>
                      </div>
                    </div>);
              }
            )
          }
          </div>
        </div>
    );
  }    
}