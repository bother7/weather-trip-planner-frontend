import React from 'react'
import Trip from './Trip'
import {Route} from 'react-router-dom'
import TripDetail from './TripDetail'

const TripList = (props) => {
  const allTripsComponent = () => {
    if (props.allTrips) {
    return props.allTrips.map((trip, index) => {
      const locationName = trip.locations.split("||")[0].replace(/\s/g, '');
      return (<Trip removeTrip={props.removeTrip} key={trip.id} index={index} {...trip} locationName={locationName}/>)
    })
    }
  }

  return (
    <div className="bigleft">
      {allTripsComponent()}
    </div>
  )
}

export default TripList
