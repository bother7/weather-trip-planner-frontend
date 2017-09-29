import React, { Component } from 'react';
import TripContainer from './components/TripContainer'
import UserLogin from './components/UserLogin'
import UserSignUp from './components/UserSignUp'
import './App.css';
import {Route, Link, Redirect} from 'react-router-dom'

class App extends Component {
  state = {
    loggedIn: false,
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
  }

  signOut = (event) => {
    event.preventDefault()
    localStorage.removeItem('user_id')
    //replace with jwt token later when we have jwt tokens, as of now we don't have jwt tokens in the "tim was here" -commit.
    this.setState({
      loggedIn: false,
      user_id: null,
      username: null,
      name: null
    })
  }



  render() {
    console.log(this.state)

      return (
        <div>
          <Route path="/signup" render = {(props) => { return <UserSignUp handleLogin={this.handleLogin} {...props}/>}} />
          <Link to='/signup' > Link to sign up </Link>
          <Route path="/login" render = {(props) => { return <UserLogin handleLogin={this.handleLogin} {...props}/>}} />
          <Link to='/login'> Log In </Link>
          <Route path="/trips" render = {(props) => {return <TripContainer />}} />
        </div>
      );
  }
}

export default App;
