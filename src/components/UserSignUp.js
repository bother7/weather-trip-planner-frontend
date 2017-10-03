import React from 'react';


export default class UserSignUp extends React.Component {
  state = {
    name: "",
    username: "",
    password: "",
    confirmPassword: ""
  }

  changeName = (event) => {
    this.setState({name: event.target.value})
  }
  changeUserName = (event) => {
    this.setState({username: event.target.value})
  }
  changePassword = (event) => {
    this.setState({password: event.target.value})
  }
  changeConfirmationPassword = (event) => {
    this.setState({confirmPassword: event.target.value})
  }

  checkPasswords = () => {
    return (this.state.password === this.state.confirmPassword)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.checkPasswords()) {
      fetch("http://localhost:3000/api/v1/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        })
      }).then(response => response.json())
      .then((userInfo) => {
        // debugger
        localStorage.setItem('user_id', userInfo.id)
        this.props.handleLogin(userInfo)
        return this.props.history.push('/trips')
        //does not need to take in an argument, but Joe insisted
      })
    } else {
      alert("your passwords don't match!")
    }
    console.log(this.state.username, this.state.password)
  }
  render(){
    return (<div className="form"><form onSubmit={this.handleSubmit}>
      <label className="label">
        Name:
      </label>
        <input type="text" name="name" onChange={this.changeName} value={this.state.name}/>
      <label className="label">
        Username:
      </label>
        <input type="text" name="name" onChange={this.changeUserName} value={this.state.username}/>
      <label className="label">
        Password:
      </label>
        <input type="password" name="name" onChange={this.changePassword} value={this.state.password}/>
      <label className="label">
        Confirm Password:
      </label>
        <input type="password" name="name" onChange={this.changeConfirmationPassword} value={this.state.confirmPassword}/>
        <input className="fsSubmitButton" type="submit" value="Submit" />
      </form></div>)
  }
}
