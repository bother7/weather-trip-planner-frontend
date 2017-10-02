import React from 'react'
import TripList from './TripList'
import TripForm from './TripForm'
import Moment from 'react-moment'

export default class TripContainer extends React.Component {
  state = {
    newTripName: "",
    newLocation: "",
    newTripStart: "",
    newTripEnd: ""
  }

  changeTripName = (event) => {
    this.setState({newTripName: event.target.value})
    console.log("change trip name")
  }
  changeLocation = (event) => {
    this.setState({newLocation: event.target.value})
    console.log("change location")
  }
  changeTripStart = (event) => {
    this.setState({newTripStart: event.target.value})
    console.log("set start date")
  }
  changeTripEnd = (event) => {
    this.setState({newTripEnd: event.target.value})
    console.log("set end date")
  }

  handleTripSubmit = (event) => {
    event.preventDefault()
      fetch("http://localhost:3000/api/v1/user_trips", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.newTripName,
          user_id: localStorage.getItem("user_id"),
          newLocation: this.state.newLocation,
          newTripStart: this.state.newTripStart,
          newTripEnd: this.state.newTripEnd

        })
      }).then(response => response.json())
      .then((tripInfo) => {
          this.props.fetchTrips()
        })


  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // debugger
  //   console.log(this.state.trips)
  //   return (nextProps["loggedIn"] === "false" || nextProps["loggedIn"] === "true")
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   this.setState(nextState)
  // }
  render() {
    return (<div>
      <TripForm handleTripSubmit={this.handleTripSubmit} changeTripName={this.changeTripName} newTripName={this.state.newTripName} changeLocation={this.changeLocation} location={this.state.location} changeTripStart={this.changeTripStart} changeTripEnd={this.changeTripEnd}/>
        <TripList allTrips={this.props.trips}/>
      </div>)
  }
}
