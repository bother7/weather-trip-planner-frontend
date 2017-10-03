import React from 'react';

const TripForm = (props) => {
  return (<form className="formRight" onSubmit={props.handleTripSubmit}>
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
    <input type="date" name="start_date" onChange={props.changeTripStart}/>

    </label>
    <label>
    End Date:
    <input type="date" name="end_date" onChange={props.changeTripEnd}/>
    </label>
    <input className="fsSubmitButton" type="submit" value="Submit" />
  </form>)

}


export default TripForm
