import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC7uZ8u21767NHGvR5joz8bUC5FIluK18w" }}
        defaultCenter={{lat:35.5362755,lng:139.6355183}}
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

export default App;
