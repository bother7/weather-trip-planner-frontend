import React from 'react'
import Trip from './Trip'

const TripList = (props) => {
  const allTrips = () => {
    return props.allTrips.map((trip) => {
      return <Trip key={trip.id} {...trip} />
    })
  }
  return (
    <div>
      {allTrips()}
    </div>
  )
}

export default TripList
