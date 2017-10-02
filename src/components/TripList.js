import React from 'react'
import Trip from './Trip'
import {Route} from 'react-router-dom'

const TripList = (props) => {
  const allTripsComponent = () => {
    return props.allTrips.map((trip) => {
      return (<Trip key={trip.id} {...trip} />)
    })
  }
  const allTripsLink= () => {
    return props.allTrips.map((trip) => {
      console.log("here happens")
      return <Route path="/trips/:id" render={(routerProps) => {
          console.log("these are routerprops:", routerProps);
          const id = routerProps.match.params.id
          return (<Trip key={id} {...trip} />)
        }} />
    })
  }
  return (
    <div>
      {allTripsComponent()}
    </div>
  )
}

export default TripList
