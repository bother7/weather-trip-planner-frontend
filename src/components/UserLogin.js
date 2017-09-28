import React from 'react';


export default class UserLogin extends React.Component {
  state = {
    username: "",
    password: ""
  }

  changeName = (event) => {
    console.log("ha")
    this.setState({username: event.target.value})
  }
  changePassword = (event) => {
    this.setState({password: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/users/new")
    console.log(this.state.username, this.state.password)
  }
  render(){
    return (<div><form onSubmit={this.handleSubmit}>
      <label>
      Name:
      <input type="text" name="name" onChange={this.changeName} value={this.state.username}/>
      </label>
      <label>
      Passvurd:
      <input type="password" name="name" onChange={this.changePassword} value={this.state.password}/>
      </label>
      <input type="submit" value="Submit" />
      </form></div>)
  }
}
