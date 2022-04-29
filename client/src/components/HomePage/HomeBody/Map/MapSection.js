import React from 'react';
import GoogleMapReact from 'google-map-react';
import ENV from '../Config/env';
import './MapSection.css'
const MapSection = () => {

  const defaultProps = {
    center: {
      lat: 40.64198989654294,
      lng: -74.00235315558689
    },
    // zoom: 11
    zoom: 12  
  }
 

  return (
    <div style={{ height: '60vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key:ENV.API_KEY,language:'en',}}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <i class="fas fa-map-marker-alt map-section-icon"
        lat={40.64198989654294}
        lng={-74.00235315558689}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
  );
};

export default MapSection;