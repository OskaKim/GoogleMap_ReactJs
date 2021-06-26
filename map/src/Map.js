import GoogleMapReact from 'google-map-react';
import React from 'react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: 35.5362755, lng: 139.6355183 }}
          defaultZoom={17}
        >
          <AnyReactComponent
            lat={35.5362755}
            lng={139.6355183}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
