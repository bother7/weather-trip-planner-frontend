import React from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {

  render() {
    if (localStorage.getItem("user_id") !== null) {
      return (
      <div className="navbar">

      <a style={{float:'left'}}> Welcome {this.props.name}, to Kenny sTrip Planner </a>
        <NavLink to="/" onClick={this.props.signOut}>Logout</NavLink>
        <NavLink to="/trips">Trips</NavLink>
      </div>
      )
    } else {
    return (
        <div className="navbar">
        <a style={{float:'left'}}>Welcome to Kenny sTrip Planner </a>
          <NavLink activeClassName="active" className="item" to="/login">Login</NavLink>
          <NavLink activeClassName="active" className="item" to="/signup">Signup</NavLink>
        </div>
    )}
  }
}


export default Nav
