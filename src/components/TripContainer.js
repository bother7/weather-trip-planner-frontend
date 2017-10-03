import React from 'react'
import TripList from './TripList'
import TripForm from './TripForm'
import TripDetail from './TripDetail'
import UpdateTripForm from './UpdateTripForm'
import {Route} from 'react-router-dom'

export default class TripContainer extends React.Component {
  state = {
    newTripName: "",
    newLocation: "",
    newTripStart: "",
    newTripEnd: ""
  }

  changeTripName = (event) => {
    this.setState({newTripName: event.target.value})
  }
  componentDidMount(){
    this.props.fetchTrips()
  }
  changeLocation = (event) => {
    this.setState({newLocation: event.target.value})
  }
  changeTripStart = (event) => {
    this.setState({newTripStart: event.target.value})
  }
  changeTripEnd = (event) => {
    this.setState({newTripEnd: event.target.value})
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

  render() {
    return (
      <div className="wrapper">
      <TripForm handleTripSubmit={this.handleTripSubmit} changeTripName={this.changeTripName} newTripName={this.state.newTripName} changeLocation={this.changeLocation} location={this.state.location} changeTripStart={this.changeTripStart} changeTripEnd={this.changeTripEnd}/>
        <Route exact path = "/trips" render = {(props) => {return <TripList removeTrip={this.props.removeTrip} allTrips={this.props.trips}/>}} />
        <Route exact path="/trips/:id" render = {(tripProps) => {
            const id = tripProps.match.params.id
            const vacation = this.props.trips.find((kennytrip) => {return (kennytrip.id.toString() === id)})
            return (<TripDetail {...vacation} />)
          }} />
        <Route exact path="/trips/:id/edit" render = {(tripProps) => {
            const id = tripProps.match.params.id
            const vacation = this.props.trips.find((joetrip) => {return (joetrip.id.toString() === id)})
            return (<UpdateTripForm {...vacation} />)
          }} />
          </div>
)
  }
}
