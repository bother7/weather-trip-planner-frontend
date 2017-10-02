import React from 'react';

const Trip = (props) => {
  console.log(props);
  return (<div> {props.name} {props.locations} </div>)
}

export default Trip
