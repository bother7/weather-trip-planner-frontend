import React from 'react'
import TripList from './TripList'
import TripForm from './TripForm'

export default class TripContainer extends React.Component {
  state = {
    newTripName: "",
    newLocation: ""
  }
  handleTripSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.user_id)
      fetch("http://localhost:3000/api/v1/user_trips", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.newTripName,
          user_id: this.props.user_id
        })
      }).then(response => response.json())
      .then((tripInfo) => {
        debugger
      })
    console.log(this.state.newTripName, this.state.newLocation)
  }
  changeTripName = (event) => {
    this.setState({newTripName: event.target.value})
    console.log("change trip name")
  }
  changeLocation = (event) => {
    this.setState({newLocation: event.target.value})
    console.log("change location")
  }
  render() {
    return (<div>
      <TripForm handleTripSubmit={this.handleTripSubmit} changeTripName={this.changeTripName} newTripName={this.state.newTripName} changeLocation={this.changeLocation} location={this.state.location}/>
      <TripList user_id={this.props.user_id}/></div>)
  }
}
