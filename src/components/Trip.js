import React from 'react';
import {Link} from 'react-router-dom'

const Trip = (props) => {
  return (<div>
    <Link to={"/trips/" + props.id}>{props.name} {props.locations}</Link>
    <button> <Link to={"/trips/" + props.id + "/edit"}> Edit</Link> </button>

    <button data-trip-id={props.id} onClick={props.removeTrip}>X</button>
    </div>)
}

export default Trip
