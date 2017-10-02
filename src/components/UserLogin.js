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
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => response.json())
    .then((userInfo) => {
      localStorage.setItem('user_id', userInfo.id)
      this.props.handleLogin(userInfo)
      return this.props.history.push('/trips')
      //does not need to take in an argument, but Joe insisted
    })
  }
  
  render(){
    return (<div><form onSubmit={this.handleSubmit}>
      <label>
      Username:
      <input type="text" name="name" onChange={this.changeName} value={this.state.username}/>
      </label>
      <label>
      Password:
      <input type="password" name="name" onChange={this.changePassword} value={this.state.password}/>
      </label>
      <input type="submit" value="Submit" />
      </form></div>)
  }
}
