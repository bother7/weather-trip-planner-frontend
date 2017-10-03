import React from 'react';


export default class UserLogin extends React.Component {
  state = {
    username: "",
    password: ""
  }

  changeName = (event) => {
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
    })
    .then(response => response.json())
    .then((userInfo) => {
      if(userInfo.code !== 401) {
        localStorage.setItem('user_id', userInfo.id)
        this.props.handleLogin(userInfo)
        return this.props.history.push('/trips')
      } else {
        alert("Log in failed")
        this.props.history.push('/')
      }
      //does not need to take in an argument, but Joe insisted
    })
  }

  render(){
    return (<form className="form" onSubmit={this.handleSubmit}>
      <label className="label">
      Username:
      </label>
      <input className="inputField" type="text" name="name" onChange={this.changeName} value={this.state.username}/>
      <label className="label">
      Password:
      </label>
      <input className="inputField" type="password" name="name" onChange={this.changePassword} value={this.state.password}/>
      <input className="fsSubmitButton" type="submit" value="Submit" />
      </form>)
  }
}
