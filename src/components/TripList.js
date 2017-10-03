import React from 'react'
import Trip from './Trip'
import {Route} from 'react-router-dom'
import TripDetail from './TripDetail'

const TripList = (props) => {
  const allTripsComponent = () => {
    if (props.allTrips) {
    return props.allTrips.map((trip) => {
      return (<Trip removeTrip={props.removeTrip} key={trip.id} {...trip} />)
    })
    }
  }

  return (
    <div className="trips">
      {allTripsComponent()}
    </div>
  )
}

export default TripList
