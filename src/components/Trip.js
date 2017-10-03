import React from 'react';
import {Link} from 'react-router-dom'

const Trip = (props) => {
  const cssGrid = {
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten"
  }
  console.log(props);
  return (<div className={cssGrid[props.index+1]}>
    <Link style={{textDecoration: 'none', color:'white'}} to={"/trips/" + props.id}>{props.name} </Link > <br/>
    <button className="fsGeneralButton"> <Link style={{textDecoration: 'none', color:'white'}} to={"/trips/" + props.id + "/edit"}>
      Edit
      </Link> </button>

    <button className="fsGeneralButton" data-trip-id={props.id} onClick={props.removeTrip}>X</button>
    </div>)
}

export default Trip
