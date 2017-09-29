import React from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="ui secondary menu">
        <NavLink activeClassName="active" className="item" to="/login">Login</NavLink>
        <NavLink activeClassName="active" className="item" to="/signup">Signup</NavLink>
        <NavLink className="item right" to="/" onClick={this.props.signOut}>Logout</NavLink>
      </div>
    )
  }
}


export default Nav
