import React from 'react'

export default class TripDetail extends React.Component {
  state = {
    forecastArr: []
  }

  componentDidMount() {
      console.log(this.props)
        fetch("http://localhost:3000/api/v1/forecast", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: localStorage.getItem("user_id"),
            trip_id: this.props.id.toString()
          })
        }).then(response => response.json())
        .then((tripInfo) => {
          this.setState({forecastArr: tripInfo[0]})
        })
      }

  render() {
    // debugger
    console.log("detail worked", this.props)
    return (<div>happy kennyday {this.props.name} {this.props.locations} {(this.state.forecastArr.length !== 0) ? this.state.forecastArr[0].mintemp_c : null}</div>)
  }

}
