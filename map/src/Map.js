import GoogleMapReact from 'google-map-react';
import React from 'react';
import Marker from './Marker';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

class Map extends React.Component {
  state = {
    lat: 0,
    lng: 0
  }

  addMarker = async (data) => {
    console.log(data)
    this.setState({
      lat: data.lat,
      lng: data.lng
    })
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: 35.5362755, lng: 139.6355183 }}
          defaultZoom={17}
          onClick={this.addMarker}
        >
          <Marker lat={this.state.lat} lng={this.state.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
