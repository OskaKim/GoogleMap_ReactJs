import GoogleMapReact from 'google-map-react';
import React from 'react';
import Marker from './Marker';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

class Map extends React.Component {
  state = {
    markers: [{lat: 35.53578658683482, lng: 139.63568459695895}],
  }

  addMarker = async (data) => {
    this.setState({
      markers: [...this.state.markers, { lat: data.lat, lng: data.lng }]
    })
    console.log(this.state.markers)
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
          <Marker lat={markers[0].lat} lng={markers[0].lng} />
          
          {/* NOTE : 왜 안 출력되나 모르겠음.. */}
          {markers.map(marker => {
            <Marker lat={marker.lat} lng={marker.lng} />
          })}
          
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
