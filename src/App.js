import React, { Component } from 'react';
import TripContainer from './components/TripContainer'
import UserLogin from './components/UserLogin'
import UserSignUp from './components/UserSignUp'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import './App.css';
import {Route, Link, Redirect, NavLink} from 'react-router-dom'
import TripDetail from './components/TripDetail'

class App extends Component {

  state = {
    loggedIn: (localStorage.getItem('user_id') !== "") ? true : false,
    user_id: localStorage.getItem('user_id'),
    username: null,
    name: null,
    trips: []
  }

  handleLogin = (userInfo) => {
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
    .then((kennytrip) => {
      return this.setState({
        trips: kennytrip,
        name: kennytrip[0]["user_name"]
      })
    })
  }

  signOut = (event) => {
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

  removeTrip = (event) => {
    fetch(`http://localhost:3000/api/v1/user_trips/${event.target.dataset["tripId"]}`, {
      method: 'DELETE'
    }).then(response => {
      alert('Delete successful')
      this.fetchTrips()
    })
  }

  updateTrip = (event) => {
    fetch(`http://localhost:3000/api/v1/user_trips/${event.target.id}`, {
      method: 'PATCH'
    }).then(response => {
      console.log('we got this far');
    })
  }

  render() {
    console.log(this.state)
      return (
        <div>
          <Route path="/" render = {(props) => { return <Nav {...props} name={this.state.name} signOut={this.signOut}/>}}/>
          <div className="wrapper">
            <Route path="/404" component={NotFound} />
            <Route path="/signup" render = {(props) => { return <UserSignUp handleLogin={this.handleLogin} {...props}/>}} />
            <Route path="/login" render = {(props) => { return <UserLogin handleLogin={this.handleLogin} {...props}/>}} />
            <Route path="/trips" render = {(props) => {return <TripContainer {...props} loggedIn={this.state.loggedIn} handleTripSubmit={this.handleTripSubmit} trips={this.state.trips} fetchTrips={this.fetchTrips} removeTrip={this.removeTrip} />}} />
          </div>
      </div>
      );
  }
}

export default App;
