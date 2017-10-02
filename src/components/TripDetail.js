import React from 'react'

export default class TripDetail extends React.Component {

  render() {
    console.log("detail worked", this.props)
    return (<div>happy kennyday {this.props.name}</div>)
  }

}
