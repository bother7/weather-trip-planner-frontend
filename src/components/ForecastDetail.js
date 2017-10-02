import React from 'react';

const ForecastDetail = (props) => {
  const { maxtemp_f, totalprecip_in, condition, maxwind_mph } = props
  return(
    <div>
      Overall: {condition.text} <br/>
      <img src={condition.icon} />
      High of {maxtemp_f} <br/>
      Amount of rain {totalprecip_in} <br/>
      Windspeeds of { maxwind_mph} <br/>
    </div>
  )
}

export default ForecastDetail
