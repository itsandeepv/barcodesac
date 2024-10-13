import React, { useState } from 'react'
import MapC from '../components/MapC';

function Tracking() {
 const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null
          });
        },
        (error) => {
          setLocation({ error: error.message });
        }
      );
    } else {
      setLocation({ error: "Geolocation is not supported by this browser." });
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Get Current Location</button>
      {location.latitude && location.longitude ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        location.error && <p>Error: {location.error}</p>
      )}

      <div>
        <MapC location={location}/>
      </div>
    </div>
  );
};

export default Tracking