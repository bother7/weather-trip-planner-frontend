import React from 'react'

class UpdateTripForm extends React.Component{
  newlocations = () => {
    if(this.props.locations === undefined) {
      return false
    } else if (this.props.locations.includes(" -- ")) {
      return this.setState({
        locations: (this.props.locations.split(" -- ")),
        location_size: this.props.locations.split(" -- ").length
      })
    } else {
      return this.setState({
        locations: [this.props.locations],
        location_size: 1
      })
    }
  }
  state = {
    name: "",
    locations: false,
    location_size: 0
  }

  locationInputs = () => {
    return this.state.locations.map((location, index) => {
      const locationInfo = location.split("||")
        return (<ul><input id={`location_name_${index}`} type="text" value={locationInfo[0]} onChange={this.superHandler}/>
      <input type="date" id={`start_date_${index}`}  name="start_date"  value={locationInfo[1]} onChange={this.superHandler}/>
        <input type="date" name="end_date" id={`end_date_${index}`} value={locationInfo[2]} onChange={this.superHandler}/></ul>
      )
    })
  }

  componentDidMount(){
    this.newlocations()
  }

  handleUpdate = (event) => {
    event.preventDefault()
    debugger
  }

  superHandler = (event) => {
    console.log("this is fine", event.target.value, event.target.id)
    const arr = this.state.locations.map((location, index) => {
      const locName = `location_name_${index}`
      const stDate = `start_date_${index}`
      const endDate = `end_date_${index}`
      return Object.assign( {},
        {[locName]:location.split("||")[0],
        [stDate]:location.split("||")[1],
        [endDate]:location.split("||")[2]}
      )
    })
    arr[0][event.target.id] = event.target.value
    this.setState({locations: [Object.values(arr[0]).join("||")]})
  }

  render() {
    console.log(this.state.locations)
    return(
      <form onSubmit={this.handleUpdate}>
        {this.state.locations ? this.locationInputs() : null}
        <br></br><input type="text" />
        <input type="date" name="new_start_date" />
        <input type="date" name="new_end_date" /><br></br>
        <input type="submit" value="Update Trip" />
      </form>
    )
  }
}

export default UpdateTripForm
