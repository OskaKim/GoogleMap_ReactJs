import GoogleMapReact from 'google-map-react';
import React from 'react';
import Marker from './Marker';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

class Map extends React.Component {
  state = {
    markers: [],
  }

  addMarker = async (data) => {
    console.log(data)
    this.setState(state => {
      state.markers.concat({ lat: data.lat, lng: data.lng })
    })
  }

  render() {
    const { markers } = this.state;
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: 35.5362755, lng: 139.6355183 }}
          defaultZoom={17}
          onClick={this.addMarker}
        >
          {markers.map(marker => {
            <Marker position={marker} />
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
