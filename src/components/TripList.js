import React from 'react'
import Trip from './Trip'
import {Route} from 'react-router-dom'
import TripDetail from './TripDetail'

const TripList = (props) => {
  const allTripsComponent = () => {
    return props.allTrips.map((trip) => {
      return (<Trip key={trip.id} {...trip} />)
    })
  }
  const allTripsLink= () => {
    console.log(props.allTrips)
    return props.allTrips.map((trip) => {
      console.log("here happens")
      return (<Route path="/trips/:id" component={TripDetail} />)
    })
  }
  return (
    <div>
      {allTripsComponent()}
    </div>
  )
}

export default TripList
