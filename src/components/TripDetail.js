import React from 'react'
import ForecastDetail from './ForecastDetail'
import NotFound from './NotFound'

export default class TripDetail extends React.Component {
  state = {
    forecastArr: []
  }

  componentDidMount() {
      // console.log(this.props)
        fetch("http://localhost:3000/api/v1/forecast", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: localStorage.getItem("user_id"),
            trip_id: this.props.id.toString()
          })
        }).then(response => response.json()).catch(() => {
          return alert("Can't find your location")
        })
        .then((tripInfo) => {
          // debugger
          console.log(this.props);
          if(tripInfo && tripInfo.status !== 500) {
            this.setState({forecastArr: tripInfo[0]})
          } else {
            this.props.history.push('/404')
          }
        })
      }

  allLocationAndDates = this.props.locations.split(" -- ")
  locationAndDates = this.allLocationAndDates.map((locAndDate) => {
    return locAndDate.split("||")
  })

  // map over locationAndDates and possibly make a new component

  render() {
    console.log(this.allLocationAndDates);
    console.log(this.locationAndDates);

    return (<div className="bigleft">
      <div className="tripinfo">
        Name: {this.props.name} <br/>

      Location: {this.locationAndDates ? this.locationAndDates[0][0] : null } <br/>
      Start Date: {this.locationAndDates ? this.locationAndDates[0][1] :null } <br/>
      End Date: {this.locationAndDates ? this.locationAndDates[0][2] : null } <br/>
      </div>
      {(this.state.forecastArr.length !== 0 ) ?
        this.state.forecastArr.map((forecast, index) => {
          return <ForecastDetail {...forecast} index={index}/>
        }):
        null}
    </div>)
  }

}
