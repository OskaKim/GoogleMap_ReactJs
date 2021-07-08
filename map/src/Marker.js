import React from 'react';
import MarkerImg from './images/simple_marker.png';
import './Marker.css';

const MarkerImage = () =>
  <div>
    <img src={MarkerImg} className="Marker" alt="marker" />
  </div>

class Marker extends React.Component {
  render() {
    return (
      <MarkerImage lat={this.props.lat} lng={this.props.lng} />
    );
  }
}
export default Marker;
