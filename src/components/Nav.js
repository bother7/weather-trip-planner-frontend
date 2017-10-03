import React from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <div className="navbar">
        <NavLink activeClassName="active" className="item" to="/login">Login</NavLink>
        <NavLink activeClassName="active" className="item" to="/signup">Signup</NavLink>
        <NavLink className="item right" to="/" onClick={this.props.signOut}>Logout</NavLink>
      </div>
    )
  }
}


export default Nav
