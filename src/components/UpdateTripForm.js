import React from 'react'

class UpdateTripForm extends React.Component{
  newlocations = () => {
    if(this.props.locations === undefined) {
      return false
    } else if (this.props.locations.includes(" -- ")) {
      return this.setState({
        locations: (this.props.locations.split(" -- "))
      })
    } else {
      return this.setState({
        locations: [this.props.locations]
      })
    }
  }
  state = {
    name: "",
    locations: false
  }

  locationInputs = () => {
    return this.state.locations.map((location, index) => {
        return <input id={index} type="text" value={location} />
    })
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000/api/v1/user_trips")
  // }
  componentDidMount(){
    this.newlocations()
  }

  render() {
    // console.log(this.props.locations.includes(" "));
    console.log(this.state.locations)
    return(
      <form>
        {this.state.locations ? this.locationInputs() : null}
        <input type="submit" />
      </form>
    )
  }
}

export default UpdateTripForm
