import React, { Component } from 'react';
import TripContainer from './components/TripContainer'
import UserLogin from './components/UserLogin'
import './App.css';
import {Route} from 'react-router-dom'

class App extends Component {
  state = {
    loggedIn: false,
  }

  handleLogin = (event) => {
    console.log("login successful")
    this.setState({loggedIn: true})
  }
  
  render() {
    // if (!this.state.loggedIn) {
      return (
        <div>
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
