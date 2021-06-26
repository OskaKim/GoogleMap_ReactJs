import GoogleMapReact from 'google-map-react';
import React from 'react';
import MarkerImg from './images/simple_marker.png';
import './Map.css';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
const Marker = () =>
  <div>
    <img src={MarkerImg} className="Marker" alt="marker" />
  </div>

class Map extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: 35.5362755, lng: 139.6355183 }}
          defaultZoom={17}
        >
          <Marker lat={35.5362755} lng={139.6355183} />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
