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
    <label>
    Start Date:
    <input type="date" name="start_date"/>
    </label>
    <label>
    End Date:
    <input type="date" name="end_date"/>
    </label>
    <input type="submit" value="Submit" />
  </form>)

}


export default TripForm
