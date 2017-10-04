import React from 'react';
import {Link} from 'react-router-dom'

class Trip extends React.Component {
  state = {
    url: ""
  }

  cssGrid = {
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

  fetchRequest = () => {
    return fetch(`https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=${this.props.locationName},sightseeing`, {
      method: 'GET',
      headers: {"Api-Key": "m5efkucpk5w5sxvxhaehagsg"}
    }).then((response) => response.json())
    .then(image => {
      console.log(image);
      if(image.result_count !== 0) {
        this.setState({
          url: image.images["0"].display_sizes["0"].uri
        })
      }
    })
  }

  componentDidMount(){
    setTimeout(this.fetchRequest, 400*(this.props.index+1))
  }


  render() {
  return (<div className={this.cssGrid[this.props.index+1]}>
    <Link style={{textDecoration: 'none', color:'white'}} to={"/trips/" + this.props.id}>{this.props.name} </Link > <br/>
    <img src={this.state.url} /><br/>
    <button className="fsGeneralButton">
      <Link style={{textDecoration: 'none', color:'white'}} to={"/trips/" + this.props.id + "/edit"}>
      Edit
      </Link>
    </button>

    <button className="fsGeneralButton" data-trip-id={this.props.id} onClick={this.props.removeTrip}>X</button>
    </div>)
  }
}

export default Trip
