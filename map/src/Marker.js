import React from 'react';
import MarkerImg from './images/simple_marker.png';
import './Marker.css';

const MarkerImage = () =>
  <img src={MarkerImg} className="Marker" alt="marker" />

class Marker extends React.Component {
  render() {
    return (
      <div>
        {console.log(this.props.title)}
        <MarkerImage lat={this.props.lat} lng={this.props.lng} />
        <label className="MarkerTitle">{this.props.title}</label>
      </div>
    );
  }
}
export default Marker;
