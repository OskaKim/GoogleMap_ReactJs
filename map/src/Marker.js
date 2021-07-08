import React from 'react';
import MarkerImg from './images/simple_marker.png';
import './Marker.css';

const MarkerImage = () =>
  <div>
    <img src={MarkerImg} className="Marker" alt="marker" />
  </div>

class Marker extends React.Component {
  render() {
    console.log(this.props.position)
    return (
      <MarkerImage lat={this.props.position.lat} lng={this.props.position.lng} />
    );
  }
}
export default Marker;
