import React, { Component } from 'react';
import TripContainer from './components/TripContainer'
import UserLogin from './components/UserLogin'
import UserSignUp from './components/UserSignUp'
import Nav from './components/Nav'
import './App.css';
import {Route, Link, Redirect, NavLink} from 'react-router-dom'
import TripDetail from './components/TripDetail'

class App extends Component {
  state = {
    loggedIn: false,
    user_id: localStorage.getItem('user_id'),
    username: null,
    name: null,
    trips: []
  }

  handleLogin = (userInfo) => {
    console.log("did this happen")
    this.setState({
      loggedIn: true,
      user_id: userInfo.id,
      username: userInfo.username,
      name: userInfo.name
    })
    this.fetchTrips()
  }

  fetchTrips = () => {
    fetch(`http://localhost:3000/api/v1/tripwithuser/${localStorage.getItem('user_id')}`)
    .then((resp) => resp.json())
    .then((trips) => {this.setState({trips: trips})})
  }

  signOut = (event) => {
    event.preventDefault()
    localStorage.removeItem('user_id')
    //replace with jwt token later when we have jwt tokens, as of now we don't have jwt tokens in the "tim was here" -commit.
    this.setState({
      loggedIn: false,
      user_id: null,
      username: null,
      name: null,
      trips: []
    })
  }

  componentDidMount(){
    if(this.state.loggedIn === true){
      this.fetchTrips()
    }
  }

  // handleTripSubmit = (event) => {
  //   event.preventDefault()
  //     fetch("http://localhost:3000/api/v1/user_trips", {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         name: this.state.newTripName,
  //         user_id: localStorage.getItem("user_id")
  //
  //       })
  //     }).then(response => response.json())
  //     .then((tripInfo) => {
  //       this.setState({
  //         trips: [...this.state.trips, tripInfo]
  //       })
  //     }).then(something => console.log(this.state))
  //
  // }

  render() {
      return (
        <div>
          <Route path="/" render = {(props) => { return <Nav {...props} signOut={this.signOut}/>}}/>
          <Route path="/signup" render = {(props) => { return <UserSignUp handleLogin={this.handleLogin} {...props}/>}} />
          <Route path="/login" render = {(props) => { return <UserLogin handleLogin={this.handleLogin} {...props}/>}} />
          <div className="marquee"><div><span>Welcome to Kenny strip planner</span></div></div>
          <Route path="/trips" render = {(props) => {return <TripContainer {...props} loggedIn={this.state.loggedIn} handleTripSubmit={this.handleTripSubmit} trips={this.state.trips} fetchTrips={this.fetchTrips} />}} />
      </div>
      );
  }
}

export default App;
