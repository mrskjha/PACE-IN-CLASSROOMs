import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    // Function to load the Google Maps script
    const loadGoogleMapsScript = () => {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        const API_KEY = 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg'; // Replace with your actual API key

        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
      });
    };

    // Initialize the Google Map
    const initMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }
    };

    // Load the Google Maps script and initialize the map
    loadGoogleMapsScript().then(() => {
      initMap();
    });
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '500px' ,color:"black"}} />
  );
};

export default GoogleMap;
