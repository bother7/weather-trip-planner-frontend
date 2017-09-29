import React from 'react';

const TripForm = (props) => {
  return (<form onSubmit={props.handleTripSubmit}>
    <label>
    Name of Your Trip:
    <input type="text" name="name" onChange={props.changeTripName} value={props.newTripName}/>
    </label>
    <label>
    Location:
    <input type="text" name="name" onChange={props.changeLocation} value={props.location}/>
    </label>
          <input type="submit" value="Submit" />
  </form>)

}


export default TripForm
