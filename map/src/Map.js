import GoogleMapReact from 'google-map-react';
import React from 'react';
import Marker from './Marker';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

class Map extends React.Component {
  state = {
    markers: [],
  }

  // 클릭한 곳에 마커가 추가됨
  addMarker = async (data) => {
    this.setState({
      markers: [...this.state.markers, { lat: data.lat, lng: data.lng }]
    })
    console.log(this.state.markers)
  }

  // 모든 마커 지우기
  cleanMarkers = async() => {
    this.setState({
      markers: []
    })
    console.log("cleanMarkers", this.state.markers)
  }

  render() {
    const { markers } = this.state;
    const renderMarkers = markers.map((marker, index) => (<Marker lat={marker.lat} lng={marker.lng} key={index} title={index + 1} />))

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <button title="Solid Button" onClick={this.cleanMarkers}>clean markers</button>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: 35.5362755, lng: 139.6355183 }}
          defaultZoom={17}
          onClick={this.addMarker}
        >
          {renderMarkers}

        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
