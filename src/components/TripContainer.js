import React from 'react'
import TripList from './TripList'
import TripForm from './TripForm'

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
  changeEndStart = (event) => {
    this.setState({newTripStart: event.target.value})
    console.log("set end date")
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
