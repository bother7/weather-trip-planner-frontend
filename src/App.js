import React, { Component } from 'react';
import TripContainer from './components/TripContainer'
import UserLogin from './components/UserLogin'
import UserSignUp from './components/UserSignUp'
import './App.css';
import {Route, Link} from 'react-router-dom'

class App extends Component {
  state = {
    loggedIn: false,
  }

  handleLogin = (userInfo) => {
    console.log("steal", userInfo)
    this.setState({loggedIn: true})
  }

  render() {
    // if (!this.state.loggedIn) {
      return (
        <div>
          <Route path="/signup" render = {(props) => { return <UserSignUp handleLogin={this.handleLogin} {...props}/>}} />
          <Link to='/signup' > Link to sign up </Link>
          <UserLogin handleLogin={this.handleLogin}/>
          <Route path="/trips" render = {(props) => {return <TripContainer />}} />
        </div>
      );
    // } else {
    //   return (
    //     <div>
    //     <Route path='/trips' render = {(props) => {<TripContainer />}} />
    //     </div>
    //   )
    // }
  }
}

export default App;
