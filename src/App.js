import React, { Component } from 'react';
import TripContainer from './components/TripContainer'
import UserLogin from './components/UserLogin'
import UserSignUp from './components/UserSignUp'
import './App.css';
import {Route, Link, Redirect} from 'react-router-dom'

class App extends Component {
  state = {
    loggedIn: false,
    user_id: null,
    username: null,
    name: null
  }

  handleLogin = (userInfo) => {
    this.setState({
      loggedIn: true,
      user_id: userInfo.id,
      username: userInfo.username,
      name: userInfo.name
    })
  }

  signOut = (event) => {
    event.preventDefault()
    this.setState({
      loggedIn: false,
      user_id: null,
      username: null,
      name: null
    })
  }

  render() {
    console.log(this.state)
    if (!this.state.loggedIn) {
      return (
        <div>
          <Route path="/signup" render = {(props) => { return <UserSignUp handleLogin={this.handleLogin} {...props}/>}} />
          <Link to='/signup' > Link to sign up </Link>
          <Route path="/login" render = {(props) => { return <UserLogin handleLogin={this.handleLogin} {...props}/>}} />
          <Link to='/login'> Log In </Link>
          <Route path="/trips" render = {(props) => {return <TripContainer />}} />
        </div>
      );
    } else {
      console.log(this.state)
      return (
        <div>
        <button onClick={this.signOut}>Sign Out {this.state.name}</button>
        <Route path="/trips" render = {(props) => {return <TripContainer user_id={this.state.user_id}/>}} />
        </div>
      )
    }
  }
}

export default App;
