import React from 'react';

const ForecastDetail = (props) => {
  const { maxtemp_f, totalprecip_in, condition, maxwind_mph } = props
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
  return(
    <div className={cssGrid[props.index+1]}>
      Date: {props.date} <br></br>
      Overall: {condition.text} <br/>
    <img src={condition.icon} /> <br/>
      High of {maxtemp_f} <br/>
      Amount of rain {totalprecip_in} <br/>
      Windspeeds of { maxwind_mph} <br/>
    </div>
  )
}

export default ForecastDetail
