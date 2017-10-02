import React from 'react';
import {Link} from 'react-router-dom'

const Trip = (props) => {
  console.log(props);
  return (<div> <Link to={"/trips/" + props.id}>{props.name} {props.locations}</Link></div>)
}

export default Trip
