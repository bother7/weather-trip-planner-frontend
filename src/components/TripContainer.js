import React from 'react'
import TripList from './TripList'
import TripForm from './TripForm'

export default class TripContainer extends React.Component {
  state = {
    newTripName: "",
    newLocation: "",
    newTripStart: "",
    newTripEnd: "",
    trips: []
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
          user_id: localStorage.getItem("user_id")
        })
      }).then(response => response.json())
      .then((tripInfo) => {
        this.setState({
          trips: [...this.state.trips, tripInfo]
        })
      }).then(something => console.log(this.state))
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
  changeTripStart = (event) => {
    this.setState({newTripStart: event.target.value})
    console.log("set start date")
  }
  changeEndStart = (event) => {
    this.setState({newTripStart: event.target.value})
    console.log("set end date")
  }

  componentDidMount(){
    if(localStorage.getItem('user_id') !== null){
      fetch(`http://localhost:3000/api/v1/tripwithuser/${localStorage.getItem('user_id')}`)
      .then((resp) => resp.json())
      .then((trips) => {
        this.setState({
          trips: trips
        })
        console.log(this.state);
      })
    }
  }

  render() {
    return (<div>
      <TripForm handleTripSubmit={this.handleTripSubmit} changeTripName={this.changeTripName} newTripName={this.state.newTripName} changeLocation={this.changeLocation} location={this.state.location} changeTripStart={this.changeTripStart} changeTripEnd={this.changeTripEnd}/>
        <TripList allTrips={this.state.trips}/>
      </div>)
  }
}
